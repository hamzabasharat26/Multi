<?php

namespace App\Http\Controllers;

use App\Models\ArticleRegistrationSetting;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;

class DeveloperSettingsController extends Controller
{
    /**
     * Show the developer settings page (appearance + password).
     */
    public function index(): Response
    {
        return Inertia::render('developer-settings/index');
    }

    /**
     * Update the developer password.
     */
    public function updatePassword(Request $request): RedirectResponse
    {
        $request->validate([
            'current_password' => ['required', 'string'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ]);

        // Get the current developer password from settings
        $hashedPassword = ArticleRegistrationSetting::getValue('password');

        if (!$hashedPassword || !Hash::check($request->input('current_password'), $hashedPassword)) {
            throw ValidationException::withMessages([
                'current_password' => 'The current password is incorrect.',
            ]);
        }

        // Update the password
        ArticleRegistrationSetting::setValue('password', Hash::make($request->input('password')));

        return back()->with('success', 'Password updated successfully.');
    }
}
