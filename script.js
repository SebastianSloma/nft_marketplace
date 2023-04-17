// menu
const toggleMenu = () => {
	const toggleMenu = document.querySelector('.toggleMenu');
	const navigation = document.querySelector('.navigation');
	toggleMenu.classList.toggle('active');
	navigation.classList.toggle('active');
}
// swipper
const swiper = new Swiper('.live-swiper', {
	slidesPerView: 3,
	spaceBetwen: 30,
	slidesPerGroupSkip: 1,
	grabCursor: true,
	keyboard: {
		enabled: true,
	},

	navigation: {
		nextEl: '.live-swiper .swiper-button-next',
		prevEl: '.live-swiper .swiper-button-prev',
	},
	breakpoints: {
		'@0.00': {
			slidesPerView: 1,
			spaceBetwen: 10,
		},

		'@0.75': {
			slidesPerView: 1.5,
			spaceBetwen: 10,
		},

		'@0.85': {
			slidesPerView: 1.5,
			spaceBetwen: 20,
		},

		'@1.00': {
			slidesPerView: 2,
			spaceBetwen: 40,
		},

		'@1.40': {
			slidesPerView: 2.25,
			spaceBetwen: 40,
		},

		'@1.50': {
			slidesPerView: 3,
			spaceBetwen: 50,
		},
	},
});

// filter

const toggleFil = () => {
	const toggleFilter = document.querySelector('.toggleFilter');
	const filterOptions = document.querySelector('.filterOptions');
	toggleFilter.classList.toggle('active');
	filterOptions.classList.toggle('active');
}

//filter cards
const filtersCat = document.querySelector(".filter-btn")

let activeCards = document.querySelectorAll(
	".explore-cards .card:not(.d-none"
)

filtersCat.forEach((filter) => {
	filter.addEventListener("click", function (){
		filtersCat.forEach((filter) =>{
			filter.classList.remove("active")
		})
		this.classList.add('active')
		const category =this.dataset.cat
		const cards = document.querySelectorAll('.explore-cards .card')
	})
})