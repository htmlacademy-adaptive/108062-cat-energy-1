let header = document.querySelector('.header');
let nav = document.querySelector('.nav');
let navToggle = document.querySelector('.nav__toggle');

header.classList.remove('header--nojs');
nav.classList.remove('nav--nojs');

navToggle.addEventListener('click', function () {
  if (nav.classList.contains('nav--closed')) {
    nav.classList.remove('nav--closed');
    nav.classList.add('nav--opened');
  } else {
    nav.classList.add('nav--closed');
    nav.classList.remove('nav--opened');
  }
});
