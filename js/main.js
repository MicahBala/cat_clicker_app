'use strict';

class ClickCat {
  constructor(clickedElement, clicks) {
    this.numClicks = clicks;
    this.targetClicked = clickedElement;
    this.src = '';
    this.alt = '';
  }

  updatePicture(src, alt) {
    // Update number of clicks
    numberOfClicks.textContent = this.numClicks;

    // Show the picture
    let image = document.querySelector('.image');
    image.setAttribute('src', src);
    image.setAttribute('alt', alt);
  }

  // Show Picture and update the number of clicks
  showPicture() {
    let myCat = (pictureName.textContent = this.targetClicked);

    switch (myCat) {
      case 'Turkish Van':
        src = 'img/TurkishVan.jpg';
        alt = 'Picture of Turkish Van cat';
        this.updatePicture(src, alt);
        break;
      case 'Turkish Angora':
        src = 'img/TurkishAngora.jpg';
        alt = 'Picture of Turkish Angora cat';
        this.updatePicture(src, alt);
        break;
      case 'Ragadol':
        src = 'img/Ragdol.jpg';
        alt = 'Picture of a Ragdol cat';
        this.updatePicture(src, alt);
        break;
      case 'Persian Cat':
        src = 'img/PersianCat.jpg';
        alt = 'Picture of a Persian cat';
        this.updatePicture(src, alt);
        break;
      case 'Abyssinian Cat':
        src = 'img/AbyssinianCat.jpg';
        alt = 'Picture of a Abyssinian cat';
        this.updatePicture(src, alt);
        break;
      case 'Snow Shoe':
        src = 'img/SnowShoe.jpg';
        alt = 'Picture of a Snow Shoe cat';
        this.updatePicture(src, alt);
        break;
      case 'Russian Blue':
        src = 'img/RussianBlue.jpg';
        alt = 'Picture of a Russian Blue cat';
        this.updatePicture(src, alt);
        break;
      case 'Japanese Bobtail':
        src = 'img/JapaneseBobtail.jpg';
        alt = 'Picture of a Japanese Bobtail cat';
        this.updatePicture(src, alt);
        break;
      case 'American Shorthair':
        src = 'img/AmericanShorthair.jpg';
        alt = 'Picture of an American Shorthair cat';
        this.updatePicture(src, alt);
        break;
      case 'American Wirehair':
        src = 'img/AmericanWirehair.jpg';
        alt = 'Picture of an American Wirehair cat';
        this.updatePicture(src, alt);
        break;
    }
  }
}

// Select list of cat names
let buttons = document.querySelectorAll('.buttons');

// Select container holding the cat name in the display area
let pictureName = document.querySelector('.head .name');

// Select container holding the number of clicks in the display area
let numberOfClicks = document.querySelector('.card_footer .clicks');

// track number of clicks and the clicked element
let clicks = 0;
let clickedElement, src, alt;

// function to instantiate new ClickCat object
function update(e) {
  clicks++;
  clickedElement = e.target.textContent;

  let picObject = new ClickCat(clickedElement, clicks);
  picObject.showPicture();
}

// Loop through buttons holding list of cat names
// And listen for click event on each
buttons.forEach(button => {
  button.addEventListener('click', update);
});
