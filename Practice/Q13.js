// Write a function compose(f, g) that takes two functions and returns a new function that applies f after g.
// Example:
// const addTwo = x => x + 2;
// const square = x => x * x;
// const composed = compose(square, addTwo);
// console.log(composed(3)); // (3 + 2)² = 25


function  compose(functionAdd, functionMul) {
     
        return (num) => {
            result = functionAdd(num);
            return  functionMul(result);
        }
}

let result = compose((num) => num + 2, (num)  => num * num);
console.log(result(3));