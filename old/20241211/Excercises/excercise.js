// https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php
// 83. Find Longest String in Array

// Write a JavaScript program to find the longest string from a given array of strings.  

console.log("Excercise 1");
let strArr = ["okej!", "det här är en sträng"];

strArr.push("test");
strArr.push("test 2");
strArr.push("testar lite här dårå, detta borde bli längst? Om den inte poppas ;)!");
strArr.pop();


let strArrLongest = 0;
let strArrLongestIndex = 0;

for (let i = 0; i < strArr.length; i++) {
  if (strArr[i].length > strArrLongest) {
    strArrLongest = strArr[i].length;
    strArrLongestIndex = i;
  }
}

console.log(`The longest string in "${strArr}" is: \n"${strArr[strArrLongestIndex]}" with ${strArrLongest} chars.`);

// Can i do this with forEach? Dont know exactly what im doing here, why i would passing a function like this rather than just looping trough like above, but i see it in other peoples codes all the time. Lets try it.
strArrLongest = 0;
strArrLongestIndex = 0;
strArr.forEach(function(value,index) {
  if (value.length > strArrLongest) {
    strArrLongest = value.length;
    strArrLongestIndex = index;
  }
});

console.log(`The longest string in "${strArr}" is: \n"${strArr[strArrLongestIndex]}" with ${strArrLongest} chars.`);

// According to https://stackoverflow.com/questions/9329446/loop-for-each-over-an-array-in-javascript there is a few more ways, with pros and cons like some works with async(?). Apperently the first way is safe for async, whoile using forEach is not. Dont know what async really is yet.





// https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php
// 94. Find Most Frequent Number in Array

// Write a JavaScript program to find the number appearing most frequently in a given array of integers. 
console.log("\n\nExcercise 2");

// Nested loop, count in a new array based on index? Then returning the longest.
let numbers = [1, 2, 2, 2, 3, 3, 1, 7, 3, 2, 3, 1, 2, 3, 4, 2, 2, 1, 3, 7, 1, 2, 7]; // 
let counts = [];
let cnt = 0;

for (let i = 0; i < numbers.length; i++) {
  for (let j = 0; j < numbers.length; j++) {
    if (numbers[i] == numbers[j]) {
      cnt++;
    }
  }
  counts.push(cnt);
  cnt = 0;
}

let biggestCount = 0;
let biggestCountIndex = 0;
for (let i = 0; i < counts.length; i++) {
  if (counts[i] > biggestCount) {
    biggestCount = counts[i];
    biggestCountIndex = i;
  }
}

console.log(`The most frequent number in ${numbers} is ${numbers[biggestCountIndex]}, counted ${biggestCount} times.`)










// https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php
// 113. Sum n + n/2 + n/4 + ...

// Write a JavaScript program to calculate the sum of n + n/2 + n/4 + n/8 + .... where n is a positive integer and all divisions are integers. 
console.log("\n\nExcercise 3");

function calcSum(n, iterations) {

  let divider = 1;
  let sum = 0;

  for (let i = 0; i < iterations; i++) {
    sum += n/divider;
    divider *= 2;
  }

  return sum;

}

// 2 + 2/2 + 2/4 + 2/8 + 2/16 = 3.875
console.log(calcSum(2, 5));

// 4 + 4/2 + 4/4 + 4/8 + 4/16 + 4/32 = 7.875
console.log(calcSum(4, 6));

// So just set iterations very high to get a better rounding.
console.log("lim (2 + 2/2 + 2/4 + 2/8 + 2/16 ...) = " + calcSum(2, 1000000));

console.log("lim (4 + 4/2 + 4/4 + 4/8 + 4/16 ...) = " + calcSum(4, 1000000));

console.log("lim (10 + 10/2 + 10/4 + 10/8 + 10/16 ...) = " + calcSum(10, 1000000));




// https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php
// 120. Check if Point is Inside Circle

// Write a JavaScript program to check if a point lies strictly inside the circle. 
// Input:
// Center of the circle (x, y)
// Radius of circle: r
// Point inside a circle (a, b)
console.log("\n\nExcercise 4");

function isInCircle(circleX, circleY, circleR, pointX, pointY) {
  // Must be if the distance between the point coordinates and circle points < radius.
  // So how to check distans between two points? (circleX - pointX)^2 + (circleY - pointY)^2 < Radius^2
    let distance = (circleX - pointX) * (circleX - pointX) + (circleY - pointY) * (circleY - pointY);

    return distance < (circleR * circleR)

}

  console.log("Point: 2, 2  Circle: 2, 3 radius 3. Point in circle? " + isInCircle(2, 3, 3, 2, 2));
  console.log("Point: -2, -2  Circle: 2, 3 radius 3. Point in circle? " + isInCircle(2, 3, 3, -2, -2));
  console.log("Point: -2, -2  Circle: 2, 3 radius 13. Point in circle? " + isInCircle(2, 3, 13, -2, -2));
  // Seems to work.

// https://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php
// 1. Reverse Number

// Write a JavaScript function that reverses a number.
// Example x = 32243;
// Expected Output : 34223

// My apporach:
//Make it a string, then reverse it, then make it number again.
console.log("\n\nExcercise 5");


function revNum(num) {
  str = "" + num;
  strRev = "";
  for (let i = str.length-1; i >= 0; i--) {
    strRev += str[i];
  }
  return strRev; // If its supposed to be a number as type (return Number(strRev)), it wouldn´t be able to start with a 0. 
}

console.log("12345678910 reversed is " + revNum(12345678910));








