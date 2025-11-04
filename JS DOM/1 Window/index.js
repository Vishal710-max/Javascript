


// What is the Window Object?
// - The window object is the global object in a browser environment.
// - It represents the browser's window and contains all other global objects, functions, and variables.
// - It is an Top most object in hierarchy 
// - This window object which is created by Browser

// Ex 
window.console.log("Hello");

// Key Properties and Methods of Window:

// Window dimensions
window.innerWidth;   // Inner width of the window
window.innerHeight;  // Inner height of the window

// Navigation
window.location;     // Location object for the current URL
window.history;      // History object for browser history
window.navigator;    // Navigator object for browser info

// Timing
window.setTimeout(() => {}, 1000);  // Execute function after delay
window.setInterval(() => {}, 1000); // Execute function repeatedly

// Dialog boxes
window.alert("Message");       // Alert dialog
window.confirm("OK/Cancel?");  // Confirmation dialog
window.prompt("Enter value");  // Input dialog

// Opening/closing windows
window.open("https://example.com");  // Open new window
window.close();                      // Close current window