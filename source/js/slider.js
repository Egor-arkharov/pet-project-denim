'use strict';

(function () {
  var PATH_TO_IMG_NUM =5;

  var Img = {
    IMG_1: {
      SMALL: 'img/tab/overalls_small_1.png',
      BIG: 'img/tab/overalls_big_1.png'
    },
    IMG_2: {
      SMALL: 'img/tab/overalls_small_2.png',
      BIG: 'img/tab/overalls_big_2.png'
    },
    IMG_3: {
      SMALL: 'img/tab/overalls_small_3.png',
      BIG: 'img/tab/overalls_big_3.png'
    },
    IMG_4: {
      SMALL: 'img/tab/overalls_small_4.png',
      BIG: 'img/tab/overalls_big_4.png'
    },
    IMG_5: {
      SMALL: 'img/tab/overalls_small_5.png',
      BIG: 'img/tab/overalls_big_5.png'
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
      var previousImg = bigImgMob.src.toString()[bigImgMob.src.length - PATH_TO_IMG_NUM];
      var newImgSmall = Img['IMG_' + previousImg].SMALL;
      var currentImgNum = evt.target.src[evt.target.src.length - PATH_TO_IMG_NUM];

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
  featuresSizeList.addEventListener('click', function (evt) { changeFeatures('size__name--active', featuresSizeList, evt)});
  featuresColorList.addEventListener('click', function (evt) { changeFeatures('color__name--active', featuresColorList, evt)});
})();
