$(function() {
  const swiperGaleria = new Swiper('#swiper-gallery-container', {
    loop: true, 
    lazy: true,
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-previous',
    },
    pagination: {
      el: '.swiper-pagination',
    },
    breakpoints: {      
      0: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 1.333,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 1.5,
        spaceBetween: 30,
      }
    }
  });
});

$(function() {
  const swiperTestimoniosLeft = new Swiper('#swiper-testimonios-container-left', {
    loop: true,
    lazy: true,
    autoplay: {
      delay: 0,             
      disableOnInteraction: false, 
      reverseDirection: false,
    },
    allowTouchMove: false,
    breakpoints: {      
      0: {
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 15000,
      },
      768: {
        slidesPerView: 1.75,
        spaceBetween: 153,
        speed: 11000,
      },
      992: {
        slidesPerView: 2.75,
        spaceBetween: 90,
        speed: 9000,
      }
    }
  });
});

$(function() {
  const swiperTestimoniosRight = new Swiper('#swiper-testimonios-container-right', {
    loop: true,
    lazy: true,
    autoplay: {
      delay: 0,             
      disableOnInteraction: false, 
      reverseDirection: true,
    },
    allowTouchMove: false,
    breakpoints: {      
      0: {
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 15000,
      },
      768: {
        slidesPerView: 1.75,
        spaceBetween: 153,
        speed: 11000,
      },
      992: {
        slidesPerView: 2.75,
        spaceBetween: 90,
        speed: 9000,
      }
    }
  });
});


// $(function() {
//   const swiperCiudades = new Swiper('#swiper-ciudades-container', {
//     loop: true,
//     lazy: true,
//     autoplay: {
//       delay: 0,             
//       disableOnInteraction: false, 
//       reverseDirection: false,
//     },
//     allowTouchMove: false,
//     breakpoints: {      
//       0: {
//         slidesPerView: 1,
//         spaceBetween: 30,
//         speed: 15000,
//       },
//       768: {
//         slidesPerView: ,
//         spaceBetween: 153,
//         speed: 15000,
//       },
//       992: {
//         slidesPerView: 'auto',
//         spaceBetween: 30,
//         speed: 3000,
//       }
//     }
//   });
// });

