'use strict';

/**
 * @ngdoc overview
 * @name virtualListApp
 * @description
 * # virtualListApp
 *
 * Main module of the application.
 */
angular
  .module('virtualListApp', ['ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controllerAs: 'controller',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
