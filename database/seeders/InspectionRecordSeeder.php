<?php

namespace Database\Seeders;

use App\Models\Article;
use App\Models\Brand;
use App\Models\InspectionRecord;
use App\Models\Operator;
use App\Models\PurchaseOrder;
use Illuminate\Database\Seeder;

class InspectionRecordSeeder extends Seeder
{
    /**
     * Common garment measurement parameters with typical expected values (in cm).
     */
    private array $measurementParams = [
        'chest_width'      => ['expected' => 52.0, 'tol' => 1.0],
        'body_length'      => ['expected' => 72.0, 'tol' => 1.5],
        'sleeve_length'    => ['expected' => 64.0, 'tol' => 1.0],
        'shoulder_width'   => ['expected' => 46.0, 'tol' => 0.8],
        'collar_width'     => ['expected' => 16.5, 'tol' => 0.5],
        'hem_width'        => ['expected' => 50.0, 'tol' => 1.0],
        'waist_width'      => ['expected' => 48.0, 'tol' => 1.0],
        'armhole'          => ['expected' => 24.0, 'tol' => 0.8],
        'cuff_width'       => ['expected' => 11.0, 'tol' => 0.5],
        'neck_opening'     => ['expected' => 40.0, 'tol' => 0.8],
        'inseam_length'    => ['expected' => 78.0, 'tol' => 1.5],
        'thigh_width'      => ['expected' => 30.0, 'tol' => 1.0],
    ];

    /**
     * Seed the inspection_records table with realistic sample data
     * including detailed per-measurement parameter data.
     */
    public function run(): void
    {
        $operators = Operator::all();
        $articles = Article::with('brand')->get();
        $purchaseOrders = PurchaseOrder::all();

        if ($operators->isEmpty() || $articles->isEmpty()) {
            $this->command->warn('No operators or articles found. Please seed operators and articles first.');
            return;
        }

        $sizes = ['S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36', '38', '40'];
        $remarks = [
            null,
            'Within tolerance',
            'Slight deviation on measurement #3',
            'All measurements within spec',
            'Minor stitching issue noted',
            'Color consistency verified',
            'Fabric weight verified',
            'Button alignment checked',
            'Seam strength test passed',
            'Measurement deviation on sleeve length',
            'Collar alignment off by 2mm',
            'Hem length exceeds tolerance',
            'Zipper alignment needs adjustment',
        ];

        $paramNames = array_keys($this->measurementParams);

        $records = [];
        $now = now();

        // Generate ~500 inspection records spread over the last 90 days
        for ($i = 0; $i < 500; $i++) {
            $article = $articles->random();
            $operator = $operators->random();
            $purchaseOrder = $purchaseOrders->isNotEmpty() ? $purchaseOrders->random() : null;

            // 75% pass rate overall
            $result = fake()->boolean(75) ? 'pass' : 'fail';

            $inspectedAt = $now->copy()->subDays(rand(0, 90))->subHours(rand(0, 23))->subMinutes(rand(0, 59));

            // Select 4-8 random measurement parameters for this record
            $numParams = rand(4, 8);
            $selectedParams = array_rand(array_flip($paramNames), $numParams);
            if (!is_array($selectedParams)) {
                $selectedParams = [$selectedParams];
            }

            $measurements = [];
            $withinTolerance = 0;
            $outOfTolerance = 0;

            foreach ($selectedParams as $paramName) {
                $spec = $this->measurementParams[$paramName];
                $expected = $spec['expected'];
                $tolerance = $spec['tol'];

                if ($result === 'pass') {
                    // For passing records, all measurements within tolerance (small deviations)
                    $deviation = (rand(-80, 80) / 100) * $tolerance;
                } else {
                    // For failing records, some measurements will be outside tolerance
                    // ~40% chance each measurement is out of tolerance
                    if (fake()->boolean(40)) {
                        // Out of tolerance: deviation beyond the tolerance range
                        $direction = fake()->boolean(50) ? 1 : -1;
                        $deviation = $direction * ($tolerance + (rand(10, 80) / 100) * $tolerance);
                    } else {
                        $deviation = (rand(-80, 80) / 100) * $tolerance;
                    }
                }

                $actual = round($expected + $deviation, 2);
                $isWithin = abs($actual - $expected) <= $tolerance;

                if ($isWithin) {
                    $withinTolerance++;
                } else {
                    $outOfTolerance++;
                }

                $measurements[] = [
                    'parameter'  => $paramName,
                    'expected'   => $expected,
                    'actual'     => $actual,
                    'tolerance'  => $tolerance,
                    'deviation'  => round($actual - $expected, 2),
                    'status'     => $isWithin ? 'pass' : 'fail',
                ];
            }

            // Ensure failing records actually have at least 1 out-of-tolerance
            if ($result === 'fail' && $outOfTolerance === 0) {
                $idx = array_rand($measurements);
                $m = &$measurements[$idx];
                $direction = fake()->boolean(50) ? 1 : -1;
                $m['actual'] = round($m['expected'] + $direction * ($m['tolerance'] * 1.3), 2);
                $m['deviation'] = round($m['actual'] - $m['expected'], 2);
                $m['status'] = 'fail';
                $withinTolerance--;
                $outOfTolerance++;
                unset($m);
            }

            $records[] = [
                'operator_id' => $operator->id,
                'article_id' => $article->id,
                'brand_id' => $article->brand_id,
                'purchase_order_id' => $purchaseOrder?->id,
                'article_style' => $article->article_style,
                'size' => $sizes[array_rand($sizes)],
                'result' => $result,
                'remarks' => $remarks[array_rand($remarks)],
                'measurement_data' => json_encode([
                    'measurements_checked' => count($measurements),
                    'within_tolerance' => $withinTolerance,
                    'out_of_tolerance' => $outOfTolerance,
                    'parameters' => $measurements,
                ]),
                'inspected_at' => $inspectedAt,
                'created_at' => $inspectedAt,
                'updated_at' => $inspectedAt,
            ];
        }

        // Batch insert for performance
        foreach (array_chunk($records, 100) as $chunk) {
            InspectionRecord::insert($chunk);
        }

        $this->command->info('Seeded ' . count($records) . ' inspection records with detailed measurement data.');
    }
}
