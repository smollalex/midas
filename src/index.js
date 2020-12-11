import "bootstrap";

import "owl.carousel/src/scss/owl.carousel.scss";
import "owl.carousel";

import "./sass/main.scss";

$(document).ready(function () {
  $("#main-slider").owlCarousel({
    loop: true,
    nav: true,
    mouseDrag: true,
    dots: true,
    items: 1,
    lazyLoad: true,
    navText: ['<img src="../src/images/icons/arrow-left.svg" class="svg-icon" />','<img src="../src/images/icons/arrow-right.svg" class="svg-icon">']
  });
  $("#trends-slider").owlCarousel({
    loop: true,
    nav: true,
    mouseDrag: true,
    dots: true,
    items: 4,
    lazyLoad: true,
    margin: 40,
    navText: ['<img src="../src/images/icons/arrow-left.svg" class="svg-icon" />','<img src="../src/images/icons/arrow-right.svg" class="svg-icon">']
  });
});
