

const original = {
  name: "Alice",
  age: 21,
  address: {
    city: "New York",
    country: "USA"
  }
};

const Shallow = {};

for (let key1 in original) {
     Shallow[key1] = original[key1];
}

console.log("Original object: ", original);
// Original object:  {
//   name: 'Alice',
//   age: 21,
//   address: { city: 'New York', country: 'USA' }   
// }

console.log("Shallow object: ", Shallow);
// Shallow object:  {
//   name: 'Alice',
//   age: 21,
//   address: { city: 'New York', country: 'USA' }
// }


// After changing in shallow copy lets see changes

Shallow.age = 90;

Shallow.address.city = "Mumbai";


console.log("Shallow object: ", Shallow);
// Shallow object:  {
//   name: 'Alice',
//   age: 90,
//   address: { city: 'Mumbai', country: 'USA' }     
// }
// In shallow copy age is changed and also nested dict city also changed
// let's see in original copy

console.log("Original object: ", original);
// Original object:  { name: 'Alice', age: 25, address: { city: 'Mumbai', country: 'USA' } }
// In original copy age is not changed because it's outer reference is difference
// but in original nested object city is changed because nested object is referencing to original one


