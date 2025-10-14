

// => Dynamic Script Loading with DOMContentLoaded:
//    - The DOMContentLoaded event fires when the initial HTML document has been completely loaded
//      and parsed, without waiting for stylesheets, images, and subframes to finish loading.
//    - This makes it ideal for dynamically adding scripts to your page.


// Basic Usage of DOMContentLoaded

document.addEventListener('DOMContentLoaded', function() {
  // This code runs after the DOM is ready
  console.log('DOM fully loaded and parsed');
});


// Dynamically Adding Scripts After DOM Load

document.addEventListener('DOMContentLoaded', function() {
  const script = document.createElement('script');
  
  // Set script attributes
  script.src = 'path/to/your-script.js';
  script.async = true; // Optional: load asynchronously
  
  // Add to document
  document.body.appendChild(script);
  
  console.log('Script added dynamically');
});