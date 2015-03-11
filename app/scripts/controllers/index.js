'use strict';

/**
 * @ngdoc function
 * @name proConnectApp.controller:IndexCtrl
 * @description
 * # IndexCtrl
 * Controller of the proConnectApp
 */
angular.module('proConnectApp')
  .controller('IndexCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
