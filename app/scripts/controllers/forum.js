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

    $scope.threadlist = [];

    $scope.posts = [];

    $scope.check = 'nFIH4mA2IO';

    $scope.changetoForum = function() {
      $rootScope.forumswitch = "Forum";
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
    success: function(results){
       for (var i = 0; i < results.length; i++) {
      var object = results[i];
      $scope.categories.push({name: object.get('title'), identify: object.id});
      $scope.getCategoryThreads(object.id);
    }
    },
    error: function(categories){
        alert("ERROR");
      }
  });
};



//GET THREADS
$scope.getCategoryThreads = function(parent) {
var Comment = Parse.Object.extend("Comment");
var query = new Parse.Query(Comment);
query.equalTo("isThread", true);
query.equalTo("parentID", parent);
query.find({
    success: function(threads){
         for (var i = 0; i < threads.length; i++) {
      var object = threads[i];
      $scope.threadlist.push({title: object.get('title'), parent: object.get('parentID')});
      $scope.getThreadPosts(object.id);
    }
    },
    error: function(threads){
        alert("ERROR");
      }
  });
};


    $scope.getThreadPosts = function(parent){
var Comment = Parse.Object.extend("Comment");
var query = new Parse.Query(Comment);
query.equalTo("isComment", true);
query.equalTo("parentID", parent);
query.ascending("createdAt");
query.find({
    success: function(comments){
      for(var i = 0; i < comments.length; i++)
      {
        var post = comments[i];
        $scope.posts.push({artist: post.get('fromUser'), message: post.get('content'), parentid: post.get('parentID')});
    }
    },
    error: function(comments){
        alert("ERROR");
      }
  });
}


$scope.init = function() {
  $scope.getCategories();
};

$scope.init();

  });
