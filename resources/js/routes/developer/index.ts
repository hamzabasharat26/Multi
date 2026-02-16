import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
import loginDf2c2a from './login'
import settings69f00b from './settings'
/**
* @see \App\Http\Controllers\Auth\DeveloperLoginController::login
* @see app/Http/Controllers/Auth/DeveloperLoginController.php:16
* @route '//localhost/developer-login'
*/
export const login = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})

login.definition = {
    methods: ["get","head"],
    url: '//localhost/developer-login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Auth\DeveloperLoginController::login
* @see app/Http/Controllers/Auth/DeveloperLoginController.php:16
* @route '//localhost/developer-login'
*/
login.url = (options?: RouteQueryOptions) => {
    return login.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\DeveloperLoginController::login
* @see app/Http/Controllers/Auth/DeveloperLoginController.php:16
* @route '//localhost/developer-login'
*/
login.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\DeveloperLoginController::login
* @see app/Http/Controllers/Auth/DeveloperLoginController.php:16
* @route '//localhost/developer-login'
*/
login.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: login.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Auth\DeveloperLoginController::login
* @see app/Http/Controllers/Auth/DeveloperLoginController.php:16
* @route '//localhost/developer-login'
*/
const loginForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: login.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\DeveloperLoginController::login
* @see app/Http/Controllers/Auth/DeveloperLoginController.php:16
* @route '//localhost/developer-login'
*/
loginForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: login.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\DeveloperLoginController::login
* @see app/Http/Controllers/Auth/DeveloperLoginController.php:16
* @route '//localhost/developer-login'
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
* @see \App\Http\Controllers\Auth\DeveloperLoginController::logout
* @see app/Http/Controllers/Auth/DeveloperLoginController.php:60
* @route '//localhost/developer-logout'
*/
export const logout = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

logout.definition = {
    methods: ["post"],
    url: '//localhost/developer-logout',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Auth\DeveloperLoginController::logout
* @see app/Http/Controllers/Auth/DeveloperLoginController.php:60
* @route '//localhost/developer-logout'
*/
logout.url = (options?: RouteQueryOptions) => {
    return logout.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\DeveloperLoginController::logout
* @see app/Http/Controllers/Auth/DeveloperLoginController.php:60
* @route '//localhost/developer-logout'
*/
logout.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Auth\DeveloperLoginController::logout
* @see app/Http/Controllers/Auth/DeveloperLoginController.php:60
* @route '//localhost/developer-logout'
*/
const logoutForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: logout.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Auth\DeveloperLoginController::logout
* @see app/Http/Controllers/Auth/DeveloperLoginController.php:60
* @route '//localhost/developer-logout'
*/
logoutForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: logout.url(options),
    method: 'post',
})

logout.form = logoutForm

/**
* @see \App\Http\Controllers\DeveloperSettingsController::settings
* @see app/Http/Controllers/DeveloperSettingsController.php:18
* @route '//localhost/developer-settings'
*/
export const settings = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: settings.url(options),
    method: 'get',
})

settings.definition = {
    methods: ["get","head"],
    url: '//localhost/developer-settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\DeveloperSettingsController::settings
* @see app/Http/Controllers/DeveloperSettingsController.php:18
* @route '//localhost/developer-settings'
*/
settings.url = (options?: RouteQueryOptions) => {
    return settings.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DeveloperSettingsController::settings
* @see app/Http/Controllers/DeveloperSettingsController.php:18
* @route '//localhost/developer-settings'
*/
settings.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: settings.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\DeveloperSettingsController::settings
* @see app/Http/Controllers/DeveloperSettingsController.php:18
* @route '//localhost/developer-settings'
*/
settings.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: settings.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\DeveloperSettingsController::settings
* @see app/Http/Controllers/DeveloperSettingsController.php:18
* @route '//localhost/developer-settings'
*/
const settingsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: settings.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\DeveloperSettingsController::settings
* @see app/Http/Controllers/DeveloperSettingsController.php:18
* @route '//localhost/developer-settings'
*/
settingsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: settings.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\DeveloperSettingsController::settings
* @see app/Http/Controllers/DeveloperSettingsController.php:18
* @route '//localhost/developer-settings'
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

const developer = {
    login: Object.assign(login, loginDf2c2a),
    logout: Object.assign(logout, logout),
    settings: Object.assign(settings, settings69f00b),
}

export default developer