'use strict';

/**
 * @ngdoc overview
 * @name proConnectApp
 * @description
 * # proConnectApp
 *
 * Main module of the application.
 */
angular
  .module('proConnectApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/settings', {
        templateUrl: 'views/settings.html',
        controller: 'SettingsCtrl'
      })
      .when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl'
      })
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .when('/forum', {
        templateUrl: 'views/forum.html',
        controller: 'ForumCtrl'
      })
      .when('/friendslist', {
        templateUrl: 'views/friendslist.html',
        controller: 'FriendslistCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

  Parse.initialize("iAkM7wKq1rqr60qYUUig2fbyNqoVmKgNo7S1pcd9", "7z1ZDoF1Sju2L5inrUCxWKxOIJjnCbVGUVO1Kqfb");
