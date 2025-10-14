
let fpara = document.getElementById("fpara");   // Fetch element on which event will be applied

// fpara.textContent = "Hello Shreyash";


// Add event listener
function changeText(event) {   // Action defined

    // Event Object
    console.log(event.type);   // Prints only type
    console.log(event)   // Prints all the information

    fpara.innerHTML = "<h1>Hello Shreyash</h1>";
    // OR
    // fpara.textContent= "Hello Shreyash";
}

// fpara.addEventListener('click', changeText);
// In this fpara is event-target 
// click is an event
// changeText function defines an action to be performed after click on it (Event listener)


// OR short hand way

// fpara.addEventListener('click', () => {
//     fpara.innerHTML = "<h1>Hello Shreyash</h1>";
// })

// fpara.addEventListener('copy', () => {
//     fpara.innerHTML = '<h1>Can not copy BC</h1>';    // After click on copy / ctrl + c this listener invoked
// })



// Remove event listener

// fpara.removeEventListener('click', changeText);    
// Function must be required and also exact same function needed

let anchorElement = document.getElementById("fancher");

anchorElement.addEventListener('click', function(event) {
    event.preventDefault();
    anchorElement.textContent = "Click done bhai";
})

