const prompt = require("prompt-sync")();

// Name of the function
// Do i need to pass any information
// Does it return anything from function?

// function addNumbers() {
//   let num1 = Number(prompt("Number 1:"));
//   let num2 = Number(prompt("Number 2:"));
//   let sum = num1 + num2;
//   console.log("Sum is ", sum);
// }

// addNumbers();

// let n1 = prompt("nr1:");
// let n2 = prompt("nr2:");


// console.log(`${n1} + ${n2} = ${sum(n1, n2)}`);

// function sum(num1, num2) {
//   //num1 num2 is parameters.
//   return Number(num1) + Number(num2);
// }



// function add(n1, n2) {

//   return Number(n1) + Number(n2);
// }


// let result = add(n1, n2);
// console.log("result ", result);



// function getPower(value, power) {

//   return value ** power;
// }

// console.log("5 ^ 3", getPower(5, 3));
// console.log("5 ^ 4", getPower(5, 4));
// console.log("1.2 ^ 2", getPower(1.2, 2));

// function getNumberSign(num) {
//   if (num > 0) {
//     return `${num} is positive`;
//   } else if(num < 0) {
//     return `${num} is negative`;
//   } else {
//     return `${num} is 0`;
//   }

// }

// console.log(getNumberSign(2));
// console.log(getNumberSign(-2));
// console.log(getNumberSign(0));

// console.log(getNumberSign(Number(prompt("Enter a number"))));



// console.log("\n\n Calculator function! \n\n");


// function calc(number1, number2, op) {
//   switch(op) {
//     case "+":
//       return number1 + number2;
//     break;
//     case "-":
//       return number1 - number2;
//     break;
//     case "*":
//       return number1 * number2;
//     break;
//     case "/":
//       return number1 / number2;
//       break;
//     case "**":
//       return number1 ** number2;
//     break;
//     default:
//       return "No valid op";
//   }
// }


// let calculate = true;

// while (calculate) {
//   console.log("Calculator 1.0\n"); 

//   let nr1 = Number(prompt("Enter number 1: "));
//   let nr2 = Number(prompt("Enter number 2: "));
//   let op = prompt("Enter operator (+-*/) or q to quit:");
  
//   if (op == "q") {
//     calculate = false;
//     break;
//   } else {
//     console.log(`${nr1} ${op} ${nr2} = ${calc(nr1, nr2, op)}`);
//   }

//   console.log("Restarting...\n\n")

// }








// Calculator 2.o

// Number:
// Operator:
// (loop)
// ex
// Number: 4
// Op: +
// 3
// Op: +
// 2
// Op: -
// 5
// Op: =

// 4+3+2-5 = 4

// let runCalculator = true;

// while (runCalculator) {

//   console.log("\n\nCalculator 2.0!\n\n")

//   let calculate = true;

//   let value = Number(prompt("Start value: "));
//   let op = "";
//   let opOk = false;
//   let num = 0;

//   while (calculate) {

//     console.log("Value: ", value);
//     opOk = false;
//     while(!opOk) {
//       op = prompt("OPERATOR +, -, *, /, **, c or q to quit: ")
//       if (op == '+' || op == '-' || op == '*' || op == '/' || op == '**' || op == 'c' || op == 'q') {
//         opOk = true;
//       } else {
//         opOk = false;
//       }
//     }

//     if (op != "q" && op != "c")
//      num = Number(prompt("number:"));


//     // Calculate new value.
//     switch(op) {
//           case "+":
//             value += num;
//           break;
//           case "-":
//             value -= num;
//           break;
//           case "*":
//             value *= num;
//           break;
//           case "/":
//             value /= num;
//             break;
//           case "**":
//             value **= num;
//           break;
//           case "c":
//             value = 0;
//             break;
//           case "q":
//             console.log("Exit with value: ", value);
//             calculate = false;
//             runCalculator = false;
//             break;  
//           default:
//             return "No valid op";

//         }
//   }
// }



// Lets do it with functions.

function getNum() {

    let nr = Number(prompt("Enter number:"));
    return nr;
    
}

function getOp() {
  let opOk = false;
  let op="";
  while(!opOk) {
    op = prompt("OPERATOR +, -, *, /, **, c or = to quit: ")
    if (op == '+' || op == '-' || op == '*' || op == '/' || op == '**' || op == 'c' || op == '=') {
      opOk = true;
    }
  }

  return op;
}


let runCalculator = true;

while (runCalculator) {

  console.log("\n\nCalculator 2.0!\n\n")

  let calculate = true;

  let value = getNum();
  let op = "";

  let num = 0;

  while (calculate) {

    console.log("Value: ", value);

    op = getOp();
    if (op != "=" && op != "c")
     num = getNum();

    if (op == "=") {
      console.log("Exit with value: ", value);
      calculate = false;
      runCalculator = false;
    } else {
      value = calcValue(value, num, op);
    }
   
  }
}

function calcValue(v, n, o) {
   // Calculate new value.
   switch(o) {
    case "+":
      v += n;
    break;
    case "-":
      v -= n;
    break;
    case "*":
      v *= n;
    break;
    case "/":
      v /= n;
      break;
    case "**":
      v **= n;
    break;
    case "c":
      v = 0;
      break;

  }

  return v;
}


// Nalinis calculator

// function calculatorNalini(n1, n2, op) {

//   let res = 0
//   switch (op) {
//     case '+':
//       res = n1 + n2;
//     break;
//     case '-':
//       res = n1 - n2;
//     break;
//     case '*':
//       res = n1 * n2;
//     break;
//     case '/':
//       res = n1 / n2;
//     break;
    
//   }

//   return res;

// }

// let op = prompt("Select + - * /: ");

// if (op == '+' || op == '-' || op == '/' || op == '*') {
//   let num1 = Number(prompt("first numer: "));
//   let num2 = Number(prompt("first numer: "));
//   let res = calculatorNalini(num1, num2, op);
//   console.log(`${num1} ${op} ${num2} = ${res}`);
// } else {
//   console.log("Invalid operator");
// }



