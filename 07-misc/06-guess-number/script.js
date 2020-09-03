/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

function numberGuess () {
    var number = Math.floor(Math.random() * 100 + 1); // Generates a random number between 0 and 100

    var totalGuesses = []; // Array to stores all the guesses

    var guess = Number(prompt("Welcome to number guess!  Guess a number between 1 and 100")); // Prompts guessor to guess first number

    while (guess != number) { //loop runs while user has not guessed the number

        if (!guess) { // User cancels prompts
            return;
        }
        else if (totalGuesses.indexOf(guess) >= 0) { // Checks to see if guess has already been guessed
            guess = prompt ("You already guessed that number before.  Give me another guess.");
        }
        else {
            totalGuesses.push(guess);
            if (guess > number) {
                guess = prompt ("Your number is too high.  Try Again.  Don't give up!");
            }

            else {
                guess = prompt ("Your number is too low.  Try Again.  I know you can do it!");
            }
        }
    }

    // Guess is correct!

    alert("Congratulations!  You guessed the number!  It took you " + (totalGuesses.length +1) + " attempts!");
};

numberGuess();
