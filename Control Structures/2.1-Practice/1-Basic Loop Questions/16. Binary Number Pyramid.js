// Binary Number Triangle: Print the following pattern:

// 1
// 0 1
// 1 0 1
// 0 1 0 1
// 1 0 1 0 1


function  printPyramid(rows) {
    for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= i; j++) {
            process.stdout.write(` ${(i + j) % 2 === 0? 1: 0}`);
        }
        console.log();
    }
}
printPyramid(5)