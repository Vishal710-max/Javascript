
// Fibonacci Series: Print the first 10 numbers in the Fibonacci sequence.

// let a = 0;
// let b = 1;

// process.stdout.write("Fibonacii series: ");
// process.stdout.write(a + " " + b);

// for (let i = 3; i <= 10; i++) {
//     let c = a  + b;
//     process.stdout.write(" " + c);
//     a = b;
//     b = c;
// }


let a = 0;
let b = 1;
let result = [a, b];

for (let i = 2; i < 10; i++) {
    result.push(result[i-1] + result[i-2]);
}

console.log("Fibonacii Series: " + result.join(" "));    // Fibonacii Series: 0 1 1 2 3 5 8 13 21 34