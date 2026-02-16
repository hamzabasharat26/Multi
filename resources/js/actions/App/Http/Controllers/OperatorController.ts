import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\OperatorController::index
* @see app/Http/Controllers/OperatorController.php:17
* @route '//localhost/operators'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '//localhost/operators',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\OperatorController::index
* @see app/Http/Controllers/OperatorController.php:17
* @route '//localhost/operators'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\OperatorController::index
* @see app/Http/Controllers/OperatorController.php:17
* @route '//localhost/operators'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\OperatorController::index
* @see app/Http/Controllers/OperatorController.php:17
* @route '//localhost/operators'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\OperatorController::index
* @see app/Http/Controllers/OperatorController.php:17
* @route '//localhost/operators'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\OperatorController::index
* @see app/Http/Controllers/OperatorController.php:17
* @route '//localhost/operators'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\OperatorController::index
* @see app/Http/Controllers/OperatorController.php:17
* @route '//localhost/operators'
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
* @see \App\Http\Controllers\OperatorController::create
* @see app/Http/Controllers/OperatorController.php:29
* @route '//localhost/operators/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '//localhost/operators/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\OperatorController::create
* @see app/Http/Controllers/OperatorController.php:29
* @route '//localhost/operators/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\OperatorController::create
* @see app/Http/Controllers/OperatorController.php:29
* @route '//localhost/operators/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\OperatorController::create
* @see app/Http/Controllers/OperatorController.php:29
* @route '//localhost/operators/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\OperatorController::create
* @see app/Http/Controllers/OperatorController.php:29
* @route '//localhost/operators/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\OperatorController::create
* @see app/Http/Controllers/OperatorController.php:29
* @route '//localhost/operators/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\OperatorController::create
* @see app/Http/Controllers/OperatorController.php:29
* @route '//localhost/operators/create'
*/
createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

create.form = createForm

/**
* @see \App\Http\Controllers\OperatorController::store
* @see app/Http/Controllers/OperatorController.php:37
* @route '//localhost/operators'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '//localhost/operators',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\OperatorController::store
* @see app/Http/Controllers/OperatorController.php:37
* @route '//localhost/operators'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\OperatorController::store
* @see app/Http/Controllers/OperatorController.php:37
* @route '//localhost/operators'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\OperatorController::store
* @see app/Http/Controllers/OperatorController.php:37
* @route '//localhost/operators'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\OperatorController::store
* @see app/Http/Controllers/OperatorController.php:37
* @route '//localhost/operators'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\OperatorController::show
* @see app/Http/Controllers/OperatorController.php:69
* @route '//localhost/operators/{operator}'
*/
export const show = (args: { operator: number | { id: number } } | [operator: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '//localhost/operators/{operator}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\OperatorController::show
* @see app/Http/Controllers/OperatorController.php:69
* @route '//localhost/operators/{operator}'
*/
show.url = (args: { operator: number | { id: number } } | [operator: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { operator: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { operator: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            operator: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        operator: typeof args.operator === 'object'
        ? args.operator.id
        : args.operator,
    }

    return show.definition.url
            .replace('{operator}', parsedArgs.operator.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\OperatorController::show
* @see app/Http/Controllers/OperatorController.php:69
* @route '//localhost/operators/{operator}'
*/
show.get = (args: { operator: number | { id: number } } | [operator: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\OperatorController::show
* @see app/Http/Controllers/OperatorController.php:69
* @route '//localhost/operators/{operator}'
*/
show.head = (args: { operator: number | { id: number } } | [operator: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\OperatorController::show
* @see app/Http/Controllers/OperatorController.php:69
* @route '//localhost/operators/{operator}'
*/
const showForm = (args: { operator: number | { id: number } } | [operator: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\OperatorController::show
* @see app/Http/Controllers/OperatorController.php:69
* @route '//localhost/operators/{operator}'
*/
showForm.get = (args: { operator: number | { id: number } } | [operator: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\OperatorController::show
* @see app/Http/Controllers/OperatorController.php:69
* @route '//localhost/operators/{operator}'
*/
showForm.head = (args: { operator: number | { id: number } } | [operator: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\OperatorController::edit
* @see app/Http/Controllers/OperatorController.php:79
* @route '//localhost/operators/{operator}/edit'
*/
export const edit = (args: { operator: number | { id: number } } | [operator: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '//localhost/operators/{operator}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\OperatorController::edit
* @see app/Http/Controllers/OperatorController.php:79
* @route '//localhost/operators/{operator}/edit'
*/
edit.url = (args: { operator: number | { id: number } } | [operator: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { operator: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { operator: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            operator: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        operator: typeof args.operator === 'object'
        ? args.operator.id
        : args.operator,
    }

    return edit.definition.url
            .replace('{operator}', parsedArgs.operator.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\OperatorController::edit
* @see app/Http/Controllers/OperatorController.php:79
* @route '//localhost/operators/{operator}/edit'
*/
edit.get = (args: { operator: number | { id: number } } | [operator: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\OperatorController::edit
* @see app/Http/Controllers/OperatorController.php:79
* @route '//localhost/operators/{operator}/edit'
*/
edit.head = (args: { operator: number | { id: number } } | [operator: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\OperatorController::edit
* @see app/Http/Controllers/OperatorController.php:79
* @route '//localhost/operators/{operator}/edit'
*/
const editForm = (args: { operator: number | { id: number } } | [operator: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\OperatorController::edit
* @see app/Http/Controllers/OperatorController.php:79
* @route '//localhost/operators/{operator}/edit'
*/
editForm.get = (args: { operator: number | { id: number } } | [operator: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\OperatorController::edit
* @see app/Http/Controllers/OperatorController.php:79
* @route '//localhost/operators/{operator}/edit'
*/
editForm.head = (args: { operator: number | { id: number } } | [operator: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\OperatorController::update
* @see app/Http/Controllers/OperatorController.php:89
* @route '//localhost/operators/{operator}'
*/
export const update = (args: { operator: number | { id: number } } | [operator: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '//localhost/operators/{operator}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\OperatorController::update
* @see app/Http/Controllers/OperatorController.php:89
* @route '//localhost/operators/{operator}'
*/
update.url = (args: { operator: number | { id: number } } | [operator: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { operator: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { operator: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            operator: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        operator: typeof args.operator === 'object'
        ? args.operator.id
        : args.operator,
    }

    return update.definition.url
            .replace('{operator}', parsedArgs.operator.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\OperatorController::update
* @see app/Http/Controllers/OperatorController.php:89
* @route '//localhost/operators/{operator}'
*/
update.put = (args: { operator: number | { id: number } } | [operator: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\OperatorController::update
* @see app/Http/Controllers/OperatorController.php:89
* @route '//localhost/operators/{operator}'
*/
update.patch = (args: { operator: number | { id: number } } | [operator: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\OperatorController::update
* @see app/Http/Controllers/OperatorController.php:89
* @route '//localhost/operators/{operator}'
*/
const updateForm = (args: { operator: number | { id: number } } | [operator: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\OperatorController::update
* @see app/Http/Controllers/OperatorController.php:89
* @route '//localhost/operators/{operator}'
*/
updateForm.put = (args: { operator: number | { id: number } } | [operator: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\OperatorController::update
* @see app/Http/Controllers/OperatorController.php:89
* @route '//localhost/operators/{operator}'
*/
updateForm.patch = (args: { operator: number | { id: number } } | [operator: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

/**
* @see \App\Http\Controllers\OperatorController::destroy
* @see app/Http/Controllers/OperatorController.php:126
* @route '//localhost/operators/{operator}'
*/
export const destroy = (args: { operator: number | { id: number } } | [operator: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '//localhost/operators/{operator}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\OperatorController::destroy
* @see app/Http/Controllers/OperatorController.php:126
* @route '//localhost/operators/{operator}'
*/
destroy.url = (args: { operator: number | { id: number } } | [operator: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { operator: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { operator: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            operator: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        operator: typeof args.operator === 'object'
        ? args.operator.id
        : args.operator,
    }

    return destroy.definition.url
            .replace('{operator}', parsedArgs.operator.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\OperatorController::destroy
* @see app/Http/Controllers/OperatorController.php:126
* @route '//localhost/operators/{operator}'
*/
destroy.delete = (args: { operator: number | { id: number } } | [operator: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\OperatorController::destroy
* @see app/Http/Controllers/OperatorController.php:126
* @route '//localhost/operators/{operator}'
*/
const destroyForm = (args: { operator: number | { id: number } } | [operator: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\OperatorController::destroy
* @see app/Http/Controllers/OperatorController.php:126
* @route '//localhost/operators/{operator}'
*/
destroyForm.delete = (args: { operator: number | { id: number } } | [operator: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const OperatorController = { index, create, store, show, edit, update, destroy }

export default OperatorController