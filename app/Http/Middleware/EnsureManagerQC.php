<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class EnsureManagerQC
{
    /**
     * Ensure the session role is ManagerQC.
     * Blocks access for MEB users.
     */
    public function handle(Request $request, Closure $next): Response
    {
        if (session('auth_role') !== 'manager_qc') {
            if ($request->wantsJson()) {
                return response()->json(['message' => 'Unauthorized.'], 403);
            }

            return redirect()->route('home');
        }

        return $next($request);
    }
}
