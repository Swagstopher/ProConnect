'use strict';

/**
 * @ngdoc function
 * @name proConnectApp.controller:IndexCtrl
 * @description
 * # IndexCtrl
 * Controller of the proConnectApp
 */
angular.module('proConnectApp')
  .controller('IndexCtrl', function ($scope, $rootScope, localStorageService, $filter, $sce, $state) {
    $rootScope.page = "home";
    $rootScope.login = "";
    $scope.welcome = 'Welcome to ProConnect!';
    $scope.builtfor = 'The Networking site built for music professionals!';
    $scope.crap = 'https://www.youtube.com/embed/iQpGq4HguVs?start=1547&autoplay=1&showinfo=0&controls=0&autohide=1';
    $rootScope.forumswitch = "Forum";
    $rootScope.date = new Date();
    $rootScope.currentUser = '';
    $rootScope.currentUserProfilePicture = '';

    $scope.searchmodel = '';

    $scope.getcurrentuser = function() {
      var username = Parse.User.current();
      var info = Parse.Object.extend("Media");
      var query = new Parse.Query(info);

      query.equalTo("user", username);

      query.find({
      success: function(result){
        if (result.length > 0)
      {
      $rootScope.currentUser = result[0].get("artistname");
      $rootScope.currentUserProfilePicture = result[0].get("profileImage").url();
      }

      },

      }

      )
    };

    $scope.checklogin = function(){
    $rootScope.login = localStorageService.get('loginkey');
    $scope.getcurrentuser();
    if($rootScope.login != 'true'){
      $rootScope.login = 'false';
      localStorageService.set('loginkey', 'false');
    }
    };

    $scope.checklogin();

    $scope.parselogin = function() {
      var username = document.getElementById("loginEmail").value;
      var password = document.getElementById("loginPassword").value;

      Parse.User.logIn(username, password, {
        success: function(user) {
          $rootScope.login = 'true';
          localStorageService.set('loginkey', 'true');
          $rootScope.page = 'home';
          $scope.getcurrentuser();
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

    $scope.logout = function() {
      var currentUser = Parse.User.current();
      if (currentUser != null) {
          Parse.User.logOut();
          $rootScope.login = 'false';
          localStorageService.set('loginkey', 'false');
          $state.go('home');
          alert("User has logged out");
              }
                else{
    alert("There is no associated account logged in currently");
  }
};

    $scope.gotosearch = function() {
      $state.go('searchresults');
    };

    //settings files go here!

    $scope.changeSubStatus = function(){
      // var subOff = document.getElementById("subOff").checked;
      var subOn = document.getElementById("subOn").checked;


    var currentUser = Parse.User.current();
    if(subOn){
    currentUser.set("premiumSubscription", true);
    }else{
      currentUser.set("premiumSubscription", false);
    }
    currentUser.save();
  };


    $scope.changeEmailNotifications = function(){
      var subOn = document.getElementById("EmailOn").checked;

    var currentUser = Parse.User.current();
    if(EmailOn){
    currentUser.set("emailNotifications", true);
    }else{
    currentUser.set("emailNotifications", false);
    }
    currentUser.save();
    }


    $scope.updateEmail = function(){
      var email1 = document.getElementById("changeEmail1").value;
      var email2 = document.getElementById("changeEmail2").value;

      if(email1 != email2)
      {
        return false;
      }

      var currentUser = Parse.User.current();
      currentUser.set("username", email1);
      currentUser.save();
      return true;
    };

    $scope.updatePassword =  function(){
    var currentUser = Parse.User.current();
    Parse.User.requestPasswordReset(currentUser.get("username"), {
      success: function() {

      },
      error: function(error) {
        // Show the error message somewhere
        alert("Error: " + error.code + " " + error.message);
      }
    });
  };

  });
