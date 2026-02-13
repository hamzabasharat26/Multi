<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\Brand;
use App\Models\InspectionRecord;
use App\Models\Operator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;

class DirectorAnalyticsController extends Controller
{
    /**
     * Display the director analytics dashboard.
     * Uses optimized Eloquent aggregation queries for real-time analytics.
     */
    public function index(Request $request): Response
    {
        $filters = $this->extractFilters($request);

        // Base query with applied filters
        $baseQuery = $this->buildFilteredQuery($filters);

        // Summary statistics
        $summary = $this->getSummaryStats($baseQuery);

        // Article-wise pass/fail summary
        $articleSummary = $this->getArticleSummary($filters);

        // Operator-wise performance analytics
        $operatorPerformance = $this->getOperatorPerformance($filters);

        // Filter options for the UI
        $filterOptions = $this->getFilterOptions();

        // Measurement-level failure analysis
        $failureAnalysis = $this->getMeasurementFailureAnalysis($filters);

        return Inertia::render('director-analytics/index', [
            'summary' => $summary,
            'articleSummary' => $articleSummary,
            'operatorPerformance' => $operatorPerformance,
            'failureAnalysis' => $failureAnalysis,
            'filterOptions' => $filterOptions,
            'appliedFilters' => $filters,
        ]);
    }

    /**
     * Export analytics data as Excel.
     */
    public function exportExcel(Request $request)
    {
        $filters = $this->extractFilters($request);
        $reportType = $filters['report_type'] ?? 'all';
        $data = $this->getExportData($filters, $reportType);

        $filename = 'MagicQC_Analytics_' . now()->format('Y-m-d_His') . '.csv';

        $headers = [
            'Content-Type' => 'text/csv',
            'Content-Disposition' => "attachment; filename=\"{$filename}\"",
        ];

        $callback = function () use ($data) {
            $file = fopen('php://output', 'w');

            // BOM for Excel UTF-8 compatibility
            fwrite($file, "\xEF\xBB\xBF");

            // Summary Section
            $reportTitle = match($data['reportType']) {
                'measurement' => 'MEASUREMENT REPORT',
                'article' => 'ARTICLE & BRAND WISE REPORT',
                'operator' => 'OPERATORS\' USAGE SUMMARY',
                default => 'COMPLETE ANALYTICS REPORT'
            };
            fputcsv($file, ['MAGIC QC - ' . $reportTitle]);
            fputcsv($file, ['Generated: ' . now()->format('F d, Y h:i A')]);
            fputcsv($file, []);

            // Summary Stats (always included)
            fputcsv($file, ['=== SUMMARY STATISTICS ===']);
            fputcsv($file, ['Metric', 'Value']);
            fputcsv($file, ['Total Inspections', $data['summary']['total']]);
            fputcsv($file, ['Total Pass', $data['summary']['pass']]);
            fputcsv($file, ['Total Fail', $data['summary']['fail']]);
            fputcsv($file, ['Pass Rate (%)', $data['summary']['passRate']]);
            fputcsv($file, []);

            // Article Summary (for 'all' and 'article' reports)
            if (isset($data['articleSummary'])) {
                fputcsv($file, ['=== ARTICLE & BRAND WISE SUMMARY ===']);
                fputcsv($file, ['Article Style', 'Brand', 'Total', 'Pass', 'Fail', 'Pass Rate (%)']);
                foreach ($data['articleSummary'] as $row) {
                    fputcsv($file, [
                        $row['article_style'],
                        $row['brand_name'],
                        $row['total'],
                        $row['pass'],
                        $row['fail'],
                        $row['total'] > 0 ? round(($row['pass'] / $row['total']) * 100, 1) : 0,
                    ]);
                }
                fputcsv($file, []);
            }

            // Operator Performance (for 'all' and 'operator' reports)
            if (isset($data['operatorPerformance'])) {
                fputcsv($file, ['=== OPERATORS\' USAGE SUMMARY ===']);
                fputcsv($file, ['Operator', 'Employee ID', 'Total Inspections', 'Pass', 'Fail', 'Pass Rate (%)']);
                foreach ($data['operatorPerformance'] as $row) {
                    fputcsv($file, [
                        $row['operator_name'],
                        $row['employee_id'],
                        $row['total'],
                        $row['pass'],
                        $row['fail'],
                        $row['total'] > 0 ? round(($row['pass'] / $row['total']) * 100, 1) : 0,
                    ]);
                }
                fputcsv($file, []);
            }

            // Measurement Failure Analysis (for 'all' and 'measurement' reports)
            if (isset($data['failureAnalysis']) && !empty($data['failureAnalysis']) && $data['failureAnalysis']['totalViolations'] > 0) {
                fputcsv($file, []);
                fputcsv($file, ['=== MEASUREMENT FAILURE ANALYSIS ===']);
                fputcsv($file, ['Total Size Variations: ' . $data['failureAnalysis']['totalViolations']]);
                fputcsv($file, []);

                fputcsv($file, ['--- Most Failing Parameters ---']);
                fputcsv($file, ['Parameter', 'Times Checked', 'Times Failed', 'Failure Rate (%)', 'Avg Deviation (cm)']);
                foreach ($data['failureAnalysis']['parameterFailures'] as $param) {
                    if ($param['times_failed'] > 0) {
                        fputcsv($file, [
                            $param['label'],
                            $param['times_checked'],
                            $param['times_failed'],
                            $param['failure_rate'],
                            $param['avg_deviation'],
                        ]);
                    }
                }
                fputcsv($file, []);

                fputcsv($file, ['--- Articles with Repeated Issues ---']);
                fputcsv($file, ['Article Style', 'Total Measurement Failures', 'Params Affected', 'Most Common Failure']);
                foreach ($data['failureAnalysis']['articleFailures'] as $article) {
                    fputcsv($file, [
                        $article['article_style'],
                        $article['total_measurement_failures'],
                        $article['unique_params_failing'],
                        $article['most_common_failure'] . ' (' . $article['most_common_failure_count'] . 'x)',
                    ]);
                }
                fputcsv($file, []);

                fputcsv($file, ['--- Size Variation Concentration ---']);
                fputcsv($file, ['Parameter', 'Variations', 'Avg Deviation', 'Max Deviation', 'Over Tolerance %', 'Under Tolerance %']);
                foreach ($data['failureAnalysis']['toleranceConcentration'] as $tc) {
                    fputcsv($file, [
                        $tc['label'],
                        $tc['violation_count'],
                        $tc['avg_deviation'],
                        $tc['max_deviation'],
                        $tc['over_tolerance_pct'],
                        $tc['under_tolerance_pct'],
                    ]);
                }
            }

            fclose($file);
        };

        return response()->stream($callback, 200, $headers);
    }

    /**
     * Export analytics data as PDF.
     */
    public function exportPdf(Request $request)
    {
        $filters = $this->extractFilters($request);
        $reportType = $filters['report_type'] ?? 'all';
        $data = $this->getExportData($filters, $reportType);
        $data['generatedAt'] = now()->format('F d, Y h:i A');
        $data['appliedFilters'] = $filters;

        $pdf = app('dompdf.wrapper');
        $pdf->loadView('exports.analytics-pdf', $data);
        $pdf->setPaper('a4', 'landscape');

        return $pdf->download('MagicQC_Analytics_' . now()->format('Y-m-d_His') . '.pdf');
    }

    /**
     * Extract and sanitize filter parameters from the request.
     */
    private function extractFilters(Request $request): array
    {
        return [
            'brand_id' => $request->input('brand_id'),
            'article_style' => $request->input('article_style'),
            'operator_id' => $request->input('operator_id'),
            'date_from' => $request->input('date_from'),
            'date_to' => $request->input('date_to'),
            'result' => $request->input('result'),
            'report_type' => $request->input('report_type', 'all'),
        ];
    }

    /**
     * Build a filtered Eloquent query builder instance.
     */
    private function buildFilteredQuery(array $filters)
    {
        $query = InspectionRecord::query();

        if (!empty($filters['brand_id'])) {
            $query->where('brand_id', $filters['brand_id']);
        }

        if (!empty($filters['article_style'])) {
            $query->where('article_style', $filters['article_style']);
        }

        if (!empty($filters['operator_id'])) {
            $query->where('operator_id', $filters['operator_id']);
        }

        if (!empty($filters['date_from'])) {
            $query->whereDate('inspected_at', '>=', $filters['date_from']);
        }

        if (!empty($filters['date_to'])) {
            $query->whereDate('inspected_at', '<=', $filters['date_to']);
        }

        if (!empty($filters['result'])) {
            $query->where('result', $filters['result']);
        }

        return $query;
    }

    /**
     * Get summary statistics using Eloquent aggregation.
     */
    private function getSummaryStats($baseQuery): array
    {
        $stats = (clone $baseQuery)
            ->selectRaw('
                COUNT(*) as total,
                SUM(CASE WHEN result = ? THEN 1 ELSE 0 END) as pass,
                SUM(CASE WHEN result = ? THEN 1 ELSE 0 END) as fail
            ', ['pass', 'fail'])
            ->first();

        $total = (int) $stats->total;
        $pass = (int) $stats->pass;
        $fail = (int) $stats->fail;

        return [
            'total' => $total,
            'pass' => $pass,
            'fail' => $fail,
            'passRate' => $total > 0 ? round(($pass / $total) * 100, 1) : 0,
            'failRate' => $total > 0 ? round(($fail / $total) * 100, 1) : 0,
        ];
    }

    /**
     * Get article-wise pass/fail summary using Eloquent aggregation.
     */
    private function getArticleSummary(array $filters): array
    {
        $query = $this->buildFilteredQuery($filters);

        return (clone $query)
            ->join('brands', 'inspection_records.brand_id', '=', 'brands.id')
            ->select([
                'inspection_records.article_style',
                'brands.name as brand_name',
                DB::raw('COUNT(*) as total'),
                DB::raw('SUM(CASE WHEN inspection_records.result = \'pass\' THEN 1 ELSE 0 END) as pass'),
                DB::raw('SUM(CASE WHEN inspection_records.result = \'fail\' THEN 1 ELSE 0 END) as fail'),
            ])
            ->groupBy('inspection_records.article_style', 'brands.name')
            ->orderByDesc('total')
            ->get()
            ->toArray();
    }

    /**
     * Get operator-wise performance using Eloquent aggregation.
     */
    private function getOperatorPerformance(array $filters): array
    {
        $query = $this->buildFilteredQuery($filters);

        return (clone $query)
            ->join('operators', 'inspection_records.operator_id', '=', 'operators.id')
            ->select([
                'operators.full_name as operator_name',
                'operators.employee_id',
                DB::raw('COUNT(*) as total'),
                DB::raw('SUM(CASE WHEN inspection_records.result = \'pass\' THEN 1 ELSE 0 END) as pass'),
                DB::raw('SUM(CASE WHEN inspection_records.result = \'fail\' THEN 1 ELSE 0 END) as fail'),
            ])
            ->groupBy('operators.full_name', 'operators.employee_id')
            ->orderByDesc('total')
            ->get()
            ->toArray();
    }

    /**
     * Get available filter options from the database.
     */
    private function getFilterOptions(): array
    {
        return [
            'brands' => Brand::select('id', 'name')->orderBy('name')->get()->toArray(),
            'articleStyles' => InspectionRecord::select('article_style')
                ->distinct()
                ->orderBy('article_style')
                ->pluck('article_style')
                ->toArray(),
            'operators' => Operator::select('id', 'full_name', 'employee_id')
                ->orderBy('full_name')
                ->get()
                ->toArray(),
        ];
    }

    /**
     * Get all export data for Excel/PDF generation.
     */
    private function getExportData(array $filters, string $reportType = 'all'): array
    {
        $baseQuery = $this->buildFilteredQuery($filters);
        
        $data = [
            'reportType' => $reportType,
            'summary' => $this->getSummaryStats($baseQuery),
        ];

        // Include sections based on report type
        switch ($reportType) {
            case 'measurement':
                $data['failureAnalysis'] = $this->getMeasurementFailureAnalysis($filters);
                break;
            
            case 'article':
                $data['articleSummary'] = $this->getArticleSummary($filters);
                break;
            
            case 'operator':
                $data['operatorPerformance'] = $this->getOperatorPerformance($filters);
                break;
            
            case 'all':
            default:
                $data['articleSummary'] = $this->getArticleSummary($filters);
                $data['operatorPerformance'] = $this->getOperatorPerformance($filters);
                $data['failureAnalysis'] = $this->getMeasurementFailureAnalysis($filters);
                break;
        }

        return $data;
    }

    /**
     * Analyze measurement-level failure data from the stored JSON.
     *
     * Returns:
     *  - parameterFailures: which measurement parameters fail most frequently
     *  - articleFailures: which articles have the most repeated measurement issues
     *  - toleranceViolations: detailed tolerance violation concentration data
     */
    private function getMeasurementFailureAnalysis(array $filters): array
    {
        $query = $this->buildFilteredQuery($filters);
        $records = (clone $query)
            ->select(['measurement_data', 'article_style', 'result'])
            ->get();

        // Track per-parameter stats
        $paramStats = [];
        // Track per-article measurement failures
        $articleMeasurementFailures = [];
        // Track tolerance violation details
        $toleranceViolations = [];

        foreach ($records as $record) {
            $data = $record->measurement_data;
            if (!$data || !isset($data['parameters'])) {
                continue;
            }

            foreach ($data['parameters'] as $param) {
                $name = $param['parameter'] ?? null;
                if (!$name) continue;

                // Initialize parameter stats
                if (!isset($paramStats[$name])) {
                    $paramStats[$name] = ['checked' => 0, 'failed' => 0, 'total_deviation' => 0];
                }

                $paramStats[$name]['checked']++;

                if (($param['status'] ?? '') === 'fail') {
                    $paramStats[$name]['failed']++;
                    $paramStats[$name]['total_deviation'] += abs($param['deviation'] ?? 0);

                    // Track article-level failures
                    $articleStyle = $record->article_style;
                    if (!isset($articleMeasurementFailures[$articleStyle])) {
                        $articleMeasurementFailures[$articleStyle] = [];
                    }
                    if (!isset($articleMeasurementFailures[$articleStyle][$name])) {
                        $articleMeasurementFailures[$articleStyle][$name] = 0;
                    }
                    $articleMeasurementFailures[$articleStyle][$name]++;

                    // Track tolerance violation
                    $toleranceViolations[] = [
                        'parameter' => $name,
                        'article_style' => $articleStyle,
                        'expected' => $param['expected'] ?? 0,
                        'actual' => $param['actual'] ?? 0,
                        'tolerance' => $param['tolerance'] ?? 0,
                        'deviation' => $param['deviation'] ?? 0,
                    ];
                }
            }
        }

        // 1. Parameter failure ranking (sorted by failure count desc)
        $parameterFailures = [];
        foreach ($paramStats as $name => $stats) {
            $parameterFailures[] = [
                'parameter' => $name,
                'label' => ucwords(str_replace('_', ' ', $name)),
                'times_checked' => $stats['checked'],
                'times_failed' => $stats['failed'],
                'failure_rate' => $stats['checked'] > 0 ? round(($stats['failed'] / $stats['checked']) * 100, 1) : 0,
                'avg_deviation' => $stats['failed'] > 0 ? round($stats['total_deviation'] / $stats['failed'], 2) : 0,
            ];
        }
        usort($parameterFailures, fn($a, $b) => $b['times_failed'] <=> $a['times_failed']);

        // 2. Articles with most repeated measurement issues (top 10)
        $articleFailures = [];
        foreach ($articleMeasurementFailures as $articleStyle => $params) {
            $totalFails = array_sum($params);
            $topFailParam = array_keys($params, max($params))[0] ?? '';
            $articleFailures[] = [
                'article_style' => $articleStyle,
                'total_measurement_failures' => $totalFails,
                'unique_params_failing' => count($params),
                'most_common_failure' => ucwords(str_replace('_', ' ', $topFailParam)),
                'most_common_failure_count' => $params[$topFailParam] ?? 0,
                'failing_params' => collect($params)
                    ->map(fn($count, $param) => [
                        'parameter' => ucwords(str_replace('_', ' ', $param)),
                        'count' => $count,
                    ])
                    ->sortByDesc('count')
                    ->values()
                    ->toArray(),
            ];
        }
        usort($articleFailures, fn($a, $b) => $b['total_measurement_failures'] <=> $a['total_measurement_failures']);
        $articleFailures = array_slice($articleFailures, 0, 10);

        // 3. Tolerance violation concentration by parameter
        $violationsByParam = [];
        foreach ($toleranceViolations as $v) {
            $name = $v['parameter'];
            if (!isset($violationsByParam[$name])) {
                $violationsByParam[$name] = [
                    'count' => 0,
                    'total_abs_deviation' => 0,
                    'max_abs_deviation' => 0,
                    'over_count' => 0,
                    'under_count' => 0,
                ];
            }
            $vp = &$violationsByParam[$name];
            $vp['count']++;
            $absDev = abs($v['deviation']);
            $vp['total_abs_deviation'] += $absDev;
            if ($absDev > $vp['max_abs_deviation']) {
                $vp['max_abs_deviation'] = $absDev;
            }
            if ($v['deviation'] > 0) {
                $vp['over_count']++;
            } else {
                $vp['under_count']++;
            }
            unset($vp);
        }

        $toleranceConcentration = [];
        foreach ($violationsByParam as $name => $stats) {
            $toleranceConcentration[] = [
                'parameter' => $name,
                'label' => ucwords(str_replace('_', ' ', $name)),
                'violation_count' => $stats['count'],
                'avg_deviation' => $stats['count'] > 0 ? round($stats['total_abs_deviation'] / $stats['count'], 2) : 0,
                'max_deviation' => round($stats['max_abs_deviation'], 2),
                'over_tolerance_pct' => $stats['count'] > 0 ? round(($stats['over_count'] / $stats['count']) * 100, 0) : 0,
                'under_tolerance_pct' => $stats['count'] > 0 ? round(($stats['under_count'] / $stats['count']) * 100, 0) : 0,
            ];
        }
        usort($toleranceConcentration, fn($a, $b) => $b['violation_count'] <=> $a['violation_count']);

        return [
            'parameterFailures' => $parameterFailures,
            'articleFailures' => $articleFailures,
            'toleranceConcentration' => $toleranceConcentration,
            'totalViolations' => count($toleranceViolations),
        ];
    }
}
