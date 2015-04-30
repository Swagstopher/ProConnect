'use strict';

/**
 * @ngdoc function
 * @name proConnectApp.controller:ViewprofileCtrl
 * @description
 * # ViewprofileCtrl
 * Controller of the proConnectApp
 */
angular.module('proConnectApp')
  .controller('ViewprofileCtrl', function ($scope, $rootScope) {

    $rootScope.renderuser = '';
    $scope.amuser = '';

    $scope.userview = function(){


    };

    $scope.checkuser = function(){
      var me = $Parse.User.current();

    };

  });
