
// Default Parameters (ES6)
// Sets default values if no argument is passed.
// Use all ather parameter before default paramerter


// Syntax:
//   function greet(paramert1 = value1, ..) {
//       return `Hello, ${name}!`;
//   }


// Example 1:
function greet(name = "Guest") {
    return `Hello ${name}`;
}

console.log(greet("Shreyash"));   // Hello Shreyash
console.log(greet());    // Hello Guest


// Example 2:
// This provides incorrect output:
function diplay(age, name = "Guest", city) {
    return `Hello ${name}, Your age is ${age} and city is ${city}`;
}

console.log(diplay(19, city = "India"));   // Hello India, Your age is 19 and city is undefined


// Example 3:
// Second paramerter depend on first parameter

function  say(fname = "Uday", lname = fname.toUpperCase()) {
    console.log(fname + "  " + lname);
}

say("Shreaysh", "Patil");   // Shreaysh  Patil
say("shreyash");    // shreyash  SHREYASH
say();     // Uday  UDAY



// Example 4: 
// Default value as an object

function solve(value = {age:19, wt:70, ht:190}) {
    console.log("Hello ", value);
}

solve();    // Hello  { age: 19, wt: 70, ht: 190 }
solve("Shreyash");   // Hello  Shreyash


// Example 5:
// Passing null and undefined 

function solve1 (value = "Shreyash") {
    console.log("Hello -> ", value);
}
solve1(null);    // Hello ->  null
solve1(undefined);   // Hello ->  Shreyash


// Example 6:
// Default parameter as funtion

function getAge() {
    return 20;
}

function utility(name = "Rohit", age = getAge()) {
    console.log(name, " ", age);
}

utility("Shreyash", 30);    // Shreyash   30

// Before setting default values
utility("Shreyash");    // Shreyash   undefined
utility();   // undefined   undefined

// After setting default values
utility();     // Rohit   20
