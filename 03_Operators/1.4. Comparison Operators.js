
// Comparison Operators:
// - Compare values and return boolean result

let m = 5, n = '5';

console.log(m == n);   // true (loose equality)
console.log(m === n);  // false (strict equality)
console.log(m != n);   // false (loose inequality)
console.log(m !== n);  // true (strict inequality)
console.log(m > 3);    // true
console.log(m < 2);    // false
console.log(m >= 5);   // true
console.log(m <= 4);   // false



// - Loose equality is denoted by '=='. When we use loose equality operator, 
//  only the value is checked to determine equality, and it returns a boolean answer.
let x = "10";
console.log(typeof(x));        // string

let y = 10;
console.log(typeof(y));         // number

console.log(x == y);            // true

console.log(x === y);           // false