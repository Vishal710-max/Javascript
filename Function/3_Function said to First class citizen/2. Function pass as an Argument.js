

function greetMe(greetcall, fullname) {
    console.log(`Hello, ${fullname}`);
    greetcall();
}

function greet() {
    console.log("Greeting for the day");
}

greetMe(greet, "Vishal");

// Output:
// Hello, Vishal

// Greeting for the day
