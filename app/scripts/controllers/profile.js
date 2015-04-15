'use strict';

/**
 * @ngdoc function
 * @name proConnectApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the proConnectApp
 */
angular.module('proConnectApp')
  .controller('ProfileCtrl', function ($scope, $rootScope, $filter) {

    $scope.profilepic = 'http://remixpacks.at.ua/_ld/6/64755245.jpg';
    $scope.post = '';

    $scope.postwall = function() {
      if($scope.post == ''){

      }
      else
      $scope.wall.push({picture:$scope.profilepic , user: 'Hardwell', postdate:'Posted on ' + $rootScope.date , message: $scope.post});
      $scope.post = '';
    };

    $scope.wall = [
    {picture:'http://remixpacks.at.ua/_ld/6/64755245.jpg', user: 'Hardwell', postdate:'Posted on March 26, 2015', message: 'United We Are!!!'},
    {picture:'http://remixpacks.at.ua/_ld/6/64755245.jpg', user: 'Hardwell', postdate:'Posted on March 26, 2015', message: 'United We Are!!!'}
    ];



  });
