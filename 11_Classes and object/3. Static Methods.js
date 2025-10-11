
// Static Methods:
// A static method is a method that belongs to the class itself, not to instances (objects) of the class.
// Called directly on the class, not on an object.
// Cannot access instance properties (this.property) since they don’t operate on instances.
// Often used for utility functions related to the class.


// Syntax

//     class ClassName {
//        static methodName() {
             // Static method logic
//        }
//      }

// Calling a static method (without creating an instance)
//      ClassName.methodName();


// Example:

class MathUtils {
  static square(x) {
    return x * x;
  }
}

// Call directly on the class
console.log(MathUtils.square(6)); // 36 (no need for `new MathUtils()`)


// Static Method vs Instance Method
class User {
  constructor(name) {
    this.name = name;
  }

  // Instance method (requires an object)
  greet() {
    console.log(`Hello, ${this.name}!`);
  }

  // Static method (called on the class)
  static createGuest() {
    return new User("Guest");
  }
}

const user1 = new User("Vishal");
user1.greet(); // "Hello, Vishal!" (instance method)

const guest = User.createGuest(); // Static method call

guest.greet(); // "Hello, Guest!" (created via static method)

