(function () {
    $('.products').slick({
        prevArrow: $('.new-products__control--prev'),
        nextArrow: $('.new-products__control--next'),
        autoplay: true,
        autoplaySpeed: 3500,
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1211,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 931,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 716,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 586,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
})();