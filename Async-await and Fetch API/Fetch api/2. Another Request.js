

// Post request

//  - To use more request we need to provide object with options

// method (String)
//  Specifies the HTTP request method
//  Default: 'GET'
//  Common values: 'GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD'

// Example: 
//   fetch(url, {
//       method: 'POST'
//    });



// headers (Object)
// - Contains any headers you want to include in your request
// - Must be a Headers object or a plain object with string values

// Example:
// fetch(url, {
//   headers: {
//     'Content-Type': 'application/json',
//     'Authorization': 'Bearer token123'
//   }
// });



// body (Various types
//  - The request body (used with POST, PUT, PATCH)
//  - Can be: string, FormData, Blob, ArrayBuffer, URLSearchParams
//  - For JSON: JSON.stringify(yourData)

// Example:
// fetch(url, {
//   method: 'POST',
//   body: JSON.stringify({ key: 'value' })
// });



// Network Control Options
//  - mode (String)
//      - Controls CORS behavior
//      - Values:
//          - 'cors': Default, allows cross-origin requests
//          - 'no-cors': Only allows simple requests
//           - 'same-origin': Only allows same-origin requestsvvvvvvvvvvvvvvvvvv

// Example:
// fetch(url, {
//   mode: 'cors'
// });



// credentials (String)
//  - Controls whether cookies are sent with the request
//  - Values:
//      - 'omit': Default, don't send cookies
//      - 'same-origin': Send with same-origin requests
//      - 'include': Always send cookies

// Example:
// fetch(url, {
//   credentials: 'include'  // For authenticated requests
// });



// cache (String)
//  - Controls how the request interacts with the browser's cache
//  - Values:
//      - 'default': Browser looks for a matching request in its cache
//      - 'no-store': Ignore cache completely
//      - 'reload': Bypass cache but update it with new response
//      - 'no-cache': Check cache but revalidate with server
//      - 'force-cache': Use cache even if stale
//      - 'only-if-cached': Only from cache, no network request

// Example:
// fetch(url, {
//   cache: 'no-cache'
// });



// redirect (String)
//  - How to handle redirect responses
//  - Values:
//      - 'follow': Default, follow redirects
//      - 'error': Abort with error if redirect occurs
//      - 'manual': Return opaque redirect response

// Example:
// fetch(url, {
//   redirect: 'error'  // Fail if URL redirects
// });



// Complete Example:
fetch('https://api.example.com/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer token123'
  },
  body: JSON.stringify({
    name: 'John',
    age: 30
  }),
  mode: 'cors',
  credentials: 'include',
  cache: 'no-cache',
  redirect: 'follow',
  referrerPolicy: 'no-referrer-when-downgrade',
  integrity: 'sha256-abcdef1234567890',
  keepalive: false,
  signal: null
});