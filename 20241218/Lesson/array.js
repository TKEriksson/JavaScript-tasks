const prompt = require("prompt-sync")();

const nameArr = new Array();

nameArr[0] = "10";
nameArr[1] = "20";
nameArr[2] = "30";
nameArr[3] = "40";
nameArr[4] = "50";
nameArr.push(5);



let str = "| ";

for (let i = 0; i < nameArr.length; i++) {
  str += nameArr[i] + " | ";
}

console.log(str);
console.log("\n**********\n");

str = "| ";
nameArr.forEach((element) => {
  str += element + " | ";
})

console.log(str);
console.log("\n**********\n");




const category = new Set();

category.add("xyz");
category.add("abc");
category.add("xyz");
category.add("aaa");

console.log(category.size);

const nr0to10 = new Set();
while (nr0to10.size <= 9) {
  nr0to10.add(Math.floor(Math.random() * 10) + 1);
}
console.log(nr0to10);


const markList = new Map([
  ["Tobias", 10],
  ["Alex", 12]
])

markList.set("Nalini", 18);
markList.set("Sebastian", 14);

console.log(markList);


markList.forEach((v, key) => {
  console.log(key + ": " + v);
})


for (const marks of markList.values()) {
  console.log(marks);
}


const setTest = new Set();

setTest.add("OK");
setTest.add("OK½!");
setTest.add("OK");
setTest.add("OK");

console.log("SetTest: \n",setTest.size);