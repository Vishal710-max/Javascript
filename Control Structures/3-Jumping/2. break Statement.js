
// break Statement
// Terminates the current loop or switch statement and transfers control to the statement immediately following the terminated statement.


// Syntax:
// break [label];


// Examples:

// In a for loop
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // exits the loop when i is 5
  }
  console.log(i);
}
// Output: 0 1 2 3 4


// In a switch statement
let day = 'Monday';
switch (day) {
  case 'Monday':
    console.log('Start of work week');
    break;
  case 'Friday':
    console.log('Weekend is coming');
    break;
  default:
    console.log('Midweek');
}


// With label (rarely used)
outerLoop: 
for (let i = 0; i < 5; i++) {
  innerLoop:
  for (let j = 0; j < 5; j++) {
    if (i === 2 && j === 2) {
      break outerLoop; // breaks out of both loops
    }
    console.log(`i=${i}, j=${j}`);
  }
}

// Output:
// i=0, j=0
// i=0, j=1
// i=0, j=2
// i=0, j=3
// i=0, j=4
// i=1, j=0
// i=1, j=1
// i=1, j=2
// i=1, j=3
// i=1, j=4
// i=2, j=0
// i=2, j=1