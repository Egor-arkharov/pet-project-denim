'use strict';

(function () {
  let bestsellersTemplate = document.querySelector('#bestsellers').content;
  let bestsellersItem = bestsellersTemplate.querySelector('.catalog__item');
  let bestsellersList = document.querySelector('.bestsellers .catalog__list');

  let byCategoryTemplate = document.querySelector('#by-category').content;
  let byCategoryItem = byCategoryTemplate.querySelector('.catalog__item');
  let byCategoryList = document.querySelector('.category .catalog__list');

  window.card.renderCards(window.mocks.BY_CATEGORY, byCategoryList, byCategoryItem);
  window.card.renderCards(window.mocks.BESTSELLERS, bestsellersList, bestsellersItem);

  let scrollBtn = document.querySelector('.info__scroll-down');

  scrollBtn.addEventListener('click', function (evt) {
    evt.preventDefault();

    document.querySelector('#bestsellers-catalog').scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  });
})();
