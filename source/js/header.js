'use strict';

(function () {
  let header = document.querySelector('.header');
  let toggle = header.querySelector('.header__toggle-nav');

  header.classList.remove('header--nojs');

  toggle.addEventListener('click', function () {
    if (header.classList.contains('header--opened')) {
      header.classList.remove('header--opened');
    } else {
      header.classList.add('header--opened');
    }
  })
})();
