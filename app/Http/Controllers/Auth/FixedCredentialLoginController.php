<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\SystemCredential;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;

class FixedCredentialLoginController extends Controller
{
    /**
     * Role-to-route mapping.
     */
    private const ROLE_REDIRECTS = [
        'manager_qc' => 'dashboard',
        'meb' => 'director.analytics.dashboard',
    ];

    /**
     * Display the system login form.
     */
    public function showLoginForm(): Response|RedirectResponse
    {
        // If already logged in with a role, redirect appropriately
        $role = session('auth_role');
        if ($role === 'manager_qc') {
            return redirect()->route('dashboard');
        }
        if ($role === 'meb') {
            return redirect()->route('director.analytics.dashboard');
        }

        return Inertia::render('auth/system-login');
    }

    /**
     * Handle system login attempt using database credentials.
     */
    public function login(Request $request): RedirectResponse
    {
        $request->validate([
            'username' => ['required', 'string'],
            'password' => ['required', 'string'],
        ]);

        $username = $request->input('username');
        $password = $request->input('password');

        // Find credential by username (case-sensitive)
        $credential = SystemCredential::whereRaw('BINARY username = ?', [$username])->first();

        if (!$credential || !Hash::check($password, $credential->password)) {
            throw ValidationException::withMessages([
                'username' => 'Invalid credentials. Please check your username and password.',
            ]);
        }

        $redirect = self::ROLE_REDIRECTS[$credential->role] ?? 'home';

        // Regenerate session to prevent fixation
        $request->session()->regenerate();

        // Set role-based session flags
        $request->session()->put('auth_role', $credential->role);
        $request->session()->put('auth_username', $credential->username);

        return redirect()->route($redirect);
    }

    /**
     * Log out from system session.
     */
    public function logout(Request $request): RedirectResponse
    {
        $request->session()->forget(['auth_role', 'auth_username']);
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect()->route('home');
    }
}
