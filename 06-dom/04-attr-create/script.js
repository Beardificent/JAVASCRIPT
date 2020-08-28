/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

//let x = document.getElementById("source")
//

(function() {
//GETTING DATA SET VALUE FROM "SOURCE"
    let source = document.getElementById("source").dataset.image;
    console.log(source);
//CREATE AN IMAGE ELEMENT AND PUT INSIDE "TARGET" ELEMENT
    let y = document.createElement("img");

//display images and move into target element
    y.setAttribute("src", source);
    document.getElementById("target").appendChild(y);

//remove element
    let element = document.getElementById("source");
    element.parentNode.removeChild(element);
    console.log(source.image);

})();
