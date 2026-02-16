import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
import camera from './camera'
import images from './images'
import measurements from './measurements'
/**
* @see \App\Http\Controllers\PurchaseOrderController::forPo
* @see app/Http/Controllers/PurchaseOrderController.php:260
* @route '//localhost/brands/{brand}/articles-for-po'
*/
export const forPo = (args: { brand: number | { id: number } } | [brand: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: forPo.url(args, options),
    method: 'get',
})

forPo.definition = {
    methods: ["get","head"],
    url: '//localhost/brands/{brand}/articles-for-po',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PurchaseOrderController::forPo
* @see app/Http/Controllers/PurchaseOrderController.php:260
* @route '//localhost/brands/{brand}/articles-for-po'
*/
forPo.url = (args: { brand: number | { id: number } } | [brand: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { brand: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { brand: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            brand: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        brand: typeof args.brand === 'object'
        ? args.brand.id
        : args.brand,
    }

    return forPo.definition.url
            .replace('{brand}', parsedArgs.brand.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PurchaseOrderController::forPo
* @see app/Http/Controllers/PurchaseOrderController.php:260
* @route '//localhost/brands/{brand}/articles-for-po'
*/
forPo.get = (args: { brand: number | { id: number } } | [brand: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: forPo.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PurchaseOrderController::forPo
* @see app/Http/Controllers/PurchaseOrderController.php:260
* @route '//localhost/brands/{brand}/articles-for-po'
*/
forPo.head = (args: { brand: number | { id: number } } | [brand: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: forPo.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PurchaseOrderController::forPo
* @see app/Http/Controllers/PurchaseOrderController.php:260
* @route '//localhost/brands/{brand}/articles-for-po'
*/
const forPoForm = (args: { brand: number | { id: number } } | [brand: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: forPo.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PurchaseOrderController::forPo
* @see app/Http/Controllers/PurchaseOrderController.php:260
* @route '//localhost/brands/{brand}/articles-for-po'
*/
forPoForm.get = (args: { brand: number | { id: number } } | [brand: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: forPo.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PurchaseOrderController::forPo
* @see app/Http/Controllers/PurchaseOrderController.php:260
* @route '//localhost/brands/{brand}/articles-for-po'
*/
forPoForm.head = (args: { brand: number | { id: number } } | [brand: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: forPo.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

forPo.form = forPoForm

/**
* @see \App\Http\Controllers\ArticleController::index
* @see app/Http/Controllers/ArticleController.php:19
* @route '//localhost/brands/{brand}/articles'
*/
export const index = (args: { brand: number | { id: number } } | [brand: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '//localhost/brands/{brand}/articles',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ArticleController::index
* @see app/Http/Controllers/ArticleController.php:19
* @route '//localhost/brands/{brand}/articles'
*/
index.url = (args: { brand: number | { id: number } } | [brand: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { brand: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { brand: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            brand: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        brand: typeof args.brand === 'object'
        ? args.brand.id
        : args.brand,
    }

    return index.definition.url
            .replace('{brand}', parsedArgs.brand.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ArticleController::index
* @see app/Http/Controllers/ArticleController.php:19
* @route '//localhost/brands/{brand}/articles'
*/
index.get = (args: { brand: number | { id: number } } | [brand: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ArticleController::index
* @see app/Http/Controllers/ArticleController.php:19
* @route '//localhost/brands/{brand}/articles'
*/
index.head = (args: { brand: number | { id: number } } | [brand: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ArticleController::index
* @see app/Http/Controllers/ArticleController.php:19
* @route '//localhost/brands/{brand}/articles'
*/
const indexForm = (args: { brand: number | { id: number } } | [brand: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ArticleController::index
* @see app/Http/Controllers/ArticleController.php:19
* @route '//localhost/brands/{brand}/articles'
*/
indexForm.get = (args: { brand: number | { id: number } } | [brand: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ArticleController::index
* @see app/Http/Controllers/ArticleController.php:19
* @route '//localhost/brands/{brand}/articles'
*/
indexForm.head = (args: { brand: number | { id: number } } | [brand: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\ArticleController::create
* @see app/Http/Controllers/ArticleController.php:47
* @route '//localhost/brands/{brand}/articles/create'
*/
export const create = (args: { brand: number | { id: number } } | [brand: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(args, options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '//localhost/brands/{brand}/articles/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ArticleController::create
* @see app/Http/Controllers/ArticleController.php:47
* @route '//localhost/brands/{brand}/articles/create'
*/
create.url = (args: { brand: number | { id: number } } | [brand: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { brand: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { brand: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            brand: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        brand: typeof args.brand === 'object'
        ? args.brand.id
        : args.brand,
    }

    return create.definition.url
            .replace('{brand}', parsedArgs.brand.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ArticleController::create
* @see app/Http/Controllers/ArticleController.php:47
* @route '//localhost/brands/{brand}/articles/create'
*/
create.get = (args: { brand: number | { id: number } } | [brand: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ArticleController::create
* @see app/Http/Controllers/ArticleController.php:47
* @route '//localhost/brands/{brand}/articles/create'
*/
create.head = (args: { brand: number | { id: number } } | [brand: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ArticleController::create
* @see app/Http/Controllers/ArticleController.php:47
* @route '//localhost/brands/{brand}/articles/create'
*/
const createForm = (args: { brand: number | { id: number } } | [brand: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ArticleController::create
* @see app/Http/Controllers/ArticleController.php:47
* @route '//localhost/brands/{brand}/articles/create'
*/
createForm.get = (args: { brand: number | { id: number } } | [brand: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ArticleController::create
* @see app/Http/Controllers/ArticleController.php:47
* @route '//localhost/brands/{brand}/articles/create'
*/
createForm.head = (args: { brand: number | { id: number } } | [brand: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

create.form = createForm

/**
* @see \App\Http\Controllers\ArticleController::store
* @see app/Http/Controllers/ArticleController.php:60
* @route '//localhost/brands/{brand}/articles'
*/
export const store = (args: { brand: number | { id: number } } | [brand: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '//localhost/brands/{brand}/articles',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ArticleController::store
* @see app/Http/Controllers/ArticleController.php:60
* @route '//localhost/brands/{brand}/articles'
*/
store.url = (args: { brand: number | { id: number } } | [brand: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { brand: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { brand: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            brand: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        brand: typeof args.brand === 'object'
        ? args.brand.id
        : args.brand,
    }

    return store.definition.url
            .replace('{brand}', parsedArgs.brand.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ArticleController::store
* @see app/Http/Controllers/ArticleController.php:60
* @route '//localhost/brands/{brand}/articles'
*/
store.post = (args: { brand: number | { id: number } } | [brand: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ArticleController::store
* @see app/Http/Controllers/ArticleController.php:60
* @route '//localhost/brands/{brand}/articles'
*/
const storeForm = (args: { brand: number | { id: number } } | [brand: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ArticleController::store
* @see app/Http/Controllers/ArticleController.php:60
* @route '//localhost/brands/{brand}/articles'
*/
storeForm.post = (args: { brand: number | { id: number } } | [brand: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\ArticleController::show
* @see app/Http/Controllers/ArticleController.php:87
* @route '//localhost/brands/{brand}/articles/{article}'
*/
export const show = (args: { brand: number | { id: number }, article: number | { id: number } } | [brand: number | { id: number }, article: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '//localhost/brands/{brand}/articles/{article}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ArticleController::show
* @see app/Http/Controllers/ArticleController.php:87
* @route '//localhost/brands/{brand}/articles/{article}'
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
* @see \App\Http\Controllers\ArticleController::show
* @see app/Http/Controllers/ArticleController.php:87
* @route '//localhost/brands/{brand}/articles/{article}'
*/
show.get = (args: { brand: number | { id: number }, article: number | { id: number } } | [brand: number | { id: number }, article: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ArticleController::show
* @see app/Http/Controllers/ArticleController.php:87
* @route '//localhost/brands/{brand}/articles/{article}'
*/
show.head = (args: { brand: number | { id: number }, article: number | { id: number } } | [brand: number | { id: number }, article: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ArticleController::show
* @see app/Http/Controllers/ArticleController.php:87
* @route '//localhost/brands/{brand}/articles/{article}'
*/
const showForm = (args: { brand: number | { id: number }, article: number | { id: number } } | [brand: number | { id: number }, article: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ArticleController::show
* @see app/Http/Controllers/ArticleController.php:87
* @route '//localhost/brands/{brand}/articles/{article}'
*/
showForm.get = (args: { brand: number | { id: number }, article: number | { id: number } } | [brand: number | { id: number }, article: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ArticleController::show
* @see app/Http/Controllers/ArticleController.php:87
* @route '//localhost/brands/{brand}/articles/{article}'
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
* @see \App\Http\Controllers\ArticleController::edit
* @see app/Http/Controllers/ArticleController.php:120
* @route '//localhost/brands/{brand}/articles/{article}/edit'
*/
export const edit = (args: { brand: number | { id: number }, article: number | { id: number } } | [brand: number | { id: number }, article: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '//localhost/brands/{brand}/articles/{article}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ArticleController::edit
* @see app/Http/Controllers/ArticleController.php:120
* @route '//localhost/brands/{brand}/articles/{article}/edit'
*/
edit.url = (args: { brand: number | { id: number }, article: number | { id: number } } | [brand: number | { id: number }, article: number | { id: number } ], options?: RouteQueryOptions) => {
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

    return edit.definition.url
            .replace('{brand}', parsedArgs.brand.toString())
            .replace('{article}', parsedArgs.article.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ArticleController::edit
* @see app/Http/Controllers/ArticleController.php:120
* @route '//localhost/brands/{brand}/articles/{article}/edit'
*/
edit.get = (args: { brand: number | { id: number }, article: number | { id: number } } | [brand: number | { id: number }, article: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ArticleController::edit
* @see app/Http/Controllers/ArticleController.php:120
* @route '//localhost/brands/{brand}/articles/{article}/edit'
*/
edit.head = (args: { brand: number | { id: number }, article: number | { id: number } } | [brand: number | { id: number }, article: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ArticleController::edit
* @see app/Http/Controllers/ArticleController.php:120
* @route '//localhost/brands/{brand}/articles/{article}/edit'
*/
const editForm = (args: { brand: number | { id: number }, article: number | { id: number } } | [brand: number | { id: number }, article: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ArticleController::edit
* @see app/Http/Controllers/ArticleController.php:120
* @route '//localhost/brands/{brand}/articles/{article}/edit'
*/
editForm.get = (args: { brand: number | { id: number }, article: number | { id: number } } | [brand: number | { id: number }, article: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ArticleController::edit
* @see app/Http/Controllers/ArticleController.php:120
* @route '//localhost/brands/{brand}/articles/{article}/edit'
*/
editForm.head = (args: { brand: number | { id: number }, article: number | { id: number } } | [brand: number | { id: number }, article: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

edit.form = editForm

/**
* @see \App\Http\Controllers\ArticleController::update
* @see app/Http/Controllers/ArticleController.php:135
* @route '//localhost/brands/{brand}/articles/{article}'
*/
export const update = (args: { brand: number | { id: number }, article: number | { id: number } } | [brand: number | { id: number }, article: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '//localhost/brands/{brand}/articles/{article}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\ArticleController::update
* @see app/Http/Controllers/ArticleController.php:135
* @route '//localhost/brands/{brand}/articles/{article}'
*/
update.url = (args: { brand: number | { id: number }, article: number | { id: number } } | [brand: number | { id: number }, article: number | { id: number } ], options?: RouteQueryOptions) => {
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

    return update.definition.url
            .replace('{brand}', parsedArgs.brand.toString())
            .replace('{article}', parsedArgs.article.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ArticleController::update
* @see app/Http/Controllers/ArticleController.php:135
* @route '//localhost/brands/{brand}/articles/{article}'
*/
update.put = (args: { brand: number | { id: number }, article: number | { id: number } } | [brand: number | { id: number }, article: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\ArticleController::update
* @see app/Http/Controllers/ArticleController.php:135
* @route '//localhost/brands/{brand}/articles/{article}'
*/
const updateForm = (args: { brand: number | { id: number }, article: number | { id: number } } | [brand: number | { id: number }, article: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ArticleController::update
* @see app/Http/Controllers/ArticleController.php:135
* @route '//localhost/brands/{brand}/articles/{article}'
*/
updateForm.put = (args: { brand: number | { id: number }, article: number | { id: number } } | [brand: number | { id: number }, article: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

/**
* @see \App\Http\Controllers\ArticleController::destroy
* @see app/Http/Controllers/ArticleController.php:161
* @route '//localhost/brands/{brand}/articles/{article}'
*/
export const destroy = (args: { brand: number | { id: number }, article: number | { id: number } } | [brand: number | { id: number }, article: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '//localhost/brands/{brand}/articles/{article}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\ArticleController::destroy
* @see app/Http/Controllers/ArticleController.php:161
* @route '//localhost/brands/{brand}/articles/{article}'
*/
destroy.url = (args: { brand: number | { id: number }, article: number | { id: number } } | [brand: number | { id: number }, article: number | { id: number } ], options?: RouteQueryOptions) => {
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

    return destroy.definition.url
            .replace('{brand}', parsedArgs.brand.toString())
            .replace('{article}', parsedArgs.article.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ArticleController::destroy
* @see app/Http/Controllers/ArticleController.php:161
* @route '//localhost/brands/{brand}/articles/{article}'
*/
destroy.delete = (args: { brand: number | { id: number }, article: number | { id: number } } | [brand: number | { id: number }, article: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\ArticleController::destroy
* @see app/Http/Controllers/ArticleController.php:161
* @route '//localhost/brands/{brand}/articles/{article}'
*/
const destroyForm = (args: { brand: number | { id: number }, article: number | { id: number } } | [brand: number | { id: number }, article: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ArticleController::destroy
* @see app/Http/Controllers/ArticleController.php:161
* @route '//localhost/brands/{brand}/articles/{article}'
*/
destroyForm.delete = (args: { brand: number | { id: number }, article: number | { id: number } } | [brand: number | { id: number }, article: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

/**
* @see \App\Http\Controllers\CameraCaptureController::cameraCapture
* @see app/Http/Controllers/CameraCaptureController.php:24
* @route '//localhost/brands/{brand}/articles/{article}/camera-capture'
*/
export const cameraCapture = (args: { brand: number | { id: number }, article: number | { id: number } } | [brand: number | { id: number }, article: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: cameraCapture.url(args, options),
    method: 'get',
})

cameraCapture.definition = {
    methods: ["get","head"],
    url: '//localhost/brands/{brand}/articles/{article}/camera-capture',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CameraCaptureController::cameraCapture
* @see app/Http/Controllers/CameraCaptureController.php:24
* @route '//localhost/brands/{brand}/articles/{article}/camera-capture'
*/
cameraCapture.url = (args: { brand: number | { id: number }, article: number | { id: number } } | [brand: number | { id: number }, article: number | { id: number } ], options?: RouteQueryOptions) => {
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

    return cameraCapture.definition.url
            .replace('{brand}', parsedArgs.brand.toString())
            .replace('{article}', parsedArgs.article.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CameraCaptureController::cameraCapture
* @see app/Http/Controllers/CameraCaptureController.php:24
* @route '//localhost/brands/{brand}/articles/{article}/camera-capture'
*/
cameraCapture.get = (args: { brand: number | { id: number }, article: number | { id: number } } | [brand: number | { id: number }, article: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: cameraCapture.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\CameraCaptureController::cameraCapture
* @see app/Http/Controllers/CameraCaptureController.php:24
* @route '//localhost/brands/{brand}/articles/{article}/camera-capture'
*/
cameraCapture.head = (args: { brand: number | { id: number }, article: number | { id: number } } | [brand: number | { id: number }, article: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: cameraCapture.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\CameraCaptureController::cameraCapture
* @see app/Http/Controllers/CameraCaptureController.php:24
* @route '//localhost/brands/{brand}/articles/{article}/camera-capture'
*/
const cameraCaptureForm = (args: { brand: number | { id: number }, article: number | { id: number } } | [brand: number | { id: number }, article: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: cameraCapture.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\CameraCaptureController::cameraCapture
* @see app/Http/Controllers/CameraCaptureController.php:24
* @route '//localhost/brands/{brand}/articles/{article}/camera-capture'
*/
cameraCaptureForm.get = (args: { brand: number | { id: number }, article: number | { id: number } } | [brand: number | { id: number }, article: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: cameraCapture.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\CameraCaptureController::cameraCapture
* @see app/Http/Controllers/CameraCaptureController.php:24
* @route '//localhost/brands/{brand}/articles/{article}/camera-capture'
*/
cameraCaptureForm.head = (args: { brand: number | { id: number }, article: number | { id: number } } | [brand: number | { id: number }, article: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: cameraCapture.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

cameraCapture.form = cameraCaptureForm

const articles = {
    forPo: Object.assign(forPo, forPo),
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
    cameraCapture: Object.assign(cameraCapture, cameraCapture),
    camera: Object.assign(camera, camera),
    images: Object.assign(images, images),
    measurements: Object.assign(measurements, measurements),
}

export default articles