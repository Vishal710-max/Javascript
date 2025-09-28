// Non Primitive DataTypes / Reference tyeps: 
// In JavaScript, non-primitive data types (also called reference types) are more complex than primitive types because they can hold multiple values and methods. 
// Non-Primitive data types are stored in heap memory

// The main non-primitive data types in JavaScript are:
// 1) Objects
// 2) Arrays
// 3) Functions


// 1) Object: 
// - Objects are collections of key-value pairs where values can be of any type (primitives or other objects).
// - Objects store the data in the form of key-value pairs where keys are strings (or Symbols) and values can be of any data type, 
//    including other objects, functions, arrays, etc

// Example:

let person = {
    name: "Shreyash",
    age: 19,
    address: {
        city: "Mumbai",
        country: "India"
    },

    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

console.log(person.name);      // Shreyash
console.log(person.age);       // 19
console.log(person.address.country);   // India

// We can access the properties of an object using:
// Dot notation
// Bracket Notation

// Accessing the properties:

// Dot Notation
console.log(person.name);   // Shreyash

// Braket Notation
console.log(person['name']);  // Shreyash

person.greet()   // Hello, my name is Shreyash



// 2. Arrays
// - Arrays are ordered lists of values that can be of any type.
// - Arrays are special types of objects that store collections of data.
// - They can hold various data types, including numbers, strings, objects, functions, and even other arrays

// Example:
const fruits = ["apple", "banana", "orange", 42, true, {type: "tropical"}];

console.log(fruits[0]); // "apple"
console.log(fruits.length); // 6
fruits.push("mango"); // adds new item to end
console.log(fruits)
// [
//   'apple',
//   'banana',
//   'orange',
//   42,
//   true,
//   { type: 'tropical' },
//   'mango'
// ]

console.log(fruits[5]['type'])   // tropical


// 3. Functions
// - Functions are callable objects that execute a block of code.
// - Functions are the reusable piece of code that can be called and executed at any point in our program.
// - Functions can be defined using the function keyword followed by a name, a list of parameters (optional), 
//   and a block of code enclosed in curly braces {}.

// Example:
function add(a, b) {
    return a + b;
}

const multiply = function(x, y) {
    return x * y;
};

// Arrow function (ES6+)
const divide = (numerator, denominator) => numerator / denominator;

console.log(add(2, 3)); // 5



// Key Characteristics of Non-Primitive Types:
// 1) Stored by Reference: When assigned to a variable or passed to a function, the reference (memory address) is copied, 
//  not the value itself.

const arr1 = [1, 2, 3];
const arr2 = arr1; // both point to same array
arr2.push(4);
console.log(arr1); // [1, 2, 3, 4] - original is modified


// 2) Can Have Methods: Non-primitive types can have functions as properties (methods).
// 3) Mutable: Their contents can be changed after creation.
// 4) Compared by Reference: Two objects with identical contents are not equal unless they reference the same object.

const obj1 = {a: 1};
const obj2 = {a: 1};
console.log(obj1 === obj2); // false - different references