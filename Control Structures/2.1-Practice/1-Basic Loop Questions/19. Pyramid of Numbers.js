// Pyramid of Numbers: Print the following pattern:

//     1
//    2 3
//   4 5 6
//  7 8 9 10

function  printPyramid(rows) {
    let current = 1;
    for (let i = 1; i <= rows; i++) {
        for (let k = 1; k <= rows - i; k++) {
            process.stdout.write(" ");
        }
        for (let j = 1; j <= i; j++) {
            process.stdout.write(` ${current++}`);
        }
        console.log();
    }
}
printPyramid(4);