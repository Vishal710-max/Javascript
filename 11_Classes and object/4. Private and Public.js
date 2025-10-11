
// 1. Public Members (Default)
// Public members can be accessed from anywhere—both inside and outside the class.

// Syntax

//    class MyClass {
//       constructor(publicVar) {
//         this.publicVar = publicVar; // Public property
//       }

//       publicMethod() {  // Public method
//         return this.publicVar;
//       }
//    }


// Example 1:
class Person {
  constructor(name) {
    this.name = name; // Public property
  }

  greet() { // Public method
    return `Hello, ${this.name}!`;
  }
}

const person = new Person("Alice");
console.log(person.name); // "Alice" (public access)
console.log(person.greet()); // "Hello, Alice!" (public method call)


// Key Points :
// ✅ Accessible everywhere (inside/outside class).
// ✅ Modifiable (can be changed after creation).



// 2. Private Members (ES2022+)
// Private members cannot be accessed outside the class. They are prefixed with #.


// Syntax

//     class MyClass {
//         #privateVar; // Private field (must be declared first)

//         constructor(privateVar) {
//             this.#privateVar = privateVar; // Private assignment
//          }

//          #privateMethod() {  // Private method
//              return this.#privateVar;
//          }

//          getPrivateData() {  // Public method accessing private data
//              return this.#privateMethod();
//           }
//       }


// Example 2:

class BankAccount {
  #balance = 0; // Private field

  deposit(amount) {
    if (amount > 0) this.#balance += amount;
  }

  #logTransaction() { // Private method
    console.log(`Balance updated: ${this.#balance}`);
  }

  getBalance() { // Public method accessing private field
    this.#logTransaction(); // Can call private method internally
    return this.#balance;
  }
}

const account = new BankAccount();
account.deposit(100);
console.log(account.getBalance()); // 100 (via public method)
// console.log(account.#balance); // ❌ SyntaxError (private field)
// account.#logTransaction();   // ❌ SyntaxError (private method)


// Key Points
// 🔒 Only accessible inside the class.
// ❌ Cannot be accessed/modified externally.
// ⚠ Must be declared at the top of the class (ES2022 rule).

// 🔑 Used for encapsulation (hiding internal logic).
