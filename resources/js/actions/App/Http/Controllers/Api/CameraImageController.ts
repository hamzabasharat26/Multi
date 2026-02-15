import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\CameraImageController::ping
* @see app/Http/Controllers/Api/CameraImageController.php:177
* @route '/api/camera/ping'
*/
export const ping = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ping.url(options),
    method: 'get',
})

ping.definition = {
    methods: ["get","head"],
    url: '/api/camera/ping',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\CameraImageController::ping
* @see app/Http/Controllers/Api/CameraImageController.php:177
* @route '/api/camera/ping'
*/
ping.url = (options?: RouteQueryOptions) => {
    return ping.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\CameraImageController::ping
* @see app/Http/Controllers/Api/CameraImageController.php:177
* @route '/api/camera/ping'
*/
ping.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ping.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\CameraImageController::ping
* @see app/Http/Controllers/Api/CameraImageController.php:177
* @route '/api/camera/ping'
*/
ping.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ping.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\CameraImageController::ping
* @see app/Http/Controllers/Api/CameraImageController.php:177
* @route '/api/camera/ping'
*/
const pingForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ping.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\CameraImageController::ping
* @see app/Http/Controllers/Api/CameraImageController.php:177
* @route '/api/camera/ping'
*/
pingForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ping.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\CameraImageController::ping
* @see app/Http/Controllers/Api/CameraImageController.php:177
* @route '/api/camera/ping'
*/
pingForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ping.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ping.form = pingForm

/**
* @see \App\Http\Controllers\Api\CameraImageController::upload
* @see app/Http/Controllers/Api/CameraImageController.php:40
* @route '/api/camera/upload'
*/
export const upload = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: upload.url(options),
    method: 'post',
})

upload.definition = {
    methods: ["post"],
    url: '/api/camera/upload',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\CameraImageController::upload
* @see app/Http/Controllers/Api/CameraImageController.php:40
* @route '/api/camera/upload'
*/
upload.url = (options?: RouteQueryOptions) => {
    return upload.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\CameraImageController::upload
* @see app/Http/Controllers/Api/CameraImageController.php:40
* @route '/api/camera/upload'
*/
upload.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: upload.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\CameraImageController::upload
* @see app/Http/Controllers/Api/CameraImageController.php:40
* @route '/api/camera/upload'
*/
const uploadForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: upload.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\CameraImageController::upload
* @see app/Http/Controllers/Api/CameraImageController.php:40
* @route '/api/camera/upload'
*/
uploadForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: upload.url(options),
    method: 'post',
})

upload.form = uploadForm

/**
* @see \App\Http\Controllers\Api\CameraImageController::getArticles
* @see app/Http/Controllers/Api/CameraImageController.php:105
* @route '/api/camera/articles'
*/
export const getArticles = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getArticles.url(options),
    method: 'get',
})

getArticles.definition = {
    methods: ["get","head"],
    url: '/api/camera/articles',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\CameraImageController::getArticles
* @see app/Http/Controllers/Api/CameraImageController.php:105
* @route '/api/camera/articles'
*/
getArticles.url = (options?: RouteQueryOptions) => {
    return getArticles.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\CameraImageController::getArticles
* @see app/Http/Controllers/Api/CameraImageController.php:105
* @route '/api/camera/articles'
*/
getArticles.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getArticles.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\CameraImageController::getArticles
* @see app/Http/Controllers/Api/CameraImageController.php:105
* @route '/api/camera/articles'
*/
getArticles.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getArticles.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\CameraImageController::getArticles
* @see app/Http/Controllers/Api/CameraImageController.php:105
* @route '/api/camera/articles'
*/
const getArticlesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getArticles.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\CameraImageController::getArticles
* @see app/Http/Controllers/Api/CameraImageController.php:105
* @route '/api/camera/articles'
*/
getArticlesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getArticles.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\CameraImageController::getArticles
* @see app/Http/Controllers/Api/CameraImageController.php:105
* @route '/api/camera/articles'
*/
getArticlesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getArticles.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

getArticles.form = getArticlesForm

/**
* @see \App\Http\Controllers\Api\CameraImageController::getArticleImages
* @see app/Http/Controllers/Api/CameraImageController.php:138
* @route '/api/camera/articles/{articleId}/images'
*/
export const getArticleImages = (args: { articleId: string | number } | [articleId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getArticleImages.url(args, options),
    method: 'get',
})

getArticleImages.definition = {
    methods: ["get","head"],
    url: '/api/camera/articles/{articleId}/images',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\CameraImageController::getArticleImages
* @see app/Http/Controllers/Api/CameraImageController.php:138
* @route '/api/camera/articles/{articleId}/images'
*/
getArticleImages.url = (args: { articleId: string | number } | [articleId: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { articleId: args }
    }

    if (Array.isArray(args)) {
        args = {
            articleId: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        articleId: args.articleId,
    }

    return getArticleImages.definition.url
            .replace('{articleId}', parsedArgs.articleId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\CameraImageController::getArticleImages
* @see app/Http/Controllers/Api/CameraImageController.php:138
* @route '/api/camera/articles/{articleId}/images'
*/
getArticleImages.get = (args: { articleId: string | number } | [articleId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getArticleImages.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\CameraImageController::getArticleImages
* @see app/Http/Controllers/Api/CameraImageController.php:138
* @route '/api/camera/articles/{articleId}/images'
*/
getArticleImages.head = (args: { articleId: string | number } | [articleId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getArticleImages.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\CameraImageController::getArticleImages
* @see app/Http/Controllers/Api/CameraImageController.php:138
* @route '/api/camera/articles/{articleId}/images'
*/
const getArticleImagesForm = (args: { articleId: string | number } | [articleId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getArticleImages.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\CameraImageController::getArticleImages
* @see app/Http/Controllers/Api/CameraImageController.php:138
* @route '/api/camera/articles/{articleId}/images'
*/
getArticleImagesForm.get = (args: { articleId: string | number } | [articleId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getArticleImages.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\CameraImageController::getArticleImages
* @see app/Http/Controllers/Api/CameraImageController.php:138
* @route '/api/camera/articles/{articleId}/images'
*/
getArticleImagesForm.head = (args: { articleId: string | number } | [articleId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getArticleImages.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

getArticleImages.form = getArticleImagesForm

/**
* @see \App\Http\Controllers\Api\CameraImageController::deleteImage
* @see app/Http/Controllers/Api/CameraImageController.php:192
* @route '/api/camera/images/{imageId}'
*/
export const deleteImage = (args: { imageId: string | number } | [imageId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteImage.url(args, options),
    method: 'delete',
})

deleteImage.definition = {
    methods: ["delete"],
    url: '/api/camera/images/{imageId}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Api\CameraImageController::deleteImage
* @see app/Http/Controllers/Api/CameraImageController.php:192
* @route '/api/camera/images/{imageId}'
*/
deleteImage.url = (args: { imageId: string | number } | [imageId: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { imageId: args }
    }

    if (Array.isArray(args)) {
        args = {
            imageId: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        imageId: args.imageId,
    }

    return deleteImage.definition.url
            .replace('{imageId}', parsedArgs.imageId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\CameraImageController::deleteImage
* @see app/Http/Controllers/Api/CameraImageController.php:192
* @route '/api/camera/images/{imageId}'
*/
deleteImage.delete = (args: { imageId: string | number } | [imageId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteImage.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Api\CameraImageController::deleteImage
* @see app/Http/Controllers/Api/CameraImageController.php:192
* @route '/api/camera/images/{imageId}'
*/
const deleteImageForm = (args: { imageId: string | number } | [imageId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: deleteImage.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\CameraImageController::deleteImage
* @see app/Http/Controllers/Api/CameraImageController.php:192
* @route '/api/camera/images/{imageId}'
*/
deleteImageForm.delete = (args: { imageId: string | number } | [imageId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: deleteImage.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

deleteImage.form = deleteImageForm

/**
* @see \App\Http\Controllers\Api\CameraImageController::getAnnotation
* @see app/Http/Controllers/Api/CameraImageController.php:231
* @route '/api/annotations/{articleStyle}/{size}'
*/
export const getAnnotation = (args: { articleStyle: string | number, size: string | number } | [articleStyle: string | number, size: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getAnnotation.url(args, options),
    method: 'get',
})

getAnnotation.definition = {
    methods: ["get","head"],
    url: '/api/annotations/{articleStyle}/{size}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\CameraImageController::getAnnotation
* @see app/Http/Controllers/Api/CameraImageController.php:231
* @route '/api/annotations/{articleStyle}/{size}'
*/
getAnnotation.url = (args: { articleStyle: string | number, size: string | number } | [articleStyle: string | number, size: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            articleStyle: args[0],
            size: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        articleStyle: args.articleStyle,
        size: args.size,
    }

    return getAnnotation.definition.url
            .replace('{articleStyle}', parsedArgs.articleStyle.toString())
            .replace('{size}', parsedArgs.size.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\CameraImageController::getAnnotation
* @see app/Http/Controllers/Api/CameraImageController.php:231
* @route '/api/annotations/{articleStyle}/{size}'
*/
getAnnotation.get = (args: { articleStyle: string | number, size: string | number } | [articleStyle: string | number, size: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getAnnotation.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\CameraImageController::getAnnotation
* @see app/Http/Controllers/Api/CameraImageController.php:231
* @route '/api/annotations/{articleStyle}/{size}'
*/
getAnnotation.head = (args: { articleStyle: string | number, size: string | number } | [articleStyle: string | number, size: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getAnnotation.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\CameraImageController::getAnnotation
* @see app/Http/Controllers/Api/CameraImageController.php:231
* @route '/api/annotations/{articleStyle}/{size}'
*/
const getAnnotationForm = (args: { articleStyle: string | number, size: string | number } | [articleStyle: string | number, size: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getAnnotation.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\CameraImageController::getAnnotation
* @see app/Http/Controllers/Api/CameraImageController.php:231
* @route '/api/annotations/{articleStyle}/{size}'
*/
getAnnotationForm.get = (args: { articleStyle: string | number, size: string | number } | [articleStyle: string | number, size: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getAnnotation.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\CameraImageController::getAnnotation
* @see app/Http/Controllers/Api/CameraImageController.php:231
* @route '/api/annotations/{articleStyle}/{size}'
*/
getAnnotationForm.head = (args: { articleStyle: string | number, size: string | number } | [articleStyle: string | number, size: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getAnnotation.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

getAnnotation.form = getAnnotationForm

/**
* @see \App\Http\Controllers\Api\CameraImageController::syncAnnotation
* @see app/Http/Controllers/Api/CameraImageController.php:274
* @route '/api/annotations/sync'
*/
export const syncAnnotation = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: syncAnnotation.url(options),
    method: 'post',
})

syncAnnotation.definition = {
    methods: ["post"],
    url: '/api/annotations/sync',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\CameraImageController::syncAnnotation
* @see app/Http/Controllers/Api/CameraImageController.php:274
* @route '/api/annotations/sync'
*/
syncAnnotation.url = (options?: RouteQueryOptions) => {
    return syncAnnotation.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\CameraImageController::syncAnnotation
* @see app/Http/Controllers/Api/CameraImageController.php:274
* @route '/api/annotations/sync'
*/
syncAnnotation.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: syncAnnotation.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\CameraImageController::syncAnnotation
* @see app/Http/Controllers/Api/CameraImageController.php:274
* @route '/api/annotations/sync'
*/
const syncAnnotationForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: syncAnnotation.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\CameraImageController::syncAnnotation
* @see app/Http/Controllers/Api/CameraImageController.php:274
* @route '/api/annotations/sync'
*/
syncAnnotationForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: syncAnnotation.url(options),
    method: 'post',
})

syncAnnotation.form = syncAnnotationForm

/**
* @see \App\Http\Controllers\Api\CameraImageController::listAnnotations
* @see app/Http/Controllers/Api/CameraImageController.php:342
* @route '/api/annotations'
*/
export const listAnnotations = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: listAnnotations.url(options),
    method: 'get',
})

listAnnotations.definition = {
    methods: ["get","head"],
    url: '/api/annotations',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\CameraImageController::listAnnotations
* @see app/Http/Controllers/Api/CameraImageController.php:342
* @route '/api/annotations'
*/
listAnnotations.url = (options?: RouteQueryOptions) => {
    return listAnnotations.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\CameraImageController::listAnnotations
* @see app/Http/Controllers/Api/CameraImageController.php:342
* @route '/api/annotations'
*/
listAnnotations.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: listAnnotations.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\CameraImageController::listAnnotations
* @see app/Http/Controllers/Api/CameraImageController.php:342
* @route '/api/annotations'
*/
listAnnotations.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: listAnnotations.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\CameraImageController::listAnnotations
* @see app/Http/Controllers/Api/CameraImageController.php:342
* @route '/api/annotations'
*/
const listAnnotationsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: listAnnotations.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\CameraImageController::listAnnotations
* @see app/Http/Controllers/Api/CameraImageController.php:342
* @route '/api/annotations'
*/
listAnnotationsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: listAnnotations.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\CameraImageController::listAnnotations
* @see app/Http/Controllers/Api/CameraImageController.php:342
* @route '/api/annotations'
*/
listAnnotationsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: listAnnotations.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

listAnnotations.form = listAnnotationsForm

const CameraImageController = { ping, upload, getArticles, getArticleImages, deleteImage, getAnnotation, syncAnnotation, listAnnotations }

export default CameraImageController