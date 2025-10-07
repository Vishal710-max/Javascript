
// Constructor Syntax:
// const objectName = new Object();
// objectName.key1 = value1;
// objectName.key2 = value2;


const myobject = new Object();
myobject.name = "Shreyash";
myobject.age = 19;
myobject.address = {
    city: "Pune",
    countary : "India"
}
myobject.greet = function() {
    console.log(`Hello, my name is ${this.name} and I'm from ${this.address.city}, ${this.address.country}`);
};

console.log(myobject);

// Output:
// {
//   name: 'Shreyash',
//   age: 19,
//   address: { city: 'Pune', countary: 'India' },
//   greet: [Function (anonymous)]
// }



// Creating an object using literal syntax
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  isEmployed: true,
  address: {
    street: "123 Main St",
    city: "New York",
    zipCode: "10001"
  },
  fullName: function() {
    return this.firstName + " " + this.lastName;
  },
  // ES6 shorthand method syntax
  greet() {
    console.log(`Hello, my name is ${this.fullName()}`);
  }
};

// Accessing properties
console.log(person.firstName); // "John"
console.log(person["lastName"]); // "Doe"
console.log(person.address.city); // "New York"

// Calling methods
console.log(person.fullName()); // "John Doe"
person.greet(); // "Hello, my name is John Doe"

// Adding new properties
person.email = "john.doe@example.com";
person["phone"] = "555-1234";