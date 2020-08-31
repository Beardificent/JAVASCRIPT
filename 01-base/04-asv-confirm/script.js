/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function question() {

    let name = prompt ("What is your name?", "Bernadette");
    let gender = prompt ("Are you a boy or  a girl?", "apache helicopter");
    let hometown = prompt ("Where are you from?", "Johto");
    alert(`Your name is ${name}, you are a ${gender} and you live in ${hometown}.`);

    if (confirm("is it correct?")) {}

    else{
        question();
        return;

       /* let name = prompt ("What is your name?", "Bernadette");
        let gender = prompt ("Are you a boy or  a girl?", "apache helicopter");
        let hometown = prompt ("Where are you from?", "Johto");*/
    }


})();
