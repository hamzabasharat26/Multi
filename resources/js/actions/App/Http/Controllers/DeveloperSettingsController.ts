import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\DeveloperSettingsController::index
* @see app/Http/Controllers/DeveloperSettingsController.php:18
* @route '//localhost/developer-settings'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '//localhost/developer-settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\DeveloperSettingsController::index
* @see app/Http/Controllers/DeveloperSettingsController.php:18
* @route '//localhost/developer-settings'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DeveloperSettingsController::index
* @see app/Http/Controllers/DeveloperSettingsController.php:18
* @route '//localhost/developer-settings'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\DeveloperSettingsController::index
* @see app/Http/Controllers/DeveloperSettingsController.php:18
* @route '//localhost/developer-settings'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\DeveloperSettingsController::index
* @see app/Http/Controllers/DeveloperSettingsController.php:18
* @route '//localhost/developer-settings'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\DeveloperSettingsController::index
* @see app/Http/Controllers/DeveloperSettingsController.php:18
* @route '//localhost/developer-settings'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\DeveloperSettingsController::index
* @see app/Http/Controllers/DeveloperSettingsController.php:18
* @route '//localhost/developer-settings'
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
* @see \App\Http\Controllers\DeveloperSettingsController::updatePassword
* @see app/Http/Controllers/DeveloperSettingsController.php:26
* @route '//localhost/developer-settings/password'
*/
export const updatePassword = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updatePassword.url(options),
    method: 'put',
})

updatePassword.definition = {
    methods: ["put"],
    url: '//localhost/developer-settings/password',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\DeveloperSettingsController::updatePassword
* @see app/Http/Controllers/DeveloperSettingsController.php:26
* @route '//localhost/developer-settings/password'
*/
updatePassword.url = (options?: RouteQueryOptions) => {
    return updatePassword.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DeveloperSettingsController::updatePassword
* @see app/Http/Controllers/DeveloperSettingsController.php:26
* @route '//localhost/developer-settings/password'
*/
updatePassword.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updatePassword.url(options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\DeveloperSettingsController::updatePassword
* @see app/Http/Controllers/DeveloperSettingsController.php:26
* @route '//localhost/developer-settings/password'
*/
const updatePasswordForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updatePassword.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\DeveloperSettingsController::updatePassword
* @see app/Http/Controllers/DeveloperSettingsController.php:26
* @route '//localhost/developer-settings/password'
*/
updatePasswordForm.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updatePassword.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

updatePassword.form = updatePasswordForm

const DeveloperSettingsController = { index, updatePassword }

export default DeveloperSettingsController