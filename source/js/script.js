let header = document.querySelector('.header');
let nav = document.querySelector('.nav');
let navToggle = document.querySelector('.nav__toggle');
let locationImg = document.querySelector('.location__img');
let locationMap = document.querySelector('.location__map');

header.classList.remove('header--nojs');
nav.classList.remove('nav--nojs');
locationImg.classList.remove('location__img--nojs');
locationMap.classList.remove('location__map--nojs');


navToggle.addEventListener('click', function () {
  if (nav.classList.contains('nav--closed')) {
    nav.classList.remove('nav--closed');
    nav.classList.add('nav--opened');
  } else {
    nav.classList.add('nav--closed');
    nav.classList.remove('nav--opened');
  }
});
