
// ForEach loop:
// - The forEach loop in JavaScript provides a concise and built-in way to iterate over the elements of an array without the need for explicit indexing
// - Unlike traditional for loops, which rely on index-based iteration, the forEach loop directly accesses each element of the array, making the code more readable and expressive.
// - The forEach loop is a built-in array method in JavaScript that provides a clean and functional way to iterate over array elements.

// Syntax:
//   array.forEach(function(currentValue, index, array) {
//       code to execute for each element
//   });

// Or with an arrow function:

//   array.forEach((currentValue, index, array) => {
//      code to execute for each element
//   });

// Callback Function: A function to execute on each element, taking three arguments:
// currentValue: The current element being processed in the array
// index (optional): The index of the current element
// array (optional): The array that forEach is being applied to



// Example 1:
let list =  [10, 20, 30, 40]

list.forEach(function (number, index){
    console.log("Index: " + index + " Element: " + number)
})


// Output:
// Index: 0 Element: 10
// Index: 1 Element: 20
// Index: 2 Element: 30
// Index: 3 Element: 40


// Example 2:
let numbers = [1, 2, 3, 4, 5, 6, 7];

let sum = 0;
numbers.forEach(function(number){
    sum += number;
})

console.log(sum);

// Output : 28


const numbers1 = [1, 2, 3, 4];
let sum1 = 0;

numbers1.forEach(num1 => {
  sum1 += num1;
});

console.log(sum); // 10



// Modifying the Original Array
const words = ['hello', 'world'];

words.forEach((word, index, arr) => {
  arr[index] = word.toUpperCase();
});

console.log(words); // ['HELLO', 'WORLD']