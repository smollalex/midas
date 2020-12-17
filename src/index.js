import "bootstrap";

import "owl.carousel/src/scss/owl.carousel.scss";
import "owl.carousel";

import "./sass/main.scss";


$(document).ready(function () {
  $("#main-slider").owlCarousel({
    loop: false,
    nav: true,
    mouseDrag: true,
    dots: true,
    items: 1,
    lazyLoad: true,
    navText: ['<svg width="25" height="25" viewBox="0 0 25 25"><path d="M12.5 23.1066L2.60051 13.2071C2.20998 12.8166 2.20998 12.1834 2.60051 11.7929L12.5 1.8934" stroke="white" stroke-width="2" stroke-linecap="round" fill="none"/></svg>',
              '<svg width="25" height="25" viewBox="0 0 25 25"><path d="M12.5 1.8934L22.3995 11.7929C22.79 12.1834 22.79 12.8166 22.3995 13.2071L12.5 23.1066" stroke="white" stroke-width="2" stroke-linecap="round" fill="none"/></svg>'
            ]
  });
  $("#trends-slider").owlCarousel({
    loop: true,
    nav: true,
    mouseDrag: true,
    dots: true,
    items: 4,
    lazyLoad: true,
    margin: 40,
    navText: ['<svg width="25" height="25" viewBox="0 0 25 25"><path d="M12.5 23.1066L2.60051 13.2071C2.20998 12.8166 2.20998 12.1834 2.60051 11.7929L12.5 1.8934" stroke="white" stroke-width="2" stroke-linecap="round" fill="none"/></svg>',
              '<svg width="25" height="25" viewBox="0 0 25 25"><path d="M12.5 1.8934L22.3995 11.7929C22.79 12.1834 22.79 12.8166 22.3995 13.2071L12.5 23.1066" stroke="white" stroke-width="2" stroke-linecap="round" fill="none"/></svg>'
            ]
  });
});
