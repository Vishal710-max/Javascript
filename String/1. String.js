
// String:
// - "Strings" primitive data type represents sequences of characters.
// - Strings are used to store and manipulate textual data, such as words, sentences, or any other sequence of characters.
// - Strings are immutable (cannot be changed once created) and can be enclosed in single quotes ('), double quotes ("), or backticks (`) for template literals.


// String Declaration

// Syntax:

// Using single quotes
let str1 = 'Hello';

// Using double quotes
let str2 = "World";

// Using backticks (Template Literals)
let str3 = `Hello World`;


// Example:
let name = "Vishal";
let message = 'Welcome to JavaScript';
let greeting = `Hello, ${name}!`; // Template literal (supports interpolation)
let usingstring = String("Vishal Bhingarde");

console.log(usingstring);    // Vishal Bhingarde

// Multiline String:
// using follwing string we can create it "" and '' gives error to genrate multi line string
let multi = `Hello     
 my name
 is Vishal`;

console.log(multi);
// Output:
// Hello
//  my name
//  is Vishal

console.log(name);      // Vishal
console.log(message);   // Welcome to JavaScript
console.log(greeting);  // Hello, Vishal!

console.log(typeof(name));     // string
console.log(typeof(message));  // string
console.log(typeof(greeting)); // string







