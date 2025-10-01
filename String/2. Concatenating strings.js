
// Concatenation (+ operator or concat())
// Combines two or more strings.
// Concatenate multiple strings in JavaScript using three different ways:
//    - Using the '+' operator
//    - String interpolation with template literals
//    - Using concat()


// Concatenation using '+' operator:

// Syntax:
//    string1 + string2

let string1 = "Mobile";

let string2 = "Charger";

let finalSentence = string1 + " and " + string2 + "!";

console.log(finalSentence);

//Output : Mobile and Charger!


// Concatenation using concat()

// Syntax:
//   string1.concat(string2, string3, ...)

console.log(string1.concat(" ", string2)); // Mobile Charger



// Concatenation using string interpolation using template literals(``):
// Backticks allow for string interpolation
// where we can embed expressions within ${} inside the string, which are then evaluated and concatenated into the string.


console.log(`${string1} and ${string2}!`);
//Output : Mobile and Charger!
