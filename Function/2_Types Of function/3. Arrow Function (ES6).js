

// Arrow Function:
// Shorter syntax using =>.
// No this binding (inherits from parent scope)


// Syntax:
//    const functionName = (parameters) => {
//       // Code to execute
//       return value; // Optional
//    };

// Single-line (implicit return)
//    const functionName = (parameters) => expression;


// Example 1:

const  myFunction = (name) => {
      return `Hello, ${name}`;
}
console.log(myFunction("Shreyash"));     // Hello, Shreyash


// Example 2:

const  square = (num) => num ** 2;
console.log(square(2))   // 4