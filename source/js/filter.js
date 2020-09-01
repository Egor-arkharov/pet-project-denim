'use strict';

(function () {
  let filter = document.querySelector('.filter__wrapper');
  let filterList = filter.querySelector('.filter__filters');
  let colorList = filter.querySelector('.color__list');
  let styleList = filter.querySelector('.style__list');

  let clearButton = filter.querySelector('.filter__btn-clear');
  let closeButton = filter.querySelector('.filter__btn-close');


  filter.addEventListener('click', function (evt) {
    if (evt.target.classList.contains('button-toggle')) {
      let content = evt.target.nextElementSibling;
      content.classList.toggle('visually-hidden');
      evt.target.querySelector('.filter__arrow').classList.toggle('rotate');
    }
  });

  let changeFeatures = function (elClass, evt) {
    let activeBtns = document.querySelectorAll('.' + elClass);

    if (evt.target.tagName !== 'BUTTON' || (activeBtns.length === 1 && evt.target === activeBtns[0])) {
      return
    } else {
      evt.target.classList.toggle(elClass);
    }
  };

  let deactivateButtons = function (container, className) {
    let elements = container.querySelectorAll('.' + className);

    for (let i = 0; i < elements.length; i++) {
      if (elements[i].classList.contains(className + '--active')) {
        elements[i].classList.remove(className + '--active')
      }
    }

    elements[0].classList.add(className + '--active');
  };

  let clearFilter = function () {
    deactivateButtons(colorList, 'color__name');
    deactivateButtons(styleList, 'style__name');
  }

  let closeFilter = function () {
    filterList.classList.add('visually-hidden');
  }

  let changeColor = function (evt) {
    changeFeatures('color__name--active', evt);
  };

  let changeStyle = function (evt) {
    changeFeatures('style__name--active', evt);
  }

  closeButton.addEventListener('click', closeFilter);
  clearButton.addEventListener('click', clearFilter);
  colorList.addEventListener('click', changeColor);
  styleList.addEventListener('click', changeStyle);
})();
