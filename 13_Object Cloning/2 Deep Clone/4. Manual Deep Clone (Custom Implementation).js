

function deepClone(obj) {
  if (typeof obj !== "object" || obj === null) return obj;
  
  const clone = Array.isArray(obj) ? [] : {};
  
  for (let key in obj) {
    clone[key] = deepClone(obj[key]);
  }
  
  return clone;
}

const originalObj = {
  name: "Alice",
  age: 25,
  address: {
    city: "New York",
    country: "USA"
  }
};

const clone = deepClone(originalObj);

console.log("Original object: ", originalObj);
// Original object:  {
//   name: 'Alice',
//   age: 25,
//   address: { city: 'New York', country: 'USA' }
// }

console.log("Clonned Object: ", clone);
// Clonned Object:  {
//   name: 'Alice',
//   age: 25,
//   address: { city: 'New York', country: 'USA' }
// }


// After changing in Shallow 


clone.age = 100;

clone.address.city = "Mumbai";

console.log("Clone Object: ", clone);
// Clone Object:  {
//   name: 'Alice',
//   age: 100,
//   address: { city: 'Mumbai', country: 'USA' } 
// }

// If we made changes in clone it can not affect on original called deep copy

console.log("Original Object: ", originalObj);
// Original Object:  {
//   name: 'Alice',
//   age: 25,
//   address: { city: 'New York', country: 'USA' }
// }