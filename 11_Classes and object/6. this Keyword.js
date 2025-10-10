

// this Keyword:

// It can refers to current executing object
// It allows you to access and modify the instance's properties and methods.

// Example:

class Person {
  constructor(name) {
    this.name = name; // `this` = current instance
  }

  greet() {
    console.log(`Hello, ${this.name}!`); // `this` refers to the instance
  }
}

const alice = new Person("Alice");
alice.greet(); // "Hello, Alice!" (`this` = `alice`)