

function solve(number1) {
     return function(number) {
        return  number * number1;
     }
}

let double = solve(2);
console.log(double(10));    //  20