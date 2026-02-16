import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\AnnotationUploadController::apiGetAnnotations
* @see app/Http/Controllers/AnnotationUploadController.php:288
* @route '//localhost/api/uploaded-annotations'
*/
export const apiGetAnnotations = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: apiGetAnnotations.url(options),
    method: 'get',
})

apiGetAnnotations.definition = {
    methods: ["get","head"],
    url: '//localhost/api/uploaded-annotations',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AnnotationUploadController::apiGetAnnotations
* @see app/Http/Controllers/AnnotationUploadController.php:288
* @route '//localhost/api/uploaded-annotations'
*/
apiGetAnnotations.url = (options?: RouteQueryOptions) => {
    return apiGetAnnotations.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AnnotationUploadController::apiGetAnnotations
* @see app/Http/Controllers/AnnotationUploadController.php:288
* @route '//localhost/api/uploaded-annotations'
*/
apiGetAnnotations.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: apiGetAnnotations.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AnnotationUploadController::apiGetAnnotations
* @see app/Http/Controllers/AnnotationUploadController.php:288
* @route '//localhost/api/uploaded-annotations'
*/
apiGetAnnotations.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: apiGetAnnotations.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\AnnotationUploadController::apiGetAnnotations
* @see app/Http/Controllers/AnnotationUploadController.php:288
* @route '//localhost/api/uploaded-annotations'
*/
const apiGetAnnotationsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: apiGetAnnotations.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AnnotationUploadController::apiGetAnnotations
* @see app/Http/Controllers/AnnotationUploadController.php:288
* @route '//localhost/api/uploaded-annotations'
*/
apiGetAnnotationsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: apiGetAnnotations.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AnnotationUploadController::apiGetAnnotations
* @see app/Http/Controllers/AnnotationUploadController.php:288
* @route '//localhost/api/uploaded-annotations'
*/
apiGetAnnotationsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: apiGetAnnotations.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

apiGetAnnotations.form = apiGetAnnotationsForm

/**
* @see \App\Http\Controllers\AnnotationUploadController::apiGetAnnotation
* @see app/Http/Controllers/AnnotationUploadController.php:299
* @route '//localhost/api/uploaded-annotations/{articleStyle}/{size}/{side}'
*/
export const apiGetAnnotation = (args: { articleStyle: string | number, size: string | number, side: string | number } | [articleStyle: string | number, size: string | number, side: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: apiGetAnnotation.url(args, options),
    method: 'get',
})

apiGetAnnotation.definition = {
    methods: ["get","head"],
    url: '//localhost/api/uploaded-annotations/{articleStyle}/{size}/{side}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AnnotationUploadController::apiGetAnnotation
* @see app/Http/Controllers/AnnotationUploadController.php:299
* @route '//localhost/api/uploaded-annotations/{articleStyle}/{size}/{side}'
*/
apiGetAnnotation.url = (args: { articleStyle: string | number, size: string | number, side: string | number } | [articleStyle: string | number, size: string | number, side: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            articleStyle: args[0],
            size: args[1],
            side: args[2],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        articleStyle: args.articleStyle,
        size: args.size,
        side: args.side,
    }

    return apiGetAnnotation.definition.url
            .replace('{articleStyle}', parsedArgs.articleStyle.toString())
            .replace('{size}', parsedArgs.size.toString())
            .replace('{side}', parsedArgs.side.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AnnotationUploadController::apiGetAnnotation
* @see app/Http/Controllers/AnnotationUploadController.php:299
* @route '//localhost/api/uploaded-annotations/{articleStyle}/{size}/{side}'
*/
apiGetAnnotation.get = (args: { articleStyle: string | number, size: string | number, side: string | number } | [articleStyle: string | number, size: string | number, side: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: apiGetAnnotation.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AnnotationUploadController::apiGetAnnotation
* @see app/Http/Controllers/AnnotationUploadController.php:299
* @route '//localhost/api/uploaded-annotations/{articleStyle}/{size}/{side}'
*/
apiGetAnnotation.head = (args: { articleStyle: string | number, size: string | number, side: string | number } | [articleStyle: string | number, size: string | number, side: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: apiGetAnnotation.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\AnnotationUploadController::apiGetAnnotation
* @see app/Http/Controllers/AnnotationUploadController.php:299
* @route '//localhost/api/uploaded-annotations/{articleStyle}/{size}/{side}'
*/
const apiGetAnnotationForm = (args: { articleStyle: string | number, size: string | number, side: string | number } | [articleStyle: string | number, size: string | number, side: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: apiGetAnnotation.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AnnotationUploadController::apiGetAnnotation
* @see app/Http/Controllers/AnnotationUploadController.php:299
* @route '//localhost/api/uploaded-annotations/{articleStyle}/{size}/{side}'
*/
apiGetAnnotationForm.get = (args: { articleStyle: string | number, size: string | number, side: string | number } | [articleStyle: string | number, size: string | number, side: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: apiGetAnnotation.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AnnotationUploadController::apiGetAnnotation
* @see app/Http/Controllers/AnnotationUploadController.php:299
* @route '//localhost/api/uploaded-annotations/{articleStyle}/{size}/{side}'
*/
apiGetAnnotationForm.head = (args: { articleStyle: string | number, size: string | number, side: string | number } | [articleStyle: string | number, size: string | number, side: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: apiGetAnnotation.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

apiGetAnnotation.form = apiGetAnnotationForm

/**
* @see \App\Http\Controllers\AnnotationUploadController::apiGetImage
* @see app/Http/Controllers/AnnotationUploadController.php:332
* @route '//localhost/api/uploaded-annotations/{articleStyle}/{size}/{side}/image'
*/
export const apiGetImage = (args: { articleStyle: string | number, size: string | number, side: string | number } | [articleStyle: string | number, size: string | number, side: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: apiGetImage.url(args, options),
    method: 'get',
})

apiGetImage.definition = {
    methods: ["get","head"],
    url: '//localhost/api/uploaded-annotations/{articleStyle}/{size}/{side}/image',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AnnotationUploadController::apiGetImage
* @see app/Http/Controllers/AnnotationUploadController.php:332
* @route '//localhost/api/uploaded-annotations/{articleStyle}/{size}/{side}/image'
*/
apiGetImage.url = (args: { articleStyle: string | number, size: string | number, side: string | number } | [articleStyle: string | number, size: string | number, side: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            articleStyle: args[0],
            size: args[1],
            side: args[2],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        articleStyle: args.articleStyle,
        size: args.size,
        side: args.side,
    }

    return apiGetImage.definition.url
            .replace('{articleStyle}', parsedArgs.articleStyle.toString())
            .replace('{size}', parsedArgs.size.toString())
            .replace('{side}', parsedArgs.side.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AnnotationUploadController::apiGetImage
* @see app/Http/Controllers/AnnotationUploadController.php:332
* @route '//localhost/api/uploaded-annotations/{articleStyle}/{size}/{side}/image'
*/
apiGetImage.get = (args: { articleStyle: string | number, size: string | number, side: string | number } | [articleStyle: string | number, size: string | number, side: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: apiGetImage.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AnnotationUploadController::apiGetImage
* @see app/Http/Controllers/AnnotationUploadController.php:332
* @route '//localhost/api/uploaded-annotations/{articleStyle}/{size}/{side}/image'
*/
apiGetImage.head = (args: { articleStyle: string | number, size: string | number, side: string | number } | [articleStyle: string | number, size: string | number, side: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: apiGetImage.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\AnnotationUploadController::apiGetImage
* @see app/Http/Controllers/AnnotationUploadController.php:332
* @route '//localhost/api/uploaded-annotations/{articleStyle}/{size}/{side}/image'
*/
const apiGetImageForm = (args: { articleStyle: string | number, size: string | number, side: string | number } | [articleStyle: string | number, size: string | number, side: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: apiGetImage.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AnnotationUploadController::apiGetImage
* @see app/Http/Controllers/AnnotationUploadController.php:332
* @route '//localhost/api/uploaded-annotations/{articleStyle}/{size}/{side}/image'
*/
apiGetImageForm.get = (args: { articleStyle: string | number, size: string | number, side: string | number } | [articleStyle: string | number, size: string | number, side: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: apiGetImage.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AnnotationUploadController::apiGetImage
* @see app/Http/Controllers/AnnotationUploadController.php:332
* @route '//localhost/api/uploaded-annotations/{articleStyle}/{size}/{side}/image'
*/
apiGetImageForm.head = (args: { articleStyle: string | number, size: string | number, side: string | number } | [articleStyle: string | number, size: string | number, side: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: apiGetImage.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

apiGetImage.form = apiGetImageForm

/**
* @see \App\Http\Controllers\AnnotationUploadController::apiGetImageBase64
* @see app/Http/Controllers/AnnotationUploadController.php:361
* @route '//localhost/api/uploaded-annotations/{articleStyle}/{size}/{side}/image-base64'
*/
export const apiGetImageBase64 = (args: { articleStyle: string | number, size: string | number, side: string | number } | [articleStyle: string | number, size: string | number, side: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: apiGetImageBase64.url(args, options),
    method: 'get',
})

apiGetImageBase64.definition = {
    methods: ["get","head"],
    url: '//localhost/api/uploaded-annotations/{articleStyle}/{size}/{side}/image-base64',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AnnotationUploadController::apiGetImageBase64
* @see app/Http/Controllers/AnnotationUploadController.php:361
* @route '//localhost/api/uploaded-annotations/{articleStyle}/{size}/{side}/image-base64'
*/
apiGetImageBase64.url = (args: { articleStyle: string | number, size: string | number, side: string | number } | [articleStyle: string | number, size: string | number, side: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            articleStyle: args[0],
            size: args[1],
            side: args[2],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        articleStyle: args.articleStyle,
        size: args.size,
        side: args.side,
    }

    return apiGetImageBase64.definition.url
            .replace('{articleStyle}', parsedArgs.articleStyle.toString())
            .replace('{size}', parsedArgs.size.toString())
            .replace('{side}', parsedArgs.side.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AnnotationUploadController::apiGetImageBase64
* @see app/Http/Controllers/AnnotationUploadController.php:361
* @route '//localhost/api/uploaded-annotations/{articleStyle}/{size}/{side}/image-base64'
*/
apiGetImageBase64.get = (args: { articleStyle: string | number, size: string | number, side: string | number } | [articleStyle: string | number, size: string | number, side: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: apiGetImageBase64.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AnnotationUploadController::apiGetImageBase64
* @see app/Http/Controllers/AnnotationUploadController.php:361
* @route '//localhost/api/uploaded-annotations/{articleStyle}/{size}/{side}/image-base64'
*/
apiGetImageBase64.head = (args: { articleStyle: string | number, size: string | number, side: string | number } | [articleStyle: string | number, size: string | number, side: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: apiGetImageBase64.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\AnnotationUploadController::apiGetImageBase64
* @see app/Http/Controllers/AnnotationUploadController.php:361
* @route '//localhost/api/uploaded-annotations/{articleStyle}/{size}/{side}/image-base64'
*/
const apiGetImageBase64Form = (args: { articleStyle: string | number, size: string | number, side: string | number } | [articleStyle: string | number, size: string | number, side: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: apiGetImageBase64.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AnnotationUploadController::apiGetImageBase64
* @see app/Http/Controllers/AnnotationUploadController.php:361
* @route '//localhost/api/uploaded-annotations/{articleStyle}/{size}/{side}/image-base64'
*/
apiGetImageBase64Form.get = (args: { articleStyle: string | number, size: string | number, side: string | number } | [articleStyle: string | number, size: string | number, side: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: apiGetImageBase64.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AnnotationUploadController::apiGetImageBase64
* @see app/Http/Controllers/AnnotationUploadController.php:361
* @route '//localhost/api/uploaded-annotations/{articleStyle}/{size}/{side}/image-base64'
*/
apiGetImageBase64Form.head = (args: { articleStyle: string | number, size: string | number, side: string | number } | [articleStyle: string | number, size: string | number, side: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: apiGetImageBase64.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

apiGetImageBase64.form = apiGetImageBase64Form

/**
* @see \App\Http\Controllers\AnnotationUploadController::apiGetImageBase64Query
* @see app/Http/Controllers/AnnotationUploadController.php:400
* @route '//localhost/api/uploaded-annotations/fetch-image-base64'
*/
export const apiGetImageBase64Query = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: apiGetImageBase64Query.url(options),
    method: 'get',
})

apiGetImageBase64Query.definition = {
    methods: ["get","head"],
    url: '//localhost/api/uploaded-annotations/fetch-image-base64',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AnnotationUploadController::apiGetImageBase64Query
* @see app/Http/Controllers/AnnotationUploadController.php:400
* @route '//localhost/api/uploaded-annotations/fetch-image-base64'
*/
apiGetImageBase64Query.url = (options?: RouteQueryOptions) => {
    return apiGetImageBase64Query.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AnnotationUploadController::apiGetImageBase64Query
* @see app/Http/Controllers/AnnotationUploadController.php:400
* @route '//localhost/api/uploaded-annotations/fetch-image-base64'
*/
apiGetImageBase64Query.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: apiGetImageBase64Query.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AnnotationUploadController::apiGetImageBase64Query
* @see app/Http/Controllers/AnnotationUploadController.php:400
* @route '//localhost/api/uploaded-annotations/fetch-image-base64'
*/
apiGetImageBase64Query.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: apiGetImageBase64Query.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\AnnotationUploadController::apiGetImageBase64Query
* @see app/Http/Controllers/AnnotationUploadController.php:400
* @route '//localhost/api/uploaded-annotations/fetch-image-base64'
*/
const apiGetImageBase64QueryForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: apiGetImageBase64Query.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AnnotationUploadController::apiGetImageBase64Query
* @see app/Http/Controllers/AnnotationUploadController.php:400
* @route '//localhost/api/uploaded-annotations/fetch-image-base64'
*/
apiGetImageBase64QueryForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: apiGetImageBase64Query.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AnnotationUploadController::apiGetImageBase64Query
* @see app/Http/Controllers/AnnotationUploadController.php:400
* @route '//localhost/api/uploaded-annotations/fetch-image-base64'
*/
apiGetImageBase64QueryForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: apiGetImageBase64Query.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

apiGetImageBase64Query.form = apiGetImageBase64QueryForm

/**
* @see \App\Http\Controllers\AnnotationUploadController::index
* @see app/Http/Controllers/AnnotationUploadController.php:21
* @route '//localhost/annotation-upload'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '//localhost/annotation-upload',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AnnotationUploadController::index
* @see app/Http/Controllers/AnnotationUploadController.php:21
* @route '//localhost/annotation-upload'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AnnotationUploadController::index
* @see app/Http/Controllers/AnnotationUploadController.php:21
* @route '//localhost/annotation-upload'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AnnotationUploadController::index
* @see app/Http/Controllers/AnnotationUploadController.php:21
* @route '//localhost/annotation-upload'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\AnnotationUploadController::index
* @see app/Http/Controllers/AnnotationUploadController.php:21
* @route '//localhost/annotation-upload'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AnnotationUploadController::index
* @see app/Http/Controllers/AnnotationUploadController.php:21
* @route '//localhost/annotation-upload'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AnnotationUploadController::index
* @see app/Http/Controllers/AnnotationUploadController.php:21
* @route '//localhost/annotation-upload'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \App\Http\Controllers\AnnotationUploadController::verifyPassword
* @see app/Http/Controllers/AnnotationUploadController.php:44
* @route '//localhost/annotation-upload/verify-password'
*/
export const verifyPassword = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: verifyPassword.url(options),
    method: 'post',
})

verifyPassword.definition = {
    methods: ["post"],
    url: '//localhost/annotation-upload/verify-password',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AnnotationUploadController::verifyPassword
* @see app/Http/Controllers/AnnotationUploadController.php:44
* @route '//localhost/annotation-upload/verify-password'
*/
verifyPassword.url = (options?: RouteQueryOptions) => {
    return verifyPassword.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AnnotationUploadController::verifyPassword
* @see app/Http/Controllers/AnnotationUploadController.php:44
* @route '//localhost/annotation-upload/verify-password'
*/
verifyPassword.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: verifyPassword.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AnnotationUploadController::verifyPassword
* @see app/Http/Controllers/AnnotationUploadController.php:44
* @route '//localhost/annotation-upload/verify-password'
*/
const verifyPasswordForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: verifyPassword.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AnnotationUploadController::verifyPassword
* @see app/Http/Controllers/AnnotationUploadController.php:44
* @route '//localhost/annotation-upload/verify-password'
*/
verifyPasswordForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: verifyPassword.url(options),
    method: 'post',
})

verifyPassword.form = verifyPasswordForm

/**
* @see \App\Http\Controllers\AnnotationUploadController::getSizes
* @see app/Http/Controllers/AnnotationUploadController.php:69
* @route '//localhost/annotation-upload/articles/{articleId}/sizes'
*/
export const getSizes = (args: { articleId: string | number } | [articleId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getSizes.url(args, options),
    method: 'get',
})

getSizes.definition = {
    methods: ["get","head"],
    url: '//localhost/annotation-upload/articles/{articleId}/sizes',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AnnotationUploadController::getSizes
* @see app/Http/Controllers/AnnotationUploadController.php:69
* @route '//localhost/annotation-upload/articles/{articleId}/sizes'
*/
getSizes.url = (args: { articleId: string | number } | [articleId: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return getSizes.definition.url
            .replace('{articleId}', parsedArgs.articleId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AnnotationUploadController::getSizes
* @see app/Http/Controllers/AnnotationUploadController.php:69
* @route '//localhost/annotation-upload/articles/{articleId}/sizes'
*/
getSizes.get = (args: { articleId: string | number } | [articleId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getSizes.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AnnotationUploadController::getSizes
* @see app/Http/Controllers/AnnotationUploadController.php:69
* @route '//localhost/annotation-upload/articles/{articleId}/sizes'
*/
getSizes.head = (args: { articleId: string | number } | [articleId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getSizes.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\AnnotationUploadController::getSizes
* @see app/Http/Controllers/AnnotationUploadController.php:69
* @route '//localhost/annotation-upload/articles/{articleId}/sizes'
*/
const getSizesForm = (args: { articleId: string | number } | [articleId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getSizes.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AnnotationUploadController::getSizes
* @see app/Http/Controllers/AnnotationUploadController.php:69
* @route '//localhost/annotation-upload/articles/{articleId}/sizes'
*/
getSizesForm.get = (args: { articleId: string | number } | [articleId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getSizes.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AnnotationUploadController::getSizes
* @see app/Http/Controllers/AnnotationUploadController.php:69
* @route '//localhost/annotation-upload/articles/{articleId}/sizes'
*/
getSizesForm.head = (args: { articleId: string | number } | [articleId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getSizes.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

getSizes.form = getSizesForm

/**
* @see \App\Http\Controllers\AnnotationUploadController::upload
* @see app/Http/Controllers/AnnotationUploadController.php:93
* @route '//localhost/annotation-upload/upload'
*/
export const upload = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: upload.url(options),
    method: 'post',
})

upload.definition = {
    methods: ["post"],
    url: '//localhost/annotation-upload/upload',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AnnotationUploadController::upload
* @see app/Http/Controllers/AnnotationUploadController.php:93
* @route '//localhost/annotation-upload/upload'
*/
upload.url = (options?: RouteQueryOptions) => {
    return upload.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AnnotationUploadController::upload
* @see app/Http/Controllers/AnnotationUploadController.php:93
* @route '//localhost/annotation-upload/upload'
*/
upload.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: upload.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AnnotationUploadController::upload
* @see app/Http/Controllers/AnnotationUploadController.php:93
* @route '//localhost/annotation-upload/upload'
*/
const uploadForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: upload.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AnnotationUploadController::upload
* @see app/Http/Controllers/AnnotationUploadController.php:93
* @route '//localhost/annotation-upload/upload'
*/
uploadForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: upload.url(options),
    method: 'post',
})

upload.form = uploadForm

/**
* @see \App\Http\Controllers\AnnotationUploadController::getAnnotations
* @see app/Http/Controllers/AnnotationUploadController.php:232
* @route '//localhost/annotation-upload/annotations'
*/
export const getAnnotations = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getAnnotations.url(options),
    method: 'get',
})

getAnnotations.definition = {
    methods: ["get","head"],
    url: '//localhost/annotation-upload/annotations',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AnnotationUploadController::getAnnotations
* @see app/Http/Controllers/AnnotationUploadController.php:232
* @route '//localhost/annotation-upload/annotations'
*/
getAnnotations.url = (options?: RouteQueryOptions) => {
    return getAnnotations.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AnnotationUploadController::getAnnotations
* @see app/Http/Controllers/AnnotationUploadController.php:232
* @route '//localhost/annotation-upload/annotations'
*/
getAnnotations.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getAnnotations.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AnnotationUploadController::getAnnotations
* @see app/Http/Controllers/AnnotationUploadController.php:232
* @route '//localhost/annotation-upload/annotations'
*/
getAnnotations.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getAnnotations.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\AnnotationUploadController::getAnnotations
* @see app/Http/Controllers/AnnotationUploadController.php:232
* @route '//localhost/annotation-upload/annotations'
*/
const getAnnotationsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getAnnotations.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AnnotationUploadController::getAnnotations
* @see app/Http/Controllers/AnnotationUploadController.php:232
* @route '//localhost/annotation-upload/annotations'
*/
getAnnotationsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getAnnotations.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AnnotationUploadController::getAnnotations
* @see app/Http/Controllers/AnnotationUploadController.php:232
* @route '//localhost/annotation-upload/annotations'
*/
getAnnotationsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getAnnotations.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

getAnnotations.form = getAnnotationsForm

/**
* @see \App\Http\Controllers\AnnotationUploadController::deleteMethod
* @see app/Http/Controllers/AnnotationUploadController.php:266
* @route '//localhost/annotation-upload/annotations/{id}'
*/
export const deleteMethod = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteMethod.url(args, options),
    method: 'delete',
})

deleteMethod.definition = {
    methods: ["delete"],
    url: '//localhost/annotation-upload/annotations/{id}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\AnnotationUploadController::deleteMethod
* @see app/Http/Controllers/AnnotationUploadController.php:266
* @route '//localhost/annotation-upload/annotations/{id}'
*/
deleteMethod.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    if (Array.isArray(args)) {
        args = {
            id: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        id: args.id,
    }

    return deleteMethod.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AnnotationUploadController::deleteMethod
* @see app/Http/Controllers/AnnotationUploadController.php:266
* @route '//localhost/annotation-upload/annotations/{id}'
*/
deleteMethod.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteMethod.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\AnnotationUploadController::deleteMethod
* @see app/Http/Controllers/AnnotationUploadController.php:266
* @route '//localhost/annotation-upload/annotations/{id}'
*/
const deleteMethodForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: deleteMethod.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AnnotationUploadController::deleteMethod
* @see app/Http/Controllers/AnnotationUploadController.php:266
* @route '//localhost/annotation-upload/annotations/{id}'
*/
deleteMethodForm.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: deleteMethod.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

deleteMethod.form = deleteMethodForm

const AnnotationUploadController = { apiGetAnnotations, apiGetAnnotation, apiGetImage, apiGetImageBase64, apiGetImageBase64Query, index, verifyPassword, getSizes, upload, getAnnotations, deleteMethod, delete: deleteMethod }

export default AnnotationUploadController