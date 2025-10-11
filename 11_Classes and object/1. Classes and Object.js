
// Classes:
// JavaScript classes are templates for creating objects. 
// They encapsulate data (properties) and functions (methods) that operate on that data. Introduced in ES6 (2015),
// classes provide a cleaner, more structured syntax for creating objects and implementing inheritance compared to the traditional prototype-based


// Syntax:
//    class ClassName {
//        constructor(parameters) {
//          // Initialize properties
//          this.property = value;
//        }

//        method1() {
//           // method definition
//        }

//        method2() {
//          // method definition
//        }
//    }


// Object Instance
// An object of a class (also called an instance) is a concrete realization of a class blueprint.
//  When you create an object from a class using the new keyword, JavaScript
//    - Creates a new empty object
//    - Sets the object's prototype to the class's prototype
//    - Executes the constructor function with this bound to the new object
//    - Returns the newly created object


// Creating an instance Syntax
// const instance = new ClassName(arguments);


// Example:

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

const person1 = new Person('Vishal', 21);
person1.greet(); // Output: "Hello, my name is Vishal and I'm 21 years old."


// Key Features
// Constructor Method: Special method for creating and initializing objects
// Methods: Functions defined inside the class
// Inheritance: Achieved using extends keyword
// Static Methods: Called on the class itself, not instances
// Getters/Setters: Special methods for property access





// Why We Can't Use let, var, or const in Class Definitions
// In JavaScript classes, you cannot use let, var, or const when declaring class data members because:

// Class Body Syntax Rules:
//    - The class body can only contain methods (including special methods like constructor)
//    - Direct variable declarations aren't allowed in the class body

// Property Declaration:
//   = Class properties must be declared either:
//     - In the constructor using this.propertyName
//     - As class fields (ES2022) by just writing the property name (without let/var/const)



// Why We Can't Use function Keyword for Methods
// In class definitions, you shouldn't use the function keyword for methods because:
// Concise Method Syntax:
//     - Class methods use a shorthand syntax without function
//     - This makes them more concise and consistent with object literal method syntax
// this Binding Differences:
//     - Methods declared without function keyword properly bind this to the instance
//     - Using function would create its own this context



