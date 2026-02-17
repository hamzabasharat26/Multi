<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Add soft deletes to measurements table.
     * Measurements with QC results (measurement_results) will be soft-deleted
     * instead of hard-deleted to preserve FK integrity.
     */
    public function up(): void
    {
        Schema::table('measurements', function (Blueprint $table) {
            $table->softDeletes();
        });
    }

    public function down(): void
    {
        Schema::table('measurements', function (Blueprint $table) {
            $table->dropSoftDeletes();
        });
    }
};
