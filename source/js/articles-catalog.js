'use strict';

(function () {
  let CATEGORY_NAME = 'Jacket';
  let TAB_SIZE = 768;
  let DESK_SIZE = 1366;
  let BAR_WIDTH_START = 33;
  let IMG_NUM = 9;
  let MIN_IMG_NUM = 0;

  let jacketsTemplate = document.querySelector('#jackets').content;
  let jacketsItem = jacketsTemplate.querySelector('.catalog__item');
  let jacketsList = document.querySelector('.catalog-main .catalog__list');

  let loadMoreButton = document.querySelector('.catalog-bar__button');

  let bar = document.querySelector('.catalog-bar__bar');

  let barWidth = BAR_WIDTH_START;
  let maxImgNum = IMG_NUM;

  let barItems = document.querySelector('.catalog-bar__show');
  let barItemsStartNum = +barItems.textContent;
  let barItemsCurrentNum = barItemsStartNum;

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

    for (let i = MIN_IMG_NUM; i < maxImgNum; i++) {
      let adCard = createJacket(data[i]);
      fragment.appendChild(adCard);
    }

    jacketsList.appendChild(fragment);
  }

  let changeGridBigImg = function () {
    let bigImgs = jacketsList.querySelectorAll('.catalog__item--big')

    if (document.body.clientWidth >= TAB_SIZE) {
      let gridRowStart = 2;
      let gridRowEnd = 4;
      let gridColumnStart = 2;
      let gridColumnEnd = 4;

      let gridRowStep = 4;
      let gridColumnStep = 1;

      let currentForStep = gridRowStep;

      for (var i = 1; i < bigImgs.length; i++) {
        bigImgs[i].style.gridRowStart = gridRowStart + currentForStep;
        bigImgs[i].style.gridRowEnd = gridRowEnd + currentForStep;

        if (i % 2 !== 0) {
          bigImgs[i].style.gridColumnStart = gridColumnStart - gridColumnStep;
          bigImgs[i].style.gridColumnEnd = gridColumnEnd - gridColumnStep;
        }

        currentForStep += gridRowStep;
      }
    }

    if (document.body.clientWidth >= DESK_SIZE) {
      let gridRowStart = 2;
      let gridRowEnd = 4;

      let gridColumnStart = 3;
      let gridColumnEnd = 5;

      let gridRowStep = 3;
      let gridColumnStep = 2;

      let currentForStep = gridRowStep;

      for (var i = 1; i < bigImgs.length; i++) {
        bigImgs[i].style.gridRowStart = gridRowStart + currentForStep;
        bigImgs[i].style.gridRowEnd = gridRowEnd + currentForStep;

        if (i % 2 !== 0) {
          bigImgs[i].style.gridColumnStart = gridColumnStart - gridColumnStep;
          bigImgs[i].style.gridColumnEnd = gridColumnEnd - gridColumnStep;
        }

        currentForStep += gridRowStep;
      }
    }
  }

  let changeCatalogBar = function () {
    MIN_IMG_NUM = maxImgNum;
    maxImgNum += IMG_NUM;

    barWidth += BAR_WIDTH_START;
    barItemsCurrentNum += barItemsStartNum;

    barItems.textContent = barItemsCurrentNum;
    bar.style.width = barWidth + '%';

    if (maxImgNum === window.mocks.JACKETS.length) {
      bar.style.width = '100%';
      loadMoreButton.removeEventListener('click', loadMore);
    }
  }

  let loadMore = function() {
    createJacketsCards(window.mocks.JACKETS);
    changeGridBigImg();
    changeCatalogBar();
  }

  loadMoreButton.addEventListener('click', loadMore);

  createJacketsCards(window.mocks.JACKETS);
})();
