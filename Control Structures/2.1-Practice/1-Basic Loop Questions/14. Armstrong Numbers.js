// Armstrong Numbers: Print all Armstrong numbers between 1 and 1000.

// 1

console.log("Armstrong numbers between 1 and 1000:");
for (let i = 1; i <= 1000; i++) {
    const digits = String(i).length; // Get number of digits
    let sum = 0;
    let num = i;

    while (num > 0) {
        const digit = num % 10;
        sum += digit ** digits; // Raise to power of digit count
        num = Math.floor(num / 10);
    }

    if (sum === i) {
        console.log(i); // Print Armstrong numbers only
    }
}



// 2

function isArmstrong(num) {
    const digits = String(num).split('');
    const power = digits.length;
    let sum = 0;

    for (let digit of digits) {
        sum += Math.pow(parseInt(digit, 10), power);
    }

    return sum === num;
}

console.log("Armstrong numbers between 1 and 1000:");
for (let i = 1; i <= 1000; i++) {
    if (isArmstrong(i)) {
        console.log(i);
    }
}