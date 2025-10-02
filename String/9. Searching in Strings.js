

// Searching in Strings (indexOf(), lastIndexOf(), includes(), startsWith(), endsWith())
// - Finds the position of a substring.


// Syntax:

// string.indexOf(searchValue)          // Returns first occurrence index
// string.lastIndexOf(searchValue)      // Returns last occurrence index
// string.includes(searchValue)         // Checks if substring exists (true/false)
// string.startsWith(searchValue)       // Checks if string starts with substring
// string.endsWith(searchValue)         // Checks if string ends with substring

let text = "My name is Shreyash";

console.log(text.indexOf('a'))     // 4
console.log(text.lastIndexOf('a'))  // 16

console.log(text.includes("name"))   // true
console.log(text.includes("name1"))  // false

console.log(text.startsWith('My'));    // true
console.log(text.startsWith('name'));  // false

console.log(text.endsWith('Shreyash')); // true
console.log(text.endsWith('name'));     // false

