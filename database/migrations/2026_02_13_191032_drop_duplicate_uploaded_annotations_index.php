<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * The table has two identical unique constraints on (article_id, size, side):
     *   - article_id_size_side_unique
     *   - uploaded_annotations_article_size_side_unique
     * Drop the duplicate to keep things clean.
     */
    public function up(): void
    {
        Schema::table('uploaded_annotations', function (Blueprint $table) {
            $table->dropUnique('uploaded_annotations_article_size_side_unique');
        });
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
