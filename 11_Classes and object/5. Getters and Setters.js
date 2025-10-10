
// Getters and setters
// Getters and setters are special methods that allow controlled access to an object's properties. 


// 1. Getters (get)
// Used to get (read) a property value.
// Defined using the get keyword.
// Called like a property (no parentheses).


// Syntax

//        get propertyName() {
//            return this._property; // Some computed value
//        }


// Example:
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // Getter for fullName
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const person = new Person("Shreyash", "Patil");
console.log(person.fullName); // "Shreyash Patil" (not a function call!)



// 2. Setters (set)
// Used to set (modify) a property value.
// Defined using the set keyword.
// Called like property assignment.


// Syntax

//      set propertyName(value) {
//          this._property = value; // Validation/modification
//      }


// Example:
class Temperature {
  constructor(celsius) {
    this._celsius = celsius; // Internal storage
  }

  // Getter for Fahrenheit
  get fahrenheit() {
    return (this._celsius * 9/5) + 32;
  }

  // Setter for Fahrenheit
  set fahrenheit(value) {
    this._celsius = (value - 32) * 5/9; // Converts back to Celsius
  }
}

const temp = new Temperature(25);
console.log(temp.fahrenheit); // 77 (getter)

temp.fahrenheit = 100; // Calls the setter
console.log(temp._celsius); // 37.777... (modified via setter)