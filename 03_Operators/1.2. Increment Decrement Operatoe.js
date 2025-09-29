// Increment & decrement
// Increment & decrement operators operators are used to increment or decrement a numeric value by 1.

// Increment operator is denoted by '++', and the decrement operator is denoted by '--'.
let a = 10;
let b = 4;

a++;
console.log(a);      // 11

b--;
console.log(b);      // 3


// According to their usage, the increment and decrement operators can be classified as 'pre-increment/decrement' and 'post-increment/decrement'.

// Pre-increment/decrement : Increment/decrement the value before using.
// Post-increment/decrement : Use the current value and then increment/decrement.

//Pre increment/decrement
let x = 10;
let y = 4;

console.log(++x);    // 11
console.log(--y);    // 3
console.log(x);      // 11
console.log(y);      // 3

//Post increment/decrement
let p = 10;
let q = 4;
console.log(p++);      // 10
console.log(q--);      // 4

console.log(p);        // 11
console.log(q);        // 3