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

    $scope.searchresults = [];
    $scope.noresults = '';

    $rootScope.freesearch = function(searchthis) {

    };


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

$scope.namesearch = function(){
  var usersearch = Parse.Object.extend("Media");
  var query = new Parse.Query(usersearch);
  // alert("Initiated");
  var find = document.getElementById("find").value; // user name typed by user
  // alert("Input taken");
  var user = find.toLowerCase();
  // alert(user.value);

  query.equalTo("SEARCHONLY", user); // make sure it is checking against artist names
  query.find({
    success: function(results){
      if (results.length>0)
      alert(results[0].get("artistname")); // this will pop up the user with their artist name.
    else alert("There is no such artist");
    }
  });
};

$scope.premiumsearch = function(category){
  var usersearch = Parse.Object.extend("Media");
  var query = new Parse.Query(usersearch);
  var search = document.getElementById("find").value;

  if (category === "hometown")
  query.equalTo("hometown", search); // make sure it is checking against hometown
else if (category === "profession")
  query.equalTo("profession", search); // make sure it is checking against profession
else
  query.equalTo("artistname", search); // make sure it is checking against name


query.find({
  success: function(results){
    if (results.length>0)
      alert(results[0].get("artistname")); // this will pop up the user with their id.
    else alert("There is no such artist");
    }
  });
};


  });
