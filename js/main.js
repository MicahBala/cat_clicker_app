'use strict';

class ClickCat {
  constructor(targetCat, clicks) {
    this.numClicks = clicks;
    this.targetClicked = targetCat;
  }

  /* Variables */

  // Method to update the clicks on the page
  updateClicks() {
    // Select the class holding the cat image
    let myCat = document.querySelector(`.${this.targetClicked}`);

    //   Find the next sibling and target its child element with class of clicks - "p .clicks"
    let nxtSibling = myCat.nextElementSibling.firstElementChild; //Gives you p tag
    let child = `${nxtSibling.tagName.toLowerCase()} .clicks`; //selects "p .clicks"
    let elem = document.querySelector(child);

    // Update the child element's text to the number of clicks
    elem.textContent = this.numClicks;
  }
}

// Select cat pictures
let catPic = document.querySelectorAll('.card');

// track number of clicks
let clicks = 0;
let targetCat;

// function to instantiate new ClickCat object
function update(e) {
  clicks++;
  targetCat = e.target.className;

  let myClicks = new ClickCat(targetCat, clicks);
  let printOut = myClicks.updateClicks();

  return printOut;
}

catPic.forEach(cat => {
  // console.log(cat);
  cat.addEventListener('click', update);
});
