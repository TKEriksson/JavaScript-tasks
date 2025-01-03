// 152. Round Number to Digits

// Write a JavaScript program to round a number to a specified amount of digits.

function roundToDigit(nr, dig) {

  return Math.round(nr * Math.pow(10, dig)) / Math.pow(10, dig);

}

console.log("***************\nExcercise 1:");
console.log("Round 2.44342 to 3 decimals:", roundToDigit(2.44342, 3));
console.log("Round 2.44852 to 3 decimals:", roundToDigit(2.44852, 3));




// 183. Check Valid JSON

// Write a JavaScript program to check if the provided argument is valid JSON.

// Click me to see the solution
console.log("\n\n\n***************\nExcercise 2:");
function isJson(str) {
  try {
    JSON.parse(str);
    return true;
  } catch {
    return false;
  }
}

let testStr = `{
  "numbersToRound": [
    {
      "number": 123.45678,
      "digits": 2,
      "rounded": 123.46
    },
    {
      "number": 123.45678,
      "digits": 0,
      "rounded": 123
    }
  ]
}`;

console.log("is " + testStr + " json? \n", isJson(testStr));




// 224. Remove HTML/XML Tags

// Write a JavaScript program to remove HTML/XML tags from strings.


console.log("\n\n\n***************\nExcercise 3:");
let html = [];

function removeHTML(str, extract) {
  let newStr = "";
  let isHTMLTag = false;

  for (let i = 0; i < str.length; i++) {

    if (str[i] == "<") isHTMLTag = true;
    if (str[i] == ">")  isHTMLTag = false;
    if (!isHTMLTag && str[i] != ">") newStr += str[i];
    

  }

  return newStr;

}

testStr = "<><<<>hej h<b>e</b>j <HTML> <HEAD> <TITLE></TITLE> hur mår <span>d</span>u?";
let newStr = removeHTML(testStr);
console.log("TEST STRING: ", testStr);
console.log("NEW STRING: ", newStr);





// 243. Distance Between Points

// Write a JavaScript program to get the distance between two given points.

// Click me to see the solution
console.log("\n\n\n***************\nExcercise 4:");
function dist(x1, y1, x2, y2) {
  
  let x = x2 - x1;
  let y = y2 - y1;

  x *= x;
  y *= y;

  return Math.sqrt(x+y);

}


console.log("Point 1: 2, 3 \nPoint 2: -1, 4\nDistance:", dist(2,3,-1,4));




// 251. Write JSON to File

// Write a JavaScript program to write a JSON object to a file.
console.log("\n\n\n***************\nExcercise 5:");
let fs = require('fs');

let json = {
  name: "Tobias Eriksson",
  age: 36,
  email: "hungatobbe@gmail.com"
};

let jsonStr = JSON.stringify(json, null, 2);

fs.writeFile('tobias.json', jsonStr, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('JSon saved to file tobias.json.');
  }


});

