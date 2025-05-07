// // Just repeating classes to see if i remember..

// // class Person {
// //   Name;
// //   Age;

// //   constructor (name, age) {
// //     this.Name = name;
// //     this.Age = age;
// //   }

// //   who() {
// //     console.log(this.Name);
// //   }
// // }

// // class Student extends Person {

// //   Grade;
// //   constructor (name, age, grade) {
// //     super(name, age)
// //     this.Grade = grade;
// //   }

// //   who() {
// //     super.who();
// //     console.log(this.Grade);
// //   }

// // }

// // const tobbe = new Student("Tobias", 36, "A");
// // tobbe.who();


// // let Grades = new Map([[tobbe.Name, tobbe.Grade], ["Lisa", "B"]]);

// // for (const [k, v] of Grades) {
// //   console.log(k, v);
// // }

// Want to try import / export.
import { hello } from "./module.js";
console.log(hello());



// Ok!


//Todays excercises:




// https://www.w3resource.com/javascript-exercises/oop/index.php
// 11. BankAccount Class with Transfers Between Accounts

// Write a JavaScript program that creates a class called BankAccount with properties for account number, account holder name, and balance. Include methods to deposit, withdraw, and transfer money between accounts. Create multiple instances of the BankAccount class and perform operations such as depositing, withdrawing, and transferring money.
console.log("\n\nExcercise 1***************")

const Bank = new Array();

class BankAcccount {
 
  AcNr;
  HolderName;
  Balance;

  constructor (holderName, initBalance) {
    this.HolderName = holderName;
    this.Balance = initBalance;
    this.AcNr = this.createAcNr();
    Bank.push(this);
  }

  createAcNr() {
    let str;
    while (true) {
      str = "";
      for (let i = 0; i < 10; i++) {
        str += Math.floor(Math.random() * 10); // Gives 0 - 9
      }

      let isUniqe = true; // Very unlikely (10^10 combinations?), but why not
      Bank.forEach((account, index) => {
        if (str == account.AcNr) {
          isUniqe = false;
        }
      });
      if (isUniqe) {
        break;
      }
      
    }
    return str;
  }


  transfer(fromAccount, value) {

    Bank.forEach((account, index) => {
      if (account.AcNr == fromAccount) {
        this.Balance += value; // I could used deposit() but i dont want console.log.
        account.Balance -= value; // I could used withdraw() but i dont want console.log.
        console.log(`${value} was transfered from ${fromAccount} to ${this.AcNr}`);
      }
    })

  }

  deposit(value) {
    this.Balance += value;
    console.log(`${value} was deposited to ${this.AcNr}, new balance: ${this.Balance}`);
  }

  withdraw(value) {
    this.Balance -= value;
    console.log(`${value} was withdrawed to ${this.AcNr}, new balance: ${this.Balance}`);
  }

}

let konto1 = new BankAcccount("Tobias", 10000);
let konto2 = new BankAcccount("Eric", 100000);
let konto3 = new BankAcccount("Kurt", 2000);

Bank.forEach((account, index) => {
  console.log(account);
})

konto1.deposit(14000);
konto3.withdraw(1404);

konto3.transfer(Bank[0].AcNr, 5000);


konto1.transfer(Bank[1].AcNr, 15000);

Bank.forEach((account) => {
  console.log(account);
})


// https://www.w3resource.com/javascript-exercises/javascript-object-exercises.php
// 2. Delete Property

// Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };
console.log("\n\nExcercise 2***************")

// Sample object: (changed to let, lets not use var for "best practice")
let student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };

console.log(student);
console.log("hasOwnProperty('rollno'):", student.hasOwnProperty('rollno'));
delete student.rollno;
console.log(student);
console.log("hasOwnProperty('rollno'):", student.hasOwnProperty('rollno'));

// Ok that was easy.






// https://www.w3resource.com/javascript-exercises/javascript-object-exercises.php
// 6. Bubble Sort

// Write a bubble sort algorithm in JavaScript.
// Note : Bubble sort is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted,
// Sample Data: [6,4,0, 3,-2,1]
// Expected Output : [-2, 0, 1, 3, 4, 6]
console.log("\n\nExcercise 3***************")
let arrToSort = new Array();
arrToSort = [6, 4, 0, 3, -2, 1, 122, -122, 15, 13, 1, 12, -44];

function bubbleSort(arr) {
  // https://www.youtube.com/watch?v=xli_FI7CuzA
  let done = false;

  while (!done) {
    done = true;
    for (let i = 0; i < arr.length-1; i++) {
      if (arr[i] > arr[i+1]) {
        done = false;
        let a = arr[i];
        let b = arr[i+1];
        arr[i] = b;
        arr[i+1] = a;
      }
    }
  }

}

let str = "";
arrToSort.forEach(v => {
  str += " " + v;
})
console.log(str);

bubbleSort(arrToSort);

str = "Bubble-Sorted: ";
arrToSort.forEach(v => {
  str += " " + v;
})
console.log(str);

// Seems to work.



// https://www.w3resource.com/javascript-exercises/javascript-array-exercises.php
// 14. Remove Duplicates

// Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).
// Click me to see the solution

// Can i use set here?

console.log("\n\nExcercise 4***************")
let theArray = [1, 1, 3, 2, 5, 3, 6, 7, 5,9, 7,6,7,0,0,4,3,5,8,8,10,10,9];
let remDups = new Set();
console.log(theArray);
theArray.forEach(v => {
  remDups.add(v);
})

theArray = [];

remDups.forEach(v => {
  theArray.push(v);
})

bubbleSort(theArray); // Looks nicer.

console.log("Removed duplicates (and bubblesorted):\n" + theArray);


// https://www.w3resource.com/javascript-exercises/javascript-array-exercises.php
// 21. Flatten Nested Array

// Write a JavaScript program to flatten a nested (any depth) array. If you pass shallow, the array will only be flattened to a single level.
// Sample Data :
// console.log(flatten([1, [2], [3, [[4]]],[5,6]]));
// [1, 2, 3, 4, 5, 6]
// console.log(flatten([1, [2], [3, [[4]]],[5,6]], true));
// [1, 2, 3, [[4]], 5, 6]
// Click me to see the solution

console.log("\n\nExcercise 5***************")

theArray = [1, [2], [3, [[4]]], [5,[6, [7, 8]]]];
console.log("Before flat:", theArray);
theArray = theArray.flat(1); //Just trying how it works.
console.log("After flat(1):", theArray);
// Use infinity
theArray = theArray.flat(Infinity);
console.log(theArray);