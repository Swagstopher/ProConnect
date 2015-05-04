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

    $scope.check = '';

    $scope.messagepost = {message: ''};

    $scope.changetoForum = function() {
      $rootScope.forumswitch = "Forum";
      $scope.$digest();
    };

    $scope.changetoPosts = function() {
      $rootScope.forumswitch = 'Posts';
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
    }},
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
      $scope.threadlist.push({identify:object.id, title: object.get('title'), parent: object.get('parentID')});
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
        $scope.getUserThreadInfo(post.get('content'), post.get('parentID'), post.get('fromUser'));
    }},
    error: function(comments){
        alert("ERROR");
      }
  });
};

    $scope.getUserThreadInfo = function(post, parent, poster) {
      var posts = Parse.Object.extend("Media");
      var query = new Parse.Query(posts);

      query.equalTo("user", poster);

      query.find({
        success: function(results){
          if(results.length > 0){
          $scope.posts.push({picture: results[0].get("profileImage").url() , user: results[0].get("artistname"), message: post, parentid: parent });
          }
        },
        error: function(error){}

      });
    };

$scope.postForum = function() {
  var ExtendComment = Parse.Object.extend("Comment");
  var newpost = new ExtendComment();

  newpost.save({
    content: $scope.messagepost.message,
    isCategory: false,
    isComment: true,
    isThread: false,
    parentID: $scope.posts[0].parentid,
    fromUser: Parse.User.current(),
  }, {

  success: function(newpost){

    //$scope.wall.push({picture:$scope.profilepic , user: 'Hardwell', postdate:'Posted on ' + $scope.date , message: $scope.post});
    $scope.messagepost.message = '';
  },
    error: function(result, error) {
    }
  });
};

$scope.init = function(){
  $scope.getCategories();
};

$scope.init();

});
