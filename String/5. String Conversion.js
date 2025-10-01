
// String Conversion (toString() & String())
//   - Converts other data types to strings.


// Syntax:
// variable.toString()
// String(variable)


// Example:
let  int_var = 123;
console.log(int_var);    // 123
console.log(typeof(int_var));    // number

let intToStr = int_var.toString();
console.log(intToStr);    // 123
console.log(typeof(intToStr));    // string

let intToString = String(int_var);
console.log(intToString);   // 123
console.log(typeof(intToString));   // string