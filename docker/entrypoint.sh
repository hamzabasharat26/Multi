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

# ── Step 2: Ensure APP_KEY is set (bypass key:generate, do it directly) ──
CURRENT_KEY=$(grep '^APP_KEY=' "$ENV_FILE" | head -1 | cut -d= -f2-)
if [ -z "$CURRENT_KEY" ] || [ "$CURRENT_KEY" = "" ]; then
    echo ">> APP_KEY is empty, generating directly with PHP..."
    NEW_KEY=$(php -r "echo 'base64:' . base64_encode(random_bytes(32));")
    echo ">> Generated key: ${NEW_KEY}"

    # Check if APP_KEY= line exists
    if grep -q '^APP_KEY=' "$ENV_FILE"; then
        # Replace existing empty APP_KEY line
        sed -i "s|^APP_KEY=.*|APP_KEY=${NEW_KEY}|" "$ENV_FILE"
    else
        # Append APP_KEY line
        echo "APP_KEY=${NEW_KEY}" >> "$ENV_FILE"
    fi
    echo ">> APP_KEY written to .env"
fi

# ── Step 3: Verify APP_KEY is actually in the file now ──
VERIFY_KEY=$(grep '^APP_KEY=' "$ENV_FILE" | head -1 | cut -d= -f2-)
echo ">> Verified APP_KEY: ${VERIFY_KEY}"
if [ -z "$VERIFY_KEY" ]; then
    echo ">> FATAL: APP_KEY still empty after generation!"
    exit 1
fi

# ── Step 4: Persist .env to volume ──
mkdir -p "$(dirname "$ENV_PERSIST")"
cp "$ENV_FILE" "$ENV_PERSIST"
echo ">> .env persisted to volume."

# ── Step 5: Cache configuration ──
echo ">> Caching configuration..."
php artisan config:cache
php artisan route:cache
php artisan view:cache

# ── Step 6: Run migrations ──
echo ">> Running migrations..."
php artisan migrate --force 2>/dev/null || echo ">> Migration skipped"

# ── Step 7: Storage link ──
php artisan storage:link 2>/dev/null || true

# ── Step 8: Permissions ──
chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache 2>/dev/null || true

echo ">> ✅ Ready! Starting PHP-FPM..."
exec php-fpm
