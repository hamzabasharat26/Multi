#!/bin/sh
set -e

ENV_FILE="/var/www/html/.env"
ENV_PERSIST="/var/www/html/.env-data/.env"

echo ">> MagicQC entrypoint starting..."

# ── Step 1: Get .env file ready ──
if [ -f "$ENV_PERSIST" ]; then
    echo ">> Restoring persisted .env from volume..."
    cp "$ENV_PERSIST" "$ENV_FILE"
else
    echo ">> First boot: creating .env from .env.production..."
    if [ -f /var/www/html/.env.production ]; then
        cp /var/www/html/.env.production "$ENV_FILE"
    else
        echo ">> ERROR: No .env.production found!"
        exit 1
    fi
fi

# ── Step 2: Verify APP_KEY is set ──
CURRENT_KEY=$(grep '^APP_KEY=' "$ENV_FILE" | head -1 | cut -d= -f2-)
echo ">> APP_KEY: ${CURRENT_KEY}"
if [ -z "$CURRENT_KEY" ]; then
    echo ">> FATAL: APP_KEY is empty! Set it in .env.production"
    exit 1
fi

# ── Step 3: Persist .env to volume ──
mkdir -p "$(dirname "$ENV_PERSIST")"
cp "$ENV_FILE" "$ENV_PERSIST"
echo ">> .env persisted to volume."

# ── Step 4: Clear old caches and re-cache ──
echo ">> Caching configuration..."
php artisan config:clear
php artisan route:clear
php artisan view:clear
php artisan config:cache
php artisan route:cache
php artisan view:cache

# ── Step 5: Run migrations ──
echo ">> Running migrations..."
php artisan migrate --force 2>/dev/null || echo ">> Migration skipped"

# ── Step 6: Storage link ──
php artisan storage:link 2>/dev/null || true

# ── Step 7: Copy public files to shared volume ──
echo ">> Syncing public directory..."
cp -rf /var/www/html/public-build/* /var/www/html/public/ 2>/dev/null || true

# ── Step 8: Permissions ──
chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache 2>/dev/null || true

echo ">> ✅ Ready! Starting PHP-FPM..."
exec php-fpm
