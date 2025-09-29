// Nullish Coalescing (??)
// Provides default values for null/undefined:

let value1 = null;
let value2 = undefined;
let value3 = 0;
let value4 = '';

console.log(value1 ?? 'default');  // 'default'
console.log(value2 ?? 'default');  // 'default'
console.log(value3 ?? 'default');  // 0 (not null/undefined)
console.log(value4 ?? 'default');  // '' (not null/undefined)