import React, { useEffect } from 'react';

let loader = 0;

function jsLoad(src, callback) {
  let jsLoader = document.getElementById('jsLoader');
  if (!jsLoader) {
    jsLoader = document.createElement('div');
    jsLoader.id = 'jsLoader';
    document.body.append(jsLoader);
  }

  const js = document.createElement('script');
  js.src = src;
  jsLoader.append(js);
  if (callback) {
    js.addEventListener('load', callback);
  }
}

export default function useCDN() {
  useEffect(() => {
    if (loader === 0) {
      loader = 1;
      jsLoad('/assets/js/jquery-3.5.1.min.js', () => {
        jsLoad('/assets/js/popper.min.js');
        jsLoad('/assets/js/owl.carousel.min.js');
        jsLoad('/assets/js/jquery.stellar.min.js');
        jsLoad('/assets/vendor/bootstrap/js/bootstrap.bundle.min.js');
        jsLoad('/assets/vendor/aos/aos.js');
        jsLoad('/assets/vendor/glightbox/js/glightbox.min.js');
        jsLoad('/assets/vendor/isotope-layout/isotope.pkgd.min.js');
        jsLoad('/assets/vendor/php-email-form/validate.js');
        jsLoad('/assets/vendor/swiper/swiper-bundle.min.js');
        jsLoad('/assets/vendor/waypoints/noframework.waypoints.js');
        jsLoad('https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.js');
        jsLoad('/assets/js/testimonial.js');
        jsLoad('/assets/js/jquery.flexslider.min.js');
        jsLoad('/assets/js/paralax.js');
        jsLoad('/assets/js/zoom-slider.js');
        jsLoad('/assets/js/typeit.min.js');
        jsLoad('/assets/js/card.js');
        jsLoad('https://cdnjs.cloudflare.com/ajax/libs/parallax.js/1.5.0/parallax.min.js');
        jsLoad('https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js');
        jsLoad('https://cdnjs.cloudflare.com/ajax/libs/is-in-viewport/3.0.4/isInViewport.min.js');
        jsLoad('/assets/js/main.js');
      });
    }
  }, []);

  return null;
}
