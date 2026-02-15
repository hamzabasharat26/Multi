import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\CameraCaptureController::status
* @see app/Http/Controllers/CameraCaptureController.php:40
* @route '/brands/{brand}/articles/{article}/camera/status'
*/
export const status = (args: { brand: string | number, article: string | number } | [brand: string | number, article: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: status.url(args, options),
    method: 'get',
})

status.definition = {
    methods: ["get","head"],
    url: '/brands/{brand}/articles/{article}/camera/status',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CameraCaptureController::status
* @see app/Http/Controllers/CameraCaptureController.php:40
* @route '/brands/{brand}/articles/{article}/camera/status'
*/
status.url = (args: { brand: string | number, article: string | number } | [brand: string | number, article: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            brand: args[0],
            article: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        brand: args.brand,
        article: args.article,
    }

    return status.definition.url
            .replace('{brand}', parsedArgs.brand.toString())
            .replace('{article}', parsedArgs.article.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CameraCaptureController::status
* @see app/Http/Controllers/CameraCaptureController.php:40
* @route '/brands/{brand}/articles/{article}/camera/status'
*/
status.get = (args: { brand: string | number, article: string | number } | [brand: string | number, article: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: status.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\CameraCaptureController::status
* @see app/Http/Controllers/CameraCaptureController.php:40
* @route '/brands/{brand}/articles/{article}/camera/status'
*/
status.head = (args: { brand: string | number, article: string | number } | [brand: string | number, article: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: status.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\CameraCaptureController::status
* @see app/Http/Controllers/CameraCaptureController.php:40
* @route '/brands/{brand}/articles/{article}/camera/status'
*/
const statusForm = (args: { brand: string | number, article: string | number } | [brand: string | number, article: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: status.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\CameraCaptureController::status
* @see app/Http/Controllers/CameraCaptureController.php:40
* @route '/brands/{brand}/articles/{article}/camera/status'
*/
statusForm.get = (args: { brand: string | number, article: string | number } | [brand: string | number, article: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: status.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\CameraCaptureController::status
* @see app/Http/Controllers/CameraCaptureController.php:40
* @route '/brands/{brand}/articles/{article}/camera/status'
*/
statusForm.head = (args: { brand: string | number, article: string | number } | [brand: string | number, article: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: status.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

status.form = statusForm

/**
* @see \App\Http\Controllers\CameraCaptureController::mode
* @see app/Http/Controllers/CameraCaptureController.php:78
* @route '/brands/{brand}/articles/{article}/camera/mode'
*/
export const mode = (args: { brand: string | number, article: string | number } | [brand: string | number, article: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: mode.url(args, options),
    method: 'post',
})

mode.definition = {
    methods: ["post"],
    url: '/brands/{brand}/articles/{article}/camera/mode',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\CameraCaptureController::mode
* @see app/Http/Controllers/CameraCaptureController.php:78
* @route '/brands/{brand}/articles/{article}/camera/mode'
*/
mode.url = (args: { brand: string | number, article: string | number } | [brand: string | number, article: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            brand: args[0],
            article: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        brand: args.brand,
        article: args.article,
    }

    return mode.definition.url
            .replace('{brand}', parsedArgs.brand.toString())
            .replace('{article}', parsedArgs.article.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CameraCaptureController::mode
* @see app/Http/Controllers/CameraCaptureController.php:78
* @route '/brands/{brand}/articles/{article}/camera/mode'
*/
mode.post = (args: { brand: string | number, article: string | number } | [brand: string | number, article: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: mode.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\CameraCaptureController::mode
* @see app/Http/Controllers/CameraCaptureController.php:78
* @route '/brands/{brand}/articles/{article}/camera/mode'
*/
const modeForm = (args: { brand: string | number, article: string | number } | [brand: string | number, article: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: mode.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\CameraCaptureController::mode
* @see app/Http/Controllers/CameraCaptureController.php:78
* @route '/brands/{brand}/articles/{article}/camera/mode'
*/
modeForm.post = (args: { brand: string | number, article: string | number } | [brand: string | number, article: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: mode.url(args, options),
    method: 'post',
})

mode.form = modeForm

const camera = {
    status: Object.assign(status, status),
    mode: Object.assign(mode, mode),
}

export default camera