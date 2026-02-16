import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\ArticleImageController::index
* @see app/Http/Controllers/ArticleImageController.php:18
* @route '//localhost/brands/{brand}/articles/{article}/images'
*/
export const index = (args: { brand: number | { id: number }, article: number | { id: number } } | [brand: number | { id: number }, article: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '//localhost/brands/{brand}/articles/{article}/images',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ArticleImageController::index
* @see app/Http/Controllers/ArticleImageController.php:18
* @route '//localhost/brands/{brand}/articles/{article}/images'
*/
index.url = (args: { brand: number | { id: number }, article: number | { id: number } } | [brand: number | { id: number }, article: number | { id: number } ], options?: RouteQueryOptions) => {
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

    return index.definition.url
            .replace('{brand}', parsedArgs.brand.toString())
            .replace('{article}', parsedArgs.article.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ArticleImageController::index
* @see app/Http/Controllers/ArticleImageController.php:18
* @route '//localhost/brands/{brand}/articles/{article}/images'
*/
index.get = (args: { brand: number | { id: number }, article: number | { id: number } } | [brand: number | { id: number }, article: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ArticleImageController::index
* @see app/Http/Controllers/ArticleImageController.php:18
* @route '//localhost/brands/{brand}/articles/{article}/images'
*/
index.head = (args: { brand: number | { id: number }, article: number | { id: number } } | [brand: number | { id: number }, article: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ArticleImageController::index
* @see app/Http/Controllers/ArticleImageController.php:18
* @route '//localhost/brands/{brand}/articles/{article}/images'
*/
const indexForm = (args: { brand: number | { id: number }, article: number | { id: number } } | [brand: number | { id: number }, article: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ArticleImageController::index
* @see app/Http/Controllers/ArticleImageController.php:18
* @route '//localhost/brands/{brand}/articles/{article}/images'
*/
indexForm.get = (args: { brand: number | { id: number }, article: number | { id: number } } | [brand: number | { id: number }, article: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ArticleImageController::index
* @see app/Http/Controllers/ArticleImageController.php:18
* @route '//localhost/brands/{brand}/articles/{article}/images'
*/
indexForm.head = (args: { brand: number | { id: number }, article: number | { id: number } } | [brand: number | { id: number }, article: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \App\Http\Controllers\ArticleImageController::store
* @see app/Http/Controllers/ArticleImageController.php:28
* @route '//localhost/brands/{brand}/articles/{article}/images'
*/
export const store = (args: { brand: number | { id: number }, article: number | { id: number } } | [brand: number | { id: number }, article: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '//localhost/brands/{brand}/articles/{article}/images',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ArticleImageController::store
* @see app/Http/Controllers/ArticleImageController.php:28
* @route '//localhost/brands/{brand}/articles/{article}/images'
*/
store.url = (args: { brand: number | { id: number }, article: number | { id: number } } | [brand: number | { id: number }, article: number | { id: number } ], options?: RouteQueryOptions) => {
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

    return store.definition.url
            .replace('{brand}', parsedArgs.brand.toString())
            .replace('{article}', parsedArgs.article.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ArticleImageController::store
* @see app/Http/Controllers/ArticleImageController.php:28
* @route '//localhost/brands/{brand}/articles/{article}/images'
*/
store.post = (args: { brand: number | { id: number }, article: number | { id: number } } | [brand: number | { id: number }, article: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ArticleImageController::store
* @see app/Http/Controllers/ArticleImageController.php:28
* @route '//localhost/brands/{brand}/articles/{article}/images'
*/
const storeForm = (args: { brand: number | { id: number }, article: number | { id: number } } | [brand: number | { id: number }, article: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ArticleImageController::store
* @see app/Http/Controllers/ArticleImageController.php:28
* @route '//localhost/brands/{brand}/articles/{article}/images'
*/
storeForm.post = (args: { brand: number | { id: number }, article: number | { id: number } } | [brand: number | { id: number }, article: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\ArticleImageController::destroy
* @see app/Http/Controllers/ArticleImageController.php:76
* @route '//localhost/brands/{brand}/articles/{article}/images/{image}'
*/
export const destroy = (args: { brand: number | { id: number }, article: number | { id: number }, image: number | { id: number } } | [brand: number | { id: number }, article: number | { id: number }, image: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '//localhost/brands/{brand}/articles/{article}/images/{image}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\ArticleImageController::destroy
* @see app/Http/Controllers/ArticleImageController.php:76
* @route '//localhost/brands/{brand}/articles/{article}/images/{image}'
*/
destroy.url = (args: { brand: number | { id: number }, article: number | { id: number }, image: number | { id: number } } | [brand: number | { id: number }, article: number | { id: number }, image: number | { id: number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            brand: args[0],
            article: args[1],
            image: args[2],
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
        image: typeof args.image === 'object'
        ? args.image.id
        : args.image,
    }

    return destroy.definition.url
            .replace('{brand}', parsedArgs.brand.toString())
            .replace('{article}', parsedArgs.article.toString())
            .replace('{image}', parsedArgs.image.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ArticleImageController::destroy
* @see app/Http/Controllers/ArticleImageController.php:76
* @route '//localhost/brands/{brand}/articles/{article}/images/{image}'
*/
destroy.delete = (args: { brand: number | { id: number }, article: number | { id: number }, image: number | { id: number } } | [brand: number | { id: number }, article: number | { id: number }, image: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\ArticleImageController::destroy
* @see app/Http/Controllers/ArticleImageController.php:76
* @route '//localhost/brands/{brand}/articles/{article}/images/{image}'
*/
const destroyForm = (args: { brand: number | { id: number }, article: number | { id: number }, image: number | { id: number } } | [brand: number | { id: number }, article: number | { id: number }, image: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ArticleImageController::destroy
* @see app/Http/Controllers/ArticleImageController.php:76
* @route '//localhost/brands/{brand}/articles/{article}/images/{image}'
*/
destroyForm.delete = (args: { brand: number | { id: number }, article: number | { id: number }, image: number | { id: number } } | [brand: number | { id: number }, article: number | { id: number }, image: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const images = {
    index: Object.assign(index, index),
    store: Object.assign(store, store),
    destroy: Object.assign(destroy, destroy),
}

export default images