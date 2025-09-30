// Alphabet Pyramid: Print the following pattern:

// 1:
// A
// AB
// ABC
// ABCD
// ABCDE

function printPyramid(rows) {
    for (let i = 1; i <= rows; i++) {
        for (let j = 0; j < i; j ++) {
            process.stdout.write(` ${String.fromCharCode(65 + j)}`);
        }
        console.log();
    }
}
printPyramid(5);


// 2:
// A
// AB
// ABC
// ABCD
// ABCDE
function printAlphabetPyramid(rows) {
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (let i = 1; i <= rows; i++) {
        console.log(alphabet.substring(0, i));
    }
}
printAlphabetPyramid(5);


// 3:
// a
// ab
// abc
// abcd
// abcde

function printLowercasePyramid(rows) {
    for (let i = 1; i <= rows; i++) {
        let row = '';
        for (let j = 0; j < i; j++) {
            row += String.fromCharCode(97 + j); // 97 = 'a'
        }
        console.log(row);
    }
}
printLowercasePyramid(5);


// 4:
// D
// DE
// DEF
// DEFG
// DEFGH

function printCustomPyramid(rows, startChar) {
    const startCode = startChar.charCodeAt(0);
    for (let i = 0; i < rows; i++) {
        let row = '';
        for (let j = 0; j <= i; j++) {
            row += String.fromCharCode(startCode + j);
        }
        console.log(row);
    }
}
printCustomPyramid(5, 'D'); // Starts with 'D'