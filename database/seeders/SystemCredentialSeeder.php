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
            ['role' => 'manager_qc'],
            [
                'username' => 'ManagerQC',
                'password' => Hash::make('password'), // Default password
                'display_name' => 'QC Manager',
            ]
        );

        SystemCredential::updateOrCreate(
            ['role' => 'meb'],
            [
                'username' => 'MEB',
                'password' => Hash::make('password'), // Default password
                'display_name' => 'MEB Director',
            ]
        );
    }
}
