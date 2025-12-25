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

headerWrapperMobile.addEventListener('click', (e) => {
    const link = e.target.closest('a')
    if (!link) return

    const href = link.getAttribute('href')

    // проверка на якорную ссылку
    if (href && href.startsWith('#')) {
        e.preventDefault()

        // закрываем меню
        headerWrapperMobile.classList.remove('active')
        body.classList.remove('stop-scroll')

        // плавный скролл
        const target = document.querySelector(href)
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        }
    }
})


// swiper

const swiperEl = document.querySelector('.swiper')

if (swiperEl) {
    const swiper = new Swiper(swiperEl, {
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
}


// accordion

const accordions = document.querySelectorAll('.party__accordion')

accordions.forEach(accordion => {
    const accordionTop = accordion.querySelector('.party__accordion-top')

    accordionTop.addEventListener('click', () => {
        accordions.forEach(item => {
            if (item !== accordion) {
                item.classList.remove('party__accordion--open')
            } else {
                accordion.classList.toggle('party__accordion--open')
            }
        })
    })
})


// Fancybox

Fancybox.bind("[data-fancybox]", {
    Carousel: {
        Thumbs: {
            type: "modern",
        },
    },
})