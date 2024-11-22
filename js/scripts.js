$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true, 
    margin: 10, 
    nav: false,
    dots: false, 
    autoplay: true, 
    autoplayTimeout: 2000, 
    autoplayHoverPause: true, 
    responsive: {
      0: { items: 1 }, 
      768: { items: 1 }, 
      1200: { items: 1 }, 
    },
  });
});