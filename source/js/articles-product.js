'use strict';

(function () {
  let catalogMoreTemplate = document.querySelector('#catalog-more').content;
  let catalogMoreItem = catalogMoreTemplate.querySelector('.catalog__item');
  let catalogMoreList = document.querySelector('.catalog-more .catalog__list');

  window.card.renderCards(window.mocks.MORE_CATALOG, catalogMoreList, catalogMoreItem);
})();
