<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class InspectionRecord extends Model
{
    use HasFactory;

    protected $fillable = [
        'operator_id',
        'article_id',
        'brand_id',
        'purchase_order_id',
        'article_style',
        'size',
        'result',
        'remarks',
        'measurement_data',
        'inspected_at',
    ];

    protected $casts = [
        'measurement_data' => 'array',
        'inspected_at' => 'datetime',
    ];

    public function operator(): BelongsTo
    {
        return $this->belongsTo(Operator::class);
    }

    public function article(): BelongsTo
    {
        return $this->belongsTo(Article::class);
    }

    public function brand(): BelongsTo
    {
        return $this->belongsTo(Brand::class);
    }

    public function purchaseOrder(): BelongsTo
    {
        return $this->belongsTo(PurchaseOrder::class);
    }
}
