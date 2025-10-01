
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
let name = "Shreyash";
let message = 'Welcome to JavaScript';
let greeting = `Hello, ${name}!`; // Template literal (supports interpolation)
let usingstring = String("Shreyash Patil");

console.log(usingstring);    // Shreyash Patil

// Multiline String:
// using follwing string we can create it "" and '' gives error to genrate multi line string
let multi = `Hello     
 my name
 is Shreyash`;

console.log(multi);
// Output:
// Hello
//  my name
//  is Shreyash

console.log(name);      // Shreyash
console.log(message);   // Welcome to JavaScript
console.log(greeting);  // Hello, Shreyash!

console.log(typeof(name));     // string
console.log(typeof(message));  // string
console.log(typeof(greeting)); // string


