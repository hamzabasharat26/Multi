<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Fix unique constraints on uploaded_annotations table.
     *
     * Problem: The old (article_id, size, side) unique constraint blocks uploading
     * the same article/size/side with different garment colors.
     * 
     * Solution: Drop ALL unique constraints and recreate only the correct ones
     * that include the color column:
     *   1. (article_style, size, side, color) — for style-based lookups
     *   2. (article_id, size, side, color)    — for article_id-based lookups
     */
    public function up(): void
    {
        // Drop ALL unique indexes (except PRIMARY)
        $indexes = DB::select("
            SELECT DISTINCT INDEX_NAME 
            FROM information_schema.statistics 
            WHERE TABLE_SCHEMA = DATABASE() 
            AND TABLE_NAME = 'uploaded_annotations' 
            AND NON_UNIQUE = 0
            AND INDEX_NAME != 'PRIMARY'
        ");

        foreach ($indexes as $index) {
            try {
                DB::statement("ALTER TABLE uploaded_annotations DROP INDEX {$index->INDEX_NAME}");
                echo "Dropped: {$index->INDEX_NAME}\n";
            } catch (\Exception $e) {
                echo "Could not drop {$index->INDEX_NAME}: " . $e->getMessage() . "\n";
            }
        }

        // Add the correct unique constraints including color
        // MySQL treats NULLs as distinct in unique indexes, so legacy records 
        // with color=NULL won't conflict with each other or with colored records
        DB::statement('
            ALTER TABLE uploaded_annotations 
            ADD UNIQUE ua_style_size_side_color_unique(article_style, size, side, color)
        ');
        echo "Added: ua_style_size_side_color_unique (article_style, size, side, color)\n";

        DB::statement('
            ALTER TABLE uploaded_annotations 
            ADD UNIQUE ua_article_id_size_side_color_unique(article_id, size, side, color)
        ');
        echo "Added: ua_article_id_size_side_color_unique (article_id, size, side, color)\n";
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        $indexes = DB::select("
            SELECT DISTINCT INDEX_NAME 
            FROM information_schema.statistics 
            WHERE TABLE_SCHEMA = DATABASE() 
            AND TABLE_NAME = 'uploaded_annotations' 
            AND NON_UNIQUE = 0
            AND INDEX_NAME != 'PRIMARY'
        ");

        foreach ($indexes as $index) {
            try {
                DB::statement("ALTER TABLE uploaded_annotations DROP INDEX {$index->INDEX_NAME}");
            } catch (\Exception $e) {
                // ignore
            }
        }

        // Restore original constraints
        DB::statement('ALTER TABLE uploaded_annotations ADD UNIQUE article_id_size_side_unique(article_id, size, side)');
        DB::statement('ALTER TABLE uploaded_annotations ADD UNIQUE uploaded_annotations_article_style_size_side_unique(article_style, size, side)');
    }
};
