// https://www.w3resource.com/javascript-exercises/javascript-recursion-functions-exercises.php
// // 6. Fibonacci Sequence

// Write a JavaScript program to get the first n Fibonacci numbers.  
// Note : The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, . . . Each subsequent number is the sum of the previous two.

console.log("\n\n****************\nExcerise 1")
function fib(iteration) {
if (iteration == 1) {
    return [0, 1]; // Return the first two.
  } else {
    let value = fib(iteration - 1);
    value.push(value[value.length - 1] + value[value.length - 2]);
    return value;
  }
}

console.log(fib(22));

// Rörigt :S







// https://www.w3resource.com/javascript-exercises/javascript-recursion-functions-exercises.php
// 12. Recursive Binary Search in Array

// Write a JavaScript program to search for a given integer in an array of sorted integers using the Binary Search Algorithm and recursion.  
// Test Data:
// ([1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23], 6) -> 4
// ([1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23], 16) -> -1

console.log("\n\n****************\nExcerise 2")
let sortedList = new Array();
let from = 1 + Math.floor(Math.random() * 99);
let to = from + Math.floor(Math.random() * 1000000);
let searchFor = from + Math.floor(Math.random() * (to-from));
//let searchFor = -1; //To see if no match works.
for (let i = from; i < to; i++) {
  sortedList.push(i);
}

console.log("Search for " + searchFor + " in range from " + from + " to " + to + " (total " + (to - from) + "):\n");

let countSteps = 0;
function binarySearch(arr, term, start, end) {
  countSteps++;

  if (start > end) {
    return "No match.";
  }

  let middleIndex = Math.floor((start + end) / 2);

  console.log("lookin for value " + term + " between index " + start + " and " + end + " (middle: " + middleIndex + ", total " + (end-start) + ")");

  if (term == arr[middleIndex]) {
    console.log(term + " is equal to value " + arr[middleIndex] + " at index " + middleIndex);
    return middleIndex;
  } else if (term < arr[middleIndex]) {
    console.log(term + " is less than value " + arr[middleIndex] + " at index " + middleIndex);
    return binarySearch(arr, term, start, middleIndex-1);
  } else if (term > arr[middleIndex]) {
    console.log( term + " is greater than value " + arr[middleIndex] + " at index " + middleIndex);
    return binarySearch(arr, term, middleIndex+1, end);
  }
}

console.log(binarySearch(sortedList, searchFor, 0, sortedList.length-1));
console.log("It took " + countSteps + " steps");





// https://www.w3resource.com/javascript-exercises/linkedlist/index.php
// 4. Insert a node at any position in a SLL

// Write a JavaScript program to insert a node at any position in a Singly Linked List.

// WHAT IS THIS!? Need to watch some youtube. . .

// https://www.youtube.com/watch?v=cob_kM0PJMo

console.log("\n\n****************\nExcerise 3")

class Node {
  // Okej, so this creates a node.
  constructor(data) {
      this.data = data

      this.next = null                
  }

}

class SLinkedList {

  constructor(Head = null) {
      this.Head = Head
  }

  add(newNode){
    let node = this.Head;
    if(node==null){
        this.Head = newNode;
        return;
    }

    while (node.next) {
        node = node.next;
    }

    node.next = newNode;

  }

  addAt(newNode, position) {
    if (position < 0) {
      console.log("Invalid position");
      return;
    }

    if (position === 0) {
      newNode.next = this.Head;
      this.Head = newNode;
      return;
    }

    let node = this.Head;
    let prev = null;
    let index = 0;

    while (node && index < position) {
      prev = node;
      node = node.next;
      index++;
    }

    if (prev) {
      prev.next = newNode;
      newNode.next = node;
    } 
    
  }


  displayList(){
    let node = this.Head;
    var str = ""
    while (node) {
        str += node.data + ",";
        node = node.next;
    }
    str += "NULL"
    console.log(str);  
  }

}

let numList = new SLinkedList();
numList.add(new Node(2));
numList.add(new Node(3));
numList.add(new Node(44));
numList.add(new Node(5));
numList.add(new Node(6));
numList.add(new Node(7));
numList.displayList();

numList.addAt(new Node(50), 0);
numList.addAt(new Node(60), 3);
numList.addAt(new Node(30), 15); // Will just add to the end, no error.

numList.displayList();// Works :)



// 11. Generate Random Hexadecimal Color Code

// Write a JavaScript program to generate a random hexadecimal color code.
console.log("\n\n****************\nExcerise 4")

function getRandomRGB() {
  let hex = "0123456789abcdef";

  str = "";
  for (let i = 0; i < 6; i++) {
    let n = Math.floor(Math.random() * 16);
    str += hex[n];
  }

  return str;
}

console.log("Random RGB: #" + getRandomRGB());




// 3. CSV String to 2D Array

// Write a JavaScript program to convert a comma-separated value (CSV) string to a 2D array.

// Click me to see the solution
console.log("\n\n****************\nExcerise 5")

let csvString = "abc,de,fghl,mno,pq,r,stu,v,w,xyz,åäö";
function convertCSV(csv) {
  return csv.split(",");
}
let csvToArr = convertCSV(csvString);

console.log(csvToArr);
