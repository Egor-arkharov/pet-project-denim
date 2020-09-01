'use strict';

(function () {
  let CATEGORY_NAME = 'Jacket';

  let jacketsTemplate = document.querySelector('#jackets').content;
  let jacketsItem = jacketsTemplate.querySelector('.catalog__item');
  let jacketsList = document.querySelector('.catalog-main .catalog__list');

  let renderTextValue = function (className, cardValue, article) {
    article.querySelector(className).textContent = cardValue;
  };

  let renderPhoto = function (className, img, isBig, article) {
    let mobImg = article.querySelector(className);
    let tabImg = article.querySelector('[media = "(min-width: 768px)"]');
    let deskImg = article.querySelector('[media = "(min-width: 1366px)"]');

    mobImg.src = img.mob;
    tabImg.srcset = img.tab;
    deskImg.srcset = img.desk;

    if (isBig === true) {
      article.classList.add('catalog__item--big');
    }
  }

  let renderAlt = function (className, alt, article) {
    article.querySelector(className).alt = alt;
  }

  let createJacket = function (data) {
    let jacketArticle = jacketsItem.cloneNode(true);

    renderTextValue('.catalog__category', CATEGORY_NAME, jacketArticle);
    renderTextValue('.catalog__price', '$ ' + data.price, jacketArticle);
    renderPhoto('.catalog__item-img', data.photo, data.isPhotoBig, jacketArticle);
    renderAlt('.catalog__item-img', data.alt, jacketArticle);

    return jacketArticle
  }

  let createJacketsCards = function (data) {
    let fragment = document.createDocumentFragment();

    for (let i = 0; i < data.length; i++) {
      let adCard = createJacket(data[i]);
      fragment.appendChild(adCard);
    }

    jacketsList.appendChild(fragment);
  }

  createJacketsCards(window.mocks.JACKETS);
})();
