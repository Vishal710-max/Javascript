
// Temporal Dead Zone (TDZ)
// The Temporal Dead Zone (TDZ) is a behavior in JavaScript that occurs with variables declared using let and const.
// It refers to the time between the start of a block's execution and the point where the variable is declared, during which the variable cannot be accessed.


// Key Points About TDZ:
// Scope Entry to Declaration: The TDZ exists from when the block scope starts until the variable is declared.
// Reference Errors: Attempting to access a variable in its TDZ will throw a ReferenceError.
// Applies to: Only let and const declarations (not var or function declarations).

// Example:

console.log(myVar); // undefined (var is hoisted)
console.log(myLet); // ReferenceError: Cannot access 'myLet' before initialization

var myVar = "var value";
let myLet = "let value";


// Why TDZ Exists:
// Prevents bugs by making it clear when a variable isn't yet initialized
// Encourages better coding practices by requiring declarations before use
// Helps catch potential issues during development