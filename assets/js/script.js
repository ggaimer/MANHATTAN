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