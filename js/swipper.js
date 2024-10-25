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
        slidesPerView: 1.3,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 1.3,
        spaceBetween: 30,
      }
    }
  });
});

$(function() {
  const swiperTestimonios = new Swiper('#swiper-testimonios-container', {
    loop: true, 
    lazy: true,
    // autoplay: {
    //   delay: 5000,
    // },
    breakpoints: {      
      0: {
        slidesPerView: 1,
        
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 153,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 90,
      }
    }
  });
});