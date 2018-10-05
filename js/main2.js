'use strict';
// MODEL: Create a model that holds an array of cat objects with properties (name, picture url and click count)
let model = {
  currentCat: null,
  catObjects: [
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
    },
    {
      name: 'Snow Shoe',
      picture: 'img/SnowShoe.jpg',
      alt: 'Picture of Snow Shoe cat',
      clickCount: 0
    },
    {
      name: 'Russian Blue',
      picture: 'img/RussianBlue.jpg',
      alt: 'Picture of Russian Blue cat',
      clickCount: 0
    },
    {
      name: 'Japanese Bobtail',
      picture: 'img/JapaneseBobtail.jpg',
      alt: 'Picture of Japanese Bobtail cat',
      clickCount: 0
    },
    {
      name: 'American Shorthair',
      picture: 'img/AmericanShorthair.jpg',
      alt: 'Picture of American Shorthair cat',
      clickCount: 0
    },
    {
      name: 'American Wirehair',
      picture: 'img/AmericanWirehair.jpg',
      alt: 'Picture of American Wirehair cat',
      clickCount: 0
    }
  ]
};

// CONTROLLER: Gets data from the model and updates the view
let controller = {
  init: function() {
    // Set current cat
    model.currentCat = model.catObjects[0];
    // Initialize the view
    viewCat.init();
    viewNames.init();
  },

  // Get the array of cat objects from the model
  getCatObjects: function() {
    return model.catObjects;
  },

  // Get the currently selected cat
  getCurrentCat: function() {
    return model.currentCat;
  },

  // Set current cat to the cat object passed to the function
  setCurrentCat: function(myCat) {
    model.currentCat = myCat;
  },

  // Increments the number of clicks
  incrementClick: function() {
    model.currentCat.clickCount++;

    // After incrementing the clicks, call the render function again
    viewCat.render();
  }
};

// VIEW: Create view for cat picture
let viewCat = {
  init: function() {
    // Display cat name area
    this.catName = document.querySelector('.head .name');

    // Display cat picture area
    this.catPicture = document.querySelector('.image');

    // Display number of clicks area
    this.numClicks = document.querySelector('.card_footer .clicks');

    this.catPicture.addEventListener('click', () => {
      // console.log('You clicked me!');
      controller.incrementClick();
    });

    this.render();
  },

  render: function() {
    let selectedCat = controller.getCurrentCat();
    this.catName.textContent = selectedCat.name;
    this.catPicture.setAttribute('src', selectedCat.picture);
    this.numClicks.textContent = selectedCat.clickCount;
  }
};

let viewNames = {
  init: function() {
    // Cat objects
    this.cats = controller.getCatObjects();

    // Select list of cat names
    this.buttons = document.querySelectorAll('.buttons');

    // Call the render function for this view
    this.render();
  },

  render: function() {
    this.buttons.forEach(btn => {
      btn.addEventListener('click', e => {
        // Loop through the cat objects array and check if the name property of each cat object is same wityh the clicked name, then set the current cat to the one that matches
        for (let i = 0; i < this.cats.length; i++) {
          if (e.target.textContent === this.cats[i].name) {
            controller.setCurrentCat(this.cats[i]);

            viewCat.render();
          }
        }
      });
    });
  }
};

// Code initializes here
controller.init();
