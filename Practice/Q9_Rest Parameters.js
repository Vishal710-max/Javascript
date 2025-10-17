// Rest Parameters
// Q9. Write a function sumAll(...numbers) that takes any number of arguments and returns their sum.

function sumAll(...numbers) {
    return numbers.reduce((num1, num2) => num1 + num2, 0);
}
console.log(`Addition ${sumAll(10, 20, 30, 40)}`);      // Addition 100