// ! variables
const sliderContainer = $('.slider');
const slider = $('.slides');
const slides = $$('.slide');

const prevSlide = $('.slider__control--prev');
const nextSlide = $('.slider__control--next');

let slidesCount = slides.length;
let activeIndex = 0;

slides[activeIndex].classList.add('show-slide');

// ! slide button activator function
function activateButton(isAutoChange, index) {
    const itemBtns = $$('.item-button');
    let activeIndex = parseInt(sliderContainer.querySelector('.active-button').dataset.number, 10);

    itemBtns[activeIndex].classList.remove('active-button');
    itemBtns[index].classList.add('active-button');
}

// ! auto sliding
function autoSlide() {
    slides[activeIndex].classList.remove('show-slide');
    activeIndex++;

    if (activeIndex === slidesCount) activeIndex = 0;
    slides[activeIndex].classList.add('show-slide');

    activateButton(true, activeIndex);
}

let slidingInterval = setInterval(autoSlide, 5500);

// ? prev and next slide function
function prevNext() {
    clearInterval(slidingInterval);
    slidingInterval = setInterval(autoSlide, 5500);

    slides[activeIndex].classList.remove('show-slide');

    if (this.classList.contains('slider__control--next'))
        activeIndex++;
    else
        activeIndex--;

    if (activeIndex === slidesCount) activeIndex = 0;
    else if (activeIndex === -1) activeIndex = slidesCount - 1;

    slides[activeIndex].classList.add('show-slide');

    activateButton(false, activeIndex);
}

// ? go to next
nextSlide.addEventListener('click', prevNext);

// ? go to previous
prevSlide.addEventListener('click', prevNext);

// ? sliding with slide buttons
const buttonsParent = $('.slider__buttons');

let buttonsFragment = document.createDocumentFragment();

for (let i = 0; i < slidesCount; i++) {
    let button = document.createElement('button');
    button.classList.add('item-button');
    button.dataset.number = i;
    buttonsFragment.appendChild(button);
}

buttonsFragment.querySelector('button:first-child').classList.add('active-button');
buttonsParent.appendChild(buttonsFragment);

// ? changing slider item with item-buttons
buttonsParent.addEventListener('click', function (horse) {
    let target = horse.target;

    if (target.tagName != 'BUTTON') return;

    clearInterval(slidingInterval);
    slidingInterval = setInterval(autoSlide, 5500);

    slides[activeIndex].classList.remove('show-slide');
    activeIndex = parseInt(target.dataset.number, 10);
    slides[activeIndex].classList.add('show-slide');

    activateButton(false, activeIndex);
});