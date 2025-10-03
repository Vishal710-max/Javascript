
// Rest Parameters (...args)
// Collects all remaining arguments into an array.
// Rest parameters allow you to represent an indefinite number of arguments as an array.
//  This is particularly useful when you want a function to accept any number of arguments without explicitly defining each one.


// Syntax:
//    function myFunction(...args) {
//        args is now an array containing all passed arguments
//    }

// reduce Method Syntax
//   array.reduce(callbackFunction, initialValue)

function sum(...numbers) {
     console.log(numbers)    // 1st  [ 1, 2, 3 ]    2nd  [ 5, 10, 15, 20 ]
     return numbers.reduce((num1, num2) => num1 + num2, 0);
}

console.log(sum(11,22,33)); // 66
console.log(sum(50, 10, 150, 20)); // 230



function greet(greeting, ...names) {
  return names.map(name => `${greeting}, ${name}!`);
}

console.log(greet('Hello', 'Alice', 'Bob', 'Charlie'));
// [ 'Hello, Alice!', 'Hello, Bob!', 'Hello, Charlie!' ]



function logItems(prefix, ...items) {
  items.forEach(item => console.log(`${prefix}: ${item}`));
}


