'use strict';

/**
 * @ngdoc function
 * @name proConnectApp.controller:IndexCtrl
 * @description
 * # IndexCtrl
 * Controller of the proConnectApp
 */
angular.module('proConnectApp')
  .controller('IndexCtrl', function ($scope, $rootScope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $rootScope.login = 'false';
    $scope.test = 'ANGULAR IS FUCKING WORKING WOO~~~!!!!!';
    $scope.welcome = 'Welcome to ProConnect!';
    $scope.builtfor = 'The Networking site built for music professionals!';
    $scope.crap = 'https://www.youtube.com/embed/iQpGq4HguVs?start=1547&autoplay=1&showinfo=0&controls=0&autohide=1';

    $scope.parselogin = function() {
      var username = document.getElementById("loginEmail").value;
      var password = document.getElementById("loginPassword").value;

      Parse.User.logIn(username, password, {
        success: function(user) {
          $rootScope.login = 'true';
          $scope.$digest();
        },
        error: function(user, error) {
          // The login failed. Check error to see why.
        }
      })
    };

    $scope.parseregister = function() {
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
    };

  });

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
      $scope.login = 'true';
      $scope.notlogged = 'false';
      $scope.logintest = 'I am logged in!';
      $scope.$digest();
    },
    error: function(user, error) {
      // The login failed. Check error to see why.
    }
  })
  }
