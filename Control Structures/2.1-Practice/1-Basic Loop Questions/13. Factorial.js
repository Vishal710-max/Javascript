// Factorial: Calculate the factorial of a given number using a loop.

function Fact(num) {
    fact = 1;
    for (let i = 1; i <= num; i++) 
        fact *= i;
    console.log(`Factorial of ${num} : ${fact}`);
}


Fact(5);
Fact(4);