<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Drop the old (article_id, size, side) unique constraint that blocks
     * uploading duplicate article/size/side with different garment colors.
     * 
     * MySQL won't drop the index because it's used by the article_id FK.
     * Solution: drop FK, drop old index, re-add FK (MySQL will use the new
     * ua_article_id_size_side_color_unique index for the FK reference).
     */
    public function up(): void
    {
        // 1. Drop the foreign key that depends on the old index
        try {
            DB::statement('ALTER TABLE uploaded_annotations DROP FOREIGN KEY uploaded_annotations_article_id_foreign');
            echo "Dropped FK: uploaded_annotations_article_id_foreign\n";
        } catch (\Exception $e) {
            echo "FK drop note: " . $e->getMessage() . "\n";
        }

        // 2. Now drop the old unique index
        try {
            DB::statement('ALTER TABLE uploaded_annotations DROP INDEX article_id_size_side_unique');
            echo "Dropped index: article_id_size_side_unique\n";
        } catch (\Exception $e) {
            echo "Index drop note: " . $e->getMessage() . "\n";
        }

        // 3. Re-add the foreign key — MySQL will use ua_article_id_size_side_color_unique
        try {
            DB::statement('
                ALTER TABLE uploaded_annotations 
                ADD CONSTRAINT uploaded_annotations_article_id_foreign 
                FOREIGN KEY (article_id) REFERENCES articles(id) ON DELETE CASCADE
            ');
            echo "Re-added FK: uploaded_annotations_article_id_foreign (with CASCADE)\n";
        } catch (\Exception $e) {
            echo "FK add note: " . $e->getMessage() . "\n";
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // Re-add the old unique index
        try {
            DB::statement('ALTER TABLE uploaded_annotations ADD UNIQUE article_id_size_side_unique(article_id, size, side)');
        } catch (\Exception $e) {
            // ignore if it causes issues with existing data
        }
    }
};
