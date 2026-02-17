<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Add garment color column to uploaded_annotations table.
     *
     * Color suffix convention:
     *   - 'black'  → -b  (e.g., T-SHIRT_S_FRONT-b)
     *   - 'white'  → -w  (e.g., T-SHIRT_S_FRONT-w)
     *   - 'other'  → -z  (e.g., T-SHIRT_S_FRONT-z)
     *   - null     → no suffix (backward compat with existing records)
     */
    public function up(): void
    {
        Schema::table('uploaded_annotations', function (Blueprint $table) {
            $table->string('color', 20)->nullable()->after('side')
                  ->comment('Garment color: black, white, other (nullable for backward compat)');
        });

        // Drop the old unique constraint and add the new one including color
        // First, find and drop any existing unique indexes (except PRIMARY)
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
                // Ignore if already dropped
            }
        }

        // Add new unique constraint including color
        // NULL colors are treated as distinct by MySQL, so legacy records without color won't conflict
        DB::statement('
            ALTER TABLE uploaded_annotations 
            ADD UNIQUE uploaded_annotations_style_size_side_color_unique(article_style, size, side, color)
        ');
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // Drop the new unique constraint
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
                // Ignore
            }
        }

        // Restore old unique constraint
        DB::statement('
            ALTER TABLE uploaded_annotations 
            ADD UNIQUE uploaded_annotations_article_style_size_side_unique(article_style, size, side)
        ');

        Schema::table('uploaded_annotations', function (Blueprint $table) {
            $table->dropColumn('color');
        });
    }
};
