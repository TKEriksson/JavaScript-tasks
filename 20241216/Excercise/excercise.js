// https://www.w3resource.com/javascript-exercises/javascript-array-exercises.php
// 9. Swap Case in String

// Write a JavaScript program that accepts a string as input and swaps the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.
console.log("Excercise 1\n");

// First thought of asciicodes.. But i think i can do this easier with just comparing. And åäö will work.

let aString = "The Quick Brown Fox åäö ÅÄÖ!";
let bString = "";

for (let i = 0; i < aString.length; i++) {
  if (aString[i] == aString[i].toUpperCase()) {
    // The letter is uppercase, so change it to lower.
    bString += aString[i].toLowerCase();
  } else {
    // The letter is lowercase, so change it to upper.
    bString += aString[i].toUpperCase();
  }
}

console.log(bString);






// https://www.w3resource.com/javascript-exercises/javascript-array-exercises.php
// 17. Shuffle Array

// Write a JavaScript program to shuffle an array.
console.log("\n\nExcercise 2\n");

let test = ["hej", "ok", "aajo", "okej", "abc", "testar", "abcde"];
let test2 = shuffleArr(test);

let test3 = [];
console.log(shuffleArr(test3));


function shuffleArr(arr) {
  let arr2 = [];
  let used = [];
  let rndI;
  for (let i = 0; i < arr.length; i++) {

    while(true) {
      
      rndI = Math.floor(Math.random() * arr.length);
      let found = false;
      for (let j = 0; j < used.length; j++) {
        if (rndI == used[j]) {
          found = true;
        }
      }
      if (!found) {
        break;
      }
    }

    arr2[i] = arr[rndI];
    used[i] = rndI;
  }


  return arr2;
}

console.log(test);
console.log("Shuffled:");
console.log(test2);






// https://www.w3resource.com/javascript-exercises/javascript-array-exercises.php
// 40. Generate Integer Range Array

// Write a JavaScript function to generate an array of integer numbers, increasing one from the starting position, of a specified length.

// Test Data :
// console.log(array_range(1, 4));
// [1, 2, 3, 4]
// console.log(array_range(-6, 4));
// [-6, -5, -4, -3]
console.log("\n\nExcercise 3\n");

function array_range(a, b) {
  let arr = [];

  let cnt = 0;
  for (let i = a; i <= b; i++) {
    arr[cnt] = i;
    cnt++;
  }

  return arr;
}

console.log(array_range(1, 6));
console.log(array_range(4, 16));

console.log("(just to try prev exc.) Shuffled: " + shuffleArr(array_range(1, 10)));







// https://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php
// 20. Generate Random String ID

// Write a JavaScript function that generates a string ID (specified length) of random characters.
// Sample character list : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
// Click me to see the solution.
console.log("\n\nExcercise 4\n");



function newId(length) {
  let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let rndI = 0;

  let arr = [];
  for (let i = 0; i < length; i++) {
    rndI = Math.floor(Math.random() * chars.length);
    arr[i] = chars[rndI];
  }

  return arr.join("");

}
id = newId(20);
console.log("New ID:", id, "(" + id.length + " length)");




// https://www.w3resource.com/javascript-exercises/fundamental/index1.php#google_vignette
// 159. Read File Lines into Array

// Write a JavaScript program to get an array of lines from the specified file.

  console.log("\n\nExcercise 5\n");

  let fs = require('node:fs');
  let data = fs.readFileSync('test.txt', 'utf8');

  let splitLines = d => d.split(/\n/); //A "arrowfunction" to split each line.

  // "Normal" function would be:
  // function splitLines(d) {
  //   return d.split(/\n/);
  // }

  console.log(splitLines(data));

  // https://www.youtube.com/watch?v=h33Srr5J9nY (arrow functions)

