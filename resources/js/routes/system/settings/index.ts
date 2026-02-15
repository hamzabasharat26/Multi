import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\SystemSettingsController::username
* @see app/Http/Controllers/SystemSettingsController.php:33
* @route '/system-settings/username'
*/
export const username = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: username.url(options),
    method: 'put',
})

username.definition = {
    methods: ["put"],
    url: '/system-settings/username',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\SystemSettingsController::username
* @see app/Http/Controllers/SystemSettingsController.php:33
* @route '/system-settings/username'
*/
username.url = (options?: RouteQueryOptions) => {
    return username.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SystemSettingsController::username
* @see app/Http/Controllers/SystemSettingsController.php:33
* @route '/system-settings/username'
*/
username.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: username.url(options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\SystemSettingsController::username
* @see app/Http/Controllers/SystemSettingsController.php:33
* @route '/system-settings/username'
*/
const usernameForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: username.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SystemSettingsController::username
* @see app/Http/Controllers/SystemSettingsController.php:33
* @route '/system-settings/username'
*/
usernameForm.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: username.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

username.form = usernameForm

/**
* @see \App\Http\Controllers\SystemSettingsController::password
* @see app/Http/Controllers/SystemSettingsController.php:74
* @route '/system-settings/password'
*/
export const password = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: password.url(options),
    method: 'put',
})

password.definition = {
    methods: ["put"],
    url: '/system-settings/password',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\SystemSettingsController::password
* @see app/Http/Controllers/SystemSettingsController.php:74
* @route '/system-settings/password'
*/
password.url = (options?: RouteQueryOptions) => {
    return password.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SystemSettingsController::password
* @see app/Http/Controllers/SystemSettingsController.php:74
* @route '/system-settings/password'
*/
password.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: password.url(options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\SystemSettingsController::password
* @see app/Http/Controllers/SystemSettingsController.php:74
* @route '/system-settings/password'
*/
const passwordForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: password.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SystemSettingsController::password
* @see app/Http/Controllers/SystemSettingsController.php:74
* @route '/system-settings/password'
*/
passwordForm.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: password.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

password.form = passwordForm

const settings = {
    username: Object.assign(username, username),
    password: Object.assign(password, password),
}

export default settings