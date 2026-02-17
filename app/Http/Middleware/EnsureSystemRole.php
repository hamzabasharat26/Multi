<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class EnsureSystemRole
{
    /**
     * Ensure the user has any system role (ManagerQC or MEB).
     */
    public function handle(Request $request, Closure $next): Response
    {
        $role = session('auth_role');

        if (!in_array($role, ['manager_qc', 'meb'])) {
            if ($request->wantsJson()) {
                return response()->json(['message' => 'Unauthorized.'], 403);
            }

            return redirect()->route('home');
        }

        return $next($request);
    }
}
