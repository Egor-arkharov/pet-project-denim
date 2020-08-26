'use strict';

(function () {
  var Img = {
    IMG_1: {
      SMALL: 'img/tab/overalls_1_small.png',
      BIG: 'img/tab/overalls_1_big.png'
    },
    IMG_2: {
      SMALL: 'img/tab/overalls_2_small.png',
      BIG: 'img/tab/overalls_2_big.png'
    },
    IMG_3: {
      SMALL: 'img/tab/overalls_3_small.png',
      BIG: 'img/tab/overalls_3_big.png'
    },
    IMG_4: {
      SMALL: 'img/tab/overalls_4_small.png',
      BIG: 'img/tab/overalls_4_big.png'
    },
    IMG_5: {
      SMALL: 'img/tab/overalls_5_small.png',
      BIG: 'img/tab/overalls_5_big.png'
    },
  };

  var bigImgContainer = document.querySelector('.product__img-big-container');
  var container = document.querySelector('.product__img');
  var bigImgMob = container.querySelector('.product__img-big');
  var bigImgTab = bigImgContainer.querySelector('[media = "(min-width: 768px)"]');
  var bigImgDesk = bigImgContainer.querySelector('[media = "(min-width: 1366px)"]');
  var smallImgList = container.querySelector('.product__img-list');

  var featuresColorList = document.querySelector('.color__list');
  var featuresSizeList = document.querySelector('.size__list');

  var checkTarget = function (evt) {
    evt.preventDefault();

    if (evt.target === smallImgList) {
      return
    } else {
      var previousImg = bigImgMob.src.toString()[bigImgMob.src.length - 9];
      var newImgSmall = Img['IMG_' + previousImg].SMALL;
      var currentImgNum = evt.target.src[evt.target.src.length - 11];

      if (evt.target.src.includes(Img['IMG_' + currentImgNum].SMALL)) {
        bigImgMob.src = Img['IMG_' + currentImgNum].BIG;
        bigImgTab.srcset = Img['IMG_' + currentImgNum].BIG;
        bigImgDesk.srcset = Img['IMG_' + currentImgNum].BIG
    }

    evt.target.src = newImgSmall;
    evt.target.parentElement.querySelector('[media = "(min-width: 1366px)"]').srcset = newImgSmall;
  }
  }

  var changeFeatures = function (elClass, container, evt) {
    evt.preventDefault();

    if (evt.target.tagName !== 'LABEL') {
      return
    } else {

    var prevActiveBtn = container.querySelector('.' + elClass);
    prevActiveBtn.classList.remove(elClass);

    evt.target.classList.add(elClass);
    }
  };

  smallImgList.addEventListener('click', function (evt) { checkTarget(evt)});
  featuresSizeList.addEventListener('click', function (evt) { changeFeatures('size__list-btn--active', featuresSizeList, evt)});
  featuresColorList.addEventListener('click', function (evt) { changeFeatures('color__name--active', featuresColorList, evt)});
})();
