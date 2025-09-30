

// switch Statement
// Used when multiple conditions are checked against the same variable.


// Syntax:
//   switch (expression) {
//       case value1:
//          // code for value1
//          break;
//       case value2:
//          // code for value2
//          break;
//       default:
//          // code if no case matches
//    }


// Example:
let day = "Friday";

switch (day) {
    case "Monday":
        console.log("Start of the week");
        break;
    case "Friday":
        console.log("Weekend is near!");
        break;
    default:
        console.log("It's a regular day");
}

// Output:

Start of the week

