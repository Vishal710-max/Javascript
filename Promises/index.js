
// => Promises:
//   - The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
//   - They provide a cleaner way to handle asynchronous operations compared to callbacks.
//   - It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. 
//   - This lets asynchronous methods return values like synchronous methods:
//     instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.


// => Promise States
//  - A Promise can be in one of these states:
//      Pending: Initial state (neither fulfilled nor rejected)
//      Fulfilled: Operation completed successfully
//      Rejected: Operation failed


// => Syntax to create Promis

//      const promise = new Promise((resolve, reject) => {
//          // Asynchronous operation here
//          if (/* success */) {
//              resolve(value); // Promise is fulfilled
//          } else {
//              reject(error); // Promise is rejected
//          }
//      });



// 1. Pending state

// let firstpromis = new Promise((resolve, reject) => {
//     console.log("Hello");
// });

// console.log(firstpromis);

// Output:
// Hello
// Promise {<pending>}
//  [[Prototype]]: Promise
//  [[PromiseState]]: "pending"
//  [[PromiseResult]]: undefined



// 2. fulfilled state

// firstpromis = new Promise((resolve, reject) => {
//     console.log("Hello");
//     resolve(1001);  // Any number or message
// });


// Output:
// Hello
// firstpromis (type this on console)
// Promise {<fulfilled>: 1001}
//  [[Prototype]]: Promise
//  [[PromiseState]]: "fulfilled"
//  [[PromiseResult]]: 1001



// 3. Rejected state

// firstpromis = new Promise((resolve, reject) => {
//     console.log("Hello");
//     reject(new Error("Wrong promis"));  // New error created
// });


// Output:
// Promise {<rejected>: Error: Wrong promis
//    at http://127.0.0.1:5500/21_Promises/index.js:60:12
//    at new Promise (<an…}



// With Async code

let Apromis = new Promise( (resolve, reject) => {
    setTimeout(function sayMyName() {
        console.log("Hello, Shreyash");
    }, 10000);  // It can wait for 10s check on console
});

// Output:
// Apromis (Before 10s complete)
// Promise {<pending>}

// Hello, Shreyash (It comes after 10s )

// Apromis (Type on console)
// Promise {<pending>}
//  [[Prototype]]: Promise
//  [[PromiseState]]: "pending"
//  [[PromiseResult]]: undefined


// let Apromis = new Promise( (resolve, reject) => {
//     setTimeout(function sayMyName() {
//         console.log("Hello, Shreyash");
//     }, 10000);  // It can wait for 10s check on console
//     resolve("Code complete");
// });

// Output:

// Apromis (Before 10s)
// Promise {<fulfilled>: 'Code complete'}
// [[Prototype]]: Promise
// [[PromiseState]]: "fulfilled"
// [[PromiseResult]]: "Code complete"

// Hello, Shreyash

// Apromis
// Promise {<fulfilled>: 'Code complete'}
// [[Prototype]]: Promise
// [[PromiseState]]: "fulfilled"
// [[PromiseResult]]: "Code complete"


// By using this we can make the concurent execution of code


// 1. .then() Method
//  - Purpose
//      - Attaches a success callback to a Promise.
//      - Executes when the Promise is fulfilled (resolved successfully).
//      - We can able to apply multiple then block called as promis chaining

// - Syntax:
//  promise.then(
//       onFulfilled, // (Optional) Runs on success
//       onRejected   // (Optional) Runs on failure (less common)
//  );

// - Key Features
//   - Returns a new Promise, enabling chaining.
//   - Can transform the resolved value.
//   - Skips if the Promise is rejected (unless error handler is provided).

// const promise = new Promise((resolve) => {
//   setTimeout(() => resolve(100), 1000);
// });

// promise
//   .then((value) => {
//     console.log(value); // 100 (after 1 second)
//     return value * 2;   // Passes 200 to next .then()
//   })
//   .then((newValue) => {
//     console.log(newValue); // 200
//   });

// Output:
// 100
// 200


// - When to Use
//  - When you need to process a successful result.
//  - To chain multiple async operations.

let promis1 = new Promise((resolve, reject) => {
    let success = true;

    if (success == true) {
        resolve("Promis fulfilled");
    } else {
        reject("Promis Rejected");
    }
});

promis1.then((message) => {
    console.log("Then ka message: " + message);
}).catch((error) => {
    console.log("Catch ka message: " + error);
});

// Output:
// Then ka message: Promis fulfilled

// OR

// Promis chaining
promis1.then((message) => {
    console.log("Then 1 ka message: "+ message);
    return "Second message promis done";   // Sent to next then (message for next then block)
}).then((message2) => {
    console.log("Then 2 ka message: " + message2);
}).catch((error) => {
    console.log("Catch ka message: " + error)
});

// Output:
// Then 1 ka message: Promis fulfilled
// Then 2 ka message: Second message promis done




// 2. .catch() Method
//  - Purpose
//      - Attaches a failure callback to a Promise.
//      - Executes when the Promise is rejected (fails).

// - Syntax:
//   promise.catch(onRejected);

// - Key Features
//   - Catches any error in the Promise chain.
//   - Returns a new Promise, so chaining is possible after .catch().
//   - Prevents unhandled Promise rejections (which crash Node.js apps).


let promis2 = new Promise((resolve, reject) => {
    let success = false;

    if (success == true) {
        resolve("Promis fulfilled");
    } else {
        reject("Promis Rejected");
    }
});

promis2.then((message) => {
    console.log("Then ka message: " + message);
}).catch((error) => {
    console.log("Catch ka message: " + error);
});

// Output:
// Catch ka message: Promis Rejected


// 3. finally() Method:
//   - This method always execute i.e if success or not also execute

let promis3 = new Promise((resolve, reject) => {
    let success = false;

    if (success == true) {
        resolve("Promis fulfilled");
    } else {
        reject("Promis Rejected");
    }
});

promis3.then((message) => {
    console.log("Then ka message: " + message);
}).catch((error) => {
    console.log("Catch ka message: " + error);
}).finally((message) => {
    console.log("Final block");
});


// Output:
// Catch ka message: Promis Rejected
// Final block



// Multiple promises

let pro1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "First");
});

let pro2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, "Second");
});

let pro3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 4000, "Third");
});

Promise.all([pro1, pro2, pro3]).then((value) => {
    console.log(value);
}).catch((error) => {
    console.log(error);
});   // New promis created it can execute when all promises all resolved
// Promise.all is a new promis it can resolve when all promises are resolved
// When any one promis become fail the Promise.all also considered as fail

// Output In all promiss resolve:
// [ 'First', 'Second', 'Third' ]
// (Output depend on how you provide promises in list order wise execute)

// Output In 3rd promiss reject: (Make setTimeout function 1st argument as reject)
// Third 
