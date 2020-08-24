/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var name = prompt ("What is your name?", "Bernadette");
    var gender = prompt ("Are you a boy or  a girl?", "apache helicopter");
    var hometown = prompt ("Where are you from?", "Johto");
    alert("name: " + name + ", gender: " + ", hometown: " + hometown);

    if (confirm("is it correct?")) {}

    else{
        var name = prompt ("What is your name?", "Bernadette");
        var gender = prompt ("Are you a boy or  a girl?", "apache helicopter");
        var hometown = prompt ("Where are you from?", "Johto");
    }


})();
