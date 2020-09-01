'use strict';

(function () {
  let MAIN_BUTTON = 0;

  let form = document.querySelector('form');

  let featuresColorList = document.querySelector('.color__list');
  let featuresSizeList = document.querySelector('.size__list');

  let EvtKeys = {
    ENTER: 'Enter',
    ESCAPE: 'Escape'
  };

  let changeFeatures = function (elClass, container, evt) {
    if (evt.target.tagName === 'LABEL') {
      let prevActiveBtn = container.querySelector('.' + elClass);
      prevActiveBtn.classList.remove(elClass);
      prevActiveBtn.parentElement.querySelector('input').checked = false;

      evt.target.classList.add(elClass);
      evt.target.parentElement.querySelector('input').checked = true;
    }
  };

  let changeColor = function (evt) {
    changeFeatures('color__name--active', featuresColorList, evt);
  }

  let changeSize = function (evt) {
    changeFeatures('size__name--active', featuresSizeList, evt);
  };

  let onKeyChangeColor = function (evt) {
    if (evt.key === EvtKeys.ENTER) {
      changeFeatures('color__name--active', featuresColorList, evt);
    }
  };

  let onKeyChangeSize = function (evt) {
    if (evt.key === EvtKeys.ENTER) {
      changeFeatures('size__name--active', featuresSizeList, evt);
    }
  }

  let disableForm = function () {
    form.querySelectorAll('form input, .product__button').forEach(elem => elem.setAttribute('disabled', 'disabled'));
    featuresSizeList.removeEventListener('click', changeSize);
    featuresColorList.removeEventListener('click', changeColor);
    featuresColorList.removeEventListener('keydown', onKeyChangeColor);
    featuresSizeList.removeEventListener('keydown', onKeyChangeSize);
  }

  let activeForm = function () {
    featuresColorList.addEventListener('click', changeColor);
    featuresSizeList.addEventListener('click', changeSize);
    featuresColorList.addEventListener('keydown', onKeyChangeColor);
    featuresSizeList.addEventListener('keydown', onKeyChangeSize);
    document.removeEventListener('keydown', onKeyHidePopup);
    document.removeEventListener('mousedown', onMouseHidePopup);

    form.querySelectorAll('form input, .product__button').forEach(elem => elem.removeAttribute('disabled', 'disabled'));

    form.querySelectorAll('.size__name--active, .color__name--active').forEach(elem => elem.classList.remove('size__name--active', 'color__name--active'));
    form.querySelector('.color__name--lightgreen').classList.add('color__name--active');
    form.querySelector('[for = "s"]').classList.add('size__name--active');

    form.reset();
  }

  let showPopup = function (template) {
    let popupTemplate = document.querySelector(template).content.cloneNode(true);
    form.appendChild(popupTemplate);
  };

  let removePopup = function () {
    let successPopup = document.querySelector('.success');
    let errorPopup = document.querySelector('.error');

    if (successPopup) {
      successPopup.remove();
    }

    if (errorPopup) {
      errorPopup.remove();
    }

    activeForm();
  };

  let onKeyHidePopup = function (evt) {
    if (evt.key === EvtKeys.ESCAPE || evt.key === EvtKeys.ENTER && evt.target.type === 'reset') {
      evt.preventDefault();
      removePopup();
    }
  };

  let onMouseHidePopup = function (evt) {
    if (evt.target.type === 'reset' && evt.button === MAIN_BUTTON) {
      evt.preventDefault();
      removePopup();
    }
  };

  let hideSuccessPopup = function () {
    document.addEventListener('keydown', onKeyHidePopup);
    document.addEventListener('mousedown', onMouseHidePopup);
  };

  let hideErrorPopup = function () {
    document.addEventListener('keydown', onKeyHidePopup);
    document.addEventListener('mousedown', onMouseHidePopup);
  };

  let onSuccess = function () {
    disableForm();
    showPopup('#success', '.success');
    hideSuccessPopup();
  };

  let onError = function () {
    disableForm();
    showPopup('#error', '.error');
    hideErrorPopup();
  };

  let onSubmitSaveData = function (evt) {
    window.backend.saveData(onSuccess, onError, new FormData(form));
    evt.preventDefault();
  }

  featuresColorList.addEventListener('click', changeColor);
  featuresSizeList.addEventListener('click', changeSize);
  featuresColorList.addEventListener('keydown', onKeyChangeColor);
  featuresSizeList.addEventListener('keydown', onKeyChangeSize);
  form.addEventListener('submit', onSubmitSaveData);
})();
