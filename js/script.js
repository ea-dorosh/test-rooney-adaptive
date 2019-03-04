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

// слайдер с отзывами в 320ой ширине

var feedbackBtnBack = document.querySelector('.feedback-button--back');
var feedbackBtnNext = document.querySelector('.feedback-button--next');
var feedbackItems = document.querySelectorAll('.feedback__block');
var i = 0;

var showPrevFeedback = function () {
    feedbackItems[i].classList.remove('feedback__block--active');
    feedbackItems[i].classList.add('feedback__block--hidden');
     i = i - 1;
     if( i < 0){
       i = feedbackItems.length - 1;
     }
     feedbackItems[i].classList.remove('feedback__block--hidden');
     feedbackItems[i].classList.add('feedback__block--active');
}

var showNextFeedback = function () {
    feedbackItems[i].classList.remove('feedback__block--active');
    feedbackItems[i].classList.add('feedback__block--hidden');
    i = i+1;
    if( i >= feedbackItems.length){
      i = 0;
  }
    feedbackItems[i].classList.remove('feedback__block--hidden');
    feedbackItems[i].classList.add('feedback__block--active');
}

feedbackBtnBack.addEventListener('click', function() {
    showPrevFeedback();
});

feedbackBtnNext.addEventListener('click', function() {
    showNextFeedback();
});

feedbackBtnNext.onclick = function(){
    feedbackItems[i].classList.remove('feedback__block--active');
    feedbackItems[i].classList.add('feedback__block--hidden');
    i = i+1;
    if( i >= feedbackItems.length){
      i = 0;
  }
    feedbackItems[i].classList.remove('feedback__block--hidden');
    feedbackItems[i].classList.add('feedback__block--active');
};
