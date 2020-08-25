/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.



(function() {

    document.querySelector("button").onclick = function (event) {
        let d = new Date();
        let dob_day = document.getElementById("dob-day").value;
        let dob_month = document.getElementById("dob-month").value;
        let dob_year = document.getElementById("dob-year").value;
        let age = d.getFullYear() - dob_year;
        let m = d.getMonth() - (dob_month - 1);

        if (m < 0 || (m === 0 && d.getDate() < dob_day)) {
            age = age - 1;
        }
        alert("You are " + age + " and born on " + dob_day + "/"+ dob_month + "/"+ dob_year);
    }

})();

