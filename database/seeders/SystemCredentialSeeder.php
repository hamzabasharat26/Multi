<?php

namespace Database\Seeders;

use App\Models\SystemCredential;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class SystemCredentialSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // System Login Credentials
        SystemCredential::updateOrCreate(
            ['username' => 'ManagerQC'],
            [
                'role' => 'manager_qc',
                'password' => Hash::make('password'), // Default password
                'display_name' => 'QC Manager',
            ]
        );

        SystemCredential::updateOrCreate(
            ['username' => 'Director'],
            [
                'role' => 'meb',
                'password' => Hash::make('password'), // Default password
                'display_name' => 'Director',
            ]
        );
    }
}
