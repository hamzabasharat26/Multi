import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
import exportMethod from './export'
/**
* @see \App\Http\Controllers\DirectorAnalyticsController::dashboard
* @see app/Http/Controllers/DirectorAnalyticsController.php:20
* @route '//localhost/director-analytics-dashboard'
*/
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '//localhost/director-analytics-dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\DirectorAnalyticsController::dashboard
* @see app/Http/Controllers/DirectorAnalyticsController.php:20
* @route '//localhost/director-analytics-dashboard'
*/
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DirectorAnalyticsController::dashboard
* @see app/Http/Controllers/DirectorAnalyticsController.php:20
* @route '//localhost/director-analytics-dashboard'
*/
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\DirectorAnalyticsController::dashboard
* @see app/Http/Controllers/DirectorAnalyticsController.php:20
* @route '//localhost/director-analytics-dashboard'
*/
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\DirectorAnalyticsController::dashboard
* @see app/Http/Controllers/DirectorAnalyticsController.php:20
* @route '//localhost/director-analytics-dashboard'
*/
const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\DirectorAnalyticsController::dashboard
* @see app/Http/Controllers/DirectorAnalyticsController.php:20
* @route '//localhost/director-analytics-dashboard'
*/
dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\DirectorAnalyticsController::dashboard
* @see app/Http/Controllers/DirectorAnalyticsController.php:20
* @route '//localhost/director-analytics-dashboard'
*/
dashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

dashboard.form = dashboardForm

const analytics = {
    dashboard: Object.assign(dashboard, dashboard),
    export: Object.assign(exportMethod, exportMethod),
}

export default analytics