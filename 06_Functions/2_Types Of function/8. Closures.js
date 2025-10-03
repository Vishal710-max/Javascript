
// Closures
// - A function that remembers its lexical scope even when executed outside it.


// Example:
function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}

const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2