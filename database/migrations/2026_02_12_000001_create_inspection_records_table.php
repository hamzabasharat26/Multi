<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('inspection_records', function (Blueprint $table) {
            $table->id();
            $table->foreignId('operator_id')->constrained('operators')->onDelete('cascade');
            $table->foreignId('article_id')->constrained('articles')->onDelete('cascade');
            $table->foreignId('brand_id')->constrained('brands')->onDelete('cascade');
            $table->foreignId('purchase_order_id')->nullable()->constrained('purchase_orders')->onDelete('set null');
            $table->string('article_style');
            $table->string('size')->nullable();
            $table->enum('result', ['pass', 'fail']);
            $table->text('remarks')->nullable();
            $table->json('measurement_data')->nullable();
            $table->dateTime('inspected_at');
            $table->timestamps();

            // Indexes for optimized analytics queries
            $table->index('result');
            $table->index('inspected_at');
            $table->index(['brand_id', 'result']);
            $table->index(['operator_id', 'result']);
            $table->index(['article_id', 'result']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('inspection_records');
    }
};
