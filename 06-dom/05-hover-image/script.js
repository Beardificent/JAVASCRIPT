/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


(function() {

    let image = document.getElementsByTagName("img");
    //get data set values but only on hover
    let source = image[0].dataset.hover;

    //create an original source to display when mousout
    let ogSource = image[0].src;

//add the events MOUSEOVER and show source values
    image[0].addEventListener("mouseover", function (){
        image[0].setAttribute("src", source)
    });
//add the events MOUSEOUT and revert to OGsource.
    image[0].addEventListener("mouseout", function (){
        image[0].setAttribute("src", ogSource);
    });

})();