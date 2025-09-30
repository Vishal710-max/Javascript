

// do...while Loop
// Similar to while, but executes at least once before checking the condition.
// - This is an exit controlled loop Execute block of at list one time and then check contion


// Syntax:
//   do {
       // code to execute
//   } while (condition);


// Example
let ch = true;
do {
    console.log("One time executed");
    ch = false
} while (ch);

// Output:
// One time executed


let i = 1;
do {
    console.log("Count: "+i);
    i++;
} while (i <= 5);


// Output:
// Count: 1
// Count: 2
// Count: 3
// Count: 4
// Count: 5