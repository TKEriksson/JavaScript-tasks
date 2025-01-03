console.log("\n\nExcercise 1\n*****************");
// https://www.w3resource.com/javascript-exercises/oop/index.php
// 1. Person Class with Details

// Write a JavaScript program to create a class called "Person" with properties for name, age and country. Include a method to display the person's details. Create two instances of the 'Person' class and display their details.

class person {

  constructor (name, age, country) {
    this.name = name;
    this.age = age;
    this.country = country;
  }

  who() {
    console.log(this.name);
    console.log(this.age);
    console.log(this.country);
  }
}

const person1 = new person("Tobias", 36, "Sweden");
const person2 = new person("Eric", 35, "Sweden");

person1.who();
person2.who();

person1.name = "Torbjoern";
person1.who();




console.log("\n\nExcercise 2\n*****************");
// https://www.w3resource.com/javascript-exercises/oop/index.php
// 3. Vehicle and Car Classes with Inheritance

// Write a JavaScript program that creates a class called 'Vehicle' with properties for make, model, and year. Include a method to display vehicle details. Create a subclass called 'Car' that inherits from the 'Vehicle' class and includes an additional property for the number of doors. Override the display method to include the number of doors.
class vehicle {
  constructor (make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  showDetails() {
    console.log ("Details:");
    console.log (this.make);
    console.log (this.model);
    console.log (this.year);
  }
}

class car extends vehicle {
  constructor (make, model, year, doors) {
    super(make, model, year);
    // Super is required.
    // super(...) is essential for establishing the connection between the subclass and its parent class, enabling inheritance to work properly.
    this.doors = doors;
  }

  showDetails() {
    super.showDetails();
    console.log (this.doors);
  }
}

const bil1 = new car("Volvo", "XC90", "2019", 4);
bil1.showDetails();

const bil2 = new vehicle("BMW", "i5", "2018");
bil2.showDetails();


console.log("\n\nExcercise 3\n*****************");

// https://www.w3resource.com/javascript-exercises/oop/index.php
// 4. BankAccount Class with Deposit and Withdrawal

// Write a JavaScript program that creates a class called "BankAccount" with properties for account number and balance. Include methods to deposit and withdraw money from the account. Create some instances of the "BankAccount" class, deposit some money, and withdraw a portion of it.

const BankAccounts = new Map();

class BankAccount {
  constructor (accountName) {
    //Get a accountNumber;
    this.accountNr = this.#createNr();
    this.accountName = accountName;
    this.balance = 0;
    BankAccounts.set(this, "$" + 0); // Add to Map!
  }

  deposit(value) {
    this.balance += value;
    console.log("Deposited " + value + " to account " + this.accountName + " " + this.accountNr);
    BankAccounts.set(this, "$" + this.balance);
  }

  withdraw(value) {
    this.balance -= value;
    console.log("Withdrawed " + value + " to account " + this.accountName + " " + this.accountNr);
    BankAccounts.set(this, "$" + this.balance);
  }

  getBalance() {
    return "$" + this.balance;
  }

  // Just to try a private method.
  #createNr() {
    let str = "";
    for (let i = 0; i < 13; i++) {
      str += Math.floor(Math.random() * 10); // Gives random 0 - 9
      if (i == 3)
        str += "-";
    }
    return str;
  }
}

const bankKonto1 = new BankAccount("privatkonto");



console.log("Konto skapades " + bankKonto1.accountName + ". Kontonr:", bankKonto1.accountNr);

bankKonto1.deposit(10000);
console.log("Balance of " + bankKonto1.accountName + ". Kontonr:", bankKonto1.accountNr + " is", bankKonto1.getBalance());

bankKonto1.withdraw(1234);
console.log("Balance of " + bankKonto1.accountName + ". Kontonr:", bankKonto1.accountNr + " is", bankKonto1.getBalance());

const bankKonto2 = new BankAccount("Konto 2");


console.log(BankAccounts);
BankAccounts.forEach((value, key) => {
  console.log(key, value);
})// Why is it showing the balance first? The balance should be "value"? ex:
// $8766 BankAccount {accountNr: '1748-128664044', accountName: 'privatkonto', balance: 8766}
// No, lookin at forEach syntax info:
// callbackfn(value: any, key: any, map: Map<any, any>): void
// The value comes first, then key, so it makes sense. Just switch places.

// To see account numbers: balance:
BankAccounts.forEach((value, key) => {
  console.log(key["accountNr"], value);
})

// console.log(bankKonto1.#createNr());
// SyntaxError: Private field '#createNr' must be declared in an enclosing class






console.log("\n\nExcercise 4\n*****************");
// https://www.w3resource.com/javascript-exercises/oop/index.php
// 8. Animal and Dog Classes with Sound

// Write a JavaScript program that creates a class called 'Animal' with properties for species and sound. Include a method to make the animal's sound. Create a subclass called 'Dog' that inherits from the 'Animal' class and adds an additional property for color. Override the make sound method to include the dog's color. Create an instance of the 'Dog' class and make it make its sound.

// const wavPlayer = require("node-wav-player");

class Animal {
  constructor (spec, sound) {
    this.spec = spec;
    this.sound = sound;
  }

  playSound() {
    console.log("SOUND OF " + this.spec + ":", this.sound);
  }

  // async playSound() {
  //   try {
  //     await wavPlayer.play({ path: this.soundFile });
  //     console.log(`Playing sound for ${this.spec}`);
  //   } catch (err) {
  //     console.error(`Could not play sound for ${this.spec}:`, err);
  //   }
  // }
  // Well, i tried ^^.
}

// const gissmo = new Animal("Cat", "./cat.wav");
// gissmo.playSound();

const gissmo = new Animal("Cat", "Mjaoo!");
gissmo.playSound();

class Dog extends Animal {
  constructor(color) {
    super("dog", "WOFF");
    this.color = color;
  }

  playSound() {
    console.log("SOUND OF " + this.color + " " + this.spec + ": " + this.sound);
  }
}

const doggy = new Dog("brown");
doggy.playSound();







console.log("\n\nExcercise 5\n*****************");
// https://www.w3resource.com/javascript-exercises/oop/index.php
// 12. University Class with Department Management

// Write a JavaScript program that creates a class called University with properties for university name and departments. Include methods to add a department, remove a department, and display all departments. Create an instance of the University class and add and remove departments.

class University {

  constructor(name, departments) {
    this.name = name;
    this.departments = new Array();



    if (departments && typeof(departments) == "object") {
      departments.forEach(element => {
        this.departments.push(element);
      });
    } else {
      this.departments.push(departments);
    }

  }

  showDep() {
    console.log(this.name + ":\n" + this.departments);
  }

  addDep(dep) {
    this.departments.push(dep);
  }

  remDep(dep) {
    let found = -1;
    for (let i = 0; i < this.departments.length; i++) {
      if (dep == this.departments[i]) {
        found = i;
      }
    }
    if (found >= 0) {
      this.departments.splice(found, 1);
      console.log("Deleted", dep);
    } else {
      console.log(dep + " not found, could not delete.");
    }
  }

}

const dep = ["Matematik", "Naturkunskap"];

const plugget = new University("Plugget", dep);
plugget.addDep("Astrologi");
plugget.remDep("Matematik");
plugget.remDep("a");
plugget.showDep();

const plugg2 = new University("Plugg 2", "test");
plugg2.showDep();

plugg2.addDep("Biologi");
plugg2.showDep();