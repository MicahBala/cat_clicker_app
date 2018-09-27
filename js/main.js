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
    // console.log(myCat);

    //   Find the next sibling and target its child element with class of clicks - "p .clicks"
    let nxtSibling = myCat.nextElementSibling.firstElementChild; //Gives you p tag
    // console.log(nxtSibling);
    let child = `${nxtSibling.tagName.toLowerCase()} .clicks`; //selects "p .clicks"
    let elem = document.querySelector(child);

    // Update the child element's text to the number of clicks
    /* At this point, i expect that if the cat img tag with class first_cat is clicked
    * then elem will be "first_cat p .clicks"
     */

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

  // Be sure we are clicking the actual cat image and not any where outside it
  if (e.target.tagName === 'IMG') {
    targetCat = e.target.className;
    console.log(targetCat);

    let myClicks = new ClickCat(targetCat, clicks);
    let printOut = myClicks.updateClicks();

    return printOut;
  }
}

catPic.forEach(cat => {
  // console.log(cat);
  cat.addEventListener('click', update);
});
