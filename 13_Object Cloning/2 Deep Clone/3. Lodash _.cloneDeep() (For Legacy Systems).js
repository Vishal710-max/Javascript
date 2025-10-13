
// 3. Lodash _.cloneDeep() (For Legacy Systems)

// How it Works:
// Uses the Lodash library for maximum compatibility.
// Handles almost all edge cases.

// Example:
const _ = require('lodash');

const original = {
  func: () => console.log("Hello"),
  nested: { a: 1 }
};

const deepClone = _.cloneDeep(original);

console.log(deepClone.func()); // "Hello" (function preserved)


// When to Use:
// ✅ Older browsers/environments without structuredClone().
// ✅ Complex objects (circular refs, functions, etc.).