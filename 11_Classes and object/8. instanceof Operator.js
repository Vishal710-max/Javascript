
// instanceof Operator :
// Checks if an object is an instance of a class (or its parent).


class Animal {
  static describe() {
    return "Animals are living beings.";
  }
}

class Dog extends Animal {}

console.log(Dog.describe()); // "Animals are living beings." (inherited)

const dog = new Dog();
console.log(dog instanceof Dog);    // true
console.log(dog instanceof Animal); // true (inheritance)

console.log(dog instanceof Object); // true (all classes inherit from Object)
