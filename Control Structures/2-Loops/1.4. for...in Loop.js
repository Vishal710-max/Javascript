

// for...in Loop
// - Used to loop through the properties of an object.
// - The 'for in' loop in JavaScript facilitates the iteration over the enumerable properties of an object.
// - It iterates through all enumerable properties of an object, including inherited ones, providing access to both keys and values.


// Syntax:
//   for (variable in object) {
//      Code block to be executed on each iteration
//   }



// Example:
const person = { name: "Alice", age: 25, job: "Developer" };

for (let key in person) {
    console.log(key + ": " + person[key]);
}

// Output:
// name: Alice
// age: 25
// job: Developer


arr = [10, 20, 30]
for (let i in arr) {
    console.log(i)
}

// Output:
// 0
// 1
// 2


const fruits = ['apple', 'banana', 'orange'];

for (let index in fruits) {
  console.log(`Index ${index}: ${fruits[index]}`);
}

// Output:
// Index 0: apple
// Index 1: banana
// Index 2: orange