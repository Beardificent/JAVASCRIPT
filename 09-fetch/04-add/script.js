/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    //create function for userinput in which we take the value of the input
const userInput = () => {
    let nameInput = document.querySelector('#hero-name').value;
    let egoInput = document.querySelector('#hero-alter-ego').value;
    let powersInput = document.querySelector('#hero-powers').value;
    console.log(`${nameInput}, ${egoInput}, ${powersInput}`);



//FETCH REQUEST
    fetch('http://localhost:3000/heroes')
        .then(respond => {
            return respond.json();
        }).then(allData => console.log (allData));



}
    document.getElementById('run').addEventListener('click', userInput);
})();

