$(document).ready(function() {
    $('.viewport').mouseenter(function(e) {
        $(this).children('a').children('img').animate({ height: 'auto', left: '0', top: '0', width: '290'}, 100);
        $(this).children('a').children('span').fadeIn(200);
    }).mouseleave(function(e) {
        $(this).children('a').children('img').animate({ height: 'auto', left: '-20', top: '-20', width: '320'}, 100);
        $(this).children('a').children('span').fadeOut(200);
    });
});