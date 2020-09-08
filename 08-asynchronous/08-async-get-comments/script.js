/* becode/javascript
 *
 * /10-asynchronous/08-async-get-comments/script.js - 10.8: chargement d'articles et de commentaires (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let run = document.getElementById('run');

    run.addEventListener('click', function (){
        async function handleSuccess(resolve) {
            console.log(resolve);
        }

        async function handleFailure(reject) {
            console.error(reject);
        }
        window.lib.getPosts().then(handleSuccess, handleFailure);
    })
})();