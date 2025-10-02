
// Substring Extraction (slice(), substring(), substr())
// Extracts parts of a string.


// Syntax:
// string.slice(start, end)       // Extracts from start to end (end not included)
// string.substring(start, end)   // Similar to slice but doesn't accept negative indices
// string.substr(start, length)   // Extracts from start with given length (deprecated)

let text = "JavaScript";

// slice()
console.log(text.slice(0, 4));    // Java
console.log(text.slice(0));       // JavaScript
console.log(text.slice(-6));      // Script   (Alows -ve index)


// substring() 
console.log(text.substring(0, 4))    // Java
console.log(text.substring(0))     // JavaScript
console.log(text.substring(-6))    // JavaScript  (Does not get -ve indexing)


// substr()
console.log(text.substr(0, 4))   // Java
console.log(text.substr(0))      // JavaScript
console.log(text.substr(-6))     // Script 
 


