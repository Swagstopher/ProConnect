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

    $scope.post = '';
    $scope.plusvideo = 'https://www.youtube.com/embed/SX_NOJsIebo';


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
    $scope.getmyWall = function() {
      var user = $stateParams.other;
      var wall = Parse.Object.extend("Wall");
      var query = new Parse.Query(wall);

      query.equalTo("TargetUser", { __type: "Pointer", className: "_User", objectId: user });

      query.find({
        success: function(results) {
          for(var i = 0; i < results.length; i++){
            var wallinfo = results[i];
            var message = wallinfo.get("Message");
            $scope.getWallInfo(wallinfo.get("Poster"), wallinfo.get("Message"), wallinfo.get("createdAt"));

          }
        },
        error: function(error){}

      });

    };

    $scope.getWallInfo = function(poster, message, timestamp) {

      var posts = Parse.Object.extend("Media");
      var query = new Parse.Query(posts);

      query.equalTo("user", poster);

      query.find({
        success: function(results){
          if(results.length > 0){
          $scope.wall.push({picture: results[0].get("profileImage").url() , user: results[0].get("artistname"), postdate: timestamp, message: message });
          }
        },
        error: function(error){}

      });

    };


    //ADD CONTACT BUTTON
    $scope.addcontact = function() {
      var user = Parse.User.current();
      var extend = Parse.Object.extend("Contact");
      var add = new extend();

      add.save({
        me: Parse.User.current(),
        friend: $scope.renderuser
      }, {
        success: function(add){
          alert("This fucking works!");
        },

        error: function(add, error) {

        }
      }


      )

    };

    //POST WALL
    $scope.postwall = function() {
      var user = $stateParams.other;
      var poster = Parse.User.current();
      var ExtendWall = Parse.Object.extend("Wall");
      var ExtendMedia = Parse.Object.extend("Media");
      var WallQuery = new Parse.Query(ExtendWall);
      var newpost = new ExtendWall();


      if($scope.post == ''){

      }
      else{

      newpost.save({
        Message: $scope.post,
        Poster: poster,
        TargetUser: user
      }, {

      success: function(newpost){
        $scope.date = newpost[0].get("createdAt");

        $scope.wall.push({picture:$scope.profilepic , user: 'Hardwell', postdate:'Posted on ' + $scope.date , message: $scope.post});
        $scope.post = '';
      },
        error: function(result, error) {
        }
      });
    }
    };

    $scope.begin = function(){
          $scope.getAwards();
          $scope.getimage();
          $scope.getMedia();
          $scope.getVideo();
          $scope.getEvents();
          $scope.getCarousel();
          $scope.getembed();
          $scope.getmyWall();
    };
    $scope.begin();

  });
