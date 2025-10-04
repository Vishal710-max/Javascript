

// Immediately Invoked Function Expression (IIFE)
//  - Executes immediately after definition.
//  - Used for encapsulation (avoid polluting global scope).
//  - An IIFE (pronounced "iffy") is a JavaScript function that runs as soon as it is defined. It is a design pattern used to:
//    - Create a private scope (avoid polluting the global namespace)
//    - Execute code immediately without needing a separate function call
//    - Avoid variable hoisting issues



// Syntax:
//    (function() {
//        // Code to execute
//     })();

//    // With arrow function
//    (() => {
//       // Code to execute
//    })();


// Example 1:

console.log( 
    (function(num1, num2) {
       return num1 + num2
    }) (10, 20) 
);    // 30



console.log( 
    ((num1, num2) => {
       return  num1 - num2;
    })(20, 10) 
);     // 10



// Example 2:

(function() {
  const privateVar = "I'm hidden!";
  console.log(privateVar); // (Works)   I'm hidden!
})();

// console.log(privateVar);  // Error


// Example 3:
const counter = (function() {
  let count = 0; // Private variable (hidden from outside)

  return { // Returns an object with two methods
    increment() { // Increases the count by 1
      count++;
    },
    getCount() { // Returns the current count
      return count;
    }
  };
})(); // The IIFE runs immediately, creating the counter

counter.increment();
console.log(counter.getCount());  // 1
counter.increment();
counter.increment();
console.log(counter.getCount());  // 3
// `count` is private and cannot be modified directly



// Example 4: Passing Arguments to IIFE

const userName = "Vishal";

(function(name) {
  console.log(`Hello, ${name}!`);
})(userName);

// Output: "Hello, Vishal!"
