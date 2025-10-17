

// Closures
// Q7. Write a function counter() that returns a function. 
//  The returned function should increment and return a count each time it’s called.

let counter = function() {
    let count = 0;
    return function() {
        return ++count;
    }
}

let increment = counter();

console.log(increment());
console.log(increment());
console.log(increment());


function counter1()  {
    let count = 0;
    return {
        increment() {
            count++;
        },
        getval() {
            return count
        }
    } 
}

let counter2 = counter1();
counter2.increment();
counter2.increment();
console.log(counter2.getval());   // 2