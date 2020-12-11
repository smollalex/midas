import "bootstrap";

import "owl.carousel/src/scss/owl.carousel.scss";
import "owl.carousel";

import "./sass/main.scss";

$(document).ready(function () {
  $(".owl-theme-main").owlCarousel({
    loop: true,
    nav: true,
    mouseDrag: true,
    dots: true,
    items: 1,
    lazyLoad: true,
   
  });
  $(".owl-theme-trends").owlCarousel({
    loop: true,
    nav: true,
    mouseDrag: true,
    dots: true,
    items: 4,
    lazyLoad: true,
    margin: 40,
   
  });
});
