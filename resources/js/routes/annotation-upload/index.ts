import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
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

const annotationUpload = {
    index: Object.assign(index, index),
    verifyPassword: Object.assign(verifyPassword, verifyPassword),
    getSizes: Object.assign(getSizes, getSizes),
    upload: Object.assign(upload, upload),
    getAnnotations: Object.assign(getAnnotations, getAnnotations),
    delete: Object.assign(deleteMethod, deleteMethod),
}

export default annotationUpload