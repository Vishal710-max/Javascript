
class Animal {
  speak() {
    console.log("Animal sound!");
  }
}

class Dog {
  constructor() {
    this.animal = new Animal(); // Dog "has" an Animal
  }

  bark() {
    this.animal.speak(); // Reuse Animal's method
    console.log("Bark!");
  }
}