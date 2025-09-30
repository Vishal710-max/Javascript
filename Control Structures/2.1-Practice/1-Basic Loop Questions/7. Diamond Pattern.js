// Diamond Pattern: Print a diamond pattern:

//   *
//  ***
// *****
//  ***
//   *

 for (let i = 1; i <= 5; i += 2) {
    for (let k = 1; k <= (5 - i) / 2; k ++) {
        process.stdout.write("  ");
    }
    for (let j = 1; j <= i; j++) {
        process.stdout.write(" *")
    }
    console.log();
 }

 for (let i = 5 - 2; i >= 1; i -= 2) {
    for (let k = 1; k <= (5 - i) / 2; k ++) {
        process.stdout.write("- ");
    }
    for (let j = 1; j <= i; j++) {
        process.stdout.write(" *")
    }
    console.log();
 }