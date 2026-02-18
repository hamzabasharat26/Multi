<?php

namespace App\GraphQL\Mutations;

use Illuminate\Support\Facades\DB;

class UpsertMeasurementResultsDetailed
{
    public function __invoke($_, array $args): array
    {
        $poArticleId = $args['purchase_order_article_id'];
        $size = $args['size'];
        $side = $args['side'];
        $results = $args['results'];

        try {
            DB::beginTransaction();

            // Delete existing results for this combination
            DB::table('measurement_results_detailed')
                ->where('purchase_order_article_id', $poArticleId)
                ->where('size', $size)
                ->where('side', $side)
                ->delete();

            // Insert new results
            $rows = array_map(function ($r) use ($poArticleId, $size, $side) {
                return [
                    'purchase_order_article_id' => $poArticleId,
                    'measurement_id' => $r['measurement_id'],
                    'size' => $size,
                    'side' => $side,
                    'article_style' => $r['article_style'] ?? null,
                    'measured_value' => $r['measured_value'] ?? null,
                    'expected_value' => $r['expected_value'] ?? null,
                    'tol_plus' => $r['tol_plus'] ?? null,
                    'tol_minus' => $r['tol_minus'] ?? null,
                    'status' => $r['status'] ?? 'PENDING',
                    'operator_id' => $r['operator_id'] ?? null,
                    'created_at' => now(),
                    'updated_at' => now(),
                ];
            }, $results);

            DB::table('measurement_results_detailed')->insert($rows);
            DB::commit();

            return [
                'success' => true,
                'message' => 'Detailed results saved successfully.',
                'count' => count($rows),
            ];
        } catch (\Exception $e) {
            DB::rollBack();
            return [
                'success' => false,
                'message' => 'Failed to save: ' . $e->getMessage(),
                'count' => 0,
            ];
        }
    }
}
