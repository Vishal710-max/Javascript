

// Callback Functions
// - JavaScript functions can be passed as arguments to other functions, commonly known as callback functions. 
//   They're extensively used in asynchronous programming and event handling.


function fetchData(callback) {
    // Simulated asynchronous operation
    setTimeout(() => {
        const data = "Data fetched successfully";
        callback(data);
    }, 2000);
}

function processData(data) {
    console.log(`Processing data: ${data}`);
}

fetchData(processData); 
// Output: 
// Processing data: Data fetched successfully