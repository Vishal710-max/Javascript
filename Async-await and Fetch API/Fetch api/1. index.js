
// => Fetch API:  
//    - The Fetch API provides an interface for fetching resources (including across the network).
//    - It is a more powerful and flexible replacement for XMLHttpRequest.
//    - The Fetch API is a modern interface for making HTTP requests in JavaScript.


// => Concepts and usage

//   - The Fetch API uses Request and Response objects (and other things involved with network requests)
//       as well as related concepts such as CORS and the HTTP Origin header semantics.

//   - For making a request and fetching a resource, use the fetch() method.  It is a global method in both Window and Worker contexts.

//   - The fetch() method takes one mandatory argument, the path to the resource you want to fetch.
//     It returns a Promise that resolves to the Response to that request — as soon as the server responds with headers — even
//     if the server response is an HTTP error status. You can also optionally pass in an init options object as the second argument (see Request).

//   - Once a Response is retrieved, there are a number of methods available to define what the body content is and how it should be handled.


// => Request
//    - get = We want to retrive the data
//    - post = We want to create data push
//    - put  = Update existiance data
//    - delete = Remove data


// Basic Syntax:
// fetch(url, options)
//   .then(response => {
//     // handle response
//   })
//   .catch(error => {
//     // handle error
//   });



// console.log("First Get request");
async function getData() {
    // get request -> async operation
    let responce = await fetch('https://jsonplaceholder.typicode.com/todos/1'); // it can fully execute 1st the move next line because of await

    // Parse json() -> async operation
    let data = await responce.json();

    console.log(data);  // It this condition data not display because it take time to load the data that's why it can print undefined
    // To resolve it we can apply condition before loading the data form network call we can not process
    // Output before applying await: Promise { <pending> }

    // Output after applying await:
    // { userId: 1, id: 1, title: 'delectus aut autem', completed: false }
}
getData()

// Scenario:
// Prepare url / api endpoint  -> sync code
// await // fetch data    -> Network call -> Async catagory 
//    (After loading complete data form network call then we can process the data so here await concept comes wait to load the data)
//    After loading complete data flow execution move to next (called as await)
//    await makes the Async code beheve like sync code
// Process data  -> sync code



// console.log("Second Get Request")
async function getData1() {
    // get request -> async operation
    let responce = await fetch('https://jsonplaceholder.typicode.com/posts/1');  // add /1 at the end to get id 1 data

    // Parse json() -> async operation
    let data = await responce.json();

    console.log(data); 
}
getData1();

// Output:
// {
//   userId: 1,
//   id: 1,
//   title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
//   body: 'quia et suscipit\n' +
//     'suscipit recusandae consequuntur expedita et cum\n' +       
//     'reprehenderit molestiae ut ut quas totam\n' +
//     'nostrum rerum est autem sunt rem eveniet architecto'        
// }



// console.log("Third Get Request")
async function getData2() {
    // get request -> async operation
    let responce = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments?postId=1');  // add /1 at the end to get 1 data

    // Parse json() -> async operation
    let data = await responce.json();

    console.log(data); 
}
getData2();