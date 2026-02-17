#!/bin/bash
set -e

# Copy built assets from image backup to the bind-mounted volume
# This ensures both app and nginx containers see the Vite build output
if [ -d "/tmp/build-output" ]; then
    echo "Copying Vite build assets to public/build..."
    cp -r /tmp/build-output/* /var/www/public/build/ 2>/dev/null || true
fi

if [ -d "/tmp/vendor-output" ]; then
    echo "Copying vendor dependencies..."
    cp -rn /tmp/vendor-output/* /var/www/vendor/ 2>/dev/null || true
fi

# Execute the original command
exec "$@"
