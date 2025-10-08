

// If we use different syntax in function defination than in that case function hosting not done
// Example:

// lets see in Expression Function:

// sayMyName("Vishal")    // Not works we get an error  annot access 'sayMyName' before initialization

let sayMyName = function(name) {
    console.log(name);
}

sayMyName("Rohit");    // Rohit  (works)



// Now see in arrow function

// say("Vishal");   // we get an error like above

let say = (name) => {
    console.log(name);
}

say("Rohit");   // Rohit (Works)


// Form this 2 examples we know that function hosting only done in a case of Function declaration not in other case


// In Function decaration hosting works

sayMe("Rohit");   // Rohit works

function sayMe(name) {
    console.log(name);
}


sayMe("Vishal");   // Shreaysh works


