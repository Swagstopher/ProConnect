'use strict';

/**
 * @ngdoc function
 * @name proConnectApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the proConnectApp
 */
angular.module('proConnectApp')
  .controller('ProfileCtrl', function ($scope, $rootScope, $filter, $sce) {

    $scope.profilepic = 'http://remixpacks.at.ua/_ld/6/64755245.jpg';

    //holds post information
    $scope.post = '';
    $scope.plusvideo = '';

    $scope.artistname = 'Hardwell';
    $scope.artistfrom = 'Breda, Holland';
    $scope.artistprofession = 'Big Room';

    $scope.soundcloud = $sce.trustAsResourceUrl('https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/72768143&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false');

    //Holds Add Event Information
    $scope.pluseventname = '';
    $scope.pluseventlocation = '';
    $scope.pluseventdate = '';
    $scope.pluseventtime = '';


    $scope.loadprofile = '';

    $scope.postwall = function() {
      if($scope.post == ''){

      }
      else{
      $scope.wall.push({picture:$scope.profilepic , user: 'Hardwell', postdate:'Posted on ' + $rootScope.date , message: $scope.post});
      $scope.post = '';
      $scope.digest();
    }
    };

//Sample Data!!!!!!!!~

    $scope.followmedia = {instagram: $sce.trustAsResourceUrl('https://instagram.com/hardwell/'), facebook: $sce.trustAsResourceUrl('https://www.facebook.com/djhardwell'),
    twitter: $sce.trustAsResourceUrl('https://twitter.com/hardwell'), soundcloud: $sce.trustAsResourceUrl('https://soundcloud.com/hardwell'),
    youtube: $sce.trustAsResourceUrl('https://www.youtube.com/user/robberthardwell') };



    $scope.wall = [
      {picture:'http://remixpacks.at.ua/_ld/6/64755245.jpg', user: 'Hardwell', postdate:'Posted on March 26, 2015', message: 'United We Are!!!'},
      {picture:'http://remixpacks.at.ua/_ld/6/64755245.jpg', user: 'Hardwell', postdate:'Posted on March 26, 2015', message: 'United We Are!!!'}
    ];

    $scope.events = [
      {eventname:'Ultra 2015', location:'Miami, Florida', date:'March 18, 19, 20', time:'All day' },
      {eventname:'Ultra 2015', location:'Miami, Florida', date:'March 18, 19, 20', time:'All day' },
      {eventname:'Ultra 2015', location:'Miami, Florida', date:'March 18, 19, 20', time:'All day' }
    ];

    $scope.AA = {

    };

    $scope.youtube = [
      {link: $sce.trustAsResourceUrl('https://www.youtube.com/embed/rhUvo4xj2oU')},
      {link: $sce.trustAsResourceUrl('https://www.youtube.com/embed/Ox_rgDuyws8')},
      {link: $sce.trustAsResourceUrl('https://www.youtube.com/embed/-hhE1Y4ucm0')}
    ];

//GETTER and SETTER Functions

//GETTER FUNCTIONS FOR SOUNDCLOUD

//GETTER FUNCTIONS FOR EVENTS

//

    $scope.editEvents = function() {

    };

    $scope.editCarousel = function() {

    };

    $scope.getmedia = function() {

    };

//Video Functions
    $scope.addvideo = function() {
      $scope.youtube.push({link: $sce.trustAsResourceUrl('https://www.youtube.com/embed/rhUvo4xj2oU')});
      $scope.plusvideo = '';
      $scope.digest();
    };

    $scope.removevideo = function(index) {
      $scope.youtube.splice(index, 1);
    };


//Event Functions
    $scope.addEvent = function() {
      $scope.events.push({eventname: $scope.pluseventname, location: $scope.pluseventlocation, date: $scope.pluseventdate, time: $scope.pluseventtime});
      $scope.pluseventname = '';
      $scope.pluseventlocation = '';
      $scope.pluseventdate = '';
      $scope.pluseventtime = '';
      scope.digest();
    };

    $scope.removeEvent = function(index) {
      $scope.events.splice(index, 1);
    };

    //Edit Profile Functions
    $scope.changeArtistname = function() {

    };

    $scope.changeOrigin = function() {

    };

    $scope.changeSocialMedia = function() {

    };

  });
