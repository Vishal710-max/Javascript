
let  arr = [9, 1, 7, 4, 2, 8];
arr.sort();
console.log(arr);   // [ 1, 2, 4, 7, 8, 9 ]


arr = [9, 1, 7, 4, 2, 8];
arr.sort((a, b) => b - a);
// If b > a (e.g., 9 and 1)
// → b - a = 9 - 1 = 8 (positive)
// → b (9) should come before a (1) (swap to sort descending).

// If b < a (e.g., 2 and 8)
// → b - a = 2 - 8 = -6 (negative)
// → a (8) should come before b (2) (keep order for descending).

// If b === a (e.g., same numbers)
// → b - a = 0
// → No change in order.



console.log(arr);      // [ 9, 8, 7, 4, 2, 1 ]