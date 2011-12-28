$("a.iframe").click(function() {
  $.fancybox({
    'titleShow'     : false,
    'transitionIn'  : 'elastic',
    'transitionOut' : 'elastic',
    'href'          : this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
    'type'          : 'swf',
    'swf'           : {'wmode':'transparent','allowfullscreen':'true'}
  });
  return false;
});

$("#jquery_jplayer_1").jPlayer({
  ready: function () {
    $(this).jPlayer("setMedia", {
      mp3: "audio/guaranteed.mp3"
    });
  },
  swfPath: "js/libs/jQuery.jPlayer.2.1.0",
  supplied: "mp3"
});

$("#play_mp3").click(function(e){
  e.preventDefault();
  $("#jquery_jplayer_1").jPlayer("play");
});
