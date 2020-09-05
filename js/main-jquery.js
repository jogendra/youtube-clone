// Animation for initial page loading
$('div.col').each(function(i) {
    $(this).fadeOut(0).delay(100*i).fadeIn(1600);
});
$('div.music-category').each(function(i) {
    $(this).fadeOut(0).delay(1000*i).fadeIn(1800);
});
$('div.card-1').each(function(i) {
    $(this).fadeOut(0).delay(100*i).fadeIn(1800);
});
$('a.side-item').each(function(i) {
    $(this).fadeOut(0).delay(100*i).fadeIn(1500);
});