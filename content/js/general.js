var swiper = new Swiper(".mySwiper", {
  slidesPerView: 5.5,
  centeredSlides: true,
  spaceBetween: 48,
  grabCursor: true,
  loop: true,
  lazy: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },

    1440: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});
