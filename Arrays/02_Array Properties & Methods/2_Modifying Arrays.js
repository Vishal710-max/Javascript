

// 1. push() – Add to End
// Syntax:
//   array.push(item1, item2, ..., itemN);

// Explanation:
// Adds one or more elements to the end of an array.
// Returns the new length of the array.
// Mutates the original array.

//Example:
const fruits = ["Apple", "Banana"];
fruits.push("Orange");
console.log(fruits);   // ["Apple", "Banana", "Orange"]



// 2. pop() – Remove from End
// Syntax:
//    array.pop();

// Explanation:
// Removes the last element from an array.
// Returns the removed element.
// Mutates the original array.

// Example:
ele = fruits.pop();
console.log(`Popped element: ${ele}`)    // Popped element: Orange
console.log(fruits);   // ["Apple", "Banana"]



// 3. unshift() – Add to Start
// Syntax:
//    array.unshift(item1, item2, ..., itemN);

// Explanation:
// Adds one or more elements to the beginning of an array.
// Returns the new length of the array.
// Mutates the original array.

// Example:
fruits.unshift("Orange");
console.log(fruits); // ["Orange", "Apple", "Banana"]



// shift() – Remove from Start
// Syntax:
//   array.shift();

// Explanation:
// Removes the first element from an array.
// Returns the removed element.
// Mutates the original array

// Example:
fruits.shift();
console.log(fruits); // ["Apple", "Banana"]


// splice() – Add/Remove at Any Position
// Syntax:
//   array.splice(startIndex, deleteCount, item1, item2, ..., itemN);

// Parameters:
// Parameter     	   Description
// startIndex	         Position to start modifying the array
// deleteCount	         Number of elements to remove (use 0 to only add)
// item1, ..., itemN	 Elements to add (optional)

const numbers = [1, 2, 3, 4, 5];
numbers.splice(2, 1); // Removes  element at index 2

console.log(numbers); // [1, 2, 4, 5]

numbers.splice(1, 2, 10);   // i.e At 1st index Remove the Element 2 and Insert 10  

console.log(numbers);    // [ 1, 10, 5 ]


numbers.splice(1, 0, 90); // Adds 90 at index 1

console.log(numbers); // [1, 99, 10, 5]


