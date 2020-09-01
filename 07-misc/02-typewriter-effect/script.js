/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    (function() {

        let text = "Je ne parle pas baguette! Je suis desolée.";
        let chars = text.split('');
        let target = document.getElementById("target");
        target.innerHTML = " ";

        function typing (index){
            if (index < chars.length){
                target.append(chars[index++]);
                setTimeout(function () {typing(index);}, 200);

            }
        }
        typing(0);

    })();

})();
