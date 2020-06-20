$('.slides-owl').owlCarousel({
    loop: false,
    margin: 0,
    nav: false,
    dots: true,
    responsive: {
        0: {
            items: 1
        }
    }
})

$('.slide-2-owl').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    center: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplaySpeed: 3000,
    responsive: {
        0: {
            items: 2
        }
    }
})