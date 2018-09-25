// Select card picture
let catPic = document.querySelectorAll('.card');
let clicksOnCat = 0;

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

function catClicks(e) {
  let clickedCat = e.target.className;
  if (clickedCat === 'first_cat') {
    clicksOnCat++;
    numberOfClicks(clickedCat, clicksOnCat);
  }

  if (clickedCat === 'second_cat') {
    clicksOnCat++;
    numberOfClicks(clickedCat, clicksOnCat);
  }
}

catPic.forEach(cat => {
  cat.addEventListener('click', catClicks);
});
