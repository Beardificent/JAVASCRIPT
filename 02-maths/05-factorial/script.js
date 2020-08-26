
/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let  n = document.getElementById("number").value;

    document.getElementById("run").addEventListener("click", function() {
        function factorial(n) {
            return (n != 1) ? n * factorial(n - 1) : 1;
        }
        alert(factorial(n));

    });

})();

/*
(function() {

    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", function() {

        for (let i = input - 1; i >= 1; i--) {
            input *= i;
        }
        alert(input);
    })

})();*/