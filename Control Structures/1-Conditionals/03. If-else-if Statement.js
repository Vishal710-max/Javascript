
// if-else if-Statement:
// An if-else-if statement is a conditional statement that allows us to test multiple conditions and 
//  execute different blocks of code based on the outcome of those conditions


// Syntax:
//   if (condition1) {
//      Code block to be executed if condition1 is true
//   } else if (condition2) {
//      Code block to be executed if condition2 is true
//   } else {
//       Code block to be executed if all conditions are false
//   }


// Example:
let weight = 65;

if (weight > 70) {
    console.log("You are Overweight");
} else if (weight > 50 && weight <= 70) {
    console.log("You are Fit");
} else {
    console.log("You are Underweight");
}

// Output : "You are Fit"