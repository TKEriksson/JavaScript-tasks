const prompt = require("prompt-sync")();

let i = 1;

while(i <= 5) {
  console.log(`\t ${i}`);
  i++;
}

console.log("\n--------------\n")

let j = 5;

while(j > 0) {
  console.log(`\t ${j}`);
  j--;
}

console.log("Enter 5 numbers:");
let number;
let sum = 0;
for (let i = 0; i < 5; i++) {
  number = Number(prompt("Number   "));
  sum += number;
}

console.log("Sum of numbers: ", sum);

console.log("-----------\n\n")

let num;
sum = 0;

num = Number(prompt("Enter a number  "));

while (num != 0) {
  sum += num;
  num = Number(prompt("Enter a number  "));
}
console.log("Sum of numbers: ", sum);

// Well okey

console.log("-----------\n\n")

let num2;
console.log(num2); //Undefined

console.log("-----------\n\n")






num, sum = 0; // Multiple declarations

while(true) {
  num = Number(prompt("Number       "));
  if (num == 0)
    break;
   else 
    sum += num;
}
console.log(sum); //Undefined




let grade = prompt("Give a grade A-F:");

if(grade == "A") 
  console.log("Excellent! You scored highest grade");
else if (grade == "B")
  console.log("Very good!");
else if (grade == "C")
  console.log("Good job")
else if (grade == "D")
  console.log("Okey!")
else if (grade == "E")
  console.log("Lucky you, you are safe. Study better next time!")
else if (grade == "F")
  console.log("Sorry, you underscored.")
else
  console.log("Invalid grade");


switch(grade) {
  case "A":
    console.log("Excellent! You scored highest grade");
  break;
  case "B":
    console.log("Very good!");
  break;
  case "C":
    console.log("Good job");
  break;
  case "D":
    console.log("Okey!");
  break;
  case "E":
    console.log("Lucky you, you are safe. Study better next time!");
  break;
  case "F":
    console.log("Sorry, you underscored.");
  break;
  default:
    console.log("Invalid grade.");
  break;
}