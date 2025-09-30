// Prime Numbers: Print all prime numbers between 1 and 100.


process.stdout.write("Prime numbers: ");
for (let i = 1; i <= 100; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        process.stdout.write(" " + i);
    }
}

// Output:
// Prime numbers:  1 2 3 5 7 11 13 17 19 23 29 31 37 41 43 47 53 59 61 67 71 73 79 83 89 97