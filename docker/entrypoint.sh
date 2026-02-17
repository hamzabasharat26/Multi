#!/bin/sh
set -e

# Clear existing cache
echo "Clearing cache..."
echo "Current DB_CONNECTION: $DB_CONNECTION"
php artisan optimize:clear
php artisan config:clear

# Cache configuration, routes, and views
echo "Caching configuration..."
php artisan config:cache
php artisan route:cache
php artisan view:cache
php artisan event:cache

echo "Starting deployment..."

# Default to php-fpm if no command is provided
if [ -z "$1" ]; then
    set -- php-fpm "$@"
fi

exec "$@"
