


// Function Declaration:
// A function declaration defines a named function using the function keyword. 
//   It can be called before it's defined due to JavaScript's hoisting mechanism (Hoisted (can be called before declaration))

// Syntax:
// function  function_name(parameters) {
//     // function body
//     return [value];
// }


// Example:

function  avgOfTwoNumber(num1, num2) {
      let avg = (num1 + num2) / 2;
      console.log("Average: " + avg);
}

avgOfTwoNumber(3, 7);   // Average: 5