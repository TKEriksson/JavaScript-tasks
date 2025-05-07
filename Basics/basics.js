// Hello again ;)
console.log();

let x="text",y=10,z=true;

let text1 = "Hello!"; // Declaration and assignment of a variable in one line

let text2 = "How are you?"; // Declaration and assignment of a variable in one line

let text3 = 'Welcome to Lexicon.'; // Declaration and assignment of a variable in one line

let fullText = text1 + " " + text2 + " " + text3; // Concatenation of strings
let fullText2 = `Hej ${text1} ${text2} ${text3}`; // Template literal for string interpolation



console.log(fullText);
console.log(fullText2);











// Difference between var, let var and const



const num3 = 83;

// num3 = 11; // NOPE!


{
  const num3 = 1111; // Is another variable with the same name as the one above, but in a different scope
  console.log(num3); // Output the value of num3 in this scope
}
// let num1 = 10; // Declaration and assignment of a variable in one line

var num1 = 10; // Declaration and assignment of a variable in one line

console.log(num1); // Output the value of num1

num1 = "any text";

console.log(num1);

var num1 = false;

console.log(num1);




// let fName; // declare a variable to hold the function name
// fName = "Tobbe"; // Assignment of a value to the variable

// let lName = "Eriksson"; // Declaration and assignment of a variable in one line
// let age = 36; // Declaration and assignment of a variable in one line

// let isStudent = true; // Declaration and assignment of a variable in one line

// console.log("Hello " + fName + " " + lName + ", age: " + age); // Concatenation of strings and variables



console.log();








let n1 = 100;
let n2 = 200;

let result = n1 - n2;
console.log(result); // Output the result of the subtraction
