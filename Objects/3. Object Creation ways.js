// 1. Constructor Function (Traditional Approach)

function Person3(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log(`Hello, my name is ${this.name}`);
    };
}

// Create instances using 'new'
const person1 = new Person3('Shreyash', 30);
const person2 = new Person3('Akash', 25);

console.log(person1);    // Person { name: 'Shreyash', age: 30, greet: [Function (anonymous)] }
console.log(person2);    // Person { name: 'Akash', age: 25, greet: [Function (anonymous)] }


// 2. ES6 Class Syntax

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

const person = new Person('Charlie', 28);
console.log(person);     // Person { name: 'Charlie', age: 28 }



// 3. Object.create() with Prototype
const personPrototype = {
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

function createPerson(name, age) {
    const person = Object.create(personPrototype);
    person.name = name;
    person.age = age;
    return person;
}

const person5 = createPerson('Shreyash1', 20);
console.log(person5);     // { name: 'Shreyash1', age: 20 }