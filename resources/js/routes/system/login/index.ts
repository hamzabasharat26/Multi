import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Auth\FixedCredentialLoginController::submit
* @see app/Http/Controllers/Auth/FixedCredentialLoginController.php:44
* @route '//localhost/system-login'
*/
export const submit = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: submit.url(options),
    method: 'post',
})

submit.definition = {
    methods: ["post"],
    url: '//localhost/system-login',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Auth\FixedCredentialLoginController::submit
* @see app/Http/Controllers/Auth/FixedCredentialLoginController.php:44
* @route '//localhost/system-login'
*/
submit.url = (options?: RouteQueryOptions) => {
    return submit.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\FixedCredentialLoginController::submit
* @see app/Http/Controllers/Auth/FixedCredentialLoginController.php:44
* @route '//localhost/system-login'
*/
submit.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: submit.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Auth\FixedCredentialLoginController::submit
* @see app/Http/Controllers/Auth/FixedCredentialLoginController.php:44
* @route '//localhost/system-login'
*/
const submitForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: submit.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Auth\FixedCredentialLoginController::submit
* @see app/Http/Controllers/Auth/FixedCredentialLoginController.php:44
* @route '//localhost/system-login'
*/
submitForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: submit.url(options),
    method: 'post',
})

submit.form = submitForm

const login = {
    submit: Object.assign(submit, submit),
}

export default login