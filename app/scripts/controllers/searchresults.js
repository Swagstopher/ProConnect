'use strict';

/**
 * @ngdoc function
 * @name proConnectApp.controller:SearchresultsCtrl
 * @description
 * # SearchresultsCtrl
 * Controller of the proConnectApp
 */
angular.module('proConnectApp')
  .controller('SearchresultsCtrl', function ($scope, $rootScope) {

    $scope.searchresults[];
    $scope.noresults = '';

    $rootScope.freesearch = function(searchthis) {

    };

    var embed = Parse.Object.extend("Media");
    var query = new Parse.Query(embed);

    query.equalTo("user", user);


//IMPLEMENT ANGULAR SERVICES FOR THIS TO WORK.
    $rootScope.searchmf = function(searchthis, searchmedia) {
      var search = Parse.Object.extend("Media");
      var query = new Parse.Query(search);
      alert("Moo!");
      query.equalTo(searchmedia,searchthis);

      query.find({
        success: function(results) {
          for(var i = 0; i<results.length; i++){
            var person = results[i];
        $scope.searchresults.push({profilepic: person.get("profileImage"),
        artistname:person.get("artistname"), profession: person.get("profession"),
        userid: person.get("user")  });
      }
        },
          error: function(error){
              $scope.noresults = "No Results Found!";
          }

      })

    };

    $scope.changeToProfile = function(userid){
      $state.go('profile');
    };

  });
