/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


//only show the months that are showing friday the 13th.
//set day on the 13th
//set weekday on 5 (friday)

(function() {
    let x;


    document.querySelector("button").onclick = function (event) {
        checkInput();
        let fridays = "";
        for (i = 0; i <= 11; i++){
            let dayt = new Date(x, i, 13);
            let weekday = dayt.getDay();
            if (weekday === 5){
                fridays += (dayt.toLocaleString("default", {month: "long"}) + "\n");
            }
        }
        alert(fridays);
    }

    function checkInput(){
        x = document.getElementById("year").value;
    }

})();