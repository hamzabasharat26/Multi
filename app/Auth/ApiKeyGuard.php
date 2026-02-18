<?php

namespace App\Auth;

use App\Models\ApiKey;
use Illuminate\Contracts\Auth\Guard;
use Illuminate\Http\Request;

/**
 * Custom auth guard that validates X-API-Key header.
 * Used by Lighthouse's @guard(with: "api-key") directive.
 *
 * This guard does NOT use Laravel's Authenticatable interface
 * because ApiKey is not a "user" — it's a key-based auth scheme.
 */
class ApiKeyGuard implements Guard
{
    protected Request $request;
    protected ?ApiKey $apiKey = null;
    protected bool $checked = false;

    public function __construct(Request $request)
    {
        $this->request = $request;
    }

    public function check(): bool
    {
        return $this->resolveKey() !== null;
    }

    public function guest(): bool
    {
        return !$this->check();
    }

    public function user()
    {
        return $this->resolveKey();
    }

    public function id()
    {
        return $this->resolveKey()?->id;
    }

    public function validate(array $credentials = []): bool
    {
        return $this->check();
    }

    public function hasUser(): bool
    {
        return $this->check();
    }

    public function setUser($user)
    {
        $this->apiKey = $user;
        return $this;
    }

    /**
     * Resolve and cache the API key from the request header.
     */
    protected function resolveKey(): ?ApiKey
    {
        if ($this->checked) {
            return $this->apiKey;
        }

        $this->checked = true;
        $key = $this->request->header('X-API-Key');

        if (!$key) {
            return null;
        }

        $this->apiKey = ApiKey::validate($key);
        return $this->apiKey;
    }
}
