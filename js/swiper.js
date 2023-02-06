var swiper = new Swiper('.swiper-container', {

    slidesPerView: 1,
    spaceBetween: 10,
    // init: false,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },


    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        499: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        560: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        920: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1240: {
            slidesPerView: 3,
            spaceBetween: 60,
        },
    }
});