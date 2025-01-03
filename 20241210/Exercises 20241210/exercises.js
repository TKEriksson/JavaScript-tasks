const prompt = require("prompt-sync")();

// From:
// 4. Largest of Five Numbers

// Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the results.
// Sample numbers : -5, -2, -6, 0, -1
// Output : 0
// Click me to see the solution

// **************************************************************************
// I picked this one to try to work with an array.
// Instead of alert() i will use console.log to use with node. 

console.log("Excercise 1");

let numbers = [-5, -2, -16, 10, 1]; // Ändrade lite siffror.

let largestNumber = numbers[0];

for (let i = 0; i < numbers.length; i++) {

  (numbers[i] >= largestNumber) && (largestNumber = numbers[i]);
  
}

console.log("Högsta numret i " + numbers.toString() + " är: " + largestNumber);







// From: https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php
// 8. Random Integer Guess Game

// Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".  
// Click me to see the solution

// **************************************************************************
// I have never worked with prompt-sync, and wanted to understand Math.random so i picked this one.

console.log("\n\nExcercise 2");

let rndNr = Math.floor(Math.random() * 10) + 1; // The floor returns the nearest lower integer of the value. Math.random() gives a random value between 0 - 1 (can be 0 - 0.99999.... but not 1). So * 10 gives between 0 and 9. So +1 makes it 1 - 10.

let guessNr = prompt("Gissa på en siffra mellan 1 - 10:");

guessNr == rndNr ? console.log("Good work") : console.log("Not matched. It was", rndNr);






// From: https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php
// 3. Get Current Date in Various Formats

// Write a JavaScript program to get the current date.  
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
// Click me to see the solution
// **************************************************************************
// Never worked with dates in js. So i found some functions to get what i need from a Date() object: https://www.w3schools.com/js/js_date_methods.asp
// 

console.log("\n\nExcercise 3");

let today = new Date();

let year = today.getFullYear();
let month = today.getMonth() + 1;
let day = today.getDate();

// Adding 0 before the digit if month or day is belo 10.
(month < 10) && (month = "0" + month);
(day < 10) && (day = "0" + day);

console.log(`mm-dd-yyyy: ${month}-${day}-${year}, mm/dd/yyyy: ${month}/${day}/${year}, dd-mm-yyyy: ${day}-${month}-${year}, dd/mm/yyyy: ${day}/${month}/${year}`);










// From: https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php
// 54. Count Vowels in String

// Write a JavaScript program to count the number of vowels in a given string.  
// Click me to see the solution
// **************************************************************************

// using swedish vowels.


console.log("\n\nExcercise 4");
let givenStr = "Den här meningen har vokaler.";
let vowels = "aouåeiyäö";
let cntVowels = 0;

for (let i = 0; i < givenStr.length; i++) {
  for (let j = 0; j < vowels.length; j++) {
    if (givenStr[i] == vowels[j]) cntVowels++;
  }
}

console.log(`Found ${cntVowels} swedish vowels in "${givenStr}"`);





// From: https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php
// 84. Replace Characters with Next in Alphabet

// Write a JavaScript program to replace each character in a given string with the next in the English alphabet.  
// Note: 'a' will be replace by 'b' or 'z' would be replaced by 'a'.

// **************************************************************************

// i dont know how i can get the ascii number in javascript. Found out about .fromCharCode och charCodeAt(0) from google.
// ASCII Uppercase letters (A to Z): 65 - 90 and Lowercase letters (a to z): 97 - 122.


console.log("\n\nExcercise 5");
let str = "This is a string! THIS IS A STRING..";
let newStr = "";
let ascii = 0;

for (let i = 0; i < str.length; i++) {
  ascii = str.charCodeAt(i);

  if (ascii >= 65 && ascii <= 89) {
    newStr += String.fromCharCode(ascii+1);
  } else if (ascii == 90) {
    newStr += String.fromCharCode(65);
  } else if (ascii >= 97 && ascii <= 121) {
    newStr += String.fromCharCode(ascii+1);
  } else if (ascii == 122) {
    newStr += String.fromCharCode(97);
  } else {
    newStr += String.fromCharCode(ascii);
  }

}

console.log(str + "\n" + newStr);

