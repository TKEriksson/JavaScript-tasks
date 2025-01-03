const prompt = require("prompt-sync")();


let str = "";

for (let i=1;i<=10; i++) {

  for (let j=1;j<=10; j++) {

    str += "\t" + (i * j);

  }

  console.log(str);
  str = "";

}

console.log("------------------");

console.log("The task");
let str2 = "";
for(let i = 1; i <= 5; i++) {

  for (let j = 1; j <= i; j++) {
    str2 += j;
  }

  console.log(str2);
  str2= "";

}


console.log("------------------");

console.log("The task 2");
let str3 = "";
for(let i = 5; i >= 1; i--) {

  for (let j = 1; j <= i; j++) {
    str3 += j;
  }

  console.log(str3);
  str3 = "";

}




console.log("------------------");
console.log("The task 3");

// Ex: 5
// "     *"
// "    * *"
// "   * * *"
// "  * * * *"
// " * * * * *"

let str4 = "";
let n = prompt("Enter pyramid rows: ");

for (let i = n; i >= 1; i--) {
  // Börja med högsta raden och loopa tills den är 1.

  for (let j = 1; j <= i - 1; j++) {
    // Skapa mellanrum på raden. Ex: Om rad 5 så ska det vara 4 mellanrum, därför i -1.
    str4 += " ";
  }5

  for (let k = 1; k <= n - (i-1); k++) {
    // Skapa *:or på raden. Börja med 1 och kör till antal rader minus raden du är på i loopen -1.
    str4 += "* ";
  }

  console.log(str4);
  str4 = "";
}


