<?php

namespace App\Providers;

use App\Auth\ApiKeyGuard;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\ServiceProvider;

class GraphQLServiceProvider extends ServiceProvider
{
    public function boot(): void
    {
        // Register the 'api-key' auth guard driver
        Auth::extend('api-key', function ($app, $name, array $config) {
            return new ApiKeyGuard($app['request']);
        });
    }
}
