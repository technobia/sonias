/**
 * Created by THANH BINH on 10/17/2015.
 */
define([], function() {
    function config($routeProvider, $locationProvider) {
        $locationProvider.html5Mode({
            enabled: false,
            requireBase: true
        });

        $routeProvider
            .when('/', {
                templateUrl: '/templates/page.html'
            })
            .otherwise({
                templateUrl: '/templates/page.html'
            });
    }

    config.$inject = ['$routeProvider', '$locationProvider'];

    return config;
});