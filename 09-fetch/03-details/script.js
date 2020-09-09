/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

//MOST OF THIS CODE IS FROM 9.2 EXCEPT INPUT + CHECKINPUT
//Same exercise except we need to identify which hero value has been asked in input field


(() => {
    let target = document.querySelector('#target');

    let getHero = () => {
        let Input = document.querySelector('#hero-id').value;

        // fetch the data from the server
        fetch('http://localhost:3000/heroes')
            .then(respond => {
                return respond.json();
            }).then(allData => {
            allData.forEach(data => {

                if (data.id == Input) {
                    let tempVar = document.querySelector("#tpl-hero").content.cloneNode(true);
                    tempVar.querySelector(".name").innerHTML = data.name;
                    tempVar.querySelector(".alter-ego").innerHTML = data.alterEgo;
                    tempVar.querySelector(".powers").innerHTML = data.abilities;
                    target.appendChild(tempVar);

                }
            })
        })
    };
    document.querySelector('#run').addEventListener('click', getHero)
})();

