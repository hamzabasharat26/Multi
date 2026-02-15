#!/bin/sh
set -e

ENV_FILE="/var/www/html/.env"
ENV_PERSIST="/var/www/html/.env-data/.env"

# ── Restore persisted .env or create from .env.production ──
if [ -f "$ENV_PERSIST" ]; then
    echo ">> Restoring persisted .env..."
    cp "$ENV_PERSIST" "$ENV_FILE"
else
    echo ">> First boot: creating .env from .env.production..."
    if [ -f /var/www/html/.env.production ]; then
        cp /var/www/html/.env.production "$ENV_FILE"
    else
        touch "$ENV_FILE"
    fi

    # Generate APP_KEY if missing
    if ! grep -q '^APP_KEY=base64:' "$ENV_FILE" 2>/dev/null; then
        echo ">> Generating application key..."
        php artisan key:generate --force
    fi

    # Persist .env to volume
    mkdir -p "$(dirname "$ENV_PERSIST")"
    cp "$ENV_FILE" "$ENV_PERSIST"
    echo ">> .env persisted to volume."
fi

# ── Cache configuration (always, in case code changed) ──
echo ">> Caching configuration..."
php artisan config:cache
php artisan route:cache
php artisan view:cache

# ── Run migrations ──
echo ">> Running migrations..."
php artisan migrate --force 2>/dev/null || echo ">> Migration skipped (DB may not be ready yet)"

# ── Ensure storage link ──
php artisan storage:link 2>/dev/null || true

# ── Permissions ──
chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache 2>/dev/null || true

echo ">> Ready! Starting PHP-FPM..."
exec php-fpm
