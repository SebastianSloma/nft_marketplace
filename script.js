// menu
function toggleMenu(){
    const toggleMenu = document.querySelector('.toggleMenu')
    const navigation = document.querySelector('.navigation')
    toggleMenu.classList.toggle('active')
    navigation.classList.toggle('active')
}
// swipper
var swiper = new Swiper(".live-swiper", {
    slidesPerView: 1,
    centeredSlides: false,
    slidesPerGroupSkip: 1,
    grabCursor: true,
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      769: {
        slidesPerView: 2,
        slidesPerGroup: 1,
      },
    },
   
    navigation: {
      nextEl: ".live-swiper .swiper-button-next",
      prevEl: ".live-swiper .swiper-button-prev",
    },
 
  });

