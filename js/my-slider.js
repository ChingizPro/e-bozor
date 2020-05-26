(function () {
    const sliderParent = $('.discounts-slider.my-slider');
    const slider = sliderParent.querySelector('.my-slides');
    let slides = sliderParent.querySelectorAll('.my-slide');
    const prevSlide = sliderParent.querySelector('.my-slider__control--prev');
    const nextSlide = sliderParent.querySelector('.my-slider__control--next');

    let slideCount = slides.length;
    let distanceToTranslate = slides[0].clientWidth;

    slider.style.transform = 'translateX(-' + distanceToTranslate + 'px)';

    let num = 1;

    function checkSize() {
        distanceToTranslate = document.querySelector('.my-slide').clientWidth;
        slider.style.transform = 'translateX(-' + distanceToTranslate + 'px)';
        slider2.style.transform = 'translateX(-' + distanceToTranslate + 'px)';
    }

    window.addEventListener('resize', debounce(checkSize, 200));

    nextSlide.addEventListener('click', function () {
        if (num >= slideCount - 1) return;

        slider.style.transition = '0.45s transform ease-in-out';
        slider.style.transform = 'translateX(-' + (distanceToTranslate * (++num)) + 'px)';
    });

    prevSlide.addEventListener('click', function () {
        if (num <= 0) return;

        slider.style.transition = '0.45s transform ease-in-out';
        slider.style.transform = 'translateX(-' + (distanceToTranslate * (--num)) + 'px)';
    });

    slider.addEventListener('transitionend', function (evt) {
        if (evt.target != this) return;

        if (num === 0) {
            num = slideCount - 3;
            slider.style.transition = 'none';
            slider.style.transform = 'translateX(-' + (distanceToTranslate * (++num)) + 'px)';
        } else if (num === slideCount - 1) {
            num = 0;
            slider.style.transition = 'none';
            slider.style.transform = 'translateX(-' + (distanceToTranslate * (++num)) + 'px)';
        }
    });

    // ! for 2nd slider
    const sliderParent2 = $('.news-slider.my-slider');
    const slider2 = sliderParent2.querySelector('.my-slides');
    const slides2 = sliderParent2.querySelectorAll('.my-slide');
    const prevSlide2 = sliderParent2.querySelector('.my-slider__control--prev');
    const nextSlide2 = sliderParent2.querySelector('.my-slider__control--next');

    let slideCount2 = slides2.length;
    slider2.style.transform = 'translateX(-' + distanceToTranslate + 'px)';

    let num2 = 1;

    nextSlide2.addEventListener('click', function () {
        if (num2 >= slideCount2 - 1) return;

        slider2.style.transition = '0.45s transform ease-in-out';
        slider2.style.transform = 'translateX(-' + (distanceToTranslate * (++num2)) + 'px)';
    });

    prevSlide2.addEventListener('click', function () {
        if (num2 <= 0) return;

        slider2.style.transition = '0.45s transform ease-in-out';
        slider2.style.transform = 'translateX(-' + (distanceToTranslate * (--num2)) + 'px)';
    });

    slider2.addEventListener('transitionend', function (evt) {
        if (evt.target != this) return;

        if (num2 === 0) {
            num2 = slideCount2 - 3;
            slider2.style.transition = 'none';
            slider2.style.transform = 'translateX(-' + (distanceToTranslate * (++num2)) + 'px)';
        } else if (num2 === slideCount2 - 1) {
            num2 = 0;
            slider2.style.transition = 'none';
            slider2.style.transform = 'translateX(-' + (distanceToTranslate * (++num2)) + 'px)';
        }
    });
})();