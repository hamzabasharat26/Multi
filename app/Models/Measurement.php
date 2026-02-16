<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\DB;

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

    /**
     * Boot method — cascade soft-delete and restore to child measurement_sizes.
     */
    protected static function booted(): void
    {
        // When a measurement is soft-deleted, soft-delete all its sizes
        static::deleting(function (Measurement $measurement) {
            if ($measurement->isForceDeleting()) {
                return; // forceDelete triggers DB cascade, skip Eloquent cascade
            }
            $measurement->sizes()->each(fn (MeasurementSize $size) => $size->delete());
        });

        // When a measurement is restored, restore all its sizes
        static::restoring(function (Measurement $measurement) {
            $measurement->sizes()->withTrashed()->restore();
        });
    }

    public function article(): BelongsTo
    {
        return $this->belongsTo(Article::class);
    }

    public function sizes(): HasMany
    {
        return $this->hasMany(MeasurementSize::class);
    }

    /**
     * Count QC results referencing this measurement across both operator tables.
     * Checks measurement_results (per-POM aggregated) and measurement_results_detailed (per-side).
     */
    public function resultsCount(): int
    {
        $mrCount = 0;
        $mrdCount = 0;

        try {
            $mrCount = DB::table('measurement_results')
                ->where('measurement_id', $this->id)
                ->count();
        } catch (\Exception $e) {
            // Table may not exist yet (created by Electron app)
        }

        try {
            $mrdCount = DB::table('measurement_results_detailed')
                ->where('measurement_id', $this->id)
                ->count();
        } catch (\Exception $e) {
            // Table may not exist yet
        }

        return $mrCount + $mrdCount;
    }
}
