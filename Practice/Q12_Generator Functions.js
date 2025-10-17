
// Generator Functions
// Q14. Write a generator function range(start, end) that yields numbers from start to end.

function* range(start, end) {
    while (start <= end) {
        yield  start++;
    }
}
let print = range(1, 5);
console.log(print.next().value);    // It return an object by using .  access value of value key 
console.log(print.next());
console.log(print.next());
console.log(print.next());
console.log(print.next());
console.log(print.next());

// Output =>
// 1
// { value: 2, done: false }
// { value: 3, done: false }
// { value: 4, done: false }
// { value: 5, done: false }
// { value: undefined, done: true }