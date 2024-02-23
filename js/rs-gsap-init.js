
/*
Документация: 
https://gsap.com/
https://gsap.com/docs/v3/Plugins/ScrollTrigger/
*/

gsap.registerPlugin(
	ScrollTrigger,
);
console.clear();

window.addEventListener('load', function () {
	window.scrollTo(0, 0);
	ScrollTrigger.refresh(true);
})

//========================================================================================================================================================
/* REVEAL ANIMATION */
function showContentOnScroll(elem, duration, delay, direction) {
	if (document.querySelectorAll(elem)) {
		const elems = gsap.utils.toArray(elem);
		elems.forEach((item, i) => {
			let anim;

			switch (true) {
				case direction === 'bottom-up':
					anim = gsap.fromTo(item, { autoAlpha: 0, y: 50 }, { autoAlpha: 1, y: 0, x: 0, delay: delay, duration: duration });
					break;
				case direction === 'right-left':
					anim = gsap.fromTo(item, { autoAlpha: 0, x: 50 }, { autoAlpha: 1, y: 0, x: 0, delay: delay, duration: duration });
					break;
				case direction === 'up-bottom':
					anim = gsap.fromTo(item, { autoAlpha: 0, y: -50 }, { autoAlpha: 1, y: 0, x: 0, delay: delay, duration: duration });
					break;
				case direction === 'left-right':
					anim = gsap.fromTo(item, { autoAlpha: 0, x: -50 }, { autoAlpha: 1, y: 0, x: 0, delay: delay, duration: duration });
					break;
				case direction === 'fade':
					anim = gsap.fromTo(item, { autoAlpha: 0 }, { autoAlpha: 1, delay: delay, duration: duration });
					break;
				case direction === 'scale':
					anim = gsap.fromTo(item, { autoAlpha: 0, scale: 0 }, { autoAlpha: 1, scale: 1, delay: delay, duration: duration });
					break;
				case direction === 'bottom-up--every':
					anim = gsap.fromTo(item, { autoAlpha: 0, y: 50 }, { autoAlpha: 1, y: 0, x: 0, delay: delay * (i + 1), duration: duration });
					break;
				case direction === 'right-left--every':
					anim = gsap.fromTo(item, { autoAlpha: 0, x: 50 }, { autoAlpha: 1, y: 0, x: 0, delay: delay * (i + 1), duration: duration });
					break;
				case direction === 'up-bottom--every':
					anim = gsap.fromTo(item, { autoAlpha: 0, y: -50 }, { autoAlpha: 1, y: 0, x: 0, delay: delay * (i + 1), duration: duration });
					break;
				case direction === 'left-right--every':
					anim = gsap.fromTo(item, { autoAlpha: 0, x: -50 }, { autoAlpha: 1, y: 0, x: 0, delay: delay * (i + 1), duration: duration });
					break;
				case direction === 'fade--every':
					anim = gsap.fromTo(item, { autoAlpha: 0 }, { autoAlpha: 1, delay: delay * (i + 1), duration: duration });
					break;
				case direction === 'scale--every':
					anim = gsap.fromTo(item, { autoAlpha: 0, scale: 0 }, { autoAlpha: 1, scale: 1, delay: delay * (i + 1), duration: duration });
					break;
				case direction === 'width-100':
					anim = gsap.fromTo(item, { width: 0 + '%' }, { width: 100 + '%', delay: delay, duration: duration, ease: 'cubic-1', });
					break;

				default:
					break;
			}

			ScrollTrigger.create({
				trigger: item,
				animation: anim,
				once: true,
				// scrub: true,
				// markers: 1,

				onEnter: () => function () { },
				onLeave: () => function () { },
				onEnterBack: () => function () { },
				onLeaveBack: () => function () { },
			});
		});
	}
}

//========================================================================================================================================================
function animDesktop() {
	if (document.querySelector('.rs-steps__block') && document.querySelector('.rs-steps')) {
		let container = document.querySelector('.rs-steps__block');
		let containerTrigger = document.querySelector('.rs-steps');

		const pinBlock = gsap.to(container, {
			x: () => -(container.scrollWidth - container.clientWidth) + "px",
			ease: "linear",
			scrollTrigger: {
				trigger: '.rs-steps',
				start: `top-=50% top`,
				end: `bottom+=300% bottom`,
				scrub: true,
				pin: true,
				invalidateOnRefresh: true,
				markers: 0,
			}
		});
		pinBlock.scrollTrigger.spacer.style.backgroundColor = "#111";
		ScrollTrigger.refresh(true);

		if (document.querySelector('.rs-steps__line') && document.querySelector('.rs-steps__item')) {
			const item = containerTrigger.querySelector('.rs-steps__item');
			const items = containerTrigger.querySelectorAll('.rs-steps__item');

			gsap.to('.rs-steps__line', {
				width: (item.clientWidth * (items.length - 1)) + 'px',
				duration: 2,
				ease: 'linear',
				scrollTrigger: {
					trigger: '.rs-steps',
					start: `top-=50% top`,
					end: `bottom+=300% bottom`,
					scrub: true,
					invalidateOnRefresh: true,
				}
			});
		}
	}
}

function animMobile() {
	if (document.querySelector('.rs-steps__block') && document.querySelector('.rs-steps')) {
		let container = document.querySelector('.rs-steps__block');
		let containerTrigger = document.querySelector('.rs-steps');

		if (document.querySelector('.rs-steps__line') && document.querySelector('.rs-steps__item')) {
			const item = containerTrigger.querySelector('.rs-steps__item');
			const items = containerTrigger.querySelectorAll('.rs-steps__item');

			gsap.to('.rs-steps__line', {
				height: (item.clientHeight * (items.length - 1)) + 'px',
				duration: 2,
				ease: 'linear',
				scrollTrigger: {
					trigger: '.rs-steps',
					start: `top-=30% top`,
					end: `bottom+=30% bottom`,
					scrub: true,
					invalidateOnRefresh: true,
				}
			});
		}
	}
}

function animCommon() {
	if (document.querySelector('.rs-books__wrapper') && document.querySelector('.rs-books')) {
		let container = document.querySelector('.rs-books__wrapper');
		let containerTrigger = document.querySelector('.rs-books');

		gsap.to(container, {
			x: () => -(container.scrollWidth - container.clientWidth) + "px",
			ease: "linear",
			scrollTrigger: {
				trigger: '.rs-books',
				start: `top-=10% top`,
				end: `bottom+=200% bottom`,
				scrub: true,
				pin: true,
				invalidateOnRefresh: true,
				markers: 0,
			}
		});
		ScrollTrigger.refresh(true);
	}
}

// Проверка ширины экрана для вызова отдельных анимаций
const breakpoint = window.matchMedia('(min-width: 991.98px)');
const breakpointGsapAnimChecker = function () {
	ScrollTrigger.refresh(true);

	animCommon()

	if (breakpoint.matches === true) {
		return animDesktop();
	} else if (breakpoint.matches === false) {
		return animMobile();
	}
};
breakpoint.addListener(breakpointGsapAnimChecker);
breakpointGsapAnimChecker();
