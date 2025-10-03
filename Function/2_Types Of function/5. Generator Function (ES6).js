
// Generator Function (ES6)
// - Uses function* and yield to pause/resume execution.
// - Returns a generator object.
// - Generator functions are a special type of function in ES6 that allow you to pause and resume execution,
//   producing multiple values over time (lazily) instead of returning a single value immediately.


// Syntax:
//    function* generatorName() {
//        yield value1;
//        yield value2;
//        // ...
//    }


// Key Features of Generator Functions
//  - Can be paused (yield) and resumed (next())
//  - Return an iterator object (used to control execution)
//  - Memory efficient (generate values on demand)
//  - Use function* syntax (with an asterisk *)



// Example 1:
function*  generate() {
    i = 0;
    while (true) {
       yield i++;
    }
}

data = generate();
console.log(data.next().value);   // 0
console.log(data.next().value);   // 1
console.log(data.next().value);   // 2



// Example 2:
function* countToThree() {
  yield 1;
  yield 2;
  yield 3;
}

const counter = countToThree();

console.log(counter.next()); // { value: 1, done: false }
console.log(counter.next()); // { value: 2, done: false }
console.log(counter.next()); // { value: 3, done: false }
console.log(counter.next()); // { value: undefined, done: true }