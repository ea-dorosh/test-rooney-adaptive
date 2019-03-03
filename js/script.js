'use strict'

// выдвижное меню в хедере

var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var mainTel = document.querySelector('.main-header__phone');
var navTel = document.querySelector('.main-nav__phone');

navToggle.addEventListener('click', function() {
if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    mainTel.classList.add('main-header__phone-none');
    navTel.classList.remove('main-nav__phone-none');
} else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    mainTel.classList.remove('main-header__phone-none');
    navTel.classList.add('main-nav__phone-none');
    }
});
