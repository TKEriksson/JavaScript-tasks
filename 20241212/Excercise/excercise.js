// https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php
// 114. Check String as Correct Sentence

// Write a JavaScript program to check whether a given string represents a correct sentence or not. A string is considered a correct sentence if it starts with a capital letter and ends with a full stop (.) 
console.log("\n****** Excercise 1 ******\n");
function isCorrect(str) {
  let str2 = "" + str;
  let corr = false;
  if (str[0] == str2[0].toUpperCase()) 
    if (str2[str2.length-1] == ".") 
      corr = true;
    
  return corr;
}

console.log(isCorrect("Hej ."));
console.log(isCorrect("hej ."));
console.log(isCorrect("Hej. "));






// https://www.w3resource.com/javascript-exercises/fundamental/index.php
// 33. Random Number in Range

// Write a JavaScript program to generate a random number in the specified range.
console.log("\n****** Excercise 2 ******\n");
function rndNr(start,end) {
  return Math.floor(Math.random() * (end-start+1)) + start;
}

let rndNumbers = "";
for (let i = 0; i < 10; i++) {
  rndNumbers += " " + rndNr(2, 4);
}
console.log(rndNumbers);






// https://www.w3resource.com/javascript-exercises/fundamental/index.php
// 28. Measure Function Execution Time

// Write a JavaScript program to measure the time a function to execute.
console.log("\n****** Excercise 3 ******\n");
function time() {
  let x = 1;
  console.log("Running time()...");
  let rndI = rndNr(10000000, 10000000000);
  for (let i = 0; i <= rndI; i++) {
    x += x;
  }

  console.log("iterations: ", rndI);
}


let time1 = Date.now();
time();
let time2 = Date.now();



let diff = time2 - time1;
console.log("time() took " + diff + " milliseconds to execute.");



// 8. Pass Function as Parameter

// Write a JavaScript program to pass a 'JavaScript function' as a parameter.
// Click me to see the solution
console.log("\n****** Excercise 4 ******\n");
function passAFunction(fun) {
  fun("Passed a function!");
}

passAFunction((text) => {console.log(text)});
// Okej! That was quite easy.




console.log("\n****** Excercise 5 ******\n");
// https://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php
// 4. Sort String Alphabetically

// Write a JavaScript function that returns a string that has letters in alphabetical order.
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.

function sortStr(str) {
  return str.split('').sort().join('');
}

console.log("Tobias, sorted (not correct): ", sortStr("Tobias")); //did not work with uppercase letters..


function sortStr2(str) {
  return str.toLowerCase().split('').sort().join('');
}

console.log("Tobias, sorted (correct but lowercase): ", sortStr2("Tobias")); //did not work with uppercase letters..

function sortStr3(str) {
  return str
  .split('') // Splits it to an array
  .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase())) // Compare case-insensitively! passing a custom comparator function
  .join(''); // Joins it back to a string.
}
console.log("Tobias, sorted (correct): ", sortStr3("Tobias")); // Works

