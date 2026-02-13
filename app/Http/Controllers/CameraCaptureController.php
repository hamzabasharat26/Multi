<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\Brand;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class CameraCaptureController extends Controller
{
    /**
     * Show the camera capture page for an article.
     */
    public function show(Request $request, Brand $brand, Article $article): Response
    {
        $article->load('articleType');

        return Inertia::render('articles/camera-capture', [
            'brand' => $brand,
            'article' => $article,
            'selectedSize' => $request->query('size', 'M'),
        ]);
    }
}
