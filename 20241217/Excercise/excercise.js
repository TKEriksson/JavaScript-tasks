// https://www.w3resource.com/javascript-exercises/asynchronous/index.php#google_vignette
// 1. Delayed Callback Execution

// Write a JavaScript function that takes a callback and invokes it after a delay of 2 second.
function hello(callback) {
  console.log("Hello!");
  setTimeout(() => callback(), 2000);

}

function goodbye() {
  console.log("Good bye!");
}

hello(goodbye);


// https://www.w3resource.com/javascript-exercises/asynchronous/index.php#google_vignette
// 5. Sequential Async Operations

// Write a JavaScript program that implements a function that performs a series of asynchronous operations in sequence using Promises and 'async/await'.

// Add type: module in package.json. (to use imoport)
// And add console: integrated to launch.json (to see the pokemon json in terminal)
// import fetch from 'node-fetch'; // To make API-req.

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu") //Get some pokemondata on pikachu!
// .then((res) => res.json()) //Gets the result. Converts it to json. .json() makes a new promise, so nest a new .then:
// .then((data) => console.log(data))
// .catch((err) => console.log("ERR " + err)); // Catches eaither of the two .then fails abobe (tested)



// import fs from 'fs'; // Import fs

// fs.readFile('./afile.txt', 'utf-8', (error, fileData) => {
//   if (error) {
//     console.log("Error: ", error);
//   } else {
//     console.log("\n\nFrom file: ",fileData, "\n\n");
//   }

// }) //


// The file is logged before the pokemondata due to the latency. So with async() and await we should be able to await the promise from pokemon and then await fileData. Lets try it..


import fetch from 'node-fetch'; // To make API requests
import fs from 'fs/promises'; // Use promises API for fs

// (async () => {})();

(async () => {
  try {
    // Fetch Pokemon data
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
    const data = await response.json();
    console.log(data); // Log the fetched jsondata

    // Read the file
    const fileData = await fs.readFile('afile.txt', 'utf-8');
    console.log("\n\nFrom file: ", fileData, "\n\n");


    // Next excercise:
    let id = userInput("Pokedex! Enter a pokemon: ");
    getPokemon(id, 5);

  } catch (error) {
    console.error("Error: ", error);
  }
})();

//Why Wrap in Parentheses?
// Scope Isolation:

// Wrapping the async function in parentheses creates a self-contained scope. This avoids polluting the global scope with variables or function definitions.
// For example:
// javascript
// Kopiera kod
// (async () => {
//   const data = await fetchData();
//   console.log(data);
// })();
// Here, data is only accessible within the function and not outside.









// https://www.w3resource.com/javascript-exercises/asynchronous/index.php#google_vignette
// 7. API Fetch with Retry Mechanism

// Write a JavaScript function that fetches data from an API and retries the request a specified number of times if it fails.

// Okej so lets do the pokemon again. Maybe take input from user?
import prompt from "prompt-sync"; 
// Not "require" because we have type: module in packages.json.
// Why Use "type": "module"?
// Enables modern JavaScript module features.
// Aligns with the ECMAScript standard.
// Easier interoperability with tools like Vite, Webpack, and modern JavaScript libraries.

// Why Can't You Use require with "type": "module"?
// require is a CommonJS-specific function. When you switch to ES Modules with "type": "module", Node.js disables require because it conflicts with the ESM way of handling imports/exports.

var userInput = prompt();

// let test = setTimeout(() => userInput("Enter a pokemon: "), 3000); // I just wait so "goodbye" and the first pokemon is done before. Maybe i should use callback here? Or await? hmm... Lets make it a function, and call it in the async above with await.

let success = false;
async function getPokemon(id, retry) {



for (let tries = 1; tries <= retry; tries++) {
  if (success) break; // It still goin :/ Nope, now it works :)


    try {
      
      if (success == false) {

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();
        console.log("\n\n\n**************************\nFOUND POKEMON DATA:\n\n\n", data); // Log the fetched jsondata.
        success = true;

      }

      // It still runs this "retry" timnes... :S
      
    } catch(error) {
      // Redo ?

        console.log("After " + tries + " attempts, error:\n",error);

    }
 
  }
}
  


// If i input an invalid pokemon, i get the tries and errors. But they are not in order? Ex:

// Pokedex! Enter a pokemon: h
// Good bye! (and here came this! ^^,)
// After 1 attempts, error:
//  SyntaxError: Unexpected token 'N', "Not Found" is not valid JSON
//     at JSON.parse (<anonymous>)
//     at Response.json (file:///C:/Users/secre/Desktop/Aktuellt/Uppgifter/20241217/Excercise/node_modules/node-fetch/src/body.js:149:15)      
//     at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
//     at async file:///C:/Users/secre/Desktop/Aktuellt/Uppgifter/20241217/Excercise/excercise.js:116:20
// After 5 attempts, error:
//  SyntaxError: Unexpected token 'N', "Not Found" is not valid JSON
//     at JSON.parse (<anonymous>)
//     at Response.json (file:///C:/Users/secre/Desktop/Aktuellt/Uppgifter/20241217/Excercise/node_modules/node-fetch/src/body.js:149:15)      
//     at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
//     at async file:///C:/Users/secre/Desktop/Aktuellt/Uppgifter/20241217/Excercise/excercise.js:116:20
// After 3 attempts, error:
//  SyntaxError: Unexpected token 'N', "Not Found" is not valid JSON
//     at JSON.parse (<anonymous>)
//     at Response.json (file:///C:/Users/secre/Desktop/Aktuellt/Uppgifter/20241217/Excercise/node_modules/node-fetch/src/body.js:149:15)      
//     at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
//     at async file:///C:/Users/secre/Desktop/Aktuellt/Uppgifter/20241217/Excercise/excercise.js:116:20
// After 2 attempts, error:
//  SyntaxError: Unexpected token 'N', "Not Found" is not valid JSON
//     at JSON.parse (<anonymous>)
//     at Response.json (file:///C:/Users/secre/Desktop/Aktuellt/Uppgifter/20241217/Excercise/node_modules/node-fetch/src/body.js:149:15)      
//     at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
//     at async file:///C:/Users/secre/Desktop/Aktuellt/Uppgifter/20241217/Excercise/excercise.js:116:20
// After 4 attempts, error:
//  SyntaxError: Unexpected token 'N', "Not Found" is not valid JSON
//     at JSON.parse (<anonymous>)
//     at Response.json (file:///C:/Users/secre/Desktop/Aktuellt/Uppgifter/20241217/Excercise/node_modules/node-fetch/src/body.js:149:15)      
//     at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
//     at async file:///C:/Users/secre/Desktop/Aktuellt/Uppgifter/20241217/Excercise/excercise.js:116:20


// I think i fixed it now by making the hole getPokemon function async. Earlier i had async inside, now:
// Pokedex! Enter a pokemon: uu
// Good bye!
// After 1 attempts, error:
//  SyntaxError: Unexpected token 'N', "Not Found" is not valid JSON
//     at JSON.parse (<anonymous>)
//     at Response.json (file:///C:/Users/secre/Desktop/Aktuellt/Uppgifter/20241217/Excercise/node_modules/node-fetch/src/body.js:149:15)      
//     at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
//     at async getPokemon (file:///C:/Users/secre/Desktop/Aktuellt/Uppgifter/20241217/Excercise/excercise.js:130:22)
// After 2 attempts, error:
//  SyntaxError: Unexpected token 'N', "Not Found" is not valid JSON
//     at JSON.parse (<anonymous>)
//     at Response.json (file:///C:/Users/secre/Desktop/Aktuellt/Uppgifter/20241217/Excercise/node_modules/node-fetch/src/body.js:149:15)      
//     at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
//     at async getPokemon (file:///C:/Users/secre/Desktop/Aktuellt/Uppgifter/20241217/Excercise/excercise.js:130:22)
// After 3 attempts, error:
//  SyntaxError: Unexpected token 'N', "Not Found" is not valid JSON
//     at JSON.parse (<anonymous>)
//     at Response.json (file:///C:/Users/secre/Desktop/Aktuellt/Uppgifter/20241217/Excercise/node_modules/node-fetch/src/body.js:149:15)      
//     at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
//     at async getPokemon (file:///C:/Users/secre/Desktop/Aktuellt/Uppgifter/20241217/Excercise/excercise.js:130:22)
// After 4 attempts, error:
//  SyntaxError: Unexpected token 'N', "Not Found" is not valid JSON
//     at JSON.parse (<anonymous>)
//     at Response.json (file:///C:/Users/secre/Desktop/Aktuellt/Uppgifter/20241217/Excercise/node_modules/node-fetch/src/body.js:149:15)      
//     at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
//     at async getPokemon (file:///C:/Users/secre/Desktop/Aktuellt/Uppgifter/20241217/Excercise/excercise.js:130:22)
// After 5 attempts, error:
//  SyntaxError: Unexpected token 'N', "Not Found" is not valid JSON
//     at JSON.parse (<anonymous>)
//     at Response.json (file:///C:/Users/secre/Desktop/Aktuellt/Uppgifter/20241217/Excercise/node_modules/node-fetch/src/body.js:149:15)      
//     at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
//     at async getPokemon (file:///C:/Users/secre/Desktop/Aktuellt/Uppgifter/20241217/Excercise/excercise.js:130:22)



// Jake Archibald on the web browser event loop, setTimeout, micro tasks, requestAnimationFrame, ...:
// https://www.youtube.com/watch?v=cCOL7MC4Pl0
// 
// The Async Await Episode I Promised:
// https://www.youtube.com/watch?v=vn3tm0quoqE
// 
// Need to study this more.





// Excercise 4 and 5 need html, so i put them in another folder.

// https://www.w3resource.com/javascript-exercises/event/index.php
// 9. Enter Key Detection in Input

// Write a JavaScript program that adds a keydown event listener to a text input to detect when the "Enter key" is pressed.






// https://www.w3resource.com/javascript-exercises/event/index.php
// 5. Image Slideshow Navigation

// Write a JavaScript program to create a slideshow that changes the displayed image when a next or previous button is clicked.