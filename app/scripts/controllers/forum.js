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

    $scope.forumlist = [
      {name: 'General'},
      {name: 'Events'},
      {name: 'Careers'},
    ];

    $scope.threadlist = [
      {name: 'Hardwell Ultra 2015 Liveset'},
      {name: 'Andrew Rayel Ultra 2015 Liveset'},
      {name: 'Steve Aoki Ultra 2015 Liveset'},
    ];

    $scope.changetoThread = function() {
      $rootScope.forumswitch = "Thread";
      $scope.$digest();
    };

    $scope.changetoPosts = function() {
      $rootScope.forumswitch = 'Posts';
      $scope.$digest();
    };

  });
