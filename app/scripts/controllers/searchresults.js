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



    $rootScope.freesearch = function(searchthis) {

    };

    var embed = Parse.Object.extend("Media");
    var query = new Parse.Query(embed);

    query.equalTo("user", user);

    $rootScope.search = function(searchthis, searchmedia) {
      var search = Parse.Object.extend("Media");
      var query = new Parse.Query(search);
      alert("Moo!");
      query.equalTo(searchmedia,searchthis);

      query.find({
        success: function(results) {
        alert(results[0].get('artistname'));
        },
          error: function(error){

          }

      })

    };

  });
