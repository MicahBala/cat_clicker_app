// Select card pictures
let catPic = document.querySelectorAll('.card');
// Track the number of clicks on each cat
let clicksOnCat = 0;

// function to update the number of clicks on the page beside each cat picture
function numberOfClicks(targetCat, numClicks) {
  // Select the class holding the cat image
  let myCat = document.querySelector(`.${targetCat}`);

  //   Find the next sibling and target its child element with class of clicks - "p .clicks"
  let nxtSibling = myCat.nextElementSibling.firstElementChild; //Gives you p tag
  let child = `${nxtSibling.tagName.toLowerCase()} .clicks`; //selects "p .clicks"
  let elem = document.querySelector(child);

  //   Update the child element's text to the number of clicks
  elem.textContent = numClicks;
}

// function to Check which cat picture was clicked
function catClicks(e) {
  // Get the class name of the clicked element holding the picture
  let clickedCat = e.target.className;

  // Checks if the clicked element has class
  if (clickedCat === 'first_cat') {
    clicksOnCat++;
    /* This is where i think my problem starts - Increments the number of clicks and pass
    * it to the called method along with a reference to the element clicked.
     */
    numberOfClicks(clickedCat, clicksOnCat);
  }

  if (clickedCat === 'second_cat') {
    clicksOnCat++;
    numberOfClicks(clickedCat, clicksOnCat);
  }
}

// Loop through the collection of cat pictures and listen for click event
catPic.forEach(cat => {
  cat.addEventListener('click', catClicks);
});
