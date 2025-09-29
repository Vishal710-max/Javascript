
// Comma  Operators: 
// Evaluates multiple expressions, returns the last

let x = (1, 2, 3);
console.log(x);  // 3

// Often used in for loops
for(let i = 0, j = 10; i < j; i++, j--) {
    console.log(i, j);
}