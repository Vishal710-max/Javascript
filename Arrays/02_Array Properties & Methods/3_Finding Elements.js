
// 1. indexOf() - Find First Occurrence of an Element
// Syntax:
//    array.indexOf(searchElement, fromIndex?);

// Parameters:
// - searchElement: The value to search for
// - fromIndex (optional): Starting index for search (default: 0)

// Returns:
// -  The first index where the element is found
// -  -1 if the element is not found

// Explanation:
// - Uses strict equality (===) for comparison
// - Case-sensitive for strings
// - Works with primitive values (numbers, strings, booleans)


// Examples:
const names = ["Alice", "Bob", "Charlie", "Bob"];

console.log(names.indexOf("Bob"));     // 1 (first occurrence)
console.log(names.indexOf("Bob", 2));  // 3 (search starts from index 2)
console.log(names.indexOf("David"));   // -1 (not found)



// 2. includes() - Check if Element Exists
// Syntax:
//    array.includes(searchElement, fromIndex?);

// Parameters:
// - searchElement: The value to search for
// - fromIndex (optional): Starting index for search (default: 0)

// Returns:
// - true if the element is found
// - false if not found

// Explanation:
// - Uses strict equality (===)
// - More readable than indexOf() when you just need a boolean result
// - Works well with primitive values

// Examples:
const names1 = ["Alice", "Bob", "Charlie"];

console.log(names1.includes("Alice"));  // true
console.log(names1.includes("alice"));  // false (case-sensitive)
console.log(names1.includes("Bob", 2)); // false (search starts from index 2)



// 3. find() - Find First Matching Element
// Syntax:
//   array.find(callback(element, index?, array?));

// Parameters:
// - callback: Function to test each element
//     element: Current element
//     index (optional): Current index
//     array (optional): The array being traversed

// Returns:
// - The first element that satisfies the condition
// - undefined if no element is found

// Explanation:
//  - Accepts a callback function for complex searches
//  - Great for finding objects in an array
//  - Stops at the first match (more efficient than filter)


// Examples:
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" }
];

// Find user with id = 2
const user = users.find(u => u.id === 2);
console.log(user); // { id: 2, name: "Bob" }

// Find user with name containing 'B'
const userWithB = users.find(u => u.name.includes('B'));
console.log(userWithB); // { id: 2, name: "Bob" }