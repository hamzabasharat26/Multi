<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class EnsureAuthenticatedOrDeveloper
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if (Auth::check() || session('is_developer') || session('auth_role') === 'manager_qc') {
            return $next($request);
        }

        // Return JSON 401 for AJAX/fetch requests, redirect otherwise
        if ($request->expectsJson() || $request->ajax()) {
            return response()->json(['success' => false, 'message' => 'Session expired. Please log in again.'], 401);
        }

        return redirect()->route('system.login');
    }
}
