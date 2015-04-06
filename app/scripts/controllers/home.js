'use strict';

/**
 * @ngdoc function
 * @name proConnectApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the proConnectApp
 */
angular.module('proConnectApp')
  .controller('HomeCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
