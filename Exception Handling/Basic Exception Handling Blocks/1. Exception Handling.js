
// What is an Exception?
// - An exception is an unexpected event that occurs during the execution of a program that disrupts the normal flow of instructions
// - Exceptions are typically caused by errors but can also be thrown deliberately in certain situations.


// What is an Error?
// An error is a type of exception that represents something going wrong in your program. Errors can be:
//    - Syntax errors (code that can't be parsed)
//    - Runtime errors (code that fails during execution)
//    - Logical errors (code doesn't do what you intended)


// What is Exception Handling?
// Exception handling is the process of responding to and managing exceptions when they occur. 
// In JavaScript, this is done using try, catch, finally, and throw statements to gracefully handle errors rather than having the program crash.


// Exception Handling Syntax

//    try {
//       // Code that might throw an exception
//    } catch (error) {
//       // Code to handle the exception
//    } finally {
//      // Code that runs regardless of whether an exception occurred
//    }

// To throw your own exceptions:
//    throw new Error("Your error message");

// Example:

try {
  let result = riskyOperation();
  console.log("Result:", result);
} catch (error) {
  console.error("An error occurred:", error.message);
} finally {
  console.log("Finally Block always runs");
}

// Output:
// An error occurred: riskyOperation is not defined
// This always runs


try {
  // Code that might throw different types of errors
} catch (error) {
  if (error instanceof TypeError) {
    console.error("Type Error:", error.message);
  } else if (error instanceof RangeError) {
    console.error("Range Error:", error.message);
  } else {
    console.error("Unknown Error:", error.message);
  }
}

