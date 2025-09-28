
// JavaScript has primitive (immutable) and non-primitive (mutable) data types.
// Datatype shows perticular datatype of the data
// Primitive data types are stored in stack memory
// Non-Primitive data types are stored in heap memory
//    - In this all elements are stored in Heap memory and name or reference are stored in stack memory
//    - objcet actual does not holds the data but it can reference to elements

// = Primitive Data Types:
// - In JavaScript, primitive data types are the most basic types of values that are immutable (cannot be changed directly). 
// - There are 7 primitive data types:
// Numbers
// Strings
// Boolean
// Undefined
// bigint
// Null
// symbol


// 1. number
// Represents numeric values (both integers and floating-point numbers).
// Special cases: Infinity, -Infinity, NaN (Not a Number).

// Example:
let age = 25;          // Integer
let price = 99.99;     // Floating-point
let result = 10 / 0;   // Infinity
let invalid = "abc" / 2; // NaN (Not a Number)



// 2. string
// Represents textual data (enclosed in '', "", or `).
// Strings are immutable (cannot be changed once created).

// Example:
let name = "Shreyash";  
let greeting = 'Hello';  
let message = `Hi, ${name}!`; // Template literal (ES6)
console.log(message)   // Hi, Shreyash!



// 3. boolean
// Represents logical values: true or false.
// Used in conditions and comparisons.

// Example:
let isLoggedIn = true;  
let isAdmin = false;  

if (isLoggedIn) {  
  console.log("Welcome!");  
}



// 4. undefined
// A variable that has been declared but not assigned a value.
// Default value of uninitialized variables.

// Example:
let x;  
console.log(x); // undefined  

function doNothing() {}  
console.log(doNothing()); // undefined (no return)



// 5. null
// Represents intentional absence of a value.
// Must be assigned manually (not automatic like undefined).

// Example:
let user = null; // Explicitly set to "no value"  

if (user === null) {  
  console.log("User not found!");  
}



// 6. bigint (ES2020)
// Represents very large integers (beyond Number.MAX_SAFE_INTEGER).
// Created by appending n to an integer.

// Example:
let bigNumber = 1234567890123456789012345678901234567890n;  
console.log(bigNumber + 1n); // Works with bigint only



// 7. symbol (ES6)
// Represents unique, immutable identifiers.
// Often used for object property keys to avoid collisions.

// Example:
let id1 = Symbol("id");  
let id2 = Symbol("id");  

console.log(id1 === id2); // false (Symbols are unique)  

const user1 = {  
  [id1]: "123", // Hidden property  
  name: "Alice"  
};


// Key Characteristics of Primitives
// ✅ Immutable – Cannot be changed directly (a new value is created instead).
// ✅ Stored by value – Copied when assigned or passed to functions.
// ✅ No methods (but JavaScript auto-boxes them to objects when needed).