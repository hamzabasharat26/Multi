<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * Drop the duplicate unique constraint if it exists.
     */
    public function up(): void
    {
        // Check if the index exists before trying to drop it (MySQL 5.7 compatible)
        $result = DB::select("
            SELECT COUNT(*) as cnt
            FROM information_schema.statistics
            WHERE table_schema = DATABASE()
            AND table_name = 'uploaded_annotations'
            AND index_name = 'uploaded_annotations_article_size_side_unique'
        ");

        if ($result[0]->cnt > 0) {
            Schema::table('uploaded_annotations', function (Blueprint $table) {
                $table->dropUnique('uploaded_annotations_article_size_side_unique');
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('uploaded_annotations', function (Blueprint $table) {
            $table->unique(['article_id', 'size', 'side'], 'uploaded_annotations_article_size_side_unique');
        });
    }
};
