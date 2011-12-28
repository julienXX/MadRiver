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
