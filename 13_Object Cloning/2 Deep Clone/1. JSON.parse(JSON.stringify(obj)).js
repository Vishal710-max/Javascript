
// Deep Clone → Copies all nested objects recursively.
// Deep cloning creates a completely independent copy of an object or array, 
// including all nested structures (unlike shallow cloning, where nested objects remain linked). Here are the best methods:


// 1. JSON.parse(JSON.stringify(obj)) (Simple but Limited)

// How it Works:
// JSON.stringify() → Converts object to a JSON string.
// JSON.parse() → Converts string back into a new object.

// Example

const original = {
  name: "Alice",
  address: {
    city: "Paris",
    country: "France"
  },
  hobbies: ["reading", "coding"]
};

const deepClone = JSON.parse(JSON.stringify(original));

// Modify nested data (original remains unchanged)
deepClone.address.city = "Berlin";
deepClone.hobbies.push("gaming");

console.log("Original:", original);
console.log("Clone:", deepClone);

// Original: {
//   name: 'Alice',
//   address: { city: 'Paris', country: 'France' },
//   hobbies: [ 'reading', 'coding' ]
// }
// Clone: {
//   name: 'Alice',
//   address: { city: 'Berlin', country: 'France' },
//   hobbies: [ 'reading', 'coding', 'gaming' ]  
// }


// ❌ Loses special data types:
// Date → becomes a string
// undefined, functions, Symbols → removed
// Infinity, NaN → becomes null
// Circular references → throws error