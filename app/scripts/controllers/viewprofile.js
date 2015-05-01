'use strict';

/**
 * @ngdoc function
 * @name proConnectApp.controller:ViewprofileCtrl
 * @description
 * # ViewprofileCtrl
 * Controller of the proConnectApp
 */
angular.module('proConnectApp')
  .controller('ViewprofileCtrl', function ($scope, $rootScope, $stateParams, $sce) {
    $scope.AA = [
    ];

    $scope.interval = 5000;
    $scope.soundcloudembed = '';

    $scope.youtube = [
    ];

    $scope.events = [];

    $scope.pictures = [];

    $scope.artistprofession = '';
    $scope.artistfrom = '';
    $scope.artistname = '';


    $scope.amuser = '';

    $scope.render = function(){
      $scope.renderuser = $stateParams.other;
    }
    $scope.render();



    $scope.checkuser = function(){
      var me = $Parse.User.current();
    };

    //GET PROFILE IMAGE
    //GET PROFILE IMAGE
$scope.getimage = function(){
  var media = Parse.Object.extend("Media");
  var query = new Parse.Query(media);
  var user = $stateParams.other;
  query.equalTo("user", { __type: "Pointer", className: "_User", objectId: user });

  query.find({
    success: function(result) {
      $scope.profilepic = result[0].get("profileImage").url();
    }
  })
};//END GET PROFILE IMAGE

    //GET ARTIST NAME
    $scope.getMedia = function() {
 var user = $stateParams.other;
 var exp = Parse.Object.extend("Media");
 var query = new Parse.Query(exp);

 query.equalTo("user", { __type: "Pointer", className: "_User", objectId: user });
 query.find({
   success: function(results){
     if (results.length > 0)
     {
       $scope.artistname = results[0].get("artistname");
       $scope.artistfrom = results[0].get("hometown");
       $scope.artistprofession = results[0].get("profession");
     }
   },
   error: function(result, error){

   }
 });
};

    //GET SOUNDCLOUD EMBED CODE
    $scope.getembed = function(){
      var user = $stateParams.other;
      var embed = Parse.Object.extend("Media");
      var query = new Parse.Query(embed);

      query.equalTo("user", { __type: "Pointer", className: "_User", objectId: user });

      query.find({
        success: function(results) {
          $scope.soundcloudembed = $sce.trustAsHtml(results[0].get("SoundCloudEmbed"));
        },
          error: function(error){

          }

      })
    };


    //GET CAROUSEL

    $scope.getCarousel = function(){
      var user = $stateParams.other;
      var images = Parse.Object.extend("Carousel");
      var query = new Parse.Query(images);

      query.equalTo("user", { __type: "Pointer", className: "_User", objectId: user });

      query.find({
        success: function(results) {
          for(var i = 0; i < results.length; i++) {
          var image = results[i];
          $scope.pictures.push({link: image.get("artcover").url()});
          }
        },
          error: function(error){

          }

      })
    };

    //GET AWARDS
  $scope.getAwards = function() {
    var user = $stateParams.other;
    var awards = Parse.Object.extend("Achievements");
    var query = new Parse.Query(awards);
    query.equalTo("User", { __type: "Pointer", className: "_User", objectId: user });

    query.find({
      success: function(results) {
        for(var i = 0; i < results.length; i++) {
        var award = results[i];
        $scope.AA.push({Award: award.get('Award'), AwardIssuer: award.get('AwardIssuer'), AwardYear: award.get('AwardYear')});
        }
      },
        error: function(error){

        }
 	})
 };//END GET AWARDS

    //GET UPCOMING EVENTS
    $scope.getEvents = function(){
  var user = $stateParams.other;
  var events = Parse.Object.extend("Events");
  var query = new Parse.Query(events);

  query.equalTo("User", { __type: "Pointer", className: "_User", objectId: user });
  query.find({
    success: function(results){
      for(var i = 0; i < results.length; i++){
      var events = results[i];
      $scope.events.push({eventname: events.get('EventName'), location: events.get('EventLocation'), date: events.get('EventDate'), time: events.get('EventTime')});
      }
    },
    error: function(error){

    }
  });
};//END GET EVENTS

    //GET VIDEOS
    $scope.getVideo = function() {
      var user = $stateParams.other;
      var getvideos = Parse.Object.extend("Videos");
      var query = new Parse.Query(getvideos);

      query.equalTo("User", { __type: "Pointer", className: "_User", objectId: user });

      query.find({
        success: function(results) {
          for(var i = 0; i < results.length; i++){
            var video = results[i];
            $scope.youtube.push({link: $sce.trustAsResourceUrl(video.get('Link'))});
          }
        },
        error: function(error){

        }
      });

    };//END OF GET YOUTUBE

    //GET WALL

    $scope.begin = function(){
          $scope.getAwards();
          $scope.getimage();
          $scope.getMedia();
          $scope.getVideo();
          $scope.getEvents();
          $scope.getCarousel();
          $scope.getembed();
    };
    $scope.begin();

  });
