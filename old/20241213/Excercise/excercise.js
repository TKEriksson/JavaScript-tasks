// https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php
// 134. Reverse Alphabetical Order of Lowercase Letters

// Write a JavaScript program to change the characters (lower case) in a string where a turns into z, b turns into y, c turns into x, ..., n turns into m, m turns into n, ..., z turns into a. 
// Click me to see the solution

console.log("Excercise 1\n");

//a = 97
//z = 122

// Should work to get the characters distance from 97, and just go backwards from 122.

let str = "abcdefghijklmnopqrstuvwxyz";
let strRev = "";
let ascii = 0;

for (let i = 0; i < str.length; i++) {
  ascii = str.toLowerCase().charCodeAt(i);
  if (ascii >= 97 && ascii <= 122)
    strRev += String.fromCharCode(122 - (ascii - 97));
  
}

console.log(strRev);




// https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php
// 147. Sum of Digits in String

// Write a JavaScript program to compute the sum of all the digits that occur in a given string.  
// Click me to see the solution

console.log("\n\nExcercise 2\n");

// 48 - 57

str = "Hej 123 det här är 1 string med siffror i som t.ex 123456";

let sum = 0;

for (let i = 0; i < str.length; i++) {
  if (str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 57) {
    sum += Number(str[i]);
  }
}
// 1+2+3+1+1+2+3+4+5+6 = 28
console.log(sum);





// https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php
// 99. Check if String Can Rearrange to Match Another

// Write a JavaScript program to check whether it is possible to rearrange the characters of a given string. This is in such a way that it will become equal to another given string. 
// Click me to see the solution

console.log("\n\nExcercise 3\n");

str = "Tobias Eriksson";
let str2 = "Saibot NossERKI";
let noMatch = false;

// for (let i = 0; i < str.str2; i++) {
//   match = false;
//   ascii = str2.toLowerCase().charCodeAt(i);
//   for (let j = 0; j < str.length; j++) {
//     if (str2.toLowerCase().charCodeAt(i) == str2.toLowerCase().charCodeAt(j))
//       match = true;
//   }
//   if (!match) {
//     noMatch = true;
//     break;
//   }
// }

// if (noMatch) {
//   console.log(`${str2} is not possible to rearrange to ${str}`);
// } else {
//   console.log(`${str2} is possible to rearrange to ${str}`);
// }

// oops, i need to count each letter too... Let me think...

let cnt;
let cnt2;
noMatch = false;

for (let i = 0; i < str.length; i++) {
  ascii = str.charCodeAt(i);
  cnt = 0;
  cnt2 = 0;
  // Count char in str
  for (let j = 0; j < str.length; j++) {
    if (str.toLowerCase().charCodeAt(i))
      cnt++;
  }


  // Count char in str2
  for (let j = 0; j < str2.length; j++) {
    if (str2.toLowerCase().charCodeAt(i))
      cnt2++;
  }

  if (cnt != cnt2) {
    noMatch = true;
    break;
  }

}

if (noMatch) {
  console.log(`${str2} is not possible to rearrange to ${str} (not case sensitive)`);
} else {
  console.log(`${str2} is possible to rearrange to ${str} (not case sensitive)`);
}





// https://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php
// 3. Throw Error for Division by Zero

// Write a JavaScript function that accepts two numbers as parameters and throws a custom 'Error' if the second number is zero.

// Click me to see the solution

console.log("\n\nExcercise 4\n");

function div(a, b) {

  let res = a/b;
  if (res == Infinity) {
    throw new Error("Error! Division by 0!");
  }
  return res;
} 

try {
  console.log(div(3, 0));
} catch(e) {
  console.log(e);
}



// https://www.w3resource.com/javascript-exercises/javascript-object-exercises.php
// 5. Cylinder Volume

// Write a JavaScript program to get the volume of a cylindrical with four decimal places using object classes.
// Volume of a cylinder : V = πr2h
// where r is the radius and h is the height of the cylinder.
// Click me to see the solution

console.log("\n\nExcercise 5\n");

class Cylinder {
  constructor(height, radius) {
    this.height = height;
    this.radius = radius;
  }

  getVol() {
    return Math.PI * this.radius * 2 * this.height;
  }

   printVol() {
    console.log(`The volume of the cylinder with ${this.height} height and ${this.radius} radius is:\n${this.getVol().toFixed(4)}`);
  }
}

let cyl = new Cylinder(2, 3);
cyl.printVol();

console.log("Replacing this cylinder with a new..");

cyl = new Cylinder(3, 4);
cyl.printVol();

const cyl2 = new Cylinder(10, 10);
cyl2.printVol();

console.log("Togheter both cylenders has a volume of ", (cyl.getVol() + cyl2.getVol()).toFixed(4));