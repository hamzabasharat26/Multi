import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\CameraCaptureController::show
* @see app/Http/Controllers/CameraCaptureController.php:24
* @route '/brands/{brand}/articles/{article}/camera-capture'
*/
export const show = (args: { brand: number | { id: number }, article: number | { id: number } } | [brand: number | { id: number }, article: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/brands/{brand}/articles/{article}/camera-capture',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CameraCaptureController::show
* @see app/Http/Controllers/CameraCaptureController.php:24
* @route '/brands/{brand}/articles/{article}/camera-capture'
*/
show.url = (args: { brand: number | { id: number }, article: number | { id: number } } | [brand: number | { id: number }, article: number | { id: number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            brand: args[0],
            article: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        brand: typeof args.brand === 'object'
        ? args.brand.id
        : args.brand,
        article: typeof args.article === 'object'
        ? args.article.id
        : args.article,
    }

    return show.definition.url
            .replace('{brand}', parsedArgs.brand.toString())
            .replace('{article}', parsedArgs.article.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CameraCaptureController::show
* @see app/Http/Controllers/CameraCaptureController.php:24
* @route '/brands/{brand}/articles/{article}/camera-capture'
*/
show.get = (args: { brand: number | { id: number }, article: number | { id: number } } | [brand: number | { id: number }, article: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\CameraCaptureController::show
* @see app/Http/Controllers/CameraCaptureController.php:24
* @route '/brands/{brand}/articles/{article}/camera-capture'
*/
show.head = (args: { brand: number | { id: number }, article: number | { id: number } } | [brand: number | { id: number }, article: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\CameraCaptureController::show
* @see app/Http/Controllers/CameraCaptureController.php:24
* @route '/brands/{brand}/articles/{article}/camera-capture'
*/
const showForm = (args: { brand: number | { id: number }, article: number | { id: number } } | [brand: number | { id: number }, article: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\CameraCaptureController::show
* @see app/Http/Controllers/CameraCaptureController.php:24
* @route '/brands/{brand}/articles/{article}/camera-capture'
*/
showForm.get = (args: { brand: number | { id: number }, article: number | { id: number } } | [brand: number | { id: number }, article: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\CameraCaptureController::show
* @see app/Http/Controllers/CameraCaptureController.php:24
* @route '/brands/{brand}/articles/{article}/camera-capture'
*/
showForm.head = (args: { brand: number | { id: number }, article: number | { id: number } } | [brand: number | { id: number }, article: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

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
* @see \App\Http\Controllers\CameraCaptureController::setMode
* @see app/Http/Controllers/CameraCaptureController.php:78
* @route '/brands/{brand}/articles/{article}/camera/mode'
*/
export const setMode = (args: { brand: string | number, article: string | number } | [brand: string | number, article: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: setMode.url(args, options),
    method: 'post',
})

setMode.definition = {
    methods: ["post"],
    url: '/brands/{brand}/articles/{article}/camera/mode',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\CameraCaptureController::setMode
* @see app/Http/Controllers/CameraCaptureController.php:78
* @route '/brands/{brand}/articles/{article}/camera/mode'
*/
setMode.url = (args: { brand: string | number, article: string | number } | [brand: string | number, article: string | number ], options?: RouteQueryOptions) => {
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

    return setMode.definition.url
            .replace('{brand}', parsedArgs.brand.toString())
            .replace('{article}', parsedArgs.article.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CameraCaptureController::setMode
* @see app/Http/Controllers/CameraCaptureController.php:78
* @route '/brands/{brand}/articles/{article}/camera/mode'
*/
setMode.post = (args: { brand: string | number, article: string | number } | [brand: string | number, article: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: setMode.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\CameraCaptureController::setMode
* @see app/Http/Controllers/CameraCaptureController.php:78
* @route '/brands/{brand}/articles/{article}/camera/mode'
*/
const setModeForm = (args: { brand: string | number, article: string | number } | [brand: string | number, article: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: setMode.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\CameraCaptureController::setMode
* @see app/Http/Controllers/CameraCaptureController.php:78
* @route '/brands/{brand}/articles/{article}/camera/mode'
*/
setModeForm.post = (args: { brand: string | number, article: string | number } | [brand: string | number, article: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: setMode.url(args, options),
    method: 'post',
})

setMode.form = setModeForm

const CameraCaptureController = { show, status, setMode }

export default CameraCaptureController