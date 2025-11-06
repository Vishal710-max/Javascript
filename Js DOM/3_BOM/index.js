

// What is the BOM (Browser Object Model)?
//  - The BOM (Browser Object Model) consists of the objects provided by the browser to interact with things outside of the document itself.
//  - While the DOM deals with the document, the BOM deals with browser functionality.
//  - The Browser Object Model (BOM) provides JavaScript interfaces for interacting with the browser window and its components, such as the location, history, and navigator

// Key Components of BOM:
//  - window: The global object
//  - navigator: Information about the browser
//  - location: Current URL information
//  - history: Browser history navigation
//  - screen: Information about the user's screen
//  - localStorage/sessionStorage: Client-side storage

// Navigator Object
navigator.userAgent;      // Browser user agent string
navigator.platform;       // Operating system
navigator.language;       // Browser language
navigator.cookieEnabled;  // Are cookies enabled?
navigator.geolocation;    // Location services


// Location Object
location.href;        // Full URL
location.protocol;    // http: or https:
location.host;       // Hostname and port
location.hostname;   // Hostname
location.port;       // Port number
location.pathname;   // Path after domain
location.search;    // Query string
location.hash;      // Fragment identifier

// Navigation
location.assign('https://example.com');  // Navigate to new page
location.replace('https://example.com'); // Replace current page in history
location.reload();                      // Reload page


// History Object
history.length;         // Number of entries in history
history.back();         // Go back
history.forward();      // Go forward
history.go(-2);        // Go back 2 pages
history.pushState(state, title, url);  // Add to history
history.replaceState(state, title, url); // Replace current history


// Screen Object
screen.width;        // Screen width
screen.height;       // Screen height
screen.availWidth;   // Available width (excluding OS bars)
screen.availHeight;  // Available height
screen.colorDepth;   // Color depth in bits
screen.pixelDepth;   // Pixel depth


// Summary
// Window: Global object representing the browser window
// DOM: Interface for interacting with HTML/XML documents
// Access, modify, create, and delete elements
// Handle events
// Traverse the document tree
// BOM: Interface for browser functionality beyond the document
// Navigator, location, history, screen, storage