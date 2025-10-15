

// throw Statement
// Definition
// The throw statement allows you to create custom errors or exceptions in your JavaScript code.
// When executed, it immediately stops the program's normal execution and transfers control to the nearest exception handler (the nearest catch block in the call stack).

// Syntax: 
//    throw expression;
// The expression can be:
// An Error object (most common)
// A string (converted to an Error object)
// A number, boolean, or any other value (though not recommended)

// Ex:
//   throw new Error("Descriptive error message");


// Throwing custom error objects

class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}
throw new CustomError("Something went wrong");


// Example:

function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed");
  }
  return a / b;
}

try {
  console.log(divide(10, 0));
} catch (error) {
  console.error("Caught error:", error.message); 
  // Output: "Caught error: Division by zero is not allowed"
}