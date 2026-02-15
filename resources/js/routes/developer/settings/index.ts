import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\DeveloperSettingsController::password
* @see app/Http/Controllers/DeveloperSettingsController.php:26
* @route '/developer-settings/password'
*/
export const password = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: password.url(options),
    method: 'put',
})

password.definition = {
    methods: ["put"],
    url: '/developer-settings/password',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\DeveloperSettingsController::password
* @see app/Http/Controllers/DeveloperSettingsController.php:26
* @route '/developer-settings/password'
*/
password.url = (options?: RouteQueryOptions) => {
    return password.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DeveloperSettingsController::password
* @see app/Http/Controllers/DeveloperSettingsController.php:26
* @route '/developer-settings/password'
*/
password.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: password.url(options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\DeveloperSettingsController::password
* @see app/Http/Controllers/DeveloperSettingsController.php:26
* @route '/developer-settings/password'
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
* @see \App\Http\Controllers\DeveloperSettingsController::password
* @see app/Http/Controllers/DeveloperSettingsController.php:26
* @route '/developer-settings/password'
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
    password: Object.assign(password, password),
}

export default settings