<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Add columns to measurement_sessions that the Operator Panel (Electron app) expects.
     * The Electron app writes: purchase_order_article_id, article_style,
     * front_side_complete, back_side_complete, front_qc_result, back_qc_result.
     */
    public function up(): void
    {
        Schema::table('measurement_sessions', function (Blueprint $table) {
            $table->unsignedBigInteger('purchase_order_article_id')->nullable()->after('purchase_order_id');
            $table->string('article_style')->nullable()->after('article_id');
            $table->boolean('front_side_complete')->default(false)->after('status');
            $table->boolean('back_side_complete')->default(false)->after('front_side_complete');
            $table->enum('front_qc_result', ['PASS', 'FAIL', 'PENDING'])->nullable()->after('back_side_complete');
            $table->enum('back_qc_result', ['PASS', 'FAIL', 'PENDING'])->nullable()->after('front_qc_result');

            // Index for the Electron app's ON DUPLICATE KEY UPDATE
            $table->unique(['purchase_order_article_id', 'size'], 'ms_poa_size_unique');

            $table->foreign('purchase_order_article_id')
                ->references('id')->on('purchase_order_articles')->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::table('measurement_sessions', function (Blueprint $table) {
            $table->dropForeign(['purchase_order_article_id']);
            $table->dropUnique('ms_poa_size_unique');
            $table->dropColumn([
                'purchase_order_article_id',
                'article_style',
                'front_side_complete',
                'back_side_complete',
                'front_qc_result',
                'back_qc_result',
            ]);
        });
    }
};
