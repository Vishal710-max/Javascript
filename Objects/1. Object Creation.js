
// Objects:
// - An object in JavaScript is a collection of key-value pairs (properties), 
//   where each key is a string (or Symbol) and each value can be any valid JavaScript data type (primitive, object, or function). 
// - Objects are used to store complex data structures and represent real-world entities in code.


// Syntax
// Object Literal Syntax (most common):

// const objectName = {
//   key1: value1,
//   key2: value2,
//   // ... more properties
//   function_name : function() {
//      // method defination
//   }
//   OR
//   methodName() {
//     // method definition
//   }
// };


let myObject = {
    name : "Shreyash",
    age : 19,
    "full name" : "Shreyash Patil",   // In this if we put key as full name than it gives error so we can put this in double quote

    address : {      // nested object
         city : "Pune",
         Country : "India"
    },

    show () {        // function
        console.log("I am show method");
    },

    greet : function() {   // function
        console.log(`Hello ${myObject.name}`)
    }
}


// Printing whole object
console.log(myObject);

// Output:
// {
//   name: 'Shreyash',
//   age: 19,
//   'full name': 'Shreyash Patil',
//   address: { city: 'Pune', Country: 'India' },
//   show: [Function: show],
//   greet: [Function: greet]
// }


// Accessing specific elements

console.log(`Name: ${myObject.name}`);     // By using .
console.log(`Full Name: ${myObject["full name"]}`)   // By using []  (But if key name having space than use [])
console.log(`city: ${myObject.address.city}`);

// Function call
myObject.show();
myObject.greet();

// Output:
// Name: Shreyash
// Full Name: Shreyash Patil
// city: Pune
// I am show method
// Hello Shreyash