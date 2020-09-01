'use strict';

(function () {
  let renderTextValue = function (className, cardValue, article) {
    article.querySelector(className).textContent = cardValue;
  };

  let renderPhoto = function (className, img, article) {
    let mobImg = article.querySelector(className);
    let tabImg = article.querySelector('[media = "(min-width: 768px)"]');
    let deskImg = article.querySelector('[media = "(min-width: 1366px)"]');

    mobImg.src = img.mob;
    tabImg.srcset = img.tab;
    deskImg.srcset = img.desk;
  };

  let renderAlt = function (className, alt, article) {
    article.querySelector(className).alt = alt;
  };

  let createCard = function (data, item) {
    let article = item.cloneNode(true);

    renderTextValue('.catalog__category', data.category, article);
    renderPhoto('.catalog__item-img', data.photo, article);
    renderAlt('.catalog__item-img', data.alt, article);

    if (data.price) {
      renderTextValue('.catalog__price', '$ ' + data.price, article);
    }

    return article
  };

  let renderCards = function (data, list, item) {
    let fragment = document.createDocumentFragment();

    for (let i = 0; i < data.length; i++) {
      let adCard = createCard(data[i], item);
      fragment.appendChild(adCard);
    }

    list.appendChild(fragment);
  };

  window.card = {
    renderCards: renderCards
  }
})();
