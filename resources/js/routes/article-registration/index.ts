import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\ArticleRegistrationController::index
* @see app/Http/Controllers/ArticleRegistrationController.php:21
* @route '/article-registration'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/article-registration',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ArticleRegistrationController::index
* @see app/Http/Controllers/ArticleRegistrationController.php:21
* @route '/article-registration'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ArticleRegistrationController::index
* @see app/Http/Controllers/ArticleRegistrationController.php:21
* @route '/article-registration'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ArticleRegistrationController::index
* @see app/Http/Controllers/ArticleRegistrationController.php:21
* @route '/article-registration'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ArticleRegistrationController::index
* @see app/Http/Controllers/ArticleRegistrationController.php:21
* @route '/article-registration'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ArticleRegistrationController::index
* @see app/Http/Controllers/ArticleRegistrationController.php:21
* @route '/article-registration'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ArticleRegistrationController::index
* @see app/Http/Controllers/ArticleRegistrationController.php:21
* @route '/article-registration'
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
* @see \App\Http\Controllers\ArticleRegistrationController::setPassword
* @see app/Http/Controllers/ArticleRegistrationController.php:119
* @route '/article-registration/set-password'
*/
export const setPassword = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: setPassword.url(options),
    method: 'post',
})

setPassword.definition = {
    methods: ["post"],
    url: '/article-registration/set-password',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ArticleRegistrationController::setPassword
* @see app/Http/Controllers/ArticleRegistrationController.php:119
* @route '/article-registration/set-password'
*/
setPassword.url = (options?: RouteQueryOptions) => {
    return setPassword.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ArticleRegistrationController::setPassword
* @see app/Http/Controllers/ArticleRegistrationController.php:119
* @route '/article-registration/set-password'
*/
setPassword.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: setPassword.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ArticleRegistrationController::setPassword
* @see app/Http/Controllers/ArticleRegistrationController.php:119
* @route '/article-registration/set-password'
*/
const setPasswordForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: setPassword.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ArticleRegistrationController::setPassword
* @see app/Http/Controllers/ArticleRegistrationController.php:119
* @route '/article-registration/set-password'
*/
setPasswordForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: setPassword.url(options),
    method: 'post',
})

setPassword.form = setPasswordForm

/**
* @see \App\Http\Controllers\ArticleRegistrationController::verifyPassword
* @see app/Http/Controllers/ArticleRegistrationController.php:157
* @route '/article-registration/verify-password'
*/
export const verifyPassword = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: verifyPassword.url(options),
    method: 'post',
})

verifyPassword.definition = {
    methods: ["post"],
    url: '/article-registration/verify-password',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ArticleRegistrationController::verifyPassword
* @see app/Http/Controllers/ArticleRegistrationController.php:157
* @route '/article-registration/verify-password'
*/
verifyPassword.url = (options?: RouteQueryOptions) => {
    return verifyPassword.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ArticleRegistrationController::verifyPassword
* @see app/Http/Controllers/ArticleRegistrationController.php:157
* @route '/article-registration/verify-password'
*/
verifyPassword.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: verifyPassword.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ArticleRegistrationController::verifyPassword
* @see app/Http/Controllers/ArticleRegistrationController.php:157
* @route '/article-registration/verify-password'
*/
const verifyPasswordForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: verifyPassword.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ArticleRegistrationController::verifyPassword
* @see app/Http/Controllers/ArticleRegistrationController.php:157
* @route '/article-registration/verify-password'
*/
verifyPasswordForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: verifyPassword.url(options),
    method: 'post',
})

verifyPassword.form = verifyPasswordForm

/**
* @see \App\Http\Controllers\ArticleRegistrationController::getSizes
* @see app/Http/Controllers/ArticleRegistrationController.php:47
* @route '/article-registration/articles/{articleId}/sizes'
*/
export const getSizes = (args: { articleId: string | number } | [articleId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getSizes.url(args, options),
    method: 'get',
})

getSizes.definition = {
    methods: ["get","head"],
    url: '/article-registration/articles/{articleId}/sizes',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ArticleRegistrationController::getSizes
* @see app/Http/Controllers/ArticleRegistrationController.php:47
* @route '/article-registration/articles/{articleId}/sizes'
*/
getSizes.url = (args: { articleId: string | number } | [articleId: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { articleId: args }
    }

    if (Array.isArray(args)) {
        args = {
            articleId: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        articleId: args.articleId,
    }

    return getSizes.definition.url
            .replace('{articleId}', parsedArgs.articleId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ArticleRegistrationController::getSizes
* @see app/Http/Controllers/ArticleRegistrationController.php:47
* @route '/article-registration/articles/{articleId}/sizes'
*/
getSizes.get = (args: { articleId: string | number } | [articleId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getSizes.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ArticleRegistrationController::getSizes
* @see app/Http/Controllers/ArticleRegistrationController.php:47
* @route '/article-registration/articles/{articleId}/sizes'
*/
getSizes.head = (args: { articleId: string | number } | [articleId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getSizes.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ArticleRegistrationController::getSizes
* @see app/Http/Controllers/ArticleRegistrationController.php:47
* @route '/article-registration/articles/{articleId}/sizes'
*/
const getSizesForm = (args: { articleId: string | number } | [articleId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getSizes.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ArticleRegistrationController::getSizes
* @see app/Http/Controllers/ArticleRegistrationController.php:47
* @route '/article-registration/articles/{articleId}/sizes'
*/
getSizesForm.get = (args: { articleId: string | number } | [articleId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getSizes.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ArticleRegistrationController::getSizes
* @see app/Http/Controllers/ArticleRegistrationController.php:47
* @route '/article-registration/articles/{articleId}/sizes'
*/
getSizesForm.head = (args: { articleId: string | number } | [articleId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getSizes.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

getSizes.form = getSizesForm

/**
* @see \App\Http\Controllers\ArticleRegistrationController::getImages
* @see app/Http/Controllers/ArticleRegistrationController.php:68
* @route '/article-registration/articles/{articleId}/sizes/{size}/images'
*/
export const getImages = (args: { articleId: string | number, size: string | number } | [articleId: string | number, size: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getImages.url(args, options),
    method: 'get',
})

getImages.definition = {
    methods: ["get","head"],
    url: '/article-registration/articles/{articleId}/sizes/{size}/images',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ArticleRegistrationController::getImages
* @see app/Http/Controllers/ArticleRegistrationController.php:68
* @route '/article-registration/articles/{articleId}/sizes/{size}/images'
*/
getImages.url = (args: { articleId: string | number, size: string | number } | [articleId: string | number, size: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            articleId: args[0],
            size: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        articleId: args.articleId,
        size: args.size,
    }

    return getImages.definition.url
            .replace('{articleId}', parsedArgs.articleId.toString())
            .replace('{size}', parsedArgs.size.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ArticleRegistrationController::getImages
* @see app/Http/Controllers/ArticleRegistrationController.php:68
* @route '/article-registration/articles/{articleId}/sizes/{size}/images'
*/
getImages.get = (args: { articleId: string | number, size: string | number } | [articleId: string | number, size: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getImages.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ArticleRegistrationController::getImages
* @see app/Http/Controllers/ArticleRegistrationController.php:68
* @route '/article-registration/articles/{articleId}/sizes/{size}/images'
*/
getImages.head = (args: { articleId: string | number, size: string | number } | [articleId: string | number, size: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getImages.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ArticleRegistrationController::getImages
* @see app/Http/Controllers/ArticleRegistrationController.php:68
* @route '/article-registration/articles/{articleId}/sizes/{size}/images'
*/
const getImagesForm = (args: { articleId: string | number, size: string | number } | [articleId: string | number, size: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getImages.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ArticleRegistrationController::getImages
* @see app/Http/Controllers/ArticleRegistrationController.php:68
* @route '/article-registration/articles/{articleId}/sizes/{size}/images'
*/
getImagesForm.get = (args: { articleId: string | number, size: string | number } | [articleId: string | number, size: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getImages.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ArticleRegistrationController::getImages
* @see app/Http/Controllers/ArticleRegistrationController.php:68
* @route '/article-registration/articles/{articleId}/sizes/{size}/images'
*/
getImagesForm.head = (args: { articleId: string | number, size: string | number } | [articleId: string | number, size: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getImages.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

getImages.form = getImagesForm

/**
* @see \App\Http\Controllers\ArticleRegistrationController::getCalibration
* @see app/Http/Controllers/ArticleRegistrationController.php:428
* @route '/article-registration/calibration'
*/
export const getCalibration = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getCalibration.url(options),
    method: 'get',
})

getCalibration.definition = {
    methods: ["get","head"],
    url: '/article-registration/calibration',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ArticleRegistrationController::getCalibration
* @see app/Http/Controllers/ArticleRegistrationController.php:428
* @route '/article-registration/calibration'
*/
getCalibration.url = (options?: RouteQueryOptions) => {
    return getCalibration.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ArticleRegistrationController::getCalibration
* @see app/Http/Controllers/ArticleRegistrationController.php:428
* @route '/article-registration/calibration'
*/
getCalibration.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getCalibration.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ArticleRegistrationController::getCalibration
* @see app/Http/Controllers/ArticleRegistrationController.php:428
* @route '/article-registration/calibration'
*/
getCalibration.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getCalibration.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ArticleRegistrationController::getCalibration
* @see app/Http/Controllers/ArticleRegistrationController.php:428
* @route '/article-registration/calibration'
*/
const getCalibrationForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getCalibration.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ArticleRegistrationController::getCalibration
* @see app/Http/Controllers/ArticleRegistrationController.php:428
* @route '/article-registration/calibration'
*/
getCalibrationForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getCalibration.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ArticleRegistrationController::getCalibration
* @see app/Http/Controllers/ArticleRegistrationController.php:428
* @route '/article-registration/calibration'
*/
getCalibrationForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getCalibration.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

getCalibration.form = getCalibrationForm

/**
* @see \App\Http\Controllers\ArticleRegistrationController::saveCalibration
* @see app/Http/Controllers/ArticleRegistrationController.php:458
* @route '/article-registration/calibration'
*/
export const saveCalibration = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: saveCalibration.url(options),
    method: 'post',
})

saveCalibration.definition = {
    methods: ["post"],
    url: '/article-registration/calibration',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ArticleRegistrationController::saveCalibration
* @see app/Http/Controllers/ArticleRegistrationController.php:458
* @route '/article-registration/calibration'
*/
saveCalibration.url = (options?: RouteQueryOptions) => {
    return saveCalibration.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ArticleRegistrationController::saveCalibration
* @see app/Http/Controllers/ArticleRegistrationController.php:458
* @route '/article-registration/calibration'
*/
saveCalibration.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: saveCalibration.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ArticleRegistrationController::saveCalibration
* @see app/Http/Controllers/ArticleRegistrationController.php:458
* @route '/article-registration/calibration'
*/
const saveCalibrationForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: saveCalibration.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ArticleRegistrationController::saveCalibration
* @see app/Http/Controllers/ArticleRegistrationController.php:458
* @route '/article-registration/calibration'
*/
saveCalibrationForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: saveCalibration.url(options),
    method: 'post',
})

saveCalibration.form = saveCalibrationForm

/**
* @see \App\Http\Controllers\ArticleRegistrationController::getCalibrations
* @see app/Http/Controllers/ArticleRegistrationController.php:545
* @route '/article-registration/calibrations'
*/
export const getCalibrations = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getCalibrations.url(options),
    method: 'get',
})

getCalibrations.definition = {
    methods: ["get","head"],
    url: '/article-registration/calibrations',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ArticleRegistrationController::getCalibrations
* @see app/Http/Controllers/ArticleRegistrationController.php:545
* @route '/article-registration/calibrations'
*/
getCalibrations.url = (options?: RouteQueryOptions) => {
    return getCalibrations.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ArticleRegistrationController::getCalibrations
* @see app/Http/Controllers/ArticleRegistrationController.php:545
* @route '/article-registration/calibrations'
*/
getCalibrations.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getCalibrations.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ArticleRegistrationController::getCalibrations
* @see app/Http/Controllers/ArticleRegistrationController.php:545
* @route '/article-registration/calibrations'
*/
getCalibrations.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getCalibrations.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ArticleRegistrationController::getCalibrations
* @see app/Http/Controllers/ArticleRegistrationController.php:545
* @route '/article-registration/calibrations'
*/
const getCalibrationsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getCalibrations.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ArticleRegistrationController::getCalibrations
* @see app/Http/Controllers/ArticleRegistrationController.php:545
* @route '/article-registration/calibrations'
*/
getCalibrationsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getCalibrations.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ArticleRegistrationController::getCalibrations
* @see app/Http/Controllers/ArticleRegistrationController.php:545
* @route '/article-registration/calibrations'
*/
getCalibrationsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getCalibrations.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

getCalibrations.form = getCalibrationsForm

/**
* @see \App\Http\Controllers\ArticleRegistrationController::setActiveCalibration
* @see app/Http/Controllers/ArticleRegistrationController.php:569
* @route '/article-registration/calibrations/{calibrationId}/activate'
*/
export const setActiveCalibration = (args: { calibrationId: string | number } | [calibrationId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: setActiveCalibration.url(args, options),
    method: 'post',
})

setActiveCalibration.definition = {
    methods: ["post"],
    url: '/article-registration/calibrations/{calibrationId}/activate',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ArticleRegistrationController::setActiveCalibration
* @see app/Http/Controllers/ArticleRegistrationController.php:569
* @route '/article-registration/calibrations/{calibrationId}/activate'
*/
setActiveCalibration.url = (args: { calibrationId: string | number } | [calibrationId: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { calibrationId: args }
    }

    if (Array.isArray(args)) {
        args = {
            calibrationId: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        calibrationId: args.calibrationId,
    }

    return setActiveCalibration.definition.url
            .replace('{calibrationId}', parsedArgs.calibrationId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ArticleRegistrationController::setActiveCalibration
* @see app/Http/Controllers/ArticleRegistrationController.php:569
* @route '/article-registration/calibrations/{calibrationId}/activate'
*/
setActiveCalibration.post = (args: { calibrationId: string | number } | [calibrationId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: setActiveCalibration.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ArticleRegistrationController::setActiveCalibration
* @see app/Http/Controllers/ArticleRegistrationController.php:569
* @route '/article-registration/calibrations/{calibrationId}/activate'
*/
const setActiveCalibrationForm = (args: { calibrationId: string | number } | [calibrationId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: setActiveCalibration.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ArticleRegistrationController::setActiveCalibration
* @see app/Http/Controllers/ArticleRegistrationController.php:569
* @route '/article-registration/calibrations/{calibrationId}/activate'
*/
setActiveCalibrationForm.post = (args: { calibrationId: string | number } | [calibrationId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: setActiveCalibration.url(args, options),
    method: 'post',
})

setActiveCalibration.form = setActiveCalibrationForm

/**
* @see \App\Http\Controllers\ArticleRegistrationController::deleteCalibration
* @see app/Http/Controllers/ArticleRegistrationController.php:583
* @route '/article-registration/calibrations/{calibrationId}'
*/
export const deleteCalibration = (args: { calibrationId: string | number } | [calibrationId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteCalibration.url(args, options),
    method: 'delete',
})

deleteCalibration.definition = {
    methods: ["delete"],
    url: '/article-registration/calibrations/{calibrationId}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\ArticleRegistrationController::deleteCalibration
* @see app/Http/Controllers/ArticleRegistrationController.php:583
* @route '/article-registration/calibrations/{calibrationId}'
*/
deleteCalibration.url = (args: { calibrationId: string | number } | [calibrationId: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { calibrationId: args }
    }

    if (Array.isArray(args)) {
        args = {
            calibrationId: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        calibrationId: args.calibrationId,
    }

    return deleteCalibration.definition.url
            .replace('{calibrationId}', parsedArgs.calibrationId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ArticleRegistrationController::deleteCalibration
* @see app/Http/Controllers/ArticleRegistrationController.php:583
* @route '/article-registration/calibrations/{calibrationId}'
*/
deleteCalibration.delete = (args: { calibrationId: string | number } | [calibrationId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteCalibration.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\ArticleRegistrationController::deleteCalibration
* @see app/Http/Controllers/ArticleRegistrationController.php:583
* @route '/article-registration/calibrations/{calibrationId}'
*/
const deleteCalibrationForm = (args: { calibrationId: string | number } | [calibrationId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: deleteCalibration.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ArticleRegistrationController::deleteCalibration
* @see app/Http/Controllers/ArticleRegistrationController.php:583
* @route '/article-registration/calibrations/{calibrationId}'
*/
deleteCalibrationForm.delete = (args: { calibrationId: string | number } | [calibrationId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: deleteCalibration.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

deleteCalibration.form = deleteCalibrationForm

/**
* @see \App\Http\Controllers\ArticleRegistrationController::saveAnnotation
* @see app/Http/Controllers/ArticleRegistrationController.php:181
* @route '/article-registration/annotations'
*/
export const saveAnnotation = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: saveAnnotation.url(options),
    method: 'post',
})

saveAnnotation.definition = {
    methods: ["post"],
    url: '/article-registration/annotations',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ArticleRegistrationController::saveAnnotation
* @see app/Http/Controllers/ArticleRegistrationController.php:181
* @route '/article-registration/annotations'
*/
saveAnnotation.url = (options?: RouteQueryOptions) => {
    return saveAnnotation.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ArticleRegistrationController::saveAnnotation
* @see app/Http/Controllers/ArticleRegistrationController.php:181
* @route '/article-registration/annotations'
*/
saveAnnotation.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: saveAnnotation.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ArticleRegistrationController::saveAnnotation
* @see app/Http/Controllers/ArticleRegistrationController.php:181
* @route '/article-registration/annotations'
*/
const saveAnnotationForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: saveAnnotation.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ArticleRegistrationController::saveAnnotation
* @see app/Http/Controllers/ArticleRegistrationController.php:181
* @route '/article-registration/annotations'
*/
saveAnnotationForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: saveAnnotation.url(options),
    method: 'post',
})

saveAnnotation.form = saveAnnotationForm

/**
* @see \App\Http\Controllers\ArticleRegistrationController::getAnnotation
* @see app/Http/Controllers/ArticleRegistrationController.php:373
* @route '/article-registration/annotations/{articleImageId}'
*/
export const getAnnotation = (args: { articleImageId: string | number } | [articleImageId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getAnnotation.url(args, options),
    method: 'get',
})

getAnnotation.definition = {
    methods: ["get","head"],
    url: '/article-registration/annotations/{articleImageId}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ArticleRegistrationController::getAnnotation
* @see app/Http/Controllers/ArticleRegistrationController.php:373
* @route '/article-registration/annotations/{articleImageId}'
*/
getAnnotation.url = (args: { articleImageId: string | number } | [articleImageId: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { articleImageId: args }
    }

    if (Array.isArray(args)) {
        args = {
            articleImageId: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        articleImageId: args.articleImageId,
    }

    return getAnnotation.definition.url
            .replace('{articleImageId}', parsedArgs.articleImageId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ArticleRegistrationController::getAnnotation
* @see app/Http/Controllers/ArticleRegistrationController.php:373
* @route '/article-registration/annotations/{articleImageId}'
*/
getAnnotation.get = (args: { articleImageId: string | number } | [articleImageId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getAnnotation.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ArticleRegistrationController::getAnnotation
* @see app/Http/Controllers/ArticleRegistrationController.php:373
* @route '/article-registration/annotations/{articleImageId}'
*/
getAnnotation.head = (args: { articleImageId: string | number } | [articleImageId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getAnnotation.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ArticleRegistrationController::getAnnotation
* @see app/Http/Controllers/ArticleRegistrationController.php:373
* @route '/article-registration/annotations/{articleImageId}'
*/
const getAnnotationForm = (args: { articleImageId: string | number } | [articleImageId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getAnnotation.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ArticleRegistrationController::getAnnotation
* @see app/Http/Controllers/ArticleRegistrationController.php:373
* @route '/article-registration/annotations/{articleImageId}'
*/
getAnnotationForm.get = (args: { articleImageId: string | number } | [articleImageId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getAnnotation.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ArticleRegistrationController::getAnnotation
* @see app/Http/Controllers/ArticleRegistrationController.php:373
* @route '/article-registration/annotations/{articleImageId}'
*/
getAnnotationForm.head = (args: { articleImageId: string | number } | [articleImageId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getAnnotation.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

getAnnotation.form = getAnnotationForm

/**
* @see \App\Http\Controllers\ArticleRegistrationController::deleteAnnotation
* @see app/Http/Controllers/ArticleRegistrationController.php:405
* @route '/article-registration/annotations/{annotationId}'
*/
export const deleteAnnotation = (args: { annotationId: string | number } | [annotationId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteAnnotation.url(args, options),
    method: 'delete',
})

deleteAnnotation.definition = {
    methods: ["delete"],
    url: '/article-registration/annotations/{annotationId}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\ArticleRegistrationController::deleteAnnotation
* @see app/Http/Controllers/ArticleRegistrationController.php:405
* @route '/article-registration/annotations/{annotationId}'
*/
deleteAnnotation.url = (args: { annotationId: string | number } | [annotationId: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { annotationId: args }
    }

    if (Array.isArray(args)) {
        args = {
            annotationId: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        annotationId: args.annotationId,
    }

    return deleteAnnotation.definition.url
            .replace('{annotationId}', parsedArgs.annotationId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ArticleRegistrationController::deleteAnnotation
* @see app/Http/Controllers/ArticleRegistrationController.php:405
* @route '/article-registration/annotations/{annotationId}'
*/
deleteAnnotation.delete = (args: { annotationId: string | number } | [annotationId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteAnnotation.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\ArticleRegistrationController::deleteAnnotation
* @see app/Http/Controllers/ArticleRegistrationController.php:405
* @route '/article-registration/annotations/{annotationId}'
*/
const deleteAnnotationForm = (args: { annotationId: string | number } | [annotationId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: deleteAnnotation.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ArticleRegistrationController::deleteAnnotation
* @see app/Http/Controllers/ArticleRegistrationController.php:405
* @route '/article-registration/annotations/{annotationId}'
*/
deleteAnnotationForm.delete = (args: { annotationId: string | number } | [annotationId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: deleteAnnotation.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

deleteAnnotation.form = deleteAnnotationForm

const articleRegistration = {
    index: Object.assign(index, index),
    setPassword: Object.assign(setPassword, setPassword),
    verifyPassword: Object.assign(verifyPassword, verifyPassword),
    getSizes: Object.assign(getSizes, getSizes),
    getImages: Object.assign(getImages, getImages),
    getCalibration: Object.assign(getCalibration, getCalibration),
    saveCalibration: Object.assign(saveCalibration, saveCalibration),
    getCalibrations: Object.assign(getCalibrations, getCalibrations),
    setActiveCalibration: Object.assign(setActiveCalibration, setActiveCalibration),
    deleteCalibration: Object.assign(deleteCalibration, deleteCalibration),
    saveAnnotation: Object.assign(saveAnnotation, saveAnnotation),
    getAnnotation: Object.assign(getAnnotation, getAnnotation),
    deleteAnnotation: Object.assign(deleteAnnotation, deleteAnnotation),
}

export default articleRegistration