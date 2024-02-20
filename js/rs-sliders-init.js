/*
Документация слайдера: https://swiperjs.com/
*/

// Инициализация слайдеров
function initSliders() {
	// Перечень слайдеров
	// rs-authors
	if (document.querySelector('.rs-authors__slider')) {
		const sliderBlocks = document.querySelectorAll('.rs-authors__slider');
		sliderBlocks.forEach(sliderBlock => {
			const arrowNext = sliderBlock.querySelector('.rs-authors__button-next');
			const arrowPrev = sliderBlock.querySelector('.rs-authors__button-prev');
			// const pagination = sliderBlock.querySelector('.rs-authors__pagination');

			const sliderSwiper = new Swiper(sliderBlock, {
				// Автопрокрутка
				autoplay: {
					// Пауза между прокруткой
					delay: 10000,
					// Закончить на последнем слайде
					stopOnLastSlide: false,
					// Отключить после ручного переключения
					disableOnInteraction: false,
				},

				// Обновить свайпер
				// при изменении элементов слайдера
				observer: true,
				// при изменении родительских элементов слайдера
				observeParents: true,
				// при изменении дочерних элементов слайдера
				observeSlideChildren: true,

				// Скорость смены слайдов
				speed: 500,

				// Включение/отключение
				// перетаскивание на ПК
				simulateTouch: true,
				// Чувствительность свайпа
				touchRadio: 1,
				// Угол срабатывания свайпа/перетаскивания
				touchAngle: 45,

				// Курсор
				grabCursor: true,

				// // Пагинация
				// pagination: {
				// 	el: pagination,
				// 	// clickable: true,
				// 	// dynamicBullets: true
				// 	type: 'progressbar',
				// },

				// effect: 'fade',

				// Стрелки
				navigation: {
					nextEl: arrowNext,
					prevEl: arrowPrev,
				},


				// Брекпоинты (адаптив)
				breakpoints: {
					320: {
						slidesPerView: 1.05,
						spaceBetween: 20,
					},
					991.98: {
						slidesPerView: 1,
						spaceBetween: 50,
					},
				},
			});
		});
	}

	// rs-price
	if (document.querySelector('.rs-price__slider')) {
		// До этой ширины слайдер будет неактивным
		const breakpoint = window.matchMedia('(min-width: 991.98px)');
		let priceSlider;

		const sliderBlocks = document.querySelectorAll('.rs-price__slider');
		sliderBlocks.forEach(sliderBlock => {
			// const arrowNext = sliderBlock.querySelector('.rs-price__button-next');
			// const arrowPrev = sliderBlock.querySelector('.rs-price__button-prev');
			// const pagination = sliderBlock.querySelector('.rs-authors__pagination');

			const breakpointChecker = function () {
				if (breakpoint.matches === true) {
					if (priceSlider !== undefined) priceSlider.destroy(true, true);
					return;
				} else if (breakpoint.matches === false) {
					return enableSwiper();
				}
			};

			// Инициализация слайдера
			const enableSwiper = function () {
				priceSlider = new Swiper(sliderBlock, {
					// Автопрокрутка
					autoplay: {
						// Пауза между прокруткой
						delay: 10000,
						// Закончить на последнем слайде
						stopOnLastSlide: false,
						// Отключить после ручного переключения
						disableOnInteraction: true,
					},

					// Обновить свайпер
					// при изменении элементов слайдера
					observer: true,
					// при изменении родительских элементов слайдера
					observeParents: true,
					// при изменении дочерних элементов слайдера
					observeSlideChildren: true,

					// Скорость смены слайдов
					speed: 500,

					// Включение/отключение
					// перетаскивание на ПК
					simulateTouch: true,
					// Чувствительность свайпа
					touchRadio: 1,
					// Угол срабатывания свайпа/перетаскивания
					touchAngle: 45,
					// Cобытие touchstart (pointerdown)
					touchStartPreventDefault: true,

					// // Пагинация
					// pagination: {
					// 	el: pagination,
					// 	// clickable: true,
					// 	// dynamicBullets: true
					// 	type: 'progressbar',
					// },

					// effect: 'fade',

					// // Стрелки
					// navigation: {
					// 	nextEl: arrowNext,
					// 	prevEl: arrowPrev,
					// },

					// Брекпоинты (адаптив)
					breakpoints: {
						320: {
							slidesPerView: 1,
							spaceBetween: 24,
						},
						389.98: {
							slidesPerView: 1.15,
							spaceBetween: 24,
						},
						540: {
							slidesPerView: 2,
							spaceBetween: 24,
						},
						768: {
							slidesPerView: 3,
							spaceBetween: 24,
						},
					},
				});
			};

			breakpoint.addListener(breakpointChecker);
			breakpointChecker();
		});
	}
}

// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	if (document.querySelector('.swiper')) {
		initSliders();
	}
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});