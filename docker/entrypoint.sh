#!/bin/sh

# Exit on error
set -e

# Wait for database availability (simple check)
# In production, a proper wait-for-it script is better, but this often suffices
echo "Waiting for database..."
sleep 5

# Run migrations
echo "Running migrations..."
php artisan migrate --force

# Clear and cache config
echo "Caching configuration..."
php artisan config:cache
php artisan route:cache
php artisan view:cache

# Start PHP-FPM
echo "Starting PHP-FPM..."
exec php-fpm
