<?php

namespace App\Http\Controllers;

use App\Models\SystemCredential;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;

class SystemSettingsController extends Controller
{
    /**
     * Show the system settings page (credentials + appearance).
     */
    public function index(): Response
    {
        $role = session('auth_role');
        $credential = SystemCredential::where('role', $role)->first();

        return Inertia::render('system-settings/index', [
            'currentUsername' => $credential?->username ?? session('auth_username'),
            'currentRole' => $role,
            'displayName' => $credential?->display_name ?? '',
        ]);
    }

    /**
     * Update the username for the current role.
     */
    public function updateUsername(Request $request): RedirectResponse
    {
        $role = session('auth_role');

        $request->validate([
            'current_password' => ['required', 'string'],
            'username' => ['required', 'string', 'min:3', 'max:50'],
        ]);

        $credential = SystemCredential::where('role', $role)->first();

        if (!$credential || !Hash::check($request->input('current_password'), $credential->password)) {
            throw ValidationException::withMessages([
                'current_password' => 'The current password is incorrect.',
            ]);
        }

        // Check uniqueness (no other role should have this username)
        $existing = SystemCredential::where('username', $request->input('username'))
            ->where('role', '!=', $role)
            ->first();

        if ($existing) {
            throw ValidationException::withMessages([
                'username' => 'This username is already in use.',
            ]);
        }

        $credential->update([
            'username' => $request->input('username'),
        ]);

        // Update session
        $request->session()->put('auth_username', $request->input('username'));

        return back()->with('success', 'Username updated successfully.');
    }

    /**
     * Update the password for the current role.
     */
    public function updatePassword(Request $request): RedirectResponse
    {
        $role = session('auth_role');

        $request->validate([
            'current_password' => ['required', 'string'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ]);

        $credential = SystemCredential::where('role', $role)->first();

        if (!$credential || !Hash::check($request->input('current_password'), $credential->password)) {
            throw ValidationException::withMessages([
                'current_password' => 'The current password is incorrect.',
            ]);
        }

        $credential->update([
            'password' => Hash::make($request->input('password')),
        ]);

        return back()->with('success', 'Password updated successfully.');
    }
}
