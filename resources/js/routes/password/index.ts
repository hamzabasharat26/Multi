import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\Settings\ProfileController::update
* @see app/Http/Controllers/Settings/ProfileController.php:47
* @route '/settings/password'
*/
export const update = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(options),
    method: 'patch',
})

update.definition = {
    methods: ["patch"],
    url: '/settings/password',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\Settings\ProfileController::update
* @see app/Http/Controllers/Settings/ProfileController.php:47
* @route '/settings/password'
*/
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\ProfileController::update
* @see app/Http/Controllers/Settings/ProfileController.php:47
* @route '/settings/password'
*/
update.patch = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Settings\ProfileController::update
* @see app/Http/Controllers/Settings/ProfileController.php:47
* @route '/settings/password'
*/
const updateForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Settings\ProfileController::update
* @see app/Http/Controllers/Settings/ProfileController.php:47
* @route '/settings/password'
*/
updateForm.patch = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

const password = {
    update: Object.assign(update, update),
}

export default password