const prompt = require("prompt-sync")();

const arr = new Array();
for (let i = 0; i < 5; i++) {
  arr[i] = Number(prompt("Number" + (i+1) + "/5: "));
}

console.log(arr);
// let test = [2];
// test[6] = 10; // 5 next will be empty items.
// test.push("ok");
// console.log(test);
// test.pop();
// console.log(test);
// console.log(test.shift());
// console.log(test);

// test[0] = "ok!!!";
// let [ok1 = "ok", ok3, ...ok2] = test; // Aha! Cool!

// console.log(ok1);
// console.log(ok2);
// console.log(ok3);


// *******************************

// const numarr = ["Nalini", "Robert", "Mats", "Eva"];



const numarr = [10, 22, 44, 2, 94, 18, 18];
console.log(numarr);
// numarr.pop();
// numarr.push(100);
// numarr[5] = 909;

numarr.sort((a, b) => a - b);

str = "\n| ";
console.log("array length:", numarr.length);
let sum=0;
for (let i = 0; i < numarr.length; i++) {
  str += (numarr[i]) + " | ";
  sum += numarr[i];
}
str += "\n";
console.log(str);
console.log("Sum of arr:", sum);




///// SETS

let letters = new Set(["a","b","a"]);
console.log(letters);

for (let i = 0; i < numarr.length; i++) {
  letters.add (numarr[i]);
}
console.log(letters);
console.log(letters.size);




// Maps!

// Create a Map
const fruits = new Map([
  ["apples", 500],
  ["apples", 350],
  ["bananas", 300],
  ["oranges", 200]
]);

console.log(fruits);
fruits.set("lemon", 800);
console.log(fruits);
console.log(fruits.get("apples"));

fruits.delete("bananas");
console.log(fruits);

fruits.set("lemon", 400);
console.log(fruits);



let myMap = new Map([["Tobbe", 200],["Mackan", 300], ["Okänd", 100]]);

myMap.set("Kina", 120);

console.log(myMap);




