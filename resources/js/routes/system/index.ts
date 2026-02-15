import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
import loginDf2c2a from './login'
import settings69f00b from './settings'
/**
* @see \App\Http\Controllers\Auth\FixedCredentialLoginController::login
* @see app/Http/Controllers/Auth/FixedCredentialLoginController.php:27
* @route '/system-login'
*/
export const login = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})

login.definition = {
    methods: ["get","head"],
    url: '/system-login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Auth\FixedCredentialLoginController::login
* @see app/Http/Controllers/Auth/FixedCredentialLoginController.php:27
* @route '/system-login'
*/
login.url = (options?: RouteQueryOptions) => {
    return login.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\FixedCredentialLoginController::login
* @see app/Http/Controllers/Auth/FixedCredentialLoginController.php:27
* @route '/system-login'
*/
login.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\FixedCredentialLoginController::login
* @see app/Http/Controllers/Auth/FixedCredentialLoginController.php:27
* @route '/system-login'
*/
login.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: login.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Auth\FixedCredentialLoginController::login
* @see app/Http/Controllers/Auth/FixedCredentialLoginController.php:27
* @route '/system-login'
*/
const loginForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: login.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\FixedCredentialLoginController::login
* @see app/Http/Controllers/Auth/FixedCredentialLoginController.php:27
* @route '/system-login'
*/
loginForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: login.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\FixedCredentialLoginController::login
* @see app/Http/Controllers/Auth/FixedCredentialLoginController.php:27
* @route '/system-login'
*/
loginForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: login.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

login.form = loginForm

/**
* @see \App\Http\Controllers\Auth\FixedCredentialLoginController::logout
* @see app/Http/Controllers/Auth/FixedCredentialLoginController.php:78
* @route '/system-logout'
*/
export const logout = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

logout.definition = {
    methods: ["post"],
    url: '/system-logout',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Auth\FixedCredentialLoginController::logout
* @see app/Http/Controllers/Auth/FixedCredentialLoginController.php:78
* @route '/system-logout'
*/
logout.url = (options?: RouteQueryOptions) => {
    return logout.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\FixedCredentialLoginController::logout
* @see app/Http/Controllers/Auth/FixedCredentialLoginController.php:78
* @route '/system-logout'
*/
logout.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Auth\FixedCredentialLoginController::logout
* @see app/Http/Controllers/Auth/FixedCredentialLoginController.php:78
* @route '/system-logout'
*/
const logoutForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: logout.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Auth\FixedCredentialLoginController::logout
* @see app/Http/Controllers/Auth/FixedCredentialLoginController.php:78
* @route '/system-logout'
*/
logoutForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: logout.url(options),
    method: 'post',
})

logout.form = logoutForm

/**
* @see \App\Http\Controllers\SystemSettingsController::settings
* @see app/Http/Controllers/SystemSettingsController.php:18
* @route '/system-settings'
*/
export const settings = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: settings.url(options),
    method: 'get',
})

settings.definition = {
    methods: ["get","head"],
    url: '/system-settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SystemSettingsController::settings
* @see app/Http/Controllers/SystemSettingsController.php:18
* @route '/system-settings'
*/
settings.url = (options?: RouteQueryOptions) => {
    return settings.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SystemSettingsController::settings
* @see app/Http/Controllers/SystemSettingsController.php:18
* @route '/system-settings'
*/
settings.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: settings.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\SystemSettingsController::settings
* @see app/Http/Controllers/SystemSettingsController.php:18
* @route '/system-settings'
*/
settings.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: settings.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\SystemSettingsController::settings
* @see app/Http/Controllers/SystemSettingsController.php:18
* @route '/system-settings'
*/
const settingsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: settings.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\SystemSettingsController::settings
* @see app/Http/Controllers/SystemSettingsController.php:18
* @route '/system-settings'
*/
settingsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: settings.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\SystemSettingsController::settings
* @see app/Http/Controllers/SystemSettingsController.php:18
* @route '/system-settings'
*/
settingsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: settings.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

settings.form = settingsForm

const system = {
    login: Object.assign(login, loginDf2c2a),
    logout: Object.assign(logout, logout),
    settings: Object.assign(settings, settings69f00b),
}

export default system