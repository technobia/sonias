/**
 * Created by apium on 01/08/2015.
 */
define([
        'config',
        'controllers/IndexController'
    ],
    function(
        config
    ) {
        'use strict';

        var app = angular.module('vtsolutionBackend', [
            'ngRoute'
        ]);

        app.config(config);
    });
