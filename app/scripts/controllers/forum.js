'use strict';

/**
 * @ngdoc function
 * @name proConnectApp.controller:ForumCtrl
 * @description
 * # ForumCtrl
 * Controller of the proConnectApp
 */
angular.module('proConnectApp')
  .controller('ForumCtrl', function ($scope, $rootScope) {

    $rootScope.forumswitch = "Forum";

    $scope.categories = [];

    $scope.threadlist = [
      {name: 'Hardwell Ultra 2015 Liveset'},
      {name: 'Andrew Rayel Ultra 2015 Liveset'},
      {name: 'Steve Aoki Ultra 2015 Liveset'},
    ];

    $scope.posts = [];

    $scope.changetoThread = function() {
      $rootScope.forumswitch = "Thread";
      $scope.$digest();
    };

    $scope.changetoPosts = function() {
      $rootScope.forumswitch = 'Posts';
      $scope.$digest();
    };

//GET CATEGORIES

    $scope.getCategories =  function() {
var Comment = Parse.Object.extend("Comment");
var query = new Parse.Query(Comment);

query.equalTo("isCategory", true);
query.find({
    success: function(categories){
      alert("SUCCESS");
       for (var i = 0; i < categories.length; i++) {
      var object = categories[i];
      alert(object.get('title'));
      $scope.categories.push({name: object.get('title')});
    }},
    error: function(categories){
        alert("ERROR");
      }
  });
};

//GET THREADS

 $scope.getThreads = function(){

var Comment = Parse.Object.extend("Comment");
var query = new Parse.Query(Comment);

query.equalTo("isThread", true);
query.equalTo("parentID", document.getElementById("parentID").value);
// query.equalTo("parentID", "6QjSs5ZiTA");
query.find({
    success: function(threads){
       alert("SUCCESS");
         for (var i = 0; i < threads.length; i++) {
      var object = threads[i];

      alert(object.id + ' - ' + object.get('title') );
    }
      return threads;
    },
    error: function(threads){
        alert("ERROR");
      }
  });
};

$scope.init = function() {
  $scope.getCategories();
  $scope.getThreads();
};

$scope.init();

  });
