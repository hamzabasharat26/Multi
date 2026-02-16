import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
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

const ArticleController = { index, create, store, show, edit, update, destroy }

export default ArticleController