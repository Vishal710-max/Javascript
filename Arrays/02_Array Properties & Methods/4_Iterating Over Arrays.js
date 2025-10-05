
// 1. forEach() – Loop Through Elements

const numbers = [1, 2, 3];
numbers.forEach(num => console.log(num * 2));
// Output: 2, 4, 6



// 2. map() – Create New Array by Transforming Elements (Transform Each Element)

// Explanation:
// - Creates a new array by applying a function to each element
// - Does not modify the original array
// - Keeps the same length as the original array
// - Commonly used for data transformation

// Syntax:
//   const newArray = array.map(callback(currentValue, index?, array?));
// Parameters:
// - callback: Function to execute on each element
//     currentValue: Current element being processed
//     index (optional): Index of current element
//     array (optional): The array being traversed


// Examples:
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6]

// Convert numbers to strings
const strings = numbers.map(num => num.toString());
console.log(strings); // ["1", "2", "3"]

// map
const arr12 = [10, 20, 30];

arr12.map((number) => {
    console.log(number + 1);

});

// Output =>
// 11
// 21
// 31

arr12.map((number, index) => {
    console.log(index);
    console.log(number);
});

// Output =>
// 0
// 10
// 1
// 20
// 2
// 30


// 3. filter() – Create New Array with Matching Elements ( Select Matching Elements)

// Explanation:
// - Creates a new array with elements that pass a test
// - Returns an array that may be shorter than the original
// - Does not modify the original array
// - Great for extracting subsets of data

// Syntax:
//   const newArray = array.filter(callback(element, index?, array?));


const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2]


// filter() 

const arr123 = [10, 20, 30, 11, 21, 44, 51];

let even_array = arr123.filter((number) => number % 2 === 0);

// let even_array = arr123.filter((number) => { return number % 2 === 0});   // if you uses curly brackets then you must have to use return statement
// i.e {return number % 2 === 0} return must be present

console.log(even_array);    // [ 10, 20, 30, 44 ]


const arr1234 = [10, "Shreyash", null, "Patil", 100];
let takeString = arr1234.filter(data => typeof(data) === 'string');
console.log(takeString);     // [ 'Shreyash', 'Patil' ]


// 4. reduce() – Reduce Array to a Single Value   (Accumulate Values)

// Explanation:
// Reduces an array to a single value
// Processes each element while maintaining an accumulator
// Can return any type (number, string, object, array)
// Requires an initial value (except for simple array summing)

// Syntax:
//    const result = array.reduce(callback(accumulator, currentValue, index?, array?), initialValue);

// Parameters:
// - callback: Function to execute on each element
//     accumulator: Accumulated value
//     currentValue: Current element
//     index (optional): Current index
//     array (optional): The array being traversed
// - initialValue: Starting value for accumulator

const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 6

// Find maximum value
const max = numbers.reduce((a, b) => Math.max(a, b));
console.log(max); // 3