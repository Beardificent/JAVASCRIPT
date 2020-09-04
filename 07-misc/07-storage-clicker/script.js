/* becode/javascript
 *
 * /07-misc/07-storage-clicker/script.js - 7.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let target = document.getElementById("target");
    let button = document.getElementById("increment")
    let getNumber = localStorage.getItem("getNumber");

    target.innerHTML = getNumber;

    button.addEventListener("click", function (){
        getNumber++;
        localStorage.setItem("getNumber", getNumber);
        target.innerHTML = getNumber;
    });

})();