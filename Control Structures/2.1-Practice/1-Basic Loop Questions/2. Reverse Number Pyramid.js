
// Reverse Number Pyramid: Write a program to print numbers from 5 to 1 in each line, decreasing by one number each line:

// 5 4 3 2 1
// 4 3 2 1
// 3 2 1
// 2 1
// 1


for (let i = 5; i >= 1; i--) {
    for (let j = i; j >= 1; j--) {
        process.stdout.write(" " + j);
    }
    console.log();
}