
// First i want to repeat array, map and set before the test. So this is my own excercise.
console.log("************\nExcercise 1: ")
let map = new Map([["Tobbe", 500], ["Filip", 200]]);

map.forEach((v, k) => {
  console.log(k, v);
})

// Loop using an array of keys. Array.from creates an array from an iterable object.
let keys = Array.from(map.keys());
for (let i = 0; i < keys.length; i++) {
  console.log(keys[i], map.get(keys[i]));
}

let set = new Set();

set.add("a");
set.add("b");
set.add("b");
set.add("c");

keys = Array.from(set.keys()); 
let values = Array.from(set.values());
// console.log(set.length) = undefined?; okej, lets use keys.lenght then?
for (let i = 0; i < keys.length; i++) {
  console.log(keys[i], values[i]); // wanted to see the difference between keys and values, why is there in set because its not a map.? They have the same value .
}

// I prefer:
keys.forEach(v => {
  console.log(v);
})



let arr = new Array([-321,0]);
arr.push("123");
arr.push("456");
arr.push("789");

arr.forEach((v, i) => {
  console.log(v + " at index", i); // Was expecting -321, 0 to be different index. Its just a nested array.
})

console.log("\n" + arr[0][1] + " - " + arr[0][0] + "\n"); // So i can reach it with [index][index]

arr = new Array(-321,0);

arr.forEach((v, i) => {
  console.log(v + " at index", i); // now it is.
})







//https://www.w3resource.com/javascript-exercises/javascript-array-exercises.php
// 10. Print Nested Array Elements

// Write a JavaScript program that prints the elements of the following array.
// Note : Use nested for loops.
// Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
// Sample Output :
// "row 0"
// " 1"
// " 2"
// " 1"
// " 24"
// "row 1"
// ------
// ------

console.log("\n\n************\nExcercise 2:")
arr = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

console.log(arr.length);
for (let a = 0; a < arr.length; a++) {
  console.log("Row", a);
    
  for (b = 0; b < arr[b].length; b++) {
    console.log(arr[a][b]);
  }
}




//https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php

// 9. Days Left Before Christmas

// Write a JavaScript program to calculate the days left before Christmas.  

console.log("\n\n************\nExcercise 3:")

today=new Date();
let cmas=new Date(today.getFullYear(), 11, 24); // Changed it to 24th, 25 gives an extra day. ;)
if (today.getMonth()==11 && today.getDate()>24) 
{
cmas.setFullYear(cmas.getFullYear()+1); 
}  
let one_day=1000*60*60*24;
console.log(Math.ceil((cmas.getTime()-today.getTime())/(one_day))+
" days to christmas!");

// I didnt know this at all, so i looked at the solution but study every line.



//https://www.w3resource.com/javascript-exercises/javascript-array-exercises.php
// 5. Join Array Elements

// Write a simple JavaScript program to join all elements of the following array into a string.
// Sample array : myColor = ["Red", "Green", "White", "Black"];
// Expected Output :
// "Red,Green,White,Black"
// "Red,Green,White,Black"
// "Red+Green+White+Black"
console.log("\n\n************\nExcercise 4:")
myColor = ["Red", "Green", "White", "Black"];

let myStr = "";
myColor.forEach(
  (v, i) => {
  myStr += v;
  if (i != myColor.length-1) myStr += ",";
})
console.log(myStr);
myStr = myColor.join();
console.log(myStr);
myStr = myColor.join("+");
console.log(myStr);






// 13. Repeat String

// Write a JavaScript function to concatenate a given string n times (default is 1).
// Test Data :
// console.log(repeat('Ha!'));
// console.log(repeat('Ha!',2));
// console.log(repeat('Ha!',3));
// "Ha!"
// "Ha!Ha!"
// "Ha!Ha!Ha!"
console.log("\n\n************\nExcercise 5:")

function repeat(str, times) {

  let newStr = "";
  for (let i = 0; i < times; i++) {
    newStr += str;
  }

  return newStr;

}

console.log(repeat("hi", 18));


// "Ha!Ha!Ha!"
console.log("\n\n************\nExcercise 6:")
let test = undefined;
console.log(typeof test); // returns object, not "null". Failed test :/

if (test == undefined)
  console.log("aa"); // This works so multiple answers on the test was right.

let strr = "tobias";
console.log(strr.length); // Not length()... The word "method" tricked me.
 
// Okey, so i will not score 15/15 ;/
