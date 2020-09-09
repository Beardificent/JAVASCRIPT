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
//create object that will contain userInput
    let customHero = {};

    //create function for userInput in which we take the value of the input
const userInput = () => {
    let nameInput = document.querySelector('#hero-name').value;
    let egoInput = document.querySelector('#hero-alter-ego').value;
    let powersInput = document.querySelector('#hero-powers').value;
    console.log(`${nameInput}, ${egoInput}, ${powersInput}`);

//Split powers to have same format as the rest.
    let powersArray = powersInput.split(" ");



//FETCH REQUEST
    fetch('http://localhost:3000/heroes')
        .then(respond => {
            return respond.json();
        }).then(allData => {

        //Add the customHero content to object (using .properties from JSON)
        customHero.id = allData.length+1; // make id one plus the existing length (using ++ will work but will not increment list)
        customHero.name = nameInput;
        customHero.alterEgo = egoInput;
        customHero.abilities = powersArray;

        //push (add) customHero to allData
        allData.push(customHero);
        console.log(allData);
    })
};
    document.getElementById('run').addEventListener('click', userInput);
})();

