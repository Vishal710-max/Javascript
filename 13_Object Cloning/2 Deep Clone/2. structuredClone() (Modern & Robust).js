
// 2. structuredClone() (Modern & Robust)

// How it Works:
// Built into modern browsers/Node.js (≥16).
// Handles more types than JSON (e.g., Date, Map, Set).

// Example:
const original = {
  date: new Date(),
  set: new Set([1, 2, 3]),
  friends: ["Bob", "Charlie"]
};

const deepClone = structuredClone(original);

// Modify clone (original stays intact)
deepClone.set.add(4);
deepClone.friends.push("Dana");

console.log("Original Set:", original.set); // Set(3) {1, 2, 3}
console.log("Clone Set:", deepClone.set);   // Set(4) {1, 2, 3, 4}



// Supported Types:
// ✅ Object, Array, Date, Map, Set, RegExp, etc.
// ❌ Still skips functions and can't handle circular references.