

arr = [10, 20, 30, 40];

function getSum(arr) {
    let sum = 0;

    arr.forEach(value => sum += value);

    return sum;
}

console.log(`Sum of array: ${getSum(arr)}`);    // Sum of array: 100


// Checking the changes
function change(arr) {    // Pass By reference
    arr.push(100);
}

console.log(`Before call: ${arr}`);    // Before call: 10,20,30,40
change(arr);
console.log(`After call: ${arr}`);    // After call: 10,20,30,40,100