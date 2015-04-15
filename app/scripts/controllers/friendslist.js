'use strict';

/**
 * @ngdoc function
 * @name proConnectApp.controller:FriendslistCtrl
 * @description
 * # FriendslistCtrl
 * Controller of the proConnectApp
 */
angular.module('proConnectApp')
  .controller('FriendslistCtrl', function ($scope, $rootScope) {

    $scope.contacts = [
    {name: 'Andrew Rayel', profession: 'DJ', picture: 'http://djtimes.com/wp-content/uploads/2014/09/Andrew-Rayel-COLOR_credit-Armada-Music-5.jpg'},
    {name: 'Ed Sheeran', profession: 'British Songwriter & Singer', picture: 'http://www.independent.co.uk/incoming/article9907257.ece/binary/original/Ed-Sheeran.jpg'},
    {name: 'Kanye West', profession: 'Rapper & Producer', picture: 'http://cdn.urbanislandz.com/wp-content/uploads/2013/05/Kanye-West.jpeg'},
    {name: 'Andrew Rayel', profession: 'DJ', picture: 'http://djtimes.com/wp-content/uploads/2014/09/Andrew-Rayel-COLOR_credit-Armada-Music-5.jpg'},
    {name: 'Ed Sheeran', profession: 'British Songwriter & Singer', picture: 'http://www.independent.co.uk/incoming/article9907257.ece/binary/original/Ed-Sheeran.jpg'},
    {name: 'Kanye West', profession: 'Rapper & Producer', picture: 'http://cdn.urbanislandz.com/wp-content/uploads/2013/05/Kanye-West.jpeg'},
    {name: 'Andrew Rayel', profession: 'DJ', picture: 'http://djtimes.com/wp-content/uploads/2014/09/Andrew-Rayel-COLOR_credit-Armada-Music-5.jpg'},
    {name: 'Ed Sheeran', profession: 'British Songwriter & Singer', picture: 'http://www.independent.co.uk/incoming/article9907257.ece/binary/original/Ed-Sheeran.jpg'},
    {name: 'Kanye West', profession: 'Rapper & Producer', picture: 'http://cdn.urbanislandz.com/wp-content/uploads/2013/05/Kanye-West.jpeg'}
    ];

  });
