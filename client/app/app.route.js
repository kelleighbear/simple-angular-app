(function() {
    'use strict';

    angular.module('app')
        .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('root', {
                url: '/',
                abstract: true,
                views: {
                    'main': {
                        templateUrl: 'layout/shell.html'
                    },
                    'header@root': {
                        templateUrl: 'layout/header.html',
                        controller: 'HeaderController',
                        controllerAs: 'header'
                    }
                }
            })
            .state('root.home', {
                url: 'home',
                views: {
                    'tab-content@root': {
                        templateUrl: 'home/home.html',
                        controller: 'HomeController',
                        controllerAs: 'home'
                    }
                }
            })
            .state('root.login', {
                url: 'login',
                views: {
                    'tab-content@root': {
                        templateUrl: 'login/login.html',
                        controller: 'LoginController',
                        controllerAs: 'login'
                    }
                }
            })
            .state('root.about', {
                url: 'about',
                views: {
                    'tab-content@root': {
                        templateUrl: 'about/about.html',
                        controller: 'AboutController',
                        controllerAs: 'about'
                    }
                }
            })
            .state('root.contact', {
                url: 'contact',
                views: {
                    'tab-content@root': {
                        templateUrl: 'contact/contact.html',
                        controller: 'ContactController',
                        controllerAs: 'contact'
                    }
                }

            });
    }
})();
