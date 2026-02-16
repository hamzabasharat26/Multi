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
     *
     * Queries TWO authoritative data sources:
     *   1. measurement_results / measurement_results_detailed — written by the Operator Panel (Electron)
     *   2. inspection_records — legacy/seeded QC inspection data
     *
     * Both are aggregated fresh on every request (no caching) so the dashboard
     * always reflects the latest committed measurements.
     */
    public function index(Request $request): Response
    {
        $filters = $this->extractFilters($request);

        $summary = $this->getSummaryStats($filters);
        $articleSummary = $this->getArticleSummary($filters);
        $operatorPerformance = $this->getOperatorPerformance($filters);
        $filterOptions = $this->getFilterOptions();
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
            'side' => $request->input('side'),
        ];
    }

    // ──────────────────────────────────────────────────────────────
    //  UNIFIED QUERY HELPERS
    //  Combine Operator Panel data (measurement_results) with
    //  legacy inspection_records into a single aggregation.
    // ──────────────────────────────────────────────────────────────

    /**
     * Build WHERE clauses for the measurement_results-based query.
     * Returns [sql_fragments, bindings].
     */
    private function buildMrWhere(array $filters): array
    {
        $where = [];
        $bindings = [];

        if (!empty($filters['article_style'])) {
            $where[] = 'poa.article_style = ?';
            $bindings[] = $filters['article_style'];
        }
        if (!empty($filters['operator_id'])) {
            $where[] = 'mr.operator_id = ?';
            $bindings[] = $filters['operator_id'];
        }
        if (!empty($filters['date_from'])) {
            $where[] = 'DATE(mr.created_at) >= ?';
            $bindings[] = $filters['date_from'];
        }
        if (!empty($filters['date_to'])) {
            $where[] = 'DATE(mr.created_at) <= ?';
            $bindings[] = $filters['date_to'];
        }
        if (!empty($filters['result'])) {
            $where[] = 'mr.status = ?';
            $bindings[] = strtoupper($filters['result']);
        }
        if (!empty($filters['brand_id'])) {
            $where[] = 'po.brand_id = ?';
            $bindings[] = $filters['brand_id'];
        }

        $sql = $where ? 'WHERE ' . implode(' AND ', $where) : '';
        return [$sql, $bindings];
    }

    /**
     * Build a filtered Eloquent query builder for inspection_records.
     */
    private function buildIrQuery(array $filters)
    {
        $query = InspectionRecord::query();

        if (!empty($filters['brand_id']))      $query->where('brand_id', $filters['brand_id']);
        if (!empty($filters['article_style'])) $query->where('article_style', $filters['article_style']);
        if (!empty($filters['operator_id']))   $query->where('operator_id', $filters['operator_id']);
        if (!empty($filters['date_from']))     $query->whereDate('inspected_at', '>=', $filters['date_from']);
        if (!empty($filters['date_to']))       $query->whereDate('inspected_at', '<=', $filters['date_to']);
        if (!empty($filters['result']))        $query->where('result', $filters['result']);

        return $query;
    }

    // ──────────────────────────────────────────────────────────────
    //  SUMMARY STATS  (Total Measurements, Pass, Fail, Rates)
    // ──────────────────────────────────────────────────────────────

    /**
     * Get summary statistics by combining both data sources.
     * measurement_results provides per-POM PASS/FAIL/PENDING from the Operator Panel.
     * inspection_records provides legacy per-article pass/fail.
     */
    private function getSummaryStats(array $filters): array
    {
        // --- Source 1: measurement_results (Operator Panel) ---
        [$mrWhere, $mrBindings] = $this->buildMrWhere($filters);

        $mrStats = DB::selectOne("
            SELECT
                COUNT(*) as total,
                SUM(CASE WHEN mr.status = 'PASS' THEN 1 ELSE 0 END) as pass,
                SUM(CASE WHEN mr.status = 'FAIL' THEN 1 ELSE 0 END) as fail
            FROM measurement_results mr
            JOIN purchase_order_articles poa ON mr.purchase_order_article_id = poa.id
            JOIN purchase_orders po ON poa.purchase_order_id = po.id
            {$mrWhere}
        ", $mrBindings);

        // --- Source 2: inspection_records (legacy) ---
        $irQuery = $this->buildIrQuery($filters);
        $irStats = (clone $irQuery)
            ->selectRaw('
                COUNT(*) as total,
                SUM(CASE WHEN result = ? THEN 1 ELSE 0 END) as pass,
                SUM(CASE WHEN result = ? THEN 1 ELSE 0 END) as fail
            ', ['pass', 'fail'])
            ->first();

        // Combine both sources
        $total = (int) ($mrStats->total ?? 0) + (int) ($irStats->total ?? 0);
        $pass = (int) ($mrStats->pass ?? 0) + (int) ($irStats->pass ?? 0);
        $fail = (int) ($mrStats->fail ?? 0) + (int) ($irStats->fail ?? 0);

        return [
            'total' => $total,
            'pass' => $pass,
            'fail' => $fail,
            'passRate' => $total > 0 ? round(($pass / $total) * 100, 1) : 0,
            'failRate' => $total > 0 ? round(($fail / $total) * 100, 1) : 0,
        ];
    }

    // ──────────────────────────────────────────────────────────────
    //  ARTICLE SUMMARY
    // ──────────────────────────────────────────────────────────────

    private function getArticleSummary(array $filters): array
    {
        // --- Source 1: measurement_results ---
        [$mrWhere, $mrBindings] = $this->buildMrWhere($filters);

        $mrRows = DB::select("
            SELECT
                poa.article_style,
                COALESCE(b.name, 'Unknown') as brand_name,
                COUNT(*) as total,
                SUM(CASE WHEN mr.status = 'PASS' THEN 1 ELSE 0 END) as pass,
                SUM(CASE WHEN mr.status = 'FAIL' THEN 1 ELSE 0 END) as fail
            FROM measurement_results mr
            JOIN purchase_order_articles poa ON mr.purchase_order_article_id = poa.id
            JOIN purchase_orders po ON poa.purchase_order_id = po.id
            LEFT JOIN brands b ON po.brand_id = b.id
            {$mrWhere}
            GROUP BY poa.article_style, b.name
            ORDER BY total DESC
        ", $mrBindings);

        // --- Source 2: inspection_records ---
        $irQuery = $this->buildIrQuery($filters);
        $irRows = (clone $irQuery)
            ->join('brands', 'inspection_records.brand_id', '=', 'brands.id')
            ->select([
                'inspection_records.article_style',
                'brands.name as brand_name',
                DB::raw('COUNT(*) as total'),
                DB::raw("SUM(CASE WHEN inspection_records.result = 'pass' THEN 1 ELSE 0 END) as pass"),
                DB::raw("SUM(CASE WHEN inspection_records.result = 'fail' THEN 1 ELSE 0 END) as fail"),
            ])
            ->groupBy('inspection_records.article_style', 'brands.name')
            ->orderByDesc('total')
            ->get()
            ->toArray();

        // Merge: combine by (article_style, brand_name)
        return $this->mergeGroupedRows($mrRows, $irRows, ['article_style', 'brand_name']);
    }

    // ──────────────────────────────────────────────────────────────
    //  OPERATOR PERFORMANCE
    // ──────────────────────────────────────────────────────────────

    private function getOperatorPerformance(array $filters): array
    {
        // --- Source 1: measurement_results ---
        [$mrWhere, $mrBindings] = $this->buildMrWhere($filters);

        $mrRows = DB::select("
            SELECT
                o.full_name as operator_name,
                o.employee_id,
                COUNT(*) as total,
                SUM(CASE WHEN mr.status = 'PASS' THEN 1 ELSE 0 END) as pass,
                SUM(CASE WHEN mr.status = 'FAIL' THEN 1 ELSE 0 END) as fail
            FROM measurement_results mr
            JOIN operators o ON mr.operator_id = o.id
            JOIN purchase_order_articles poa ON mr.purchase_order_article_id = poa.id
            JOIN purchase_orders po ON poa.purchase_order_id = po.id
            {$mrWhere}
            GROUP BY o.full_name, o.employee_id
            ORDER BY total DESC
        ", $mrBindings);

        // --- Source 2: inspection_records ---
        $irQuery = $this->buildIrQuery($filters);
        $irRows = (clone $irQuery)
            ->join('operators', 'inspection_records.operator_id', '=', 'operators.id')
            ->select([
                'operators.full_name as operator_name',
                'operators.employee_id',
                DB::raw('COUNT(*) as total'),
                DB::raw("SUM(CASE WHEN inspection_records.result = 'pass' THEN 1 ELSE 0 END) as pass"),
                DB::raw("SUM(CASE WHEN inspection_records.result = 'fail' THEN 1 ELSE 0 END) as fail"),
            ])
            ->groupBy('operators.full_name', 'operators.employee_id')
            ->orderByDesc('total')
            ->get()
            ->toArray();

        return $this->mergeGroupedRows($mrRows, $irRows, ['operator_name', 'employee_id']);
    }

    /**
     * Merge two sets of grouped rows (from measurement_results + inspection_records)
     * by composite key, summing total/pass/fail.
     */
    private function mergeGroupedRows($mrRows, array $irRows, array $keyFields): array
    {
        $merged = [];

        // Index measurement_results rows
        foreach ($mrRows as $row) {
            $row = (array) $row;
            $key = implode('|', array_map(fn($f) => $row[$f] ?? '', $keyFields));
            $merged[$key] = [
                ...$row,
                'total' => (int) $row['total'],
                'pass' => (int) $row['pass'],
                'fail' => (int) $row['fail'],
            ];
        }

        // Add inspection_records rows
        foreach ($irRows as $row) {
            $row = (array) $row;
            $key = implode('|', array_map(fn($f) => $row[$f] ?? '', $keyFields));
            if (isset($merged[$key])) {
                $merged[$key]['total'] += (int) $row['total'];
                $merged[$key]['pass'] += (int) $row['pass'];
                $merged[$key]['fail'] += (int) $row['fail'];
            } else {
                $merged[$key] = [
                    ...$row,
                    'total' => (int) $row['total'],
                    'pass' => (int) $row['pass'],
                    'fail' => (int) $row['fail'],
                ];
            }
        }

        // Sort by total desc and return values
        $result = array_values($merged);
        usort($result, fn($a, $b) => $b['total'] <=> $a['total']);
        return $result;
    }

    // ──────────────────────────────────────────────────────────────
    //  FILTER OPTIONS
    // ──────────────────────────────────────────────────────────────

    private function getFilterOptions(): array
    {
        // Merge article styles from both sources
        $irStyles = InspectionRecord::select('article_style')
            ->distinct()->pluck('article_style')->toArray();

        $mrStyles = DB::table('measurement_results')
            ->join('purchase_order_articles', 'measurement_results.purchase_order_article_id', '=', 'purchase_order_articles.id')
            ->select('purchase_order_articles.article_style')
            ->distinct()->pluck('article_style')->toArray();

        $allStyles = collect(array_merge($irStyles, $mrStyles))
            ->unique()->sort()->values()->toArray();

        return [
            'brands' => Brand::select('id', 'name')->orderBy('name')->get()->toArray(),
            'articleStyles' => $allStyles,
            'operators' => Operator::select('id', 'full_name', 'employee_id')
                ->orderBy('full_name')
                ->get()
                ->toArray(),
        ];
    }

    // ──────────────────────────────────────────────────────────────
    //  MEASUREMENT FAILURE ANALYSIS
    //  Uses measurement_results_detailed (authoritative per-POM per-side)
    //  as primary source, falling back to inspection_records JSON for legacy.
    // ──────────────────────────────────────────────────────────────

    private function getMeasurementFailureAnalysis(array $filters): array
    {
        $paramStats = [];
        $articleMeasurementFailures = [];
        $toleranceViolations = [];

        // --- Source 1: measurement_results_detailed (Operator Panel, per-POM per-side) ---
        $this->analyzeMrdRecords($filters, $paramStats, $articleMeasurementFailures, $toleranceViolations);

        // --- Source 2: inspection_records JSON (legacy) ---
        $this->analyzeIrRecords($filters, $paramStats, $articleMeasurementFailures, $toleranceViolations);

        // --- Build output arrays ---

        // 1. Parameter failure ranking
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

        // 3. Tolerance concentration by parameter
        $violationsByParam = [];
        foreach ($toleranceViolations as $v) {
            $name = $v['parameter'];
            if (!isset($violationsByParam[$name])) {
                $violationsByParam[$name] = [
                    'count' => 0, 'total_abs_deviation' => 0,
                    'max_abs_deviation' => 0, 'over_count' => 0, 'under_count' => 0,
                ];
            }
            $vp = &$violationsByParam[$name];
            $vp['count']++;
            $absDev = abs($v['deviation']);
            $vp['total_abs_deviation'] += $absDev;
            if ($absDev > $vp['max_abs_deviation']) $vp['max_abs_deviation'] = $absDev;
            if ($v['deviation'] > 0) $vp['over_count']++; else $vp['under_count']++;
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

    /**
     * Analyze measurement_results_detailed for failure data.
     * This is the authoritative per-POM per-side source from the Operator Panel.
     */
    private function analyzeMrdRecords(array $filters, array &$paramStats, array &$articleMeasurementFailures, array &$toleranceViolations): void
    {
        $where = [];
        $bindings = [];

        if (!empty($filters['article_style'])) {
            $where[] = 'mrd.article_style = ?';
            $bindings[] = $filters['article_style'];
        }
        if (!empty($filters['operator_id'])) {
            $where[] = 'mrd.operator_id = ?';
            $bindings[] = $filters['operator_id'];
        }
        if (!empty($filters['date_from'])) {
            $where[] = 'DATE(mrd.created_at) >= ?';
            $bindings[] = $filters['date_from'];
        }
        if (!empty($filters['date_to'])) {
            $where[] = 'DATE(mrd.created_at) <= ?';
            $bindings[] = $filters['date_to'];
        }
        if (!empty($filters['result'])) {
            $where[] = 'mrd.status = ?';
            $bindings[] = strtoupper($filters['result']);
        }
        if (!empty($filters['side'])) {
            $where[] = 'mrd.side = ?';
            $bindings[] = $filters['side'];
        }
        if (!empty($filters['brand_id'])) {
            $where[] = 'po.brand_id = ?';
            $bindings[] = $filters['brand_id'];
        }

        $whereClause = $where ? 'WHERE ' . implode(' AND ', $where) : '';

        $rows = DB::select("
            SELECT
                m.measurement as param_name,
                m.code as param_code,
                mrd.article_style,
                mrd.measured_value,
                mrd.expected_value,
                mrd.tol_plus,
                mrd.tol_minus,
                mrd.status,
                mrd.side
            FROM measurement_results_detailed mrd
            JOIN measurements m ON mrd.measurement_id = m.id
            JOIN purchase_order_articles poa ON mrd.purchase_order_article_id = poa.id
            JOIN purchase_orders po ON poa.purchase_order_id = po.id
            {$whereClause}
        ", $bindings);

        foreach ($rows as $row) {
            $paramKey = strtolower(str_replace(' ', '_', $row->param_name));

            if (!isset($paramStats[$paramKey])) {
                $paramStats[$paramKey] = ['checked' => 0, 'failed' => 0, 'total_deviation' => 0];
            }
            $paramStats[$paramKey]['checked']++;

            if ($row->status === 'FAIL') {
                $deviation = $row->measured_value !== null && $row->expected_value !== null
                    ? (float) $row->measured_value - (float) $row->expected_value
                    : 0;

                $paramStats[$paramKey]['failed']++;
                $paramStats[$paramKey]['total_deviation'] += abs($deviation);

                $articleStyle = $row->article_style;
                if (!isset($articleMeasurementFailures[$articleStyle])) {
                    $articleMeasurementFailures[$articleStyle] = [];
                }
                if (!isset($articleMeasurementFailures[$articleStyle][$paramKey])) {
                    $articleMeasurementFailures[$articleStyle][$paramKey] = 0;
                }
                $articleMeasurementFailures[$articleStyle][$paramKey]++;

                $toleranceViolations[] = [
                    'parameter' => $paramKey,
                    'article_style' => $articleStyle,
                    'expected' => (float) ($row->expected_value ?? 0),
                    'actual' => (float) ($row->measured_value ?? 0),
                    'tolerance' => (float) ($row->tol_plus ?? 0),
                    'deviation' => $deviation,
                ];
            }
        }
    }

    /**
     * Analyze inspection_records JSON measurement_data for failure data (legacy source).
     */
    private function analyzeIrRecords(array $filters, array &$paramStats, array &$articleMeasurementFailures, array &$toleranceViolations): void
    {
        $records = $this->buildIrQuery($filters)
            ->select(['measurement_data', 'article_style', 'result'])
            ->get();

        foreach ($records as $record) {
            $data = $record->measurement_data;
            if (!$data || !isset($data['parameters'])) continue;

            foreach ($data['parameters'] as $param) {
                $name = $param['parameter'] ?? null;
                if (!$name) continue;

                if (!isset($paramStats[$name])) {
                    $paramStats[$name] = ['checked' => 0, 'failed' => 0, 'total_deviation' => 0];
                }
                $paramStats[$name]['checked']++;

                if (($param['status'] ?? '') === 'fail') {
                    $paramStats[$name]['failed']++;
                    $paramStats[$name]['total_deviation'] += abs($param['deviation'] ?? 0);

                    $articleStyle = $record->article_style;
                    if (!isset($articleMeasurementFailures[$articleStyle])) {
                        $articleMeasurementFailures[$articleStyle] = [];
                    }
                    if (!isset($articleMeasurementFailures[$articleStyle][$name])) {
                        $articleMeasurementFailures[$articleStyle][$name] = 0;
                    }
                    $articleMeasurementFailures[$articleStyle][$name]++;

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
    }

    // ──────────────────────────────────────────────────────────────
    //  EXPORT DATA
    // ──────────────────────────────────────────────────────────────

    private function getExportData(array $filters, string $reportType = 'all'): array
    {
        $data = [
            'reportType' => $reportType,
            'summary' => $this->getSummaryStats($filters),
        ];

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
}
