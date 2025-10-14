// => What is an Event?
//  - An event is any action or occurrence that happens in the browser, such as:
//  - User interactions: Clicks, mouse movements, keyboard inputs
//  - Browser actions: Page load, resize, scroll
//  - Network events: Fetch responses, WebSocket messages
//  - Custom events: Programmatically triggered events

// An event is just an anousment (i.e On some action provides reaction


// => Event target:
//   - Event target is an one of the entity where event will be recive on perticular element (and also applied event listener)
//   - event.target is a fundamental property of the Event object in JavaScript that refers to:
//        The actual element that originally triggered the event
//        The "deepest" element in the DOM tree where the event originated
//        The element that the user directly interacted with

// => Event listener
//   - What will action will performed after the user interaction defined called event listener
//   - Example:
//       When user click (click it an Event) on any button (button it is event traget) after clicking on button what will be action performed that action will defined in one location called event listener



// 1. addEventListener()
//   - This method is used to add some action on event target after interaction

//   - Purpose
//      - Attaches an event handler to an element without overwriting existing handlers.
//      - Allows multiple event listeners on the same element.

//   - Syntax:
//         element.addEventListener(eventName, callbackFunction, [options]);
//         OR
//         event-target.addEventListener(event-type, function(action Performs));
//   - To see go to file index.html script.js in this folder


//  Parameters
        
//       Parameter     	    Description
//         eventName	            The event to listen for (e.g., "click", "keydown").
//         callbackFunction	    The function to execute when the event occurs.
//         options (Optional)	    An object specifying event behavior (e.g., { once: true }).

//  Common Options

//       Option	        Description
//         once: true	        Automatically removes the listener after the first trigger.
//         capture: true	    Listens during the capture phase (default: false).
//         passive: true	    Optimizes scrolling performance (prevents preventDefault()).



// 2. removeEventListener()
//   - This method is used to remove applied listener

//   - Purpose
//      - Removes an event listener previously added with addEventListener().
//      - Requires the exact same function reference used in addEventListener().

//   - Syntax:
//        element.removeEventListener(eventName, callbackFunction, [options]);

// Provided exactly same info as provided at adding event while removing event
// Key Notes
// ❌ Anonymous functions cannot be removed (must store the function in a variable).
// ❌ options must match (if used in addEventListener, must also be in removeEventListener).
//   - To see go to file index.html script.js in this folder




// => Event Phases / Life Cycle:
//    - Events in the DOM follow a well-defined lifecycle with three key phases.

// 1. The 3 Event Phases

        // Phase   	            Direction	            Description
        // 1. Capture Phase	        Top → Target	        Event travels from window down to target
        // 2. Target Phase	            On Element	            Event reaches the target element
        // 3. Bubble Phase	            Target → Top	        Event bubbles back up to window

// Example:

    // <div>
    //     <article>
    //         <h1></h1>
    //         <p></p>
    //     </article>
    // </div>

// DOM Tree
        //   div 
        //    |
        // article
        //   /  \
        //  h1   p   <- traget element click event

//  - Target Element p tag 
//  - EVent click

// = Capture Phase
//  - Click event traverse form window object down to event target
//     i.e in this case click event treverse from top object to paragraph
//     in Example div -> article -> p 
//  - Event starts from the topmost parent (window) and moves down to the target.


// = Target Phase
//  - Event reaches the actual target element.
//  - When click event reaches target place then it is Target Phase

// = Bubble Phase
//  - Event travels back up from the target to window.
//  - After performing event it back to top element called as bubble phase


//           ▼ CAPTURE PHASE (Window → Target)
//  window → document → body → button (TARGET PHASE)
//           ▲ BUBBLE PHASE (Target → Window)

// This are 3 phases of Event


// => addEventListener() 
//  - applies by default in bubbling phase to change that we can use attribute in method  capture: true it can set to capture phase




// => Event object
//  - The Event Object is automatically created by the browser whenever an event occurs and contains all the information about that event.
//  - It's passed as the first argument to event handlers.
//  - To see go to file index.html script.js in this folder
//  - Listener function get an event object and that event object is an 1st argument of addEventListener() method i.e event name
//    1st argument passed to an callback function as an event object  which stores information

// 1. What is the Event Object?
//   - When you interact with a webpage (click, scroll, type, etc.), the browser:
//          Creates an Event Object with details about what happened
//          Passes it to your event handler function
//          Provides methods to control event behavior




// => Default action
//  - We can able to change the default behaviour of the elemet by adding eventlintener
//  - Example: change the default bahaviour of anchor tag default behaviour is go to specied link page
//    By using event.preventDefault();  we can remove it  i.e after click it does not got to link

// Example:
let anchorElement = document.getElementById("fancher");

anchorElement.addEventListener('click', function(event) {
    event.preventDefault();
    anchorElement.textContent = "Click done bhai";
});


