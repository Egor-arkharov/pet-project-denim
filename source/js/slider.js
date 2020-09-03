'use strict';

(function () {
  let PATH_TO_IMG_NUM = 5;
  let TAB_SIZE = 768;
  let MEDIA_TAB_SIZE = '[media = "(min-width: 768px)"]';
  let MEDIA_DESK_SIZE = '[media = "(min-width: 1366px)"]';

  let slider = document.querySelector('.slider__list');
  let bigImg = slider.querySelector('.slider__item--big');
  let bigImgTab = bigImg.querySelector(MEDIA_TAB_SIZE);
  let bigImgDesk = bigImg.querySelector(MEDIA_DESK_SIZE);

  let OVERALLS = {
    IMG_1: {
      TAB_SMALL: 'img/tab/overalls_small_1.png',
      TAB_BIG: 'img/tab/overalls_big_1.png',
      DESK_SMALL: 'img/desk/overalls_small_1.png',
      DESK_BIG: 'img/desk/overalls_big_1.png'
    },
    IMG_2: {
      TAB_SMALL: 'img/tab/overalls_small_2.png',
      TAB_BIG: 'img/tab/overalls_big_2.png',
      DESK_SMALL: 'img/desk/overalls_small_2.png',
      DESK_BIG: 'img/desk/overalls_big_2.png'
    },
    IMG_3: {
      TAB_SMALL: 'img/tab/overalls_small_3.png',
      TAB_BIG: 'img/tab/overalls_big_3.png',
      DESK_SMALL: 'img/desk/overalls_small_3.png',
      DESK_BIG: 'img/desk/overalls_big_3.png'
    },
    IMG_4: {
      TAB_SMALL: 'img/tab/overalls_small_4.png',
      TAB_BIG: 'img/tab/overalls_big_4.png',
      DESK_SMALL: 'img/desk/overalls_small_4.png',
      DESK_BIG: 'img/desk/overalls_big_4.png'
    },
    IMG_5: {
      TAB_SMALL: 'img/tab/overalls_small_5.png',
      TAB_BIG: 'img/tab/overalls_big_5.png',
      DESK_SMALL: 'img/desk/overalls_small_5.png',
      DESK_BIG: 'img/desk/overalls_big_5.png'
    },
  };

  let changePhotos = function (evt) {
    evt.preventDefault();

    if (document.body.clientWidth < TAB_SIZE || evt.target.tagName !== 'IMG' || evt.target.parentElement.parentElement.classList.contains('slider__item--big')) {
      return
    } else {
      let currentImgSrcset = evt.target.parentElement.querySelector(MEDIA_TAB_SIZE).srcset;

      let currentImgNum = currentImgSrcset[currentImgSrcset.length - PATH_TO_IMG_NUM];
      let currentBigImgNum = bigImgTab.srcset[bigImgTab.srcset.length - PATH_TO_IMG_NUM];
      let currentAlt = evt.target.alt;

      let newImgSmallTab = OVERALLS['IMG_' + currentBigImgNum].TAB_SMALL;
      let newImgBigTab = OVERALLS['IMG_' + currentImgNum].TAB_BIG;
      let newImgSmallDesk = OVERALLS['IMG_' + currentBigImgNum].DESK_SMALL;
      let newImgBigDesk = OVERALLS['IMG_' + currentImgNum].DESK_BIG;

      evt.target.parentElement.querySelector(MEDIA_TAB_SIZE).srcset = newImgSmallTab;
      bigImgTab.srcset = newImgBigTab;

      evt.target.parentElement.querySelector(MEDIA_DESK_SIZE).srcset = newImgSmallDesk;
      bigImgDesk.srcset = newImgBigDesk;

      evt.target.alt = bigImg.querySelector('.slider__img').alt;
      bigImg.querySelector('.slider__img').alt = currentAlt;
    }
  }

  slider.addEventListener('click', function (evt) { changePhotos(evt)});

})();
