

// Function Expression:
// A function expression defines a function as part of an expression, typically by assigning it to a variable.
// Stored in a variable.
// Not hoisted (must be defined before calling).


// Syntax:
//   const variableName = function(parameters) {
//      // Code to execute
//      return value; // Optional
//   };


// Example:

const data = function(a, b, c) {
    return a + b + c;
}
console.log(data(10, 20, 30))    // 60