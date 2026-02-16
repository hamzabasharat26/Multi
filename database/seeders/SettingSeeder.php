<?php

namespace Database\Seeders;

use App\Models\ArticleRegistrationSetting;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class SettingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Developer Access Password (for /developer-login)
        ArticleRegistrationSetting::updateOrCreate(
            ['key' => 'password'],
            ['value' => Hash::make('password')] // Default password
        );
    }
}
