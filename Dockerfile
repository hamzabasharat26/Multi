# Stage 1: Unified builder — PHP + Node.js together
# Wayfinder needs `php artisan` to generate route types that the frontend imports.
# Both runtimes must coexist in the build stage.
FROM php:8.2-cli-alpine AS builder

# Install Node.js and build dependencies
RUN apk add --no-cache nodejs npm git

# Install PHP extensions required for Laravel bootstrap (artisan commands)
RUN apk add --no-cache \
    libxml2-dev oniguruma-dev icu-dev \
    && docker-php-ext-install xml mbstring bcmath intl

# Install Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

WORKDIR /app
COPY . .

# Use .env.production as the .env (it already has the APP_KEY)
RUN cp .env.production .env

# Install PHP dependencies
RUN composer install --no-dev --optimize-autoloader --no-interaction

# Install Node dependencies and build frontend (Wayfinder runs natively here)
RUN npm ci
RUN npm run build


# Stage 2: Production PHP-FPM runtime
FROM php:8.2-fpm-alpine

# Install runtime PHP extensions
RUN apk add --no-cache \
    libpng-dev libjpeg-turbo-dev freetype-dev \
    libxml2-dev libzip-dev icu-dev oniguruma-dev \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install -j$(nproc) \
    pdo_mysql mbstring xml zip gd bcmath intl opcache

# OPcache for production
RUN echo "opcache.enable=1" >> /usr/local/etc/php/conf.d/opcache.ini \
    && echo "opcache.memory_consumption=128" >> /usr/local/etc/php/conf.d/opcache.ini \
    && echo "opcache.max_accelerated_files=10000" >> /usr/local/etc/php/conf.d/opcache.ini \
    && echo "opcache.validate_timestamps=0" >> /usr/local/etc/php/conf.d/opcache.ini

# PHP upload limits
RUN echo "upload_max_filesize = 64M" >> /usr/local/etc/php/conf.d/uploads.ini \
    && echo "post_max_size = 64M" >> /usr/local/etc/php/conf.d/uploads.ini \
    && echo "memory_limit = 256M" >> /usr/local/etc/php/conf.d/uploads.ini

WORKDIR /var/www/html

# Copy application code
COPY --chown=www-data:www-data . .

# Copy built artifacts from builder stage
COPY --from=builder --chown=www-data:www-data /app/vendor ./vendor
COPY --from=builder --chown=www-data:www-data /app/public/build ./public/build

# CRITICAL: Remove any stale cached config from source — entrypoint will re-cache
RUN rm -rf bootstrap/cache/*.php

# Set permissions
RUN chmod -R 775 storage bootstrap/cache \
    && chown -R www-data:www-data storage bootstrap/cache

# Copy entrypoint script
COPY docker/entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh

EXPOSE 9000

ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]
CMD ["php-fpm"]
