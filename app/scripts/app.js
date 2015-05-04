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
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'LocalStorageModule',
    'parse-angular',
    'ui.bootstrap',
    'youtube-embed',
    'ui.router',
  ])
  .config(['localStorageServiceProvider', function(localStorageServiceProvider){
  localStorageServiceProvider.setPrefix('ls');
}])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
      .state('home', {
          url:'/',
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
      })
      .state('about', {
          url:'/about',
          templateUrl: 'views/about.html',
          controller: 'AboutCtrl'
      })
      .state('settings', {
          url:'/settings',
          templateUrl: 'views/settings.html',
          controller: 'SettingsCtrl'
      })
      .state('profile', {
          url:'/profile',
          templateUrl: 'views/profile.html',
          controller: 'ProfileCtrl'
      })
      .state('viewprofile', {
          url:'/profile/:other',
          templateUrl: 'views/profile.html',
          controller: 'ViewprofileCtrl'
      })
      .state('forum', {
          url:'/forum',
          templateUrl: 'views/forum.html',
          controller: 'ForumCtrl'
      })
      .state('friendslist', {
          url:'/contactslist',
          templateUrl: 'views/contactslist.html',
          controller: 'FriendslistCtrl'
      })
      .state('searchresults', {
          url:'/searchresults',
          templateUrl: 'views/searchresults.html',
          controller: 'SearchresultsCtrl'
      })
}]);

  Parse.initialize("iAkM7wKq1rqr60qYUUig2fbyNqoVmKgNo7S1pcd9", "7z1ZDoF1Sju2L5inrUCxWKxOIJjnCbVGUVO1Kqfb");
