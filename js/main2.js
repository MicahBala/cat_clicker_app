'use strict';
// MODEL: Create a model that holds an array of cat objects with properties (name, picture url and click count)
let model = {
  //   currentCat: null,
  catObjectsArray: [
    {
      name: 'Turkish Van',
      picture: 'img/TurkishVan.jpg',
      alt: 'Picture of Turkish Van cat',
      clickCount: 0
    },
    {
      name: 'Turkish Angora',
      picture: 'img/TurkishAngora.jpg',
      alt: 'Picture of Turkish Angora cat',
      clickCount: 0
    },
    {
      name: 'Ragadol',
      picture: 'img/Ragdol.jpg',
      alt: 'Picture of Ragadol cat',
      clickCount: 0
    },
    {
      name: 'Persian Cat',
      picture: 'img/PersianCat.jpg',
      alt: 'Picture of Persian cat',
      clickCount: 0
    },
    {
      name: 'Abyssinian Cat',
      picture: 'img/AbyssinianCat.jpg',
      alt: 'Picture of Abyssinian cat',
      clickCount: 0
    }
  ]
};

// CONTROLLER: Gets data from the model and updates the view
let controller = {
  init: function() {
    // model.currentCat = model.catObjectsArray[0];
    view.init();
  },
  // return array of cats objects from the model
  getCatArray: function() {
    return model.catObjectsArray;
  },

  //   Number of clicks
  getClicks: function(x) {
    model.catObjectsArray[x].clickCount++;
  }
};

// VIEW: Create view for list of cats with click handlers registered on each
let view = {
  init: function() {
    // Select container holding the cat name in the display area
    this.pictureName = document.querySelector('.head .name');

    // Select container holding the number of clicks in the display area
    this.numberOfClicks = document.querySelector('.card_footer .clicks');

    // Image element
    this.image = document.querySelector('.image');

    // Select list of cat names
    this.buttons = document.querySelectorAll('.buttons');

    this.pictureName.textContent = controller.getCatArray()[0].name;
    this.image.setAttribute('src', controller.getCatArray()[0].picture);
    this.image.setAttribute('alt', controller.getCatArray()[0].alt);
    this.numberOfClicks.textContent = controller.getCatArray()[0].clickCount;

    view.render();
  },

  updateDisplay: function(e) {
    for (let i = 0; i < controller.getCatArray().length; i++) {
      if (e.target.textContent === controller.getCatArray()[i].name) {
        this.pictureName.textContent = controller.getCatArray()[i].name;
        this.image.setAttribute('src', controller.getCatArray()[i].picture);
        this.image.setAttribute('alt', controller.getCatArray()[i].alt);
        this.numberOfClicks.textContent = controller.getCatArray()[
          i
        ].clickCount;
      }
    }
  },

  render: function() {
    //   Event listener for cat names claick
    this.buttons.forEach(button => {
      button.addEventListener('click', e => {
        this.updateDisplay(e);
      });
    });

    // Event listener for cat picture
    this.image.addEventListener('click', e => {
      for (let i = 0; i < controller.getCatArray().length; i++) {
        if (e.target.nodeName === 'IMG') {
          controller.getClicks(i);
        }
      }
    });
  }
};

controller.init();
