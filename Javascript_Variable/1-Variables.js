
// Variables:
// Variables are containers for storing data values. In JavaScript, you can declare variables using three keywords:
// Variable is named memory location where data is stored

// 1) var
// 2) let
// 3) const


// 1. var (Old way, function-scoped)
// - When we declare a variable using var inside a function, we canot access the variable outside the function
// - var are function-scoped or globally-scoped, but not block-scoped
// - This means that variables declared with var are hoisted to the top of their function or global 
// - var is not block scope

// Syntax:
//   var variable_name = value;


// Example:
function example() {
    var x = 10;
    console.log(x);
}

example();       // 10
console.log(x);       // Throws ReferenceError: x is not defined

// Re definition using var
var x = 10;
console.log(x);    // Output : 10

var x = "Shreyash";   // we can re define  variable (this gives issue in debging)
console.log(x);    // Output : VISHAL

// var is not block scope Example:

console.log(height);  // undefined  (Hosting)

{   // <= Block start
    var height = 100;
}

console.log(height);   // 100  (It works)


// 2. let (Modern, block-scoped)
// - The let keyword is used to declare variables that are block-scoped, 
//   meaning they are only accessible within the block in which they are defined
// - Block scope refers to any code block delimited by curly braces {} such as loops, conditionals, or function bodies.

// Syntax:
// let variable_name = value;

// Example:

{
    let a = 100;   // a is an block scoped i.e. not accessibe outside block
    console.log(a);  // 100
}
// console.log(a)  // get an 


let a = 10;
if (true) {
    let b = 20;
    console.log(a); // Output: 10
    console.log(b); // Output: 20
}

// Re define using let (Not possible)
// let a = 100;   // Identifier 'a' has already been declared (got an error) let can solve the issue of var
console.log(a); // Output: 10
// console.log(y); // Throws ReferenceError: y is not defined

// Reassignment using let
a = 100;
console.log(a);   //  100 (Possible)



// 3. const (Modern, block-scoped, constant)
// - const cannot be reassigned after declaration
// - The const keyword is used to declare constants. 
//   Constants are variables whose values cannot be reassigned once they are initialized. 
// - This means that once a value is assigned to a constant using const, it cannot be changed or reassigned throughout the execution of the script.

// Syntax:
//   const variable_name = value;

// Example:

const c = 20;
console.log(c);      // Output : 20

// c = 30;
// console.log(c);      // Output : Error!


// IMP
// - Constants declared with const must be initialized with a value
// - Unlike variables declared with var or let, which can be declared without immediately assigning a value, 
//   const requires initialization at the time of declaration.

let x1;      // No Error

var y;      // No Error

// const z;    // Error! "Missing initializer in const declaration"


// Example 
const person = {
    name: 'Virat',
    age: 21
};

console.log(person.name);    // Output: Virat

// Modifying object properties is allowed
person.name = 'Love';
console.log(person.name);    // Output: Love

// Attempting to reassign the variable will throw an error

person = {};    // Throws TypeError: Assignment to constant variable.



