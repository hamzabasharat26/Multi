<?php

namespace App\GraphQL\Mutations;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class UploadImage
{
    public function __invoke($_, array $args): array
    {
        /** @var UploadedFile $file */
        $file = $args['file'];
        $name = $args['name'];
        $folder = $args['folder'] ?? '';

        // Validate file type
        $allowedMimes = ['image/jpeg', 'image/png', 'image/jpg'];
        if (!in_array($file->getMimeType(), $allowedMimes)) {
            return [
                'success' => false,
                'message' => 'Invalid file type. Allowed: jpg, jpeg, png.',
                'path' => null,
                'url' => null,
            ];
        }

        // Validate file size (10MB max)
        if ($file->getSize() > 10 * 1024 * 1024) {
            return [
                'success' => false,
                'message' => 'File too large. Maximum size: 10MB.',
                'path' => null,
                'url' => null,
            ];
        }

        // Clean the folder path (remove leading/trailing slashes, prevent traversal)
        $folder = trim($folder, '/');
        $folder = str_replace('..', '', $folder);

        // Clean the filename — preserve extension, sanitize name
        $extension = $file->getClientOriginalExtension() ?: 'jpg';
        $safeName = Str::slug($name, '_') . '.' . $extension;

        // Target: storage/app/public/uploads/{folder}/{safeName}
        $storagePath = 'uploads' . ($folder ? '/' . $folder : '');
        $fullPath = $file->storeAs($storagePath, $safeName, 'public');

        return [
            'success' => true,
            'message' => 'Image uploaded successfully.',
            'path' => $fullPath,
            'url' => asset('storage/' . $fullPath),
        ];
    }
}
