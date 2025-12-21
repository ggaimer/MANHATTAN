const burger = document.querySelector('.burger')
const burgerClose = document.querySelector('.burger--close')
const headerWrapperMobile = document.querySelector('.header__wrapper--mobile')
const body = document.body

burger.addEventListener("click", () => {
    headerWrapperMobile.classList.add('active')
    body.classList.add('stop-scroll')
})

burgerClose.addEventListener("click", () => {
    headerWrapperMobile.classList.remove('active')
    body.classList.remove('stop-scroll')
})


// swiper

const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 1,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        320: {
            slidesPerView: 1.1,
            spaceBetween: 16,
        },

        768: {
            slidesPerView: 1,
        },
    }
})


// accordion

// let slideUp = (target, duration = 300) => {
// 	target.style.transitionProperty = 'height, margin, padding'
// 	target.style.transitionDuration = duration + 'ms'
// 	target.style.boxSizing = 'border-box'
// 	target.style.height = target.offsetHeight + 'px'
// 	target.offsetHeight
// 	target.style.overflow = 'hidden'
// 	target.style.height = 0
// 	target.style.paddingTop = 0
// 	target.style.paddingBottom = 0
// 	target.style.marginTop = 0
// 	target.style.marginBottom = 0
// 	target.style.border = 'none'

// 	window.setTimeout(() => {
// 		target.style.display = 'none'
// 		target.style.removeProperty('height')
// 		target.style.removeProperty('padding-top')
// 		target.style.removeProperty('padding-bottom')
// 		target.style.removeProperty('margin-top')
// 		target.style.removeProperty('margin-bottom')
// 		target.style.removeProperty('overflow')
// 		target.style.removeProperty('transition-duration')
// 		target.style.removeProperty('transition-property')
// 		target.style.removeProperty('border')
// 	}, duration)
// }
// /* SLIDE DOWN */
// let slideDown = (target, duration = 300) => {
// 	target.style.removeProperty('display')
// 	let display = window.getComputedStyle(target).display
// 	if (display === 'none') display = 'grid'
// 	target.style.display = display
// 	let height = target.offsetHeight
// 	target.style.overflow = 'hidden'
// 	target.style.height = 0
// 	target.style.paddingTop = 0
// 	target.style.paddingBottom = 0
// 	target.style.marginTop = 0
// 	target.style.marginBottom = 0
// 	target.offsetHeight
// 	target.style.boxSizing = 'border-box'
// 	target.style.transitionProperty = 'height, margin, padding'
// 	target.style.transitionDuration = duration + 'ms'
// 	target.style.height = height + 'px'
// 	target.style.border = 'none'

// 	target.style.removeProperty('padding-top')
// 	target.style.removeProperty('padding-bottom')
// 	target.style.removeProperty('margin-top')
// 	target.style.removeProperty('margin-bottom')
// 	target.style.removeProperty('border')

// 	window.setTimeout(() => {
// 		target.style.removeProperty('height')
// 		target.style.removeProperty('overflow')
// 		target.style.removeProperty('transition-duration')
// 		target.style.removeProperty('transition-property')
// 		target.style.removeProperty('border')
// 	}, duration)
// }

const accordions = document.querySelectorAll('.party__accordion');

accordions.forEach(accordion => {
    const accordionTop = accordion.querySelector('.party__accordion-top');

    accordionTop.addEventListener('click', () => {
        accordions.forEach(item => {
            if (item !== accordion) {
                item.classList.remove('party__accordion--open');
            } else {
                accordion.classList.toggle('party__accordion--open');
            }
        });
    });
});