
// => Async-await:
//  - Async-await is a modern way to handle asynchronous operations in JavaScript, built on top of Promises.
//  - It makes asynchronous code look and behave more like synchronous code, which improves readability and maintainability.
//  - i.e we can execute asynchronous code sequentially provide behaviour of synchronous code to asynchronous code
//  - To handle an promises and make code good that's async-await cames
//  - Use async await when you want to handle promises
//  - Async function always returns Promis
//  - Async-await works like relay race 1st one complete then next


// => Syntax:
//  async function functionName() {
//       try {
//          const result = await promise;
//          // use the result
//       } catch (error) {
//          // handle errors
//       }
//  }

// Key Concepts
// async: A keyword used before a function to indicate it returns a Promise
// await: A keyword used inside an async function to pause execution until a Promise settles
// Error Handling: Use try/catch blocks to handle errors


// => Example:

// Async function (Use async keyword before function)
async function getData() {    
    setTimeout(function() {
        console.log("I am inside setTimeout block")
    }, 3000);
}

let output = getData();
console.log(output)

// Output:
// Promise { undefined }  (always returns promis)
// I am inside setTimeout block

// => await
//  - Before await learn fetch api for better understanding
//  - await make the async code to sync code i.e flow of execution does not move next line before current execution
//  - This concept more usefull in fetch api
//  - Must include async function await


async function getData() {

    // get request -> async operation
    let responce = await fetch('https://jsonplaceholder.typicode.com/todos/1'); // it can fully execute 1st the move next line because of await

    // Parse json() -> async operation
    let data = await responce.json();

    console.log(data);  // It this condition data not display because it take time to load the data that's why it can print undefined
    // To resolve it we can apply condition before loading the data form network call we can not process
    // Output before applying await: Promise { <pending> }

    // Output after applying await:
    // { userId: 1, id: 1, title: 'delectus aut autem', completed: false }
}
getData();

// Scenario:
// Prepare url / api endpoint  -> sync code
// await // fetch data    -> Network call -> Async catagory 
//    (After loading complete data form network call then we can process the data so here await concept comes wait to load the data)
//    After loading complete data flow execution move to next (called as await)
//    await makes the Async code beheve like sync code
// Process data  -> sync code


