import prompt from "prompt-sync";

var userInput = prompt();

let assist = true;

let range = 100;

let userWantToPlay = true;

while(userWantToPlay) {

  console.log("\nWelcome to guessing game! ");

  range = userInput("Enter the range you want to guess in: 1 - :");

  console.log("Game begins!")

  let secretNumber = Math.floor(Math.random() * range) + 1; //Store secret nr
  let usersGuess = 0; // Store users guess
  let usersGuesses = 0; // Store the count of guessing
  let isGameActive = true;  

  while(isGameActive) {
    usersGuess = parseInt(userInput("Enter a number: "));
    usersGuesses++;
    if (usersGuess == secretNumber) {
  
      console.log("You win! Guesses: ", usersGuesses);
      isGameActive = false;
  
    } else {
  
      if (assist) {
        if (usersGuess > secretNumber) {
          console.log("Less.")
        } else {
          console.log("Bigger");
        }
      } else {
        console.log("Wrong. Try again!");
      }
    }
    
  }

  let yesOrNo = userInput("\nPlay again? (write y to play)");
  if (yesOrNo.toUpperCase() == "Y") {
    userWantToPlay = true;
  } else {
    userWantToPlay = false;
  }
}
