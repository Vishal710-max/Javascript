

// 1. Synchronous Code (Blocking)
//   - Synchronous code runs line by line, blocking further execution until the current operation completes.
//   - Peace of code which execute same time

// Key Characteristics
//  - Executes in sequence (top to bottom)
//  - Each operation must finish before moving to the next
//  - Simple to understand (predictable flow)

// Example:
console.log("Step 1"); // Behaviour of this line which execute on same time and also for above line  i.e It do not take any time to execute 
console.log("Step 2"); // Waits for Step 1 to finish
console.log("Step 3"); // Waits for Step 2 to finish


// When to Use
//  Simple scripts
//  Immediate calculations
//  Operations that must run in order



// 2. Asynchronous Code (Non-Blocking)
//   - Asynchronous code allows other operations to run while waiting for a task to complete.
//   - Flow of Execution comes but there is not garenty to execute at same time to show behaviour

// Key Characteristics
//      Doesn’t block the main thread
//      Uses callbacks, promises, or async/await
//      Essential for I/O operations (APIs, files, timers)

// Example:
console.log("Start");   // Execute at same time

setTimeout(() => {        // Flow of execution camed but not executing wait to complete time
  console.log("Async operation done");
}, 1000);       // But it can not block to other line it can executed when it complete its time

console.log("End");   // Execute at same time

// Output:
// Start
// End
// Async operation done (after 1 second)

// When to Use
//  Fetching data from APIs
//  Reading files
//  Timers (delays, intervals)
//  Any long-running task


console.log("Start");   // Execute at same time

setTimeout(() => { // In this we removed this and we applied network call then next code goes in blocking state before complete it        
  console.log("Async operation done");
}, 1000);       

console.log("End");


// To handle that blocking issues Event loop comes
// To manage that Asynchronous code Event loop comes