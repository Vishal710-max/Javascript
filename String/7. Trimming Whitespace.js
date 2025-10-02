

// Trimming Whitespace (trim(), trimStart(), trimEnd())
//  - Removes extra spaces from the start and/or end.


// Syntax:
// string.trim()       // Removes both leading & trailing spaces
// string.trimStart()  // Removes leading spaces
// string.trimEnd()    // Removes trailing spaces


let str = "     Hello     "
console.log(`Trim: "${str.trim()}"`);     // Trim: "Hello"

console.log(`trimStart: "${str.trimStart()}"`);   // trimStart: "Hello     "

console.log(`trimEnd: "${str.trimEnd()}"`);   // trimEnd: "     Hello"