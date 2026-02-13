<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('system_credentials', function (Blueprint $table) {
            $table->id();
            $table->string('role')->unique(); // 'manager_qc' or 'meb'
            $table->string('username');
            $table->string('password'); // hashed
            $table->string('display_name');
            $table->timestamps();
        });

        // Seed default credentials
        DB::table('system_credentials')->insert([
            [
                'role' => 'manager_qc',
                'username' => 'ManagerQC',
                'password' => Hash::make('12345678'),
                'display_name' => 'Manager QC',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'role' => 'meb',
                'username' => 'MEB',
                'password' => Hash::make('12345678'),
                'display_name' => 'MEB Director',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('system_credentials');
    }
};
