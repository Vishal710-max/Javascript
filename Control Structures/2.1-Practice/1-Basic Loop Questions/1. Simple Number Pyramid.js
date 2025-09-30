
// Simple Number Pyramid: Write a program to print the following pattern using loops:

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write(" " + j);
    }
    console.log();
}