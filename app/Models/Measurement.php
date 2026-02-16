<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Measurement extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'article_id',
        'code',
        'measurement',
        'tol_plus',
        'tol_minus',
        'side',
    ];

    protected $casts = [
        'tol_plus' => 'decimal:2',
        'tol_minus' => 'decimal:2',
    ];

    public function article(): BelongsTo
    {
        return $this->belongsTo(Article::class);
    }

    public function sizes(): HasMany
    {
        return $this->hasMany(MeasurementSize::class);
    }

    /**
     * Get the QC measurement results for this measurement.
     * Uses raw table reference since measurement_results has no Laravel model.
     */
    public function resultsCount(): int
    {
        return \Illuminate\Support\Facades\DB::table('measurement_results')
            ->where('measurement_id', $this->id)
            ->count();
    }
}
