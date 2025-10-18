
// => Event Loop:
//   - The event loop is JavaScript's mechanism for handling asynchronous operations in a single-threaded environment.
//   - It's what allows JavaScript to be non-blocking despite running on one thread.


// - How the Event Loop Works
// 1. Key Components

        // Component	          Description
        //     Call Stack	          Tracks synchronous function calls (LIFO structure)
        //     Web APIs (Browse)	  Browser-provided APIs for async operations (setTimeout, fetch, DOM events)
        //     Callback Queue	      Holds callbacks from completed async operations (FIFO structure)
        //     Event Loop	          Continuously checks if call stack is empty to move callbacks from queue to stack


// Event loop works in 3 main components
// 1) call stack 
// 2) Browser
// 3) callback queue


// 2. The Event Loop Cycle
//   1. Synchronous code executes immediately in the call stack.
//   2. Async operations get passed to Web APIs (Browser).
//   3. When Web APIs complete, their callbacks go to the Callback Queue.
//   4. The Event Loop constantly checks:
//      - If call stack is empty
//      - If there are callbacks in the queue
//   5. When both conditions are met, it moves the next callback to the call stack.


// Example to understand
console.log("Start"); // (1)

setTimeout(function sayMyName() {
  console.log("Hi Shreyash");  // (3) 
}, 5000); 

console.log("End"); // (2)

// Explanation of execution
// - 1st console.log("Start")  create an entry in call stack and execute immediately and rmoves from the call stack
// - 2nd it get setTimeout function create entry is call stack it wait for 5 sec for execution 
//      so it can removed form call stack and  sent to browser to handle that time out
//      After sent to browser browser can start the time
// - 3rd console.log("End") create an entry in call stack and execute immediately 
//      and rmoves from the call stack at the same time timing is on
// - 4th After completion of 5s time out function browser sent sayMyName() function to callback Queue 
// - 5th Event loop comes and in this event loop Continuously checks the call stack is empty or not 
//             if call stack is empty then this function sayMyName() removed from Queue and entry created in call stack and executed that function
//               and cleared its entry 
//             and if call stack is not empty then it can wait until call stack becomes empty


// For better understanding go to website http://latentflip.com/loupe and copy paste above code and run it the see how it works


// Lets see another Example

$.on('button', 'click', function onClick() {
        console.log('You clicked the button!');    
});

console.log("Hi!");

setTimeout(function timeout() {
    console.log("Click the button!");
}, 5000);

console.log("Welcome!");


// In this example:
// - 1st on() comes and creted entry in call stack it is Async code (because it need to click the button) 
//     so this is removed form call stack and sent to web Apis (browser) wait until click the button
// - 2nd console.log("Hi!"); comes and create entry in call stack execute it and removed form call stack
// - 3rd setTimeout() comes and created entry in call stack it need to wait for 5s so this function removed form call stack and sent to web apis
//     and browser start the timer of 5s
//  - 4th console.log("Welcome!"); comes and created entry in call stack and execited immediately and removed form call stack
//  - 5th After completion of 5s timeout() function sent to callback queue by Web Apis
//  - 6th Now here event loop checks call stack is empty or not if empty then the created entry in call stack and timeout() executed 
//    And entry removed
//  - 7th Now if I click button then Web Apis sent onClick() to call back Queue
//       event loop checks the call stack is empty or not if empty in call stack created new entry for onClick() and execute it 

//  - If i click at any time on button the then Web Apis sent onClick() to callback Queue and next process continues


// This overall concept called as Event loop
// By using this Event loop Async code is handled