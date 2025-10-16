// Default Parameters
// Q4. Modify greet() to have a default parameter ("Guest") if no name is provided.

const greet = (name = "Guest") => {
    return `Hello, ${name}!`;
}
console.log(greet("Shreyash"));   // Hello, Shreyash!
console.log(greet());      // Hello, Guest!
