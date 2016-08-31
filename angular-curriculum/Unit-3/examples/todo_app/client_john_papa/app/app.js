(function() {
    'use strict'

    angular
        .module("todoApp", ['ngRoute'])
        .config(config);

    config.$inject = ['$locationProvider'];

    function config($locationProvider) {
        $locationProvider.html5Mode(true);
    }
})();
