
// Conditionals allow you to execute different blocks of code based on whether a condition is true or false

// if statement:
// if statement that allows us to execute a block of code only if the specified condition is true
// If the condition is false, the code block associated with the 'if' statement is skipped.


// Syntax:
//   if (condition){
//      Code block to be executed if the condition is true
//   }


let speed = 45;

if(speed > 90){
    console.log("OverSpeeding");
}

if(speed > 50 && speed <=90){
    console.log("Normal");
}

if(speed <= 50){
    console.log("Slow");
}

// Output: "Slow"