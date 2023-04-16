// menu
function toggleMenu(){
    const toggleMenu = document.querySelector('.toggleMenu')
    const navigation = document.querySelector('.navigation')
    toggleMenu.classList.toggle('active')
    navigation.classList.toggle('active')
}
// swipper
const swiper = new Swiper(".live-swiper", {
    slidesPerView: 3,
   spaceBetwen:30,
    slidesPerGroupSkip: 1,
    grabCursor: true,
    keyboard: {
      enabled: true,
    },
    
   
    navigation: {
      nextEl: ".live-swiper .swiper-button-next",
      prevEl: ".live-swiper .swiper-button-prev",
    },
    breakpoints: {
      "@0.00": {
        slidesPerView: 1,
        spaceBetwen: 10,
      },
 
        "@0.75": {
          slidesPerView: 1.5,
          spaceBetwen: 10,
        },
     
          "@0.85": {
            slidesPerView: 1.5,
            spaceBetwen: 20,
          },
    
            "@1.00": {
              slidesPerView: 2,
              spaceBetwen: 40,
            },
    
              "@1.40": {
                slidesPerView: 2.25,
                spaceBetwen: 40,
              },
     
                "@1.50": {
                  slidesPerView: 3,
                  spaceBetwen: 50,
                },

    },
 
  });

