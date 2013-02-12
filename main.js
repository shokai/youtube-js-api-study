
var youtube;
var onYouTubePlayerReady = function(id){
  console.log('youtube ready');
  youtube = document.getElementById("player");
  youtube.addEventListener("onStateChange", "onYouTubeStateChange");
};

var onYouTubeStateChange = function(status){
  console.log("status changed:"+status);
};


$(function(){
  var params = { allowScriptAccess: "always" };
  var atts = { id: "player" };
  var url = "http://www.youtube.com/v/4uq4T22pwaI?enablejsapi=1&playerapiid=youtube_player_api";
  swfobject.embedSWF(url, "youtube_player", "500", "400", "8", null, null, params, atts);

  var btn_play = $("#btn_play");
  btn_play.click(function(e){
    if(youtube.getPlayerState() == 1){
      youtube.stopVideo();
      btn_play.val('play');
    }
    else{
      youtube.playVideo();
      btn_play.val('stop');
    }
  });

  $("#btn_seek").click(function(e){
    youtube.seekTo(youtube.getCurrentTime() + 10);
  });
  $("#btn_seekback").click(function(e){
    youtube.seekTo(youtube.getCurrentTime() - 10);
  });
});
