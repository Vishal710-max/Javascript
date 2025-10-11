
// Constructors:

// A constructor is a special method in JavaScript classes that:
//   - Gets automatically called when you create a new instance of a class (using new)
//   - Used to initialize object properties
//   - Each class can have only one constructor


// Syntax
// Class Constructor

//    class ClassName {
//       constructor(parameters) {
            // Initialize properties
//          this.property1 = value1;
//          this.property2 = value2;
//       }
//    }


// Traditional Constructor Function (pre-ES6)

// function ConstructorName(parameters) {
//   this.property1 = value1;
//   this.property2 = value2;
// }


// Example:

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const person1 = new Person('Alice', 30);
console.log(person1); // Person { name: 'Alice', age: 30 }


// Constructor with Default Values

class Car {
  constructor(brand, model = 'Unknown') {
    this.brand = brand;
    this.model = model;
  }
}

const car1 = new Car('Toyota');
console.log(car1); // Car { brand: 'Toyota', model: 'Unknown' }


// Constructor with Methods
 
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  // Method using constructor properties
  getArea() {
    return this.width * this.height;
  }
}

const rect = new Rectangle(5, 8);
console.log(rect.getArea()); // 40


// Traditional Constructor Function (ES5)

function Book(title, author) {
  this.title = title;
  this.author = author;
  
  this.getInfo = function() {
    return `${this.title} by ${this.author}`;
  };
}

const book1 = new Book('1994', 'George Orwell');

console.log(book1.getInfo()); // "1994 by George Orwell"
