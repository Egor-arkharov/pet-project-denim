'use strict';

(function () {
  var filter = document.querySelector('.filter__wrapper');
  var colorList = filter.querySelector('.color__list');
  var styleList = filter.querySelector('.style__list');

  var form = filter.querySelector('.filter__form');
  var resetButton = filter.querySelector('.filter__btn-clear');

  filter.addEventListener('click', function (evt) {
    if (evt.target.classList.contains('button-toggle')) {
      var content = evt.target.nextElementSibling;
      content.classList.toggle('visually-hidden');
      evt.target.querySelector('.arrow').classList.toggle('rotate');
    }
  });

  var changeFeatures = function (elClass, evt) {
    var activeBtns = document.querySelectorAll('.' + elClass);

    if (evt.target.tagName !== 'LABEL' || (activeBtns.length === 1 && evt.target === activeBtns[0])) {
      return
    } else {
      evt.target.classList.toggle(elClass)
    }
  };

  var deactivateButtons = function (container, className) {
    var elements = container.querySelectorAll('.' + className);

    for (var i = 0; i < elements.length; i++) {
      if (elements[i].classList.contains(className + '--active')) {
        elements[i].classList.remove(className + '--active')
      }
    }

    elements[0].classList.add(className + '--active');
  };

  var resetForm = function () {
    form.reset();

    deactivateButtons(colorList, 'color__name');
    deactivateButtons(styleList, 'style__name');
  }

  resetButton.addEventListener('click', resetForm);
  colorList.addEventListener('click', function (evt) { changeFeatures('color__name--active', evt)});
  styleList.addEventListener('click', function (evt) { changeFeatures('style__name--active', evt)});
})();
