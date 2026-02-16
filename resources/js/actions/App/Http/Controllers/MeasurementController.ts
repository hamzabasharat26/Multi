import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\MeasurementController::index
* @see app/Http/Controllers/MeasurementController.php:19
* @route '//localhost/brands/{brand}/articles/{article}/measurements'
*/
export const index = (args: { brand: number | { id: number }, article: number | { id: number } } | [brand: number | { id: number }, article: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '//localhost/brands/{brand}/articles/{article}/measurements',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MeasurementController::index
* @see app/Http/Controllers/MeasurementController.php:19
* @route '//localhost/brands/{brand}/articles/{article}/measurements'
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
* @see \App\Http\Controllers\MeasurementController::index
* @see app/Http/Controllers/MeasurementController.php:19
* @route '//localhost/brands/{brand}/articles/{article}/measurements'
*/
index.get = (args: { brand: number | { id: number }, article: number | { id: number } } | [brand: number | { id: number }, article: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MeasurementController::index
* @see app/Http/Controllers/MeasurementController.php:19
* @route '//localhost/brands/{brand}/articles/{article}/measurements'
*/
index.head = (args: { brand: number | { id: number }, article: number | { id: number } } | [brand: number | { id: number }, article: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\MeasurementController::index
* @see app/Http/Controllers/MeasurementController.php:19
* @route '//localhost/brands/{brand}/articles/{article}/measurements'
*/
const indexForm = (args: { brand: number | { id: number }, article: number | { id: number } } | [brand: number | { id: number }, article: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MeasurementController::index
* @see app/Http/Controllers/MeasurementController.php:19
* @route '//localhost/brands/{brand}/articles/{article}/measurements'
*/
indexForm.get = (args: { brand: number | { id: number }, article: number | { id: number } } | [brand: number | { id: number }, article: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MeasurementController::index
* @see app/Http/Controllers/MeasurementController.php:19
* @route '//localhost/brands/{brand}/articles/{article}/measurements'
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
* @see \App\Http\Controllers\MeasurementController::create
* @see app/Http/Controllers/MeasurementController.php:44
* @route '//localhost/brands/{brand}/articles/{article}/measurements/create'
*/
export const create = (args: { brand: number | { id: number }, article: number | { id: number } } | [brand: number | { id: number }, article: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(args, options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '//localhost/brands/{brand}/articles/{article}/measurements/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MeasurementController::create
* @see app/Http/Controllers/MeasurementController.php:44
* @route '//localhost/brands/{brand}/articles/{article}/measurements/create'
*/
create.url = (args: { brand: number | { id: number }, article: number | { id: number } } | [brand: number | { id: number }, article: number | { id: number } ], options?: RouteQueryOptions) => {
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

    return create.definition.url
            .replace('{brand}', parsedArgs.brand.toString())
            .replace('{article}', parsedArgs.article.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MeasurementController::create
* @see app/Http/Controllers/MeasurementController.php:44
* @route '//localhost/brands/{brand}/articles/{article}/measurements/create'
*/
create.get = (args: { brand: number | { id: number }, article: number | { id: number } } | [brand: number | { id: number }, article: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MeasurementController::create
* @see app/Http/Controllers/MeasurementController.php:44
* @route '//localhost/brands/{brand}/articles/{article}/measurements/create'
*/
create.head = (args: { brand: number | { id: number }, article: number | { id: number } } | [brand: number | { id: number }, article: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\MeasurementController::create
* @see app/Http/Controllers/MeasurementController.php:44
* @route '//localhost/brands/{brand}/articles/{article}/measurements/create'
*/
const createForm = (args: { brand: number | { id: number }, article: number | { id: number } } | [brand: number | { id: number }, article: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MeasurementController::create
* @see app/Http/Controllers/MeasurementController.php:44
* @route '//localhost/brands/{brand}/articles/{article}/measurements/create'
*/
createForm.get = (args: { brand: number | { id: number }, article: number | { id: number } } | [brand: number | { id: number }, article: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MeasurementController::create
* @see app/Http/Controllers/MeasurementController.php:44
* @route '//localhost/brands/{brand}/articles/{article}/measurements/create'
*/
createForm.head = (args: { brand: number | { id: number }, article: number | { id: number } } | [brand: number | { id: number }, article: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\MeasurementController::store
* @see app/Http/Controllers/MeasurementController.php:55
* @route '//localhost/brands/{brand}/articles/{article}/measurements'
*/
export const store = (args: { brand: number | { id: number }, article: number | { id: number } } | [brand: number | { id: number }, article: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '//localhost/brands/{brand}/articles/{article}/measurements',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\MeasurementController::store
* @see app/Http/Controllers/MeasurementController.php:55
* @route '//localhost/brands/{brand}/articles/{article}/measurements'
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
* @see \App\Http\Controllers\MeasurementController::store
* @see app/Http/Controllers/MeasurementController.php:55
* @route '//localhost/brands/{brand}/articles/{article}/measurements'
*/
store.post = (args: { brand: number | { id: number }, article: number | { id: number } } | [brand: number | { id: number }, article: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MeasurementController::store
* @see app/Http/Controllers/MeasurementController.php:55
* @route '//localhost/brands/{brand}/articles/{article}/measurements'
*/
const storeForm = (args: { brand: number | { id: number }, article: number | { id: number } } | [brand: number | { id: number }, article: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MeasurementController::store
* @see app/Http/Controllers/MeasurementController.php:55
* @route '//localhost/brands/{brand}/articles/{article}/measurements'
*/
storeForm.post = (args: { brand: number | { id: number }, article: number | { id: number } } | [brand: number | { id: number }, article: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\MeasurementController::show
* @see app/Http/Controllers/MeasurementController.php:104
* @route '//localhost/brands/{brand}/articles/{article}/measurements/{measurement}'
*/
export const show = (args: { brand: number | { id: number }, article: number | { id: number }, measurement: number | { id: number } } | [brand: number | { id: number }, article: number | { id: number }, measurement: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '//localhost/brands/{brand}/articles/{article}/measurements/{measurement}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MeasurementController::show
* @see app/Http/Controllers/MeasurementController.php:104
* @route '//localhost/brands/{brand}/articles/{article}/measurements/{measurement}'
*/
show.url = (args: { brand: number | { id: number }, article: number | { id: number }, measurement: number | { id: number } } | [brand: number | { id: number }, article: number | { id: number }, measurement: number | { id: number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            brand: args[0],
            article: args[1],
            measurement: args[2],
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
        measurement: typeof args.measurement === 'object'
        ? args.measurement.id
        : args.measurement,
    }

    return show.definition.url
            .replace('{brand}', parsedArgs.brand.toString())
            .replace('{article}', parsedArgs.article.toString())
            .replace('{measurement}', parsedArgs.measurement.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MeasurementController::show
* @see app/Http/Controllers/MeasurementController.php:104
* @route '//localhost/brands/{brand}/articles/{article}/measurements/{measurement}'
*/
show.get = (args: { brand: number | { id: number }, article: number | { id: number }, measurement: number | { id: number } } | [brand: number | { id: number }, article: number | { id: number }, measurement: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MeasurementController::show
* @see app/Http/Controllers/MeasurementController.php:104
* @route '//localhost/brands/{brand}/articles/{article}/measurements/{measurement}'
*/
show.head = (args: { brand: number | { id: number }, article: number | { id: number }, measurement: number | { id: number } } | [brand: number | { id: number }, article: number | { id: number }, measurement: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\MeasurementController::show
* @see app/Http/Controllers/MeasurementController.php:104
* @route '//localhost/brands/{brand}/articles/{article}/measurements/{measurement}'
*/
const showForm = (args: { brand: number | { id: number }, article: number | { id: number }, measurement: number | { id: number } } | [brand: number | { id: number }, article: number | { id: number }, measurement: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MeasurementController::show
* @see app/Http/Controllers/MeasurementController.php:104
* @route '//localhost/brands/{brand}/articles/{article}/measurements/{measurement}'
*/
showForm.get = (args: { brand: number | { id: number }, article: number | { id: number }, measurement: number | { id: number } } | [brand: number | { id: number }, article: number | { id: number }, measurement: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MeasurementController::show
* @see app/Http/Controllers/MeasurementController.php:104
* @route '//localhost/brands/{brand}/articles/{article}/measurements/{measurement}'
*/
showForm.head = (args: { brand: number | { id: number }, article: number | { id: number }, measurement: number | { id: number } } | [brand: number | { id: number }, article: number | { id: number }, measurement: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\MeasurementController::edit
* @see app/Http/Controllers/MeasurementController.php:118
* @route '//localhost/brands/{brand}/articles/{article}/measurements/{measurement}/edit'
*/
export const edit = (args: { brand: number | { id: number }, article: number | { id: number }, measurement: number | { id: number } } | [brand: number | { id: number }, article: number | { id: number }, measurement: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '//localhost/brands/{brand}/articles/{article}/measurements/{measurement}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MeasurementController::edit
* @see app/Http/Controllers/MeasurementController.php:118
* @route '//localhost/brands/{brand}/articles/{article}/measurements/{measurement}/edit'
*/
edit.url = (args: { brand: number | { id: number }, article: number | { id: number }, measurement: number | { id: number } } | [brand: number | { id: number }, article: number | { id: number }, measurement: number | { id: number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            brand: args[0],
            article: args[1],
            measurement: args[2],
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
        measurement: typeof args.measurement === 'object'
        ? args.measurement.id
        : args.measurement,
    }

    return edit.definition.url
            .replace('{brand}', parsedArgs.brand.toString())
            .replace('{article}', parsedArgs.article.toString())
            .replace('{measurement}', parsedArgs.measurement.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MeasurementController::edit
* @see app/Http/Controllers/MeasurementController.php:118
* @route '//localhost/brands/{brand}/articles/{article}/measurements/{measurement}/edit'
*/
edit.get = (args: { brand: number | { id: number }, article: number | { id: number }, measurement: number | { id: number } } | [brand: number | { id: number }, article: number | { id: number }, measurement: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MeasurementController::edit
* @see app/Http/Controllers/MeasurementController.php:118
* @route '//localhost/brands/{brand}/articles/{article}/measurements/{measurement}/edit'
*/
edit.head = (args: { brand: number | { id: number }, article: number | { id: number }, measurement: number | { id: number } } | [brand: number | { id: number }, article: number | { id: number }, measurement: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\MeasurementController::edit
* @see app/Http/Controllers/MeasurementController.php:118
* @route '//localhost/brands/{brand}/articles/{article}/measurements/{measurement}/edit'
*/
const editForm = (args: { brand: number | { id: number }, article: number | { id: number }, measurement: number | { id: number } } | [brand: number | { id: number }, article: number | { id: number }, measurement: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MeasurementController::edit
* @see app/Http/Controllers/MeasurementController.php:118
* @route '//localhost/brands/{brand}/articles/{article}/measurements/{measurement}/edit'
*/
editForm.get = (args: { brand: number | { id: number }, article: number | { id: number }, measurement: number | { id: number } } | [brand: number | { id: number }, article: number | { id: number }, measurement: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MeasurementController::edit
* @see app/Http/Controllers/MeasurementController.php:118
* @route '//localhost/brands/{brand}/articles/{article}/measurements/{measurement}/edit'
*/
editForm.head = (args: { brand: number | { id: number }, article: number | { id: number }, measurement: number | { id: number } } | [brand: number | { id: number }, article: number | { id: number }, measurement: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\MeasurementController::update
* @see app/Http/Controllers/MeasurementController.php:132
* @route '//localhost/brands/{brand}/articles/{article}/measurements/{measurement}'
*/
export const update = (args: { brand: number | { id: number }, article: number | { id: number }, measurement: number | { id: number } } | [brand: number | { id: number }, article: number | { id: number }, measurement: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '//localhost/brands/{brand}/articles/{article}/measurements/{measurement}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\MeasurementController::update
* @see app/Http/Controllers/MeasurementController.php:132
* @route '//localhost/brands/{brand}/articles/{article}/measurements/{measurement}'
*/
update.url = (args: { brand: number | { id: number }, article: number | { id: number }, measurement: number | { id: number } } | [brand: number | { id: number }, article: number | { id: number }, measurement: number | { id: number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            brand: args[0],
            article: args[1],
            measurement: args[2],
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
        measurement: typeof args.measurement === 'object'
        ? args.measurement.id
        : args.measurement,
    }

    return update.definition.url
            .replace('{brand}', parsedArgs.brand.toString())
            .replace('{article}', parsedArgs.article.toString())
            .replace('{measurement}', parsedArgs.measurement.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MeasurementController::update
* @see app/Http/Controllers/MeasurementController.php:132
* @route '//localhost/brands/{brand}/articles/{article}/measurements/{measurement}'
*/
update.put = (args: { brand: number | { id: number }, article: number | { id: number }, measurement: number | { id: number } } | [brand: number | { id: number }, article: number | { id: number }, measurement: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\MeasurementController::update
* @see app/Http/Controllers/MeasurementController.php:132
* @route '//localhost/brands/{brand}/articles/{article}/measurements/{measurement}'
*/
const updateForm = (args: { brand: number | { id: number }, article: number | { id: number }, measurement: number | { id: number } } | [brand: number | { id: number }, article: number | { id: number }, measurement: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MeasurementController::update
* @see app/Http/Controllers/MeasurementController.php:132
* @route '//localhost/brands/{brand}/articles/{article}/measurements/{measurement}'
*/
updateForm.put = (args: { brand: number | { id: number }, article: number | { id: number }, measurement: number | { id: number } } | [brand: number | { id: number }, article: number | { id: number }, measurement: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\MeasurementController::destroy
* @see app/Http/Controllers/MeasurementController.php:183
* @route '//localhost/brands/{brand}/articles/{article}/measurements/{measurement}'
*/
export const destroy = (args: { brand: number | { id: number }, article: number | { id: number }, measurement: number | { id: number } } | [brand: number | { id: number }, article: number | { id: number }, measurement: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '//localhost/brands/{brand}/articles/{article}/measurements/{measurement}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\MeasurementController::destroy
* @see app/Http/Controllers/MeasurementController.php:183
* @route '//localhost/brands/{brand}/articles/{article}/measurements/{measurement}'
*/
destroy.url = (args: { brand: number | { id: number }, article: number | { id: number }, measurement: number | { id: number } } | [brand: number | { id: number }, article: number | { id: number }, measurement: number | { id: number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            brand: args[0],
            article: args[1],
            measurement: args[2],
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
        measurement: typeof args.measurement === 'object'
        ? args.measurement.id
        : args.measurement,
    }

    return destroy.definition.url
            .replace('{brand}', parsedArgs.brand.toString())
            .replace('{article}', parsedArgs.article.toString())
            .replace('{measurement}', parsedArgs.measurement.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MeasurementController::destroy
* @see app/Http/Controllers/MeasurementController.php:183
* @route '//localhost/brands/{brand}/articles/{article}/measurements/{measurement}'
*/
destroy.delete = (args: { brand: number | { id: number }, article: number | { id: number }, measurement: number | { id: number } } | [brand: number | { id: number }, article: number | { id: number }, measurement: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\MeasurementController::destroy
* @see app/Http/Controllers/MeasurementController.php:183
* @route '//localhost/brands/{brand}/articles/{article}/measurements/{measurement}'
*/
const destroyForm = (args: { brand: number | { id: number }, article: number | { id: number }, measurement: number | { id: number } } | [brand: number | { id: number }, article: number | { id: number }, measurement: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MeasurementController::destroy
* @see app/Http/Controllers/MeasurementController.php:183
* @route '//localhost/brands/{brand}/articles/{article}/measurements/{measurement}'
*/
destroyForm.delete = (args: { brand: number | { id: number }, article: number | { id: number }, measurement: number | { id: number } } | [brand: number | { id: number }, article: number | { id: number }, measurement: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const MeasurementController = { index, create, store, show, edit, update, destroy }

export default MeasurementController