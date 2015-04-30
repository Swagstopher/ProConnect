'use strict';

/**
 * @ngdoc function
 * @name proConnectApp.controller:FriendslistCtrl
 * @description
 * # FriendslistCtrl
 * Controller of the proConnectApp
 */
angular.module('proConnectApp')
  .controller('FriendslistCtrl', function ($scope, $rootScope) {

    $scope.contacts = [
    ];

    $scope.getContactID = function() {
      var user = Parse.User.current();
      var getcontacts = Parse.Object.extend("Contact");
      var query = new Parse.Query(getcontacts);

      query.equalTo("me", user);

      query.find({
        success: function(results) {
          for(var i = 0; i < results.length; i++){
          var findmedia = results[i];
          $scope.getmedia(findmedia.get("friend"));
          }
        },

        error: function(error){}


      });
    };

    $scope.getmedia = function(fetchuser) {
      var user = fetchuser;
      var getcontacts = Parse.Object.extend("Media");
      var query = new Parse.Query(getcontacts);

      query.equalTo("user", user);

      query.find({
        success: function(results) {
          if (results.length > 0){
          $scope.contacts.push({picture: results[0].get("profileImage").url() , profession: results[0].get("profession"), name: results[0].get("artistname")});
        }
      },
      error: function(result, error){}
      });
    };


$scope.ContactsList = function(){
  $scope.getContactID();
};

  });
