/* becode/javascript
 *
 * /09-fetch/05-delete/script.js - 11.5: supprimer un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let spliceHero = () => {
        let Input = document.querySelector('#hero-id').value;

        //FETCH REQUEST
        fetch('http://localhost:3000/heroes')
            .then(respond => {
                return respond.json();
            }).then(allData => {
                //check if input matches any data
            allData.forEach(data => {
                //if it matches data, splice (remove) array.
                if (data.id == Input) {
                    let index = allData.indexOf(data);
                    allData.splice(index, 1);
                    console.log(allData);
                }
            });
        })
    };


        document.querySelector('#run').addEventListener('click', spliceHero)
})();
