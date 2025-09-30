
// continue Statement
// - Skips the current iteration of a loop and continues with the next iteration.


// Syntax:
// continue [label];


// Examples:

// In a for loop
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue; // skips even numbers
  }
  console.log(i);
}
// Output: 1 3 5 7 9


// With label (rarely used)
outerLoop:
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      continue outerLoop; // skips to next iteration of outer loop
    }
    console.log(`i=${i}, j=${j}`);
  }
}

// Output:
// i=0, j=0
// i=0, j=1
// i=0, j=2
// i=1, j=0
// i=2, j=0
// i=2, j=1
// i=2, j=2