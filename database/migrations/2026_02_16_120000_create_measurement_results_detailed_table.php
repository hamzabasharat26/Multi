<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Create measurement_results_detailed table for the Operator Panel (Electron app).
     * This is the primary per-POM per-side storage written by saveMeasurementsWithSide().
     */
    public function up(): void
    {
        Schema::create('measurement_results_detailed', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('purchase_order_article_id');
            $table->unsignedBigInteger('measurement_id');
            $table->string('size', 50);
            $table->string('side', 10)->default('front'); // front or back
            $table->string('article_style')->nullable();
            $table->decimal('measured_value', 10, 2)->nullable();
            $table->decimal('expected_value', 10, 2)->nullable();
            $table->decimal('tol_plus', 10, 2)->nullable();
            $table->decimal('tol_minus', 10, 2)->nullable();
            $table->enum('status', ['PASS', 'FAIL', 'PENDING'])->default('PENDING');
            $table->unsignedBigInteger('operator_id')->nullable();
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->useCurrent()->useCurrentOnUpdate();

            // Indexes for analytics queries
            $table->index(['purchase_order_article_id', 'size', 'side'], 'mrd_poa_size_side_idx');
            $table->index(['status'], 'mrd_status_idx');
            $table->index(['operator_id'], 'mrd_operator_idx');
            $table->index(['article_style'], 'mrd_article_style_idx');

            // FK constraints
            $table->foreign('purchase_order_article_id')
                ->references('id')->on('purchase_order_articles')->onDelete('cascade');
            $table->foreign('measurement_id')
                ->references('id')->on('measurements');
            $table->foreign('operator_id')
                ->references('id')->on('operators');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('measurement_results_detailed');
    }
};
