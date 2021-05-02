/*
- find the element that was clicked
- get attribute value from src of #thumb2
  - also get alt attribute
- copy them (store them)
- find the element i want to apply it to
- set the attribute (src) of the #bigimg
  - also set the alt attribute
*/

// Implementation criteria:
//  One function per thumbnail (3 total)
//  One listener per function




/*
const bigImg = document.querySelector(`#bigimg`)
const theGallery = document.querySelector(`#gallery`)


const setThumb = function (event) {
  // target refers to what was under the mouse when this event occurred
  const whichOne = event.target

  // Exit immediately if what we clicked was not a .thumb
  //if (!whichOne.matches(`.thumb`)) return

  if (whichOne.matches(`.thumb`)) {
    // Getting the data required to load up the big image
    let imgSrc = whichOne.getAttribute(`src`)
    let imgAlt = whichOne.getAttribute(`alt`)

    // Update the big image's attributes
    bigImg.setAttribute(`src`, imgSrc)
    bigImg.setAttribute(`alt`, imgAlt)
  }

}

// Listen to the entire gallery for a click
theGallery.addEventListener(`click`, setThumb)
*/




// Select all of the thumbnails
const theThumbs = document.querySelectorAll('.thumb')
const bigImg = document.querySelector(`#bigimg`)

const makeClickable = function (whichOne) {

  const setThumb = function(event) {

    // Getting the data required to load up the big image
    let imgSrc = whichOne.getAttribute(`src`)
    let imgAlt = whichOne.getAttribute(`alt`)

    // Update the big image's attributes
    bigImg.setAttribute(`src`, imgSrc)
    bigImg.setAttribute(`alt`, imgAlt)
  }

  whichOne.addEventListener(`click`, setThumb)
}

// For each of the thumbnails selected, run the makeClickable function
theThumbs.forEach(makeClickable)













/* const thumb1 = document.querySelector(`#thumb1`)
const thumb2 = document.querySelector(`#thumb2`)
const thumb3 = document.querySelector(`#thumb3`)
 */

/* const setThumb = function (whichOne) {

  let imgSrc = whichOne.getAttribute(`src`)
  let imgAlt = whichOne.getAttribute(`alt`)

  // Update the big image's attributes
  bigImg.setAttribute(`src`, imgSrc)
  bigImg.setAttribute(`alt`, imgAlt)
}
*/


/* const setThumb = function (whichOne) {
  let imgSrc
  let imgAlt

  if (whichOne === 1) {
    imgSrc = thumb1.getAttribute(`src`)
    imgAlt = thumb1.getAttribute(`alt`)
  } else if (whichOne === 2) {
    imgSrc = thumb2.getAttribute(`src`)
    imgAlt = thumb2.getAttribute(`alt`)
  } else if (whichOne === 3) {
    imgSrc = thumb3.getAttribute(`src`)
    imgAlt = thumb3.getAttribute(`alt`)
  }
  
  // Update the big image's attributes
  bigImg.setAttribute(`src`, imgSrc)
  bigImg.setAttribute(`alt`, imgAlt)
}
 */


/* const setThumb1 = function() {
  const imgSrc = thumb1.getAttribute(`src`)
  const imgAlt = thumb1.getAttribute(`alt`)

  // Update the big image's attributes
  bigImg.setAttribute(`src`, imgSrc)
  bigImg.setAttribute(`alt`, imgAlt)
}
thumb1.addEventListener(`click`, setThumb1)


// Event handler function
const setThumb2 = function(event) {
  const imgSrc = thumb2.getAttribute(`src`)
  const imgAlt = thumb2.getAttribute(`alt`)

  // Update the big image's attributes
  bigImg.setAttribute(`src`, imgSrc)
  bigImg.setAttribute(`alt`, imgAlt)
}
thumb2.addEventListener(`click`, setThumb2)


const setThumb3 = function() {
  const imgSrc = thumb3.getAttribute(`src`)
  const imgAlt = thumb3.getAttribute(`alt`)

  // Update the big image's attributes
  bigImg.setAttribute(`src`, imgSrc)
  bigImg.setAttribute(`alt`, imgAlt)
}
thumb3.addEventListener(`click`, setThumb3)

 */

// Event delegation