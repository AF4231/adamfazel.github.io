$('#main').hide();
$('#main').fadeIn(5000);
$('.director').hover(
  function() {
  $(this).stop().animate({"opacity": "1"}, "slow");
  },
  function() {
  $(this).stop().animate({"opacity": ".6"}, "slow");
  }
);
$('.composer').hover(
  function() {
  $(this).stop().animate({"opacity": "1"}, "slow");
  },
  function() {
  $(this).stop().animate({"opacity": ".6"}, "slow");
  }
);
$('.editor').hover(
  function() {
  $(this).stop().animate({"opacity": "1"}, "slow");
  },
  function() {
  $(this).stop().animate({"opacity": ".6"}, "slow");
  }
);
$('.highlight').hover(
  function() {
  $(this).stop().animate({"opacity": "1"}, "slow");
  },
  function() {
  $(this).stop().animate({"opacity": "1"}, "slow");
  }
);