// Carousel Auto-Cycle
$(document).ready(function() {
  if ($("#content-anchor").length) {
    $('body,html').animate({scrollTop: $("#content-anchor").offset().top-100}, 0);
  }
  $('#carouselExampleCaptions').carousel({
    interval: 5000
  });
  $('#picture-slider').carousel({interval: false});
});