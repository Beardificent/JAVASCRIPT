/* becode/javascript
 *
 * /10-asynchronous/05-promise-get-comments/script.js - 10.5: chargement d'articles et de commentaires (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
(() => {
    let run = document.getElementById('run');

    run.addEventListener('click', function () {
        function handleSuccess(resolve) {
            console.log(resolve);
        }

        function handleFailure(reject) {
            console.error(reject);
        }

        window.lib.getComments().then(handleSuccess, handleFailure);
    })
})();

/*
let run = document.getElementById("run")

run.addEventListener("click", getPostsWithComments)

function getPostsWithComments() {

    window.lib.getPosts(function (error, posts) {

        posts.forEach(post => {
            window.lib.getComments(post.id, function (error, comments) {


            });
            console.log(post);
        });

    });
}



 */