import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Auth\FixedCredentialLoginController::showLoginForm
* @see app/Http/Controllers/Auth/FixedCredentialLoginController.php:27
* @route '/system-login'
*/
export const showLoginForm = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showLoginForm.url(options),
    method: 'get',
})

showLoginForm.definition = {
    methods: ["get","head"],
    url: '/system-login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Auth\FixedCredentialLoginController::showLoginForm
* @see app/Http/Controllers/Auth/FixedCredentialLoginController.php:27
* @route '/system-login'
*/
showLoginForm.url = (options?: RouteQueryOptions) => {
    return showLoginForm.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\FixedCredentialLoginController::showLoginForm
* @see app/Http/Controllers/Auth/FixedCredentialLoginController.php:27
* @route '/system-login'
*/
showLoginForm.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showLoginForm.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\FixedCredentialLoginController::showLoginForm
* @see app/Http/Controllers/Auth/FixedCredentialLoginController.php:27
* @route '/system-login'
*/
showLoginForm.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showLoginForm.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Auth\FixedCredentialLoginController::showLoginForm
* @see app/Http/Controllers/Auth/FixedCredentialLoginController.php:27
* @route '/system-login'
*/
const showLoginFormForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showLoginForm.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\FixedCredentialLoginController::showLoginForm
* @see app/Http/Controllers/Auth/FixedCredentialLoginController.php:27
* @route '/system-login'
*/
showLoginFormForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showLoginForm.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\FixedCredentialLoginController::showLoginForm
* @see app/Http/Controllers/Auth/FixedCredentialLoginController.php:27
* @route '/system-login'
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
* @see \App\Http\Controllers\Auth\FixedCredentialLoginController::login
* @see app/Http/Controllers/Auth/FixedCredentialLoginController.php:44
* @route '/system-login'
*/
export const login = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: login.url(options),
    method: 'post',
})

login.definition = {
    methods: ["post"],
    url: '/system-login',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Auth\FixedCredentialLoginController::login
* @see app/Http/Controllers/Auth/FixedCredentialLoginController.php:44
* @route '/system-login'
*/
login.url = (options?: RouteQueryOptions) => {
    return login.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\FixedCredentialLoginController::login
* @see app/Http/Controllers/Auth/FixedCredentialLoginController.php:44
* @route '/system-login'
*/
login.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: login.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Auth\FixedCredentialLoginController::login
* @see app/Http/Controllers/Auth/FixedCredentialLoginController.php:44
* @route '/system-login'
*/
const loginForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: login.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Auth\FixedCredentialLoginController::login
* @see app/Http/Controllers/Auth/FixedCredentialLoginController.php:44
* @route '/system-login'
*/
loginForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: login.url(options),
    method: 'post',
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

const FixedCredentialLoginController = { showLoginForm, login, logout }

export default FixedCredentialLoginController