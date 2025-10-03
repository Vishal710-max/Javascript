
// Higher-Order Functions:
// A Higher-Order Function (HOF) is a function that either:
//  - Takes one or more functions as arguments, or
//  - Returns a function as its result.

// This is possible because JavaScript treats functions as first-class citizens, meaning they can be:
//  - Assigned to variables
//  - Passed as arguments
//  - Returned from other functions


// Why Use Higher-Order Functions?
//  - Abstraction: Hide implementation details (e.g., map hides looping logic)
//  - Reusability: Avoid repeating code (e.g., filter works for any array)
//  - Functional Programming: Enables cleaner, declarative code


// Example 1:
function greet(name, callback) {
  console.log(`Hello, ${name}!`);
  callback(); // Executes the passed function
}

greet("Alice", () => {
  console.log("Callback executed!");
});
// Output:
// Hello, Alice!
// Callback executed!



// Example (Returning a Function):
function multiplyBy(factor) {
  return function(num) {
    return num * factor;
  };
}

const double = multiplyBy(2);
console.log(double(5)); // 10



// Example: Array.map()
const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2); // HOF (takes a function)
console.log(doubled); // [2, 4, 6]


// Example: Custom HOF (Logger)
function logger(callback) {
  return function(...args) {
    console.log("Arguments:", args);
    const result = callback(...args);
    console.log("Result:", result);
    return result;
  };
}

const add = (...args) => args.reduce((num1, num2) => num1 + num2, 0);
const loggedAdd = logger(add); // Wraps `add` with logging
loggedAdd(2, 3);
loggedAdd(2, 3, 4); // Logs args and result


// Output:
// Arguments: [ 2, 3 ]
// Result: 5
// Arguments: [ 2, 3, 4 ]
// Result: 9