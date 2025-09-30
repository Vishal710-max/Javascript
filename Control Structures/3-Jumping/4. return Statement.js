
// return Statement
// -  Exits a function and optionally specifies a value to be returned to the function caller.


// Syntax:
// return [expression];


// Examples 1:
function sum(a, b) {
  return a + b; // returns the sum
}

let result = sum(5, 3);
console.log(result); // 8


// Example 2:
function checkAge(age) {
  if (age < 0) {
    return 'Invalid age'; // early return
  }
  if (age < 18) {
    return 'Minor';
  }
  return 'Adult';
}

console.log(checkAge(15)); // 'Minor'
console.log(checkAge(-5)); // 'Invalid age'