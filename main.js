
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
  var url = "http://www.youtube.com/apiplayer?enablejsapi=1&version=3";
  swfobject.embedSWF(url, "youtube_player", "500", "400", "8", null, null, params, atts);

  $("#btn_load").click(function(e){
    var id = $("#video_id").val();
    youtube.cueVideoById(id);
    var url = youtube.getVideoUrl();
    $("#video_url").html(
      $("<a>").attr("href", url).text(url)
    );
  });

  var btn_play = $("#btn_play");
  btn_play.click(function(e){
    if(youtube.getPlayerState() == 1){
      youtube.pauseVideo();
      btn_play.val('play');
    }
    else{
      youtube.playVideo();
      btn_play.val('pause');
    }
  });

  $("#btn_seek").click(function(e){
    youtube.seekTo(youtube.getCurrentTime() + 10);
  });
  $("#btn_seekback").click(function(e){
    youtube.seekTo(youtube.getCurrentTime() - 10);
  });
});
