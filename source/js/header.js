'use strict';

(function () {
  var header = document.querySelector('.header');
  var toggle = header.querySelector('.header__toggle-nav');

  toggle.addEventListener('click', function () {
    if (header.classList.contains('header--opened')) {
      header.classList.remove('header--opened');
      header.classList.add('header--closed');
    } else {
      header.classList.remove('header--closed');
      header.classList.add('header--opened');
    }


  })
})();
