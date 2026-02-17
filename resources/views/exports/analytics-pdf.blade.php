<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>MagicQC Analytics Report</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: 'DejaVu Sans', Arial, Helvetica, sans-serif;
            font-size: 11px;
            color: #1a1a1a;
            line-height: 1.5;
        }

        .header {
            background: #264c59;
            color: white;
            padding: 20px 30px;
            margin-bottom: 20px;
        }
        .header h1 { font-size: 22px; margin-bottom: 4px; }
        .header p { font-size: 11px; opacity: 0.85; }
        .header .date { font-size: 10px; margin-top: 6px; opacity: 0.7; }

        .section { margin: 0 20px 20px 20px; }
        .section-title {
            font-size: 14px;
            font-weight: bold;
            color: #264c59;
            border-bottom: 2px solid #f7a536;
            padding-bottom: 6px;
            margin-bottom: 12px;
        }

        .summary-cards {
            display: table;
            width: 100%;
            margin-bottom: 16px;
        }
        .summary-card {
            display: table-cell;
            width: 25%;
            padding: 0 6px;
            text-align: center;
        }
        .summary-card .box {
            border: 1px solid #e2e8f0;
            border-radius: 6px;
            padding: 12px 8px;
        }
        .summary-card .value {
            font-size: 22px;
            font-weight: bold;
            color: #264c59;
        }
        .summary-card .label {
            font-size: 10px;
            color: #64748b;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        .card-pass .value { color: #059669; }
        .card-fail .value { color: #dc2626; }
        .card-rate .value { color: #f7a536; }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 8px;
        }
        th {
            background: #264c59;
            color: white;
            padding: 8px 10px;
            text-align: left;
            font-size: 10px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        td {
            padding: 7px 10px;
            border-bottom: 1px solid #e2e8f0;
            font-size: 11px;
        }
        tr:nth-child(even) td { background: #f8fafc; }
        tr:hover td { background: #f1f5f9; }

        .pass-rate {
            font-weight: bold;
        }
        .rate-high { color: #059669; }
        .rate-mid { color: #d97706; }
        .rate-low { color: #dc2626; }

        .footer {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            text-align: center;
            font-size: 9px;
            color: #94a3b8;
            padding: 10px;
            border-top: 1px solid #e2e8f0;
        }

        .filters-info {
            background: #f1f5f9;
            border: 1px solid #e2e8f0;
            border-radius: 4px;
            padding: 8px 12px;
            margin-bottom: 16px;
            font-size: 10px;
            color: #475569;
        }
        .filters-info strong { color: #264c59; }

        .page-break { page-break-before: always; }
    </style>
</head>
<body>
    <div class="header">
        <h1>MagicQC
        @php
            $reportTitle = match($reportType ?? 'all') {
                'measurement' => 'Measurement Report',
                'article' => 'Article & Brand Wise Report',
                'operator' => 'Operators\' Usage Summary',
                default => 'Complete Analytics Report'
            };
        @endphp
        {{ $reportTitle }}</h1>
        <p>Quality Control Performance Analysis</p>
        <div class="date">Generated: {{ $generatedAt }}</div>
    </div>

    @php
        $hasFilters = !empty($appliedFilters['brand_id']) || !empty($appliedFilters['article_style'])
            || !empty($appliedFilters['operator_id']) || !empty($appliedFilters['date_from'])
            || !empty($appliedFilters['date_to']) || !empty($appliedFilters['result']);
    @endphp

    @if($hasFilters)
    <div class="section">
        <div class="filters-info">
            <strong>Active Filters:</strong>
            @if(!empty($appliedFilters['brand_id'])) Brand ID: {{ $appliedFilters['brand_id'] }} | @endif
            @if(!empty($appliedFilters['article_style'])) Article: {{ $appliedFilters['article_style'] }} | @endif
            @if(!empty($appliedFilters['operator_id'])) Operator ID: {{ $appliedFilters['operator_id'] }} | @endif
            @if(!empty($appliedFilters['date_from'])) From: {{ $appliedFilters['date_from'] }} | @endif
            @if(!empty($appliedFilters['date_to'])) To: {{ $appliedFilters['date_to'] }} | @endif
            @if(!empty($appliedFilters['result'])) Status: {{ ucfirst($appliedFilters['result']) }} @endif
        </div>
    </div>
    @endif

    <div class="section">
        <div class="section-title">Summary Statistics</div>
        <div class="summary-cards">
            <div class="summary-card">
                <div class="box">
                    <div class="value">{{ number_format($summary['total']) }}</div>
                    <div class="label">Total Inspections</div>
                </div>
            </div>
            <div class="summary-card card-pass">
                <div class="box">
                    <div class="value">{{ number_format($summary['pass']) }}</div>
                    <div class="label">Total Pass</div>
                </div>
            </div>
            <div class="summary-card card-fail">
                <div class="box">
                    <div class="value">{{ number_format($summary['fail']) }}</div>
                    <div class="label">Total Fail</div>
                </div>
            </div>
            <div class="summary-card card-rate">
                <div class="box">
                    <div class="value">{{ $summary['passRate'] }}%</div>
                    <div class="label">Pass Rate</div>
                </div>
            </div>
        </div>
    </div>

    @isset($articleSummary)
    <div class="section">
        <div class="section-title">Article & Brand Wise Summary</div>
        <table>
            <thead>
                <tr>
                    <th>Article Style</th>
                    <th>Brand</th>
                    <th style="text-align:center">Total</th>
                    <th style="text-align:center">Pass</th>
                    <th style="text-align:center">Fail</th>
                    <th style="text-align:center">Pass Rate</th>
                </tr>
            </thead>
            <tbody>
                @forelse($articleSummary as $article)
                @php
                    $rate = $article['total'] > 0 ? round(($article['pass'] / $article['total']) * 100, 1) : 0;
                    $rateClass = $rate >= 80 ? 'rate-high' : ($rate >= 60 ? 'rate-mid' : 'rate-low');
                @endphp
                <tr>
                    <td><strong>{{ $article['article_style'] }}</strong></td>
                    <td>{{ $article['brand_name'] }}</td>
                    <td style="text-align:center">{{ $article['total'] }}</td>
                    <td style="text-align:center">{{ $article['pass'] }}</td>
                    <td style="text-align:center">{{ $article['fail'] }}</td>
                    <td style="text-align:center" class="pass-rate {{ $rateClass }}">{{ $rate }}%</td>
                </tr>
                @empty
                <tr><td colspan="6" style="text-align:center;color:#94a3b8">No data available</td></tr>
                @endforelse
            </tbody>
        </table>
    </div>
    @endisset

    @isset($operatorPerformance)
    <div class="page-break"></div>

    <div class="section" style="margin-top: 20px;">
        <div class="section-title">Operators' Usage Summary</div>
        <table>
            <thead>
                <tr>
                    <th>Operator Name</th>
                    <th>Employee ID</th>
                    <th style="text-align:center">Total</th>
                    <th style="text-align:center">Pass</th>
                    <th style="text-align:center">Fail</th>
                    <th style="text-align:center">Pass Rate</th>
                </tr>
            </thead>
            <tbody>
                @forelse($operatorPerformance as $operator)
                @php
                    $rate = $operator['total'] > 0 ? round(($operator['pass'] / $operator['total']) * 100, 1) : 0;
                    $rateClass = $rate >= 80 ? 'rate-high' : ($rate >= 60 ? 'rate-mid' : 'rate-low');
                @endphp
                <tr>
                    <td><strong>{{ $operator['operator_name'] }}</strong></td>
                    <td>{{ $operator['employee_id'] }}</td>
                    <td style="text-align:center">{{ $operator['total'] }}</td>
                    <td style="text-align:center">{{ $operator['pass'] }}</td>
                    <td style="text-align:center">{{ $operator['fail'] }}</td>
                    <td style="text-align:center" class="pass-rate {{ $rateClass }}">{{ $rate }}%</td>
                </tr>
                @empty
                <tr><td colspan="6" style="text-align:center;color:#94a3b8">No data available</td></tr>
                @endforelse
            </tbody>
        </table>
    </div>
    @endisset

    @isset($failureAnalysis)
    @if(!empty($failureAnalysis) && $failureAnalysis['totalViolations'] > 0)
    <div class="page-break"></div>

    <div class="section" style="margin-top: 20px;">
        <div class="section-title">Non-Compliance Analysis</div>
        <div class="filters-info" style="margin-bottom: 14px; background: #fef2f2; border-color: #fecaca;">
            <strong style="color: #dc2626;">{{ $failureAnalysis['totalViolations'] }} size variations</strong>
            detected across {{ count(array_filter($failureAnalysis['parameterFailures'], fn($p) => $p['times_failed'] > 0)) }} measurement parameters
        </div>

        <div style="margin-bottom: 18px;">
            <div style="font-size: 12px; font-weight: bold; color: #264c59; margin-bottom: 8px;">Most Failing Measurement Parameters</div>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Parameter</th>
                        <th style="text-align:center">Checked</th>
                        <th style="text-align:center">Failed</th>
                        <th style="text-align:center">Failure Rate</th>
                        <th style="text-align:center">Avg Deviation</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach(array_filter($failureAnalysis['parameterFailures'], fn($p) => $p['times_failed'] > 0) as $idx => $param)
                    <tr>
                        <td>{{ $loop->iteration }}</td>
                        <td><strong>{{ $param['label'] }}</strong></td>
                        <td style="text-align:center">{{ $param['times_checked'] }}</td>
                        <td style="text-align:center;color:#dc2626;font-weight:bold">{{ $param['times_failed'] }}</td>
                        <td style="text-align:center" class="pass-rate {{ $param['failure_rate'] >= 30 ? 'rate-low' : ($param['failure_rate'] >= 15 ? 'rate-mid' : 'rate-high') }}">{{ $param['failure_rate'] }}%</td>
                        <td style="text-align:center">&plusmn;{{ $param['avg_deviation'] }}cm</td>
                    </tr>
                    @endforeach
                </tbody>
            </table>
        </div>

        <div style="margin-bottom: 18px;">
            <div style="font-size: 12px; font-weight: bold; color: #264c59; margin-bottom: 8px;">Articles with Repeated Measurement Issues (Top 10)</div>
            <table>
                <thead>
                    <tr>
                        <th>Article Style</th>
                        <th style="text-align:center">Total Failures</th>
                        <th style="text-align:center">Params Affected</th>
                        <th>Most Common Failure</th>
                    </tr>
                </thead>
                <tbody>
                    @forelse($failureAnalysis['articleFailures'] as $article)
                    <tr>
                        <td><strong>{{ $article['article_style'] }}</strong></td>
                        <td style="text-align:center;color:#dc2626;font-weight:bold">{{ $article['total_measurement_failures'] }}</td>
                        <td style="text-align:center">{{ $article['unique_params_failing'] }}</td>
                        <td>{{ $article['most_common_failure'] }} ({{ $article['most_common_failure_count'] }}&times;)</td>
                    </tr>
                    @empty
                    <tr><td colspan="4" style="text-align:center;color:#94a3b8">No data available</td></tr>
                    @endforelse
                </tbody>
            </table>
        </div>

        <div>
            <div style="font-size: 12px; font-weight: bold; color: #264c59; margin-bottom: 8px;">Size Variation Concentration</div>
            <table>
                <thead>
                    <tr>
                        <th>Parameter</th>
                        <th style="text-align:center">Violations</th>
                        <th style="text-align:center">Avg Deviation</th>
                        <th style="text-align:center">Max Deviation</th>
                        <th style="text-align:center">Over %</th>
                        <th style="text-align:center">Under %</th>
                    </tr>
                </thead>
                <tbody>
                    @forelse($failureAnalysis['toleranceConcentration'] as $tc)
                    <tr>
                        <td><strong>{{ $tc['label'] }}</strong></td>
                        <td style="text-align:center">{{ $tc['violation_count'] }}</td>
                        <td style="text-align:center">&plusmn;{{ $tc['avg_deviation'] }}cm</td>
                        <td style="text-align:center;color:#dc2626">&plusmn;{{ $tc['max_deviation'] }}cm</td>
                        <td style="text-align:center;color:#ea580c">{{ $tc['over_tolerance_pct'] }}%</td>
                        <td style="text-align:center;color:#2563eb">{{ $tc['under_tolerance_pct'] }}%</td>
                    </tr>
                    @empty
                    <tr><td colspan="6" style="text-align:center;color:#94a3b8">No data available</td></tr>
                    @endforelse
                </tbody>
            </table>
        </div>
    </div>
    @endif
    @endisset

    <div class="footer">
        MagicQC Quality Control System &bull; Confidential Report &bull; {{ $generatedAt }}
    </div>
</body>
</html>
