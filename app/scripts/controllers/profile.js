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

//Cloak functions

    //Cloak social media
    $scope.cloakTwitter;
    $scope.cloakFaceBook;
    $scope.cloakYouTube;
    $scope.cloakSoundCloud;
    $scope.cloakInstagram;


//end cloak functions



    $scope.profilepic = 'https://media.licdn.com/mpr/mpr/shrink_200_200/p/7/005/07e/08b/2703371.jpg';


    //holds post information
    $scope.post = '';
    $scope.plusvideo = 'https://www.youtube.com/embed/SX_NOJsIebo';




    $scope.soundcloud = 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/198306478&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true';

    //Holds Add Event Information
    $scope.pluseventname = '';
    $scope.pluseventlocation = '';
    $scope.pluseventdate = '';
    $scope.pluseventtime = '';


    $scope.loadprofile = '';

    //Holds Add Award Information

    $scope.plusAward = '';
    $scope.plusawardIssuer = '';
    $scope.plusawardyear = '';

    //Adds Award Information

    $scope.addAward = function() {
      var user = Parse.User.current();
      var award = Parse.Object.extend("Achievements");
      var newAward = new award();

      if($scope.plusAward == ''){

      }
      else{

      newAward.save({
      Award: $scope.plusAward,
      AwardIssuer: $scope.plusawardIssuer,
      AwardYear: $scope.plusawardyear,
      User: user
      }, {

      success: function(newAward){
        $scope.AA.push({Award: $scope.plusAward, AwardIssuer: $scope.plusawardIssuer, AwardYear: $scope.plusawardyear});
        $scope.plusAward = '';
        $scope.plusawardIssuer = '';
        $scope.plusawardyear = '';
      },
        error: function(result, error){
        }
      });
    }
    };

    $scope.getAwards = function() {
      var user = Parse.User.current();
      var awards = Parse.Object.extend("Achievements");
      var query = new Parse.Query(awards);
      query.equalTo("User", user);

      query.find({
        success: function(results) {
          for(var i = 0; i < results.length; i++) {
          var award = results[i];
          $scope.AA.push({Award: award.get('Award'), AwardIssuer: award.get('AwardIssuer'), AwardYear: award.get('AwardYear')});
          }
        },
          error: function(error){

          }

      });

    };

    $scope.removeAward = function(index) {
      $scope.AA.splice(index, 1);
    };


//FUNCTION TO POST ON MY WALL-------------------------------------------
    $scope.postwall = function() {
      var user = Parse.User.current();
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
        Poster: Parse.User.current(),
        TargetUser: Parse.User.current()
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

//END POST ON MY WALL-----------------------------------------------------------------



//GET POSTS FOR MY WALL------------------------------------

$scope.getmyWall = function() {
  var user = Parse.User.current();

  //GET ALL WALL POSTS FOR TARGET USER USING QUERY
    /*
    ON SUCCESS:
    DO A FOR LOOP OF SIZE RESULTS
    FOR EACH RESULT

      GET THE POSTER ID
        DO A QUERY FOR THAT POSTER ID ON THE MEDIA TABLE
              ON SUCCESS:
                  GET THE PROFILEIMAGE
                  GET THE ARTISTNAME
                  PUSH THE FUCKING WALL!
                      PICTURE: PROFILEIMAGE
                      USER: ARTISTNAME
                      POSTDATE: CREATEDAT
                      MESSAGE: MESSAGE
    */


};

//END GET POSTS FOR MY WALL--------------------------------

//Sample Data!!!!!!!!~

    $scope.followmedia = {instagram: $sce.trustAsResourceUrl('https://instagram.com/hardwell/'), facebook: $sce.trustAsResourceUrl('https://www.facebook.com/djhardwell'),
    twitter:'https://twitter.com/hardwell', soundcloud: $sce.trustAsResourceUrl('https://soundcloud.com/hardwell'),
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

    $scope.AA = [

    ];

    $scope.youtube = [
    ];

//GETTER and SETTER Functions

//SETTER FUNCTION FOR ADDING ACHIEVEMENTS TO PARSE
$scope.setAddParseAward = function() {
var user = Parse.User.current();
var add = Parse.Object.extend("Achievements");


};

//GETTER FUNCTION ARTIST NAME

$scope.getArtistName = function() {
  var user = Parse.User.current();
  var exp = Parse.Object.extend("Media");
  var query = new Parse.Query(exp);

  query.equalTo("user",user);
  query.find({
    success: function(results){
      if (results.length > 0)
      {
        $scope.artistname = results[0].get("artistname");
      }
    },
    error: function(result, error){
    }
  });
};

$scope.getMedia = function() {
  var user = Parse.User.current();
  var exp = Parse.Object.extend("Media");
  var query = new Parse.Query(exp);

  query.equalTo("user",user);
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

//GETTER FUNCTION JOB TITLE
$scope.getjtitle = function() {
  var user = Parse.User.current();
  var exp = Parse.Object.extend("Media");
  var query = new Parse.Query(exp);

  query.equalTo("user",user);
  query.find({
    success: function(results){
      if (results.length > 0)
      {
        $scope.artistprofession = results[0].get("profession");
      }
    },
    error: function(result, error){
    }
  });
};

//GETTER FUNCTION FOR HOMETOWN

$scope.getHometown = function() {
  var user = Parse.User.current();
  var exp = Parse.Object.extend("Media");
  var query = new Parse.Query(exp);

  query.equalTo("user",user);
  query.find({
    success: function(results){
      if (results.length > 0)
      {
        $scope.artistfrom = results[0].get("hometown");
      }
    },
    error: function(result, error){
    }
  });
};

//GETTER FUNCTIONS FOR SOUNDCLOUD

$scope.getSoundCloud = function() {
  var user = Parse.User.current();
  var exp = Parse.Object.extend("Media");
  var query = new Parse.Query(exp);

  query.equalTo("user",user);
  query.find({
    success: function(results){
      if (results.length > 0)
      {
        $scope.soundcloud = $sce.trustAsResourceUrl(results[0].get("SoundCloud"));
      }
    },
    error: function(result, error){
    }
  });
};


//GETTER FUNCTION FOR PROFILE PICTURE

 $scope.getimage = function(){
  var media = Parse.Object.extend("Media");
  var query = new Parse.Query(media);
  var user = Parse.User.current();
  query.equalTo("user",user);

  query.find({
    success: function(result) {
      $scope.profilepic = result[0].get("profileImage").url();
    }
  })
}

//GETTER FUNCTIONS FOR EVENTS

//`````````````````````````````````````

//GETTER FUNCTIONS FOR

    $scope.editEvents = function() {

    };

    $scope.editCarousel = function() {

    };

//GET SOCIAL MEDIA----------------------------------------------------------------------------------

    $scope.getSocialMedia = function() {
      var ParseExtend = Parse.Object.extend("Media");

      var user = Parse.User.current();
      var getSocial = new Parse.Query(ParseExtend);

      getSocial.equalTo("user", user);

      getSocial.find(
      {
        success: function(results) {



        }
      })

    };

//END GET SOCIAL MEDIA------------------------------------------------------------------------------

//SET SOCIAL MEDIA----------------------------------------------------------------------------------

$scope.setInstagram = function() {

};

$scope.setYouTube = function() {

};

$scope.setFaceBook = function() {

};

$scope.setSoundCloud = function() {

};

$scope.setTwitter = function() {

};

//END SET SOCIAL MEDIA------------------------------------------------------------------------------


//Video Functions
    $scope.addvideo = function() {
      var ParseExtend = Parse.Object.extend("Videos");
      var Add = new ParseExtend();

      Add.save({
        Link: $scope.plusvideo,
        User: Parse.User.current()
      }, {
        success: function(Add) {
          $scope.youtube.push({link: $sce.trustAsResourceUrl($scope.plusvideo)});
        },

        error: function(Add, error) {

        }

      });

      $scope.plusvideo = '';

    };

//GET VIDEO PARSE FUNCTION

$scope.getVideo = function() {
  var user = Parse.User.current();
  var getvideos = Parse.Object.extend("Videos");
  var query = new Parse.Query(getvideos);

  query.equalTo("User", user);

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

};


    $scope.removevideo = function(index) {
      $scope.youtube.splice(index, 1);
    };


//Event Functions
    $scope.addEvent = function() {
      var ParseExtend = Parse.Object.extend("Events");
      var Add = new ParseExtend();
      Add.save({
      EventName: $scope.pluseventname,
      EventDate: $scope.pluseventdate,
      EventLocation: $scope.pluseventlocation,
      EventTime: $scope.pluseventtime,
      User: Parse.User.current()
    }, {

    success: function(Add) {
      $scope.events.push({eventname: $scope.pluseventname, location: $scope.pluseventlocation, date: $scope.pluseventdate, time: $scope.pluseventtime});
    },

    error: function(Add ,error) {

    }


    });

      $scope.pluseventname = '';
      $scope.pluseventlocation = '';
      $scope.pluseventdate = '';
      $scope.pluseventtime = '';
    };

    $scope.getEvents = function() {
      var user = Parse.User.current();

    };

    $scope.removeEvent = function(index) {
      $scope.events.splice(index, 1);
    };

//Get Messages

//Get Poster

//Get TargetUser

//Get Created At

//Get ObjectId




    $scope.init = function() {
        $scope.getMedia();
        $scope.getimage();
        $scope.getSocialMedia();
        $scope.getAwards();
        $scope.getVideo();
};

$scope.init();


    $scope.artistname;
    $scope.artistfrom;
    $scope.artistprofession;
    $scope.profilepic;


  });
