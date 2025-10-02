

// String Replacement (replace(), replaceAll())
// Replaces a substring with another string.


// Syntax:
//   string.replace(oldValue, newValue)       // Replaces first occurrence
//   string.replaceAll(oldValue, newValue)    // Replaces all occurrences


// Example:

let text = "My name is Vishal, Your name is Shreyash";

console.log(text.replace("name", "NAME"));    // My NAME is Shreyash, Your name is vijay
console.log(text.replaceAll("name", "NAME")); // My NAME is Shreyash, Your NAME is vijay


