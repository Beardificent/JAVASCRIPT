/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.



/* USING SPLIT
(function() {

    // to get the value of an input: document.getElementById("element-id").value

    var number = document.getElementById("numbers").value;
    var numberArr = number.split(",");

    document.getElementById("run").addEventListener("click", function() {

        // your code here
        numberArr.sort((a, b) => a-b);
        alert(numberArr);
    });

})();*/



(function() {

    // USING SORT

    document.getElementById("run").addEventListener("click", function() {

        let numbers = [2,4,14,10,90,23,60]
        numbers.sort(function(a, b){return a-b});


        alert(numbers); // Outputs: 2,4,10,14,23,60,90

    });

})();
