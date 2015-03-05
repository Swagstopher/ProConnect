'use strict';

/**
 * @ngdoc function
 * @name proConnectApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the proConnectApp
 */
angular.module('proConnectApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
