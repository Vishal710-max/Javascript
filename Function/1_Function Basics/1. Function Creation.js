
// Function:
// A function in JavaScript is a reusable block of code that performs a specific task. Functions help in:
//   - Modularizing code (breaking into smaller, manageable parts)
//   - Avoiding repetition (write once, use multiple times)
//   - Improving readability (better organization)
//   - Allowing parameterized execution (pass different inputs)
//   - Debging is easy


// Need of Functions
// - Functions are a fundamental building block in JavaScript, allowing developers to encapsulate reusable code blocks
//   enhance code readability, and facilitate modular programming.


// Syntax of a Function
//     function functionName(parameters) {
//         // Code to execute
//         return value; // Optional
//     }

//  function can be defined using the function keyword followed by a set of parentheses containing optional parameters and a block of code enclosed within curly braces {}.


// Example:

// Function Declaration:
// A function declaration defines a named function using the function keyword. 
//   It can be called before it's defined due to JavaScript's hoisting mechanism

function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Vishal")); // Output: Hello, Vishal!


// Function Expression:
// A function expression defines a function as part of an expression, typically by assigning it to a variable. 
//   It's not hoisted, so it must be defined before it's called.


const greet = function(name) {
    return `Hello, ${name}!`;
};
console.log(greet("Vishal")); // Output: Hello, Vishal!



