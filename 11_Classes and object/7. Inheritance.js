
// Inheritance
// Inheritance is a core concept in object-oriented programming (OOP) that allows a child class to inherit properties and methods from a parent class.
// In JavaScript, inheritance is implemented using the extends keyword and the super() function.


// Syntax :

//    class ParentClass {
//       // Parent class properties and methods
//    }

//    class ChildClass extends ParentClass {
//       // Child class can access parent's properties/methods
//    }


// Example:

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  // Dog inherits `name` and `speak()` from Animal
  bark() {
    console.log(`${this.name} barks!`);
  }
}

const dog = new Dog("Rex");
dog.speak(); // "Rex makes a sound." (from Animal)
dog.bark();  // "Rex barks!" (from Dog)



// The super Keyword
// super() calls the parent class constructor (required if the parent has a constructor).
// super.method() calls a parent class method.

// Example:

class Animal1 {
  constructor(name) {
    this.name = name;
  }
}

class Dog1 extends Animal1 {
  constructor(name, breed) {
    super(name); // Calls Animal's constructor
    this.breed = breed;
  }
}

const dog1 = new Dog1("Rex", "Labrador");
console.log(dog1.name);  // "Rex" (from Animal)
console.log(dog1.breed); // "Labrador" (from Dog)



// Static Methods & Inheritance
// Static methods are also inherited.

class Animal {
  static describe() {
    return "Animals are living beings.";
  }
}

class Dog extends Animal {}

console.log(Dog.describe()); // "Animals are living beings." (inherited)



// Summary :
// extends → Creates inheritance.
// super() → Calls parent constructor.
// super.method() → Calls parent method.
// Method overriding → Redefine a parent method.
// Static methods are also inherited.

// instanceof checks inheritance hierarchy.
