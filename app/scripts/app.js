'use strict';

/**
 * @ngdoc overview
 * @name angularApp
 * @description
 * # angularApp
 *
 * Main module of the application.
 */
angular
  .module('angularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'ResultCtrl'
      })
      .when('/encuesta', {
        templateUrl: 'views/encuestas/familiar.html',
        controller: 'familiar'
      })
      .when('/resultado', {
        templateUrl: 'views/resultado.html',
        controller: 'ResultCtrl'
      })
        .when('/display', {
            templateUrl: 'views/displayItem.html',
            controller: 'DisplayCtrl'
        })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
