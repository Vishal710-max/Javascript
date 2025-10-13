
// Object.assign() is a built-in JavaScript method used to shallow copy properties from one or more source objects into a target object.
// Like the spread operator (...), it only copies top-level properties, while nested objects remain referenced.

// Syntax:
//      const clonedObject = Object.assign(target, ...sources);
// target: The object that receives the copied properties.
// sources: One or more source objects to copy from.

const original = {
  name: "Alice",
  age: 25,
  address: {
    city: "New York",
    country: "USA"
  }
};

let Shallow = Object.assign({}, original);

console.log("Original object: ", original);
// Original object:  {
//   name: 'Alice',
//   age: 25,
//   address: { city: 'New York', country: 'USA' }   
// }

console.log("Shallow object: ", Shallow);
// Shallow object:  {
//   name: 'Alice',
//   age: 25,
//   address: { city: 'New York', country: 'USA' }   
// }


// After changing in shallow copy lets see changes

Shallow.age = 100;

Shallow.address.city = "Mumbai";

console.log("Original object: ", original);
// Original object:  { name: 'Alice', age: 25, address: { city: 'Mumbai', country: 'USA' } }
// In the Outer object no changes occured but in inner object changes are made

console.log("Shallow object: ", Shallow);
// Shallow object:  {
//   name: 'Alice',
//   age: 100,
//   address: { city: 'Mumbai', country: 'USA' }     
// }

// In Shallow copy both changes are occured and inner object stell refercing to Original object