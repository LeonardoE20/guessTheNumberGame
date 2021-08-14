/**
 * Guess The Number Game
 * Done: Get user value from input and save it to variable numberGuess
 * TODO: Generate a random number 1 to 100 and save it to variable correctNumber
 * TODO: Console whether the guess is too high, too low, or is correct inside playGame function
 * TODO: Create a function called displayResult to move the logic for if the guess is too high, too low, or correct
 * TODO: Complete the showYouWon, showNumberAbove, showNumberBelow
 * TODO: Use the showYouWon... functions within displayResult to display the correct dialog
 * TODO: Save the guess history in a variable called guess
 * TODO: Display the guess history using displayHistory() function
 * TODO: Use the initGame() function to restart the game
 */

// Variable to store the list of guesses 

// Variable for store the correct random number 

// Waits for the html file to load and then allows us to execute any functions that we want
window.onload = function () {
  document.getElementById("number-submit").addEventListener("click", playGame);
  document.getElementById("restart-gmae").addEventListener("click", initGame);
}

/*
functionality for playing the whole game
This gets the user value from input(in HTML, it is an element) and save it to variable numberGuess
*/
function playGame() {
  let numberGuess = document.getElementById("number-guess").value; // .value attribute allows us get the value of the input
  console.log(numberGuess);
}