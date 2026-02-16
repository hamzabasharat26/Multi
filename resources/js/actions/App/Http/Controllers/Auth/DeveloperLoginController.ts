import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Auth\DeveloperLoginController::showLoginForm
* @see app/Http/Controllers/Auth/DeveloperLoginController.php:16
* @route '//localhost/developer-login'
*/
export const showLoginForm = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showLoginForm.url(options),
    method: 'get',
})

showLoginForm.definition = {
    methods: ["get","head"],
    url: '//localhost/developer-login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Auth\DeveloperLoginController::showLoginForm
* @see app/Http/Controllers/Auth/DeveloperLoginController.php:16
* @route '//localhost/developer-login'
*/
showLoginForm.url = (options?: RouteQueryOptions) => {
    return showLoginForm.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\DeveloperLoginController::showLoginForm
* @see app/Http/Controllers/Auth/DeveloperLoginController.php:16
* @route '//localhost/developer-login'
*/
showLoginForm.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showLoginForm.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\DeveloperLoginController::showLoginForm
* @see app/Http/Controllers/Auth/DeveloperLoginController.php:16
* @route '//localhost/developer-login'
*/
showLoginForm.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showLoginForm.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Auth\DeveloperLoginController::showLoginForm
* @see app/Http/Controllers/Auth/DeveloperLoginController.php:16
* @route '//localhost/developer-login'
*/
const showLoginFormForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showLoginForm.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\DeveloperLoginController::showLoginForm
* @see app/Http/Controllers/Auth/DeveloperLoginController.php:16
* @route '//localhost/developer-login'
*/
showLoginFormForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showLoginForm.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\DeveloperLoginController::showLoginForm
* @see app/Http/Controllers/Auth/DeveloperLoginController.php:16
* @route '//localhost/developer-login'
*/
showLoginFormForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showLoginForm.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

showLoginForm.form = showLoginFormForm

/**
* @see \App\Http\Controllers\Auth\DeveloperLoginController::login
* @see app/Http/Controllers/Auth/DeveloperLoginController.php:29
* @route '//localhost/developer-login'
*/
export const login = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: login.url(options),
    method: 'post',
})

login.definition = {
    methods: ["post"],
    url: '//localhost/developer-login',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Auth\DeveloperLoginController::login
* @see app/Http/Controllers/Auth/DeveloperLoginController.php:29
* @route '//localhost/developer-login'
*/
login.url = (options?: RouteQueryOptions) => {
    return login.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\DeveloperLoginController::login
* @see app/Http/Controllers/Auth/DeveloperLoginController.php:29
* @route '//localhost/developer-login'
*/
login.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: login.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Auth\DeveloperLoginController::login
* @see app/Http/Controllers/Auth/DeveloperLoginController.php:29
* @route '//localhost/developer-login'
*/
const loginForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: login.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Auth\DeveloperLoginController::login
* @see app/Http/Controllers/Auth/DeveloperLoginController.php:29
* @route '//localhost/developer-login'
*/
loginForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: login.url(options),
    method: 'post',
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

const DeveloperLoginController = { showLoginForm, login, logout }

export default DeveloperLoginController