import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\SystemSettingsController::index
* @see app/Http/Controllers/SystemSettingsController.php:18
* @route '/system-settings'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/system-settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SystemSettingsController::index
* @see app/Http/Controllers/SystemSettingsController.php:18
* @route '/system-settings'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SystemSettingsController::index
* @see app/Http/Controllers/SystemSettingsController.php:18
* @route '/system-settings'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\SystemSettingsController::index
* @see app/Http/Controllers/SystemSettingsController.php:18
* @route '/system-settings'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\SystemSettingsController::index
* @see app/Http/Controllers/SystemSettingsController.php:18
* @route '/system-settings'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\SystemSettingsController::index
* @see app/Http/Controllers/SystemSettingsController.php:18
* @route '/system-settings'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\SystemSettingsController::index
* @see app/Http/Controllers/SystemSettingsController.php:18
* @route '/system-settings'
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
* @see \App\Http\Controllers\SystemSettingsController::updateUsername
* @see app/Http/Controllers/SystemSettingsController.php:33
* @route '/system-settings/username'
*/
export const updateUsername = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateUsername.url(options),
    method: 'put',
})

updateUsername.definition = {
    methods: ["put"],
    url: '/system-settings/username',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\SystemSettingsController::updateUsername
* @see app/Http/Controllers/SystemSettingsController.php:33
* @route '/system-settings/username'
*/
updateUsername.url = (options?: RouteQueryOptions) => {
    return updateUsername.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SystemSettingsController::updateUsername
* @see app/Http/Controllers/SystemSettingsController.php:33
* @route '/system-settings/username'
*/
updateUsername.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateUsername.url(options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\SystemSettingsController::updateUsername
* @see app/Http/Controllers/SystemSettingsController.php:33
* @route '/system-settings/username'
*/
const updateUsernameForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateUsername.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SystemSettingsController::updateUsername
* @see app/Http/Controllers/SystemSettingsController.php:33
* @route '/system-settings/username'
*/
updateUsernameForm.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateUsername.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

updateUsername.form = updateUsernameForm

/**
* @see \App\Http\Controllers\SystemSettingsController::updatePassword
* @see app/Http/Controllers/SystemSettingsController.php:74
* @route '/system-settings/password'
*/
export const updatePassword = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updatePassword.url(options),
    method: 'put',
})

updatePassword.definition = {
    methods: ["put"],
    url: '/system-settings/password',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\SystemSettingsController::updatePassword
* @see app/Http/Controllers/SystemSettingsController.php:74
* @route '/system-settings/password'
*/
updatePassword.url = (options?: RouteQueryOptions) => {
    return updatePassword.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SystemSettingsController::updatePassword
* @see app/Http/Controllers/SystemSettingsController.php:74
* @route '/system-settings/password'
*/
updatePassword.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updatePassword.url(options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\SystemSettingsController::updatePassword
* @see app/Http/Controllers/SystemSettingsController.php:74
* @route '/system-settings/password'
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
* @see \App\Http\Controllers\SystemSettingsController::updatePassword
* @see app/Http/Controllers/SystemSettingsController.php:74
* @route '/system-settings/password'
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

const SystemSettingsController = { index, updateUsername, updatePassword }

export default SystemSettingsController