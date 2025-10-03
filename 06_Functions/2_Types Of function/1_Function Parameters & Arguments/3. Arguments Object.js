
// Arguments Object
//  - Array-like object containing all passed arguments (not recommended in modern JS).
//  - It contains all the arguments passed to the function, regardless of how many parameters were defined.


// Key Features of arguments
// = Array-like but not an array
//   - Has indexed elements (arguments[0], arguments[1], etc.) and a length property.
//   - Cannot use array methods (map(), forEach(), etc.) directly.
// = Works in all non-arrow functions
//   - Arrow functions do not have an arguments object.
// = Dynamic length
//   - Adjusts based on the number of arguments passed.


// Basic Example
function sum() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(5, 10));    // 15


// Example:
function showArgs() {
    console.log(arguments);    // [Arguments] { '0': 1, '1': 'Hello', '2': true }
}
showArgs(1, "Hello", true); // Arguments(3) [1, "Hello", true]