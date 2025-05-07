const prompt = require("prompt-sync")();

/*

sbyte byte
int uint
short ushort
long ulong
decimal (16B)
float (4b)
double (8B)
string
char
boolean
...?

class is a user defined datatype.

*/

const persons = new Array(); // Added by me =)

class Person{
  // Properties:
  FirstName;
  LastName;
  Gender;
  Age;

  constructor(firstName,lastName,gender,age) {
    this.FirstName = firstName;
    this.LastName = lastName;
    this.Gender = gender;
    this.Age = age;

    persons.push(this);
  }

  Introduce() {
    console.log("Hi! I am " + this.FirstName + " " + this.LastName + "!")
  }

}

let p1 = new Person();
p1.FirstName = "Nalini";
p1.LastName = "Propase";
p1.Gender = "Female";
p1.Age = 20;

let p2 = new Person();
p2.FirstName = "Johan";
p2.LastName = "Melander";
p2.Gender = "Male";
p2.Age = "30";

let p3 = new Person("Eva", "karlsson", "Female", 44);

console.log(p1);
console.log(p2);
console.log(p3);

// console.log("Hi! I am " + p1.FirstName + " " + p1.LastName + "!");
// console.log("Hi! I am " + p2.FirstName + " " + p2.LastName + "!");
// console.log("Hi! I am " + p3.FirstName + " " + p3.LastName + "!");
// // Repeating code...

// Introduce every person!
persons.forEach((p, i) => {
  p.Introduce();
  // console.log("Introduced person at index:", i);
})

// With for loop:
for (const index in persons) {
  persons[index].Introduce();
}


class Circle {

  Radius;
  Area;
  Diameter;
  Circumference;

  constructor(r) {
    this.Radius = r;
    this.Area = this.#getArea();
    this.Diameter = r * 2;
    this.Circumference = this.#getCircumference();
  }

  #getArea() {
    return Math.PI * this.Radius * this.Radius;
  }

  #getCircumference() {
    return Math.PI * this.Radius * 2;
  }
}

let circle1 = new Circle(10);
console.log("Area of circle(" + circle1.Radius + "):",circle1.Area);
console.log("Circumference of circle(" + circle1.Radius +  "):",circle1.Circumference);

let circle2 = new Circle(20);
console.log("Area of circle(" + circle2.Radius + "):",circle2.Area);
console.log("Circumference of circle(" + circle2.Radius +  "):",circle2.Circumference);

let circle3 = new Circle(500);
console.log("Area of circle(" + circle3.Radius + "):",circle3.Area);
console.log("Circumference of circle(" + circle3.Radius +  "):",circle3.Circumference);




// Create object without class:

const student = {firstName: "Tobias", lastName: "Eriksson"}

console.log(typeof(student));
console.log(student);
console.log(student.firstName);

// for (property in student) {
//   console.log(property);
// }
// for (value of student) {
//   console.log(property);
// }

// TypeError: student is not iterable

// OK!

for (let key of Object.keys(student)) {
  console.log(`Key: ${key}, Value: ${student[key]}`);
}

// Using Object.entries to iterate over [key, value] pairs
for (let [key, value] of Object.entries(student)) {
  console.log(`${key}: ${value}`);
}

