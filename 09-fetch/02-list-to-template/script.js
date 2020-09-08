/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

//SOURCE : https://howtocreateapps.com/fetch-and-display-json-html-javascript/

(() => {
    let run = document.getElementById('run');

    run.addEventListener('click', function (){

        fetch("http://localhost:3000/heroes")
            .then(response => response.json())
            .then(data => appendData(data))
        function appendData(data){
            console.log(data);
            let target = document.getElementById('target');
            for (let i = 0; i < data.length; i++){
                let div = document.createElement("div");
                div.innerHTML = '<h4 class="title">\n' +
                    '<strong class="name">' + data[i].name + '</strong>\n' +
                    '<em class="alter-ego">' + data[i].alterEgo + '</em>\n' +
                    '</h4>\n' +
                    '<p class="powers">' + data[i].powers + '</p>'
                target.appendChild(div);
            }
        }
    })
})();

