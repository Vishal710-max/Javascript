{  // <= Consider this is an scope for function in that function declaration + defination will move at the top scope
    
    //    function sayMyName(finalName) {    
    //         console.log(finalName);
    //    }

// Hosting:
// Hosting can Shift the variable declaration or function declaration to the top of their scope
// Variable scoping done in var keyword


// Function scoping:

sayMyName("Rohit");   // If i put function call before defination of function it can able to call i.e. Here is an concept of Hosting


function sayMyName(finalName) {     // This function declaration will be shift in current scope of top scope
    console.log(finalName);
}
// Current scope ke ander shift on top of the scope call as function Hosting

sayMyName("Shreyash");


// It works:
// Rohit
// Shreyash

}


// Variable scoping:  (This is doen in var keyword case)

{   // <= Consider this is scope of the variable so in this scope declaration of variable shifted at top level like that

    // var age;

console.log(age);    // undefined  Not getting an error because variable declaration moves to up (Not deifination) that's why we get undefined Output
// But in function case declaration of function and also defination will moves

var  age = 25;

console.log(age);    // 25

}


// In case of let and const

// console.log(a);    // we get an error  Cannot access 'a' before initialization like that

let a = 25;

console.log(a);    // works