
// Array.from() is a built-in JavaScript method that creates a new shallow-copied array from an array-like or iterable object (like NodeList, Set, or even strings).

// Key Features:
// ✔ Creates a new array (does not modify the original).
// ✔ Shallow copy (nested objects/arrays are still referenced).
// ✔ Works with array-like objects (e.g., arguments, NodeList).

// Syntax:
//       const newArray = Array.from(originalArray);

// Example:

const originalArr = [1, 2, { name: "Alice" }];

// Shallow clone using Array.from()
const clonedArr = Array.from(originalArr);

// Modify top-level element (does NOT affect original)
clonedArr[0] = 100;

// Modify nested object (affects original too!)
clonedArr[2].name = "Bob";

console.log("Original:", originalArr);
console.log("Cloned:", clonedArr);

// Output
// Original: [ 1, 2, { name: 'Bob' } ]   (In original outer changes not ocuured but inner are occured)
// Cloned: [ 100, 2, { name: 'Bob' } ]


originalArr[0] = 10;
originalArr[2].name = "Vishal";
console.log("Original:", originalArr);
console.log("Cloned:", clonedArr);


// Original: [ 10, 2, { name: 'Vishal' } ]

// Cloned: [ 100, 2, { name: 'Vishal' } ]
