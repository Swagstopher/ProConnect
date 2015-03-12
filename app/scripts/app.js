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
      .otherwise({
        redirectTo: '/'
      });
  });

  Parse.initialize("iAkM7wKq1rqr60qYUUig2fbyNqoVmKgNo7S1pcd9", "7z1ZDoF1Sju2L5inrUCxWKxOIJjnCbVGUVO1Kqfb");

  function register(){
      var newUser = new Parse.User();

      newUser.set("username", document.getElementById("registerEmail").value);
      newUser.set("password", document.getElementById("registerPassword").value);
      newUser.signUp(null, {
          success: function(newUser)
          {
              // move user to next page to add additional info, in register.js
          },
          error: function(newUser, error){ // error if email is already taken
              response.error("Error: " + error.code + " " + error.message);
          }})
  }

  function logIn(){
  var username = document.getElementById("loginEmail").value;
  var password = document.getElementById("loginPassword").value;

  Parse.User.logIn(username, password, {
    success: function(user) {
      // Do stuff after successful login.
    },
    error: function(user, error) {
      // The login failed. Check error to see why.
    }
  })
  }
