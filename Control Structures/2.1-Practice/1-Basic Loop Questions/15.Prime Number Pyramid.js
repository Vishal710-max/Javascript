
// Prime Number Pyramid: Print prime numbers in a pyramid pattern:

// 2
// 3 5
// 7 11 13
// 17 19 23 29

function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function generatePrimes(count) {
    let primeNumbers = [];
    let num = 2;
    while (primeNumbers.length < count) {
        if (isPrime(num)) {
            primeNumbers.push(num);
        }
        num++;
    }
    return primeNumbers;
}

function printPyramid(rows) {
    let primeCount = (rows * (rows + 1)) / 2;
    let primeNumbers = generatePrimes(primeCount);
    let primeIndex = 0;
    
    for (let i = 1; i <= rows; i++) {
        // Add indentation
        // let indent = ' '.repeat((rows - i) * 2);
        // process.stdout.write(indent);
        
        // Print primes for current row
        for (let j = 1; j <= i; j++) {
            process.stdout.write(" " + primeNumbers[primeIndex++]);
        }
        console.log();
    }
}

printPyramid(4);