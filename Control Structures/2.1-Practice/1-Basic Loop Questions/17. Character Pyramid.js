// Character Pyramid: Print each character of a string in a pyramid pattern:

// H
// He
// Hel
// Hell
// Hello

function  printPyramid(str, rows) {
    for (let i = 1; i <= rows; i++) {
        for (let j = 0; j < i; j++) {
            process.stdout.write(`${str[j]}`);
        }
        console.log();
    }
}
let  str = "Hello";
printPyramid(str, str.length);