
// Logical Operators:
// Logical operators are used to connect two or more expressions/conditions to make decisions based on the criteria

// There are typically three types of logical operators :
// (a) AND (&&)
// (b) OR (||)
// (c) NOT (!)


let p = true, q = false;

console.log(p && q);  // false (AND)
console.log(p || q);  // true (OR)
console.log(!p);      // false (NOT)

// Example with conditions
let age = 25;
console.log(age > 18 && age < 30);  // true