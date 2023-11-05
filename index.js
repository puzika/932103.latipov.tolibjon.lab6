'use strict';

const btnLeft = document.querySelector('.btns__btn--left');
const btnBoth = document.querySelector('.btns__btn--both');
const btnRight = document.querySelector('.btns__btn--right');
const boxCat = document.querySelector('.boxes__box--cat');
const boxDog = document.querySelector('.boxes__box--dog');
const imgCat = document.querySelector('.boxes__image--cat');
const imgDog = document.querySelector('.boxes__image--dog');

function hideDog() {
   boxDog.classList.remove('boxes__box--active');
   imgDog.classList.remove('boxes__image--active');
   boxDog.classList.add('boxes__box--hidden');
   imgDog.classList.add('boxes__image--hidden');
}

function hideCat() {
   boxCat.classList.remove('boxes__box--active');
   imgCat.classList.remove('boxes__image--active');
   boxCat.classList.add('boxes__box--hidden');
   imgCat.classList.add('boxes__image--hidden');
}

function showDog() {
   boxDog.classList.remove('boxes__box--hidden');
   imgDog.classList.remove('boxes__image--hidden');
   boxDog.classList.add('boxes__box--active');
   imgDog.classList.add('boxes__image--active');
}

function showCat() {
   boxCat.classList.remove('boxes__box--hidden');
   imgCat.classList.remove('boxes__image--hidden');
   boxCat.classList.add('boxes__box--active');
   imgCat.classList.add('boxes__image--active');
}

function showBoth() {
   boxDog.classList.remove('boxes__box--active');
   imgDog.classList.remove('boxes__image--active');
   boxDog.classList.remove('boxes__box--hidden');
   imgDog.classList.remove('boxes__image--hidden');
   boxCat.classList.remove('boxes__box--active');
   imgCat.classList.remove('boxes__image--active');
   boxCat.classList.remove('boxes__box--hidden');
   imgCat.classList.remove('boxes__image--hidden');
}

btnLeft.addEventListener('click', function (e) {
   showCat();
   hideDog();
});

btnRight.addEventListener('click', function (e) {
   hideCat();
   showDog();
});

btnBoth.addEventListener('click', showBoth);