<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class EnsureMEB
{
    /**
     * Ensure the session role is MEB (Director).
     * Blocks access for ManagerQC users.
     */
    public function handle(Request $request, Closure $next): Response
    {
        if (session('auth_role') !== 'meb') {
            if ($request->wantsJson()) {
                return response()->json(['message' => 'Unauthorized.'], 403);
            }

            return redirect()->route('home');
        }

        return $next($request);
    }
}
