
// 1. try Block
// The try block contains the code that might throw an exception.
// It defines a section of code where exceptions will be caught and handled rather than causing the program to crash.


// 2. catch Block
// The catch block contains code that executes when an exception is thrown in the try block. 
// It receives the error object and handles the exceptional situation.


// 3. finally Block
// The finally block contains code that executes regardless of whether an exception was thrown or not. 
// It's typically used for cleanup operations that should always occur.


// Syntax:
//   try {
//      // Code that might throw an exception
//   } catch (error) {
//      // Code to handle the exception
//   } finally {
//     // Code that always executes
//   }


// 1. try Block
// Purpose: To wrap potentially error-prone code
// Behavior: If no errors occur, executes completely and skips catch
// If error occurs: Immediately stops execution and jumps to catch

try {
  console.log("Start of try block");
  nonExistentFunction(); // This will throw an error
  console.log("End of try block"); // This won't execute
} catch (error) {
  console.log("Error caught:", error.message);
}

// Output:
// Start of try block
// Error caught: nonExistentFunction is not defined


// 2. catch Block
// Parameter: Receives the error object (conventionally named error or e)
// Contains: Error handling logic
// Optional: Can be omitted if finally is present

try {
  JSON.parse("invalid json"); // Throws SyntaxError
} catch (error) {
  console.log("Caught error:", error.name); // "SyntaxError"
  console.log("Message:", error.message);
  // Can also handle the error (e.g., show user-friendly message)
}

// Output:
// Caught error: SyntaxError
// Message: Unexpected token 'i', "invalid json" is not valid JSON


// 3. finally Block
// Execution: Always runs after try and catch (if present)
// Use cases: Resource cleanup (closing files, network connections)
// Important: Runs even if there's a return in try or catch

let fileHandle;
try {
  fileHandle = openFile("data.txt");
  processFile(fileHandle);
} catch (error) {
  console.log("File error:", error.name);
} finally {
  console.log("I am Finally Block..");
  if (fileHandle) {
    closeFile(fileHandle); // Always close the file
    console.log("File closed");
  }
}

// Output:
// File error: ReferenceError
// I am Finally Block.


// Key Characteristics
// Order Matters: Must be try → catch → finally (though catch or finally can be omitted individually)

// Error Object: Contains:
//   - name: Error type (e.g., "TypeError")
//   - message: Description of the error
//   - stack: Call stack trace (for debugging)
// Nested Handling: try-catch blocks can be nested
// Only One catch: Each try can have only one catch block (but you can handle multiple error types within it)


// Example:

function calculatePercentage(value, total) {
  try {
    if (total === 0) {
      throw new Error("Total cannot be zero");
    }
    if (isNaN(value) || isNaN(total)) {
      throw new TypeError("Both arguments must be numbers");
    }
    return (value / total) * 100;
  } catch (error) {
    console.error("Calculation failed:", error.message);
    return null; // Return a safe default
  } finally {
    console.log("Percentage calculation attempted");
  }
}

// Usage
console.log(calculatePercentage(50, 100)); // Works
console.log(calculatePercentage(50, 0));   // Throws error
console.log(calculatePercentage("50", "hundred")); // Throws TypeError