/* becode/javascript
 *
 * /10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


(function () {
    document.getElementById('run').addEventListener('click', function () {
        window.lib.getPosts((reject, article) => {
            if (reject) {
                console.log(reject);
            } else {
                //call getComments for each article
                article.forEach(getArticle => {
                    window.lib.getComments(getArticle.id, (reject, table) => {
                        if (reject) {
                            console.log(reject)
                        } else {
                            getArticle.id = table;
                            console.log(table);
                        }
                    });
                })
            }
        });
    })
})();

//SICCOS
/*

let run = document.getElementById('run')
run.addEventListener('click', getPostsWithComments)

function getPostsWithComments (){
    window.lib.getPosts(function(error, posts){
        if (error){
            console.log(error)
        }else {
            posts.forEach(post => {
                window.lib.getComments(post.id, function (error, comments) {
                    if (error) {
                        console.error(error);
                    }
                })
            })
            console.log(post);


 */

