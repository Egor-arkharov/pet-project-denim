'use strict';

(function () {
  var BESTSELLERS = [
    {
      category: 'Jacket',
      price: 120,
      photo: {
        mob: 'img/mob/bestsellers_jacket_120.png',
        tab: 'img/tab/bestsellers_jacket_120.png',
        desk: 'img/desk/bestsellers_jacket_120.png'
      },
      alt: 'Man with lightblue jacket'
    },
    {
      category: 'Overalls',
      price: 140,
      photo: {
        mob: 'img/mob/bestsellers_overalls_140.png',
        tab: 'img/tab/bestsellers_overalls_140.png',
        desk: 'img/desk/bestsellers_overalls_140.png'
      },
      alt: 'Girl with overalls in front of the building'
    },
    {
      category: 'Jacket',
      price: 90,
      photo: {
        mob: 'img/mob/bestsellers_jacket_90.png',
        tab: 'img/tab/bestsellers_jacket_90.png',
        desk: 'img/desk/bestsellers_jacket_90.png',
      },
      alt: 'Girl with jacket from back'
    },
    {
      category: 'Overalls',
      price: 160,
      photo: {
        mob: 'img/mob/bestsellers_overalls_160.png',
        tab: 'img/tab/bestsellers_overalls_160.png',
        desk: 'img/desk/bestsellers_overalls_160.png'
      },
      alt: 'Girl with overalls looking away'
    }
  ];

  var BY_CATEGORY = [
    {
      category: 'Jeans',
      photo: {
        mob: 'img/mob/category_jeans.png',
        tab: 'img/tab/category_jeans.png',
        desk: 'img/desk/category_jeans.png'
      },
      alt: 'Girl with jeans in light room'
    },
    {
      category: 'Shirts',
      photo: {
        mob: 'img/mob/category_shirts.png',
        tab: 'img/tab/category_shirts.png',
        desk: 'img/desk/category_shirts.png'
      },
      alt: 'Man with shirts and cap in alley'
    },
    {
      category: 'Overalls',
      photo: {
        mob: 'img/mob/category_overalls.png',
        tab: 'img/tab/category_overalls.png',
        desk: 'img/desk/category_overalls.png'
      },
      alt: 'Gitl with overalls in outskirts'
    },
    {
      category: 'Jackets',
      photo: {
        mob: 'img/mob/category_jackets.png',
        tab: 'img/tab/category_jackets.png',
        desk: 'img/desk/category_jackets.png'
      },
      alt: 'Couple in jackets in font of the building'
    }
  ]

  var JACKETS = [
    {
      price: 40,
      photo: {
        mob: 'img/mob/jacket_40.png',
        tab: 'img/tab/jacket_40.png',
        desk: 'img/desk/jacket_40.png'
      },
      alt: 'alt',
      isPhotoBig: false
    },
    {
      price: 70,
      photo: {
        mob: 'img/mob/jacket_70.png',
        tab: 'img/tab/jacket_70.png',
        desk: 'img/desk/jacket_70.png'
      },
      alt: 'alt',
      isPhotoBig: false
    },
    {
      price: 60,
      photo: {
        mob: 'img/mob/jacket_60.png',
        tab: 'img/tab/jacket_60.png',
        desk: 'img/desk/jacket_60.png'
      },
      alt: 'alt',
      isPhotoBig: false
    },
    {
      price: 40,
      photo: {
        mob: 'img/mob/jacket_50.png',
        tab: 'img/tab/jacket_50.png',
        desk: 'img/desk/jacket_50.png'
      },
      alt: 'alt',
      isPhotoBig: false
    },
    {
      price: 160,
      photo: {
        mob: 'img/mob/jacket_160_big.png',
        tab: 'img/tab/jacket_160_big.png',
        desk: 'img/desk/jacket_160_big.png'
      },
      alt: 'alt',
      isPhotoBig: true
    },
    {
      price: 40,
      photo: {
        mob: 'img/mob/jacket_40_2.png',
        tab: 'img/tab/jacket_40_2.png',
        desk: 'img/desk/jacket_40_2.png'
      },
      alt: 'alt',
      isPhotoBig: false
    },
    {
      price: 110,
      photo: {
        mob: 'img/mob/jacket_110.png',
        tab: 'img/tab/jacket_110.png',
        desk: 'img/desk/jacket_110.png'
      },
      alt: 'alt',
      isPhotoBig: false
    },
    {
      price: 35,
      photo: {
        mob: 'img/mob/jacket_35.png',
        tab: 'img/tab/jacket_35.png',
        desk: 'img/desk/jacket_35.png'
      },
      alt: 'alt',
      isPhotoBig: false
    },
    {
      price: 85,
      photo: {
        mob: 'img/mob/jacket_85.png',
        tab: 'img/tab/jacket_85.png',
        desk: 'img/desk/jacket_85.png'
      },
      alt: 'alt',
      isPhotoBig: false
    }
  ]

  var MORE_CATALOG = [
    {
      category: 'Overalls',
      price: 140,
      photo: {
        mob: 'img/mob/bestsellers_overalls_140.png',
        tab: 'img/tab/bestsellers_overalls_140.png',
        desk: 'img/desk/bestsellers_overalls_140.png'
      },
      alt: 'Girl with overalls in front of the building'
    },
    {
      category: 'Overalls',
      price: 110,
      photo: {
        mob: 'img/mob/overalls_110.png',
        tab: 'img/tab/overalls_big_110.png',
        desk: 'img/desk/overalls_big_110.png'
      },
      alt: 'Gitl with overalls in outskirts'
    },
    {
      category: 'Jacket',
      price: 70,
      photo: {
        mob: 'img/mob/jacket_70.png',
        tab: 'img/tab/jacket_big_70.png',
        desk: 'img/desk/jacket_big_70.png'
      },
      alt: 'Girl with Jacket looking at the window'
    },
    {
      category: 'Jacket',
      price: 60,
      photo: {
        mob: 'img/mob/jacket_60.png',
        tab: 'img/tab/jacket_big_60.png',
        desk: 'img/desk/jacket_big_60.png'
      },
      alt: 'Girl with jacket in light room'
    }
  ]

  window.mocks = {
    BESTSELLERS: BESTSELLERS,
    BY_CATEGORY: BY_CATEGORY,
    JACKETS: JACKETS,
    MORE_CATALOG: MORE_CATALOG
  }


})();
