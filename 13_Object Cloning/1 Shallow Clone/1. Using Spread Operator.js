
// - Shallow Clone → Copies only top-level properties (nested objects still reference the original).
// - Shallow cloning creates a new object or array that copies the top-level properties of the original, 
// but nested objects/arrays are still referenced (not deeply copied).

// Shallow Clone an Object with ... (Spread Operator)

// Syntax 
//    const clone = { ...original };

const originalObj = {
  name: "Alice",
  age: 25,
  address: {
    city: "New York",
    country: "USA"
  }
};

let Shallow = {...originalObj};

console.log("Original copy: ", originalObj);
//  Original copy:  {
//     name: 'Alice',
//     age: 25,
//     address: { city: 'New York', country: 'USA' }   
//  }


console.log("Shallow copy: ", Shallow);
//  Shallow copy:  {
//     name: 'Alice',
//     age: 25,
//     address: { city: 'New York', country: 'USA' }   
//  }


// After changing in Shallow 


Shallow.age = 100;

Shallow.address.city = "Mumbai";

console.log("Shallow copy: ", Shallow);
// Shallow copy:  { name: 'Alice', age: 100, address: { city: 'Mumbai', country: 'USA' } }
// In shallow copy age is changed and also nested dict city also changed
// let's see in original copy

console.log("Original copy: ", originalObj);
// Original copy:  { name: 'Alice', age: 25, address: { city: 'Mumbai', country: 'USA' } }
// In original copy age is not changed because it's outer reference is difference
// but in original nested object city is changed because nested object is referencing to original one

