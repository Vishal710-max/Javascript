

function greetMe(greetcall, fullname) {
    console.log(`Hello, ${fullname}`);
    greetcall();
}

function greet() {
    console.log("Greeting for the day");
}

greetMe(greet, "Shreyash");

// Output:
// Hello, Shreyash
// Greeting for the day