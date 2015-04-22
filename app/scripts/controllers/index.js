'use strict';

/**
 * @ngdoc function
 * @name proConnectApp.controller:IndexCtrl
 * @description
 * # IndexCtrl
 * Controller of the proConnectApp
 */
angular.module('proConnectApp')
  .controller('IndexCtrl', function ($scope, $rootScope, localStorageService, $filter, $sce) {
    $rootScope.page = "home";
    $rootScope.login = "false";
    $scope.welcome = 'Welcome to ProConnect!';
    $scope.builtfor = 'The Networking site built for music professionals!';
    $scope.crap = 'https://www.youtube.com/embed/iQpGq4HguVs?start=1547&autoplay=1&showinfo=0&controls=0&autohide=1';
    $rootScope.forumswitch = "forum";
    $rootScope.date = new Date();
    $rootScope.currentUser = '';
    $rootScope.currentUserProfilePicture = '';

    $rootScope.contacts = [
    {name: 'Andrew Rayel', profession: 'DJ', picture: 'http://djtimes.com/wp-content/uploads/2014/09/Andrew-Rayel-COLOR_credit-Armada-Music-5.jpg'},
    {name: 'Ed Sheeran', profession: 'British Songwriter & Singer', picture: 'http://www.independent.co.uk/incoming/article9907257.ece/binary/original/Ed-Sheeran.jpg'},
    {name: 'Kanye West', profession: 'Rapper & Producer', picture: 'http://cdn.urbanislandz.com/wp-content/uploads/2013/05/Kanye-West.jpeg'}
    ];

    $scope.parselogin = function() {
      var username = document.getElementById("loginEmail").value;
      var password = document.getElementById("loginPassword").value;

      Parse.User.logIn(username, password, {
        success: function(user) {
          $rootScope.login = 'true';
          $rootScope.page = 'home';
          $scope.$digest();

          var username = Parse.User.current();
          var info = Parse.Object.extend("Media");
          var query = new Parse.Query(info);

          query.equalTo("user", username);

          query.find({
          success: function(result){
            if (result.length > 0)
          {
          $rootScope.currentUser = result[0].get("artistname");
          $rootScope.currentUserProfilePicture = result[0].get("profileImage").url;
          }

          },

          }

          )

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
