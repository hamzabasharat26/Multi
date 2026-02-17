<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class EnsureDeveloper
{
    /**
     * Ensure the user is logged in as a developer.
     */
    public function handle(Request $request, Closure $next): Response
    {
        if (!session('is_developer')) {
            if ($request->wantsJson()) {
                return response()->json(['message' => 'Unauthorized.'], 403);
            }

            return redirect()->route('home');
        }

        return $next($request);
    }
}
