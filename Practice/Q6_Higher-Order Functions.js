// Higher-Order Functions
// Q6. Create a function applyOperation(a, b, operation) that takes two numbers and a callback function, then applies the operation.


const applyOperation = function(a, b, callback) {
       return callback(a, b); 
}

console.log(applyOperation(10, 20, (a, b) => a+b));   //  30