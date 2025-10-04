
const arr = [
    function(a, b) {
        return a + b;
    },
    function(a, b) {
        return a - b;
    },
    function(a, b) {
        return a * b;
    }
];

console.log(`Addition: ${arr[0](10, 20)}`);    // Addition: 30

let second = arr[1];
console.log(`Subtraction: ${second(20, 10)}`);   // Subtraction: 10


let obj = {
    greet : function() {
        console.log("Hello, Vishal..");
    },
    show() {
        console.log("Hello to All");
    },
    display : () => {
        console.log("HELLO developers");
    }
}

obj.greet();   // Hello, Vishal..
obj.show();    // Hello to All

obj.display(); // HELLO developers
