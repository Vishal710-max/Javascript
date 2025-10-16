
// 1. What is Web Performance?
//    - Web performance refers to how quickly a webpage loads, renders, and responds to user interactions.
//    - Making code faster, efficient and good then performance of the code will be incresed.

// It impacts:
//      - User experience (slow sites frustrate users)
//      - SEO rankings (Google considers page speed)
//      - Conversion rates (faster sites = more sales)

// Key Performance Metrics

        // Metric	                            Description
        //     TTFB (Time To First Byte)	        Time taken for the browser to receive the first byte of data
        //     FP (First Paint)	                    When the first pixel appears on screen
        //     FCP (First Contentful Paint)	        When meaningful content (text, images) appears
        //     LCP (Largest Contentful Paint)	    When the largest element (hero image, heading) loads
        //     TTI (Time To Interactive)	        When the page becomes fully interactive


// Display 100 para on Ui by 2 ways to check performance

// Code 1

let t1 = performance.now();

for (let i = 1; i <= 100; i++) {
    let para = document.createElement('p');
    para.textContent = "This is para " + i;
    document.body.appendChild(para);
}

let t2 = performance.now();
console.log("Total time taken by code 1: " + (t2 - t1));
// Total time taken by code 1: 0.6999999992549419

// Code 2

let t3 = performance.now();
let div = document.createElement('div');

for (let i = 1; i <= 100; i++) {
    let para = document.createElement('p');
    para.textContent = "This is Para" + i;
    div.appendChild(para);
}
document.body.appendChild(div);

let t4 = performance.now();

console.log("Total time taken by code 2: " + (t4 - t3));
// Total time taken by code 2: 0.19999999925494194

console.log(`Key difference: ${(t2 - t1) - (t4 - t3)}`);


// => Why this key difference is added in both code?
//    - For that two concept are come called Reflow, and Repaint


// => What is Reflow (Layout)?
//   - Reflow (or Layout) is the browser process of calculating the positions and sizes of all elements on the page.
//   - It takes time to calculate the sizes of an elements on the page (It is slower to load elements)

// - What Triggers Reflow?
        // Operation                             	Example
        //     Changing layout-related styles	        width, height, margin, position
        //     Adding/removing DOM elements	            appendChild(), removeChild()
        //     Resizing the window	                    window.resize
        //     Changing fonts	                        font-size, font-family
        //     Calculating layout properties	        offsetWidth, scrollTop


// - How Reflow Work
//      Browser recalculates the geometry of affected elements.
//      Child and parent elements may also reflow (known as "layout thrashing").
//      Expensive operation (can slow down the page if done excessively).

// = Example of Bad Reflow Practice

// ❌ Triggers multiple reflows (slow)
// const div1 = document.getElementById('myDiv');
// div1.style.width = '100px';  // Reflow
// div1.style.height = '200px'; // Reflow
// div1.style.margin = '10px';  // Reflow


// Optimizing Reflow
// ✅ Better: Apply changes in one batch (single reflow)
// div.style.cssText = 'width: 100px; height: 200px; margin: 10px;';



// => What is Repaint (Rendering)?
//   - Repaint occurs when the browser redraws pixels on the screen (without changing layout).
//   - It is the process of displaying content/elements pixcel by pixcel
//   - It can only paint or print the element


// What Triggers Repaint?
        // Operation	                   Example
        //     Changing visual styles	     color, background, visibility
        //     Animations & Transitions	     transform, opacity
        //     Scrolling	                 window.scroll

// Repaint vs Reflow
            //                        Reflow	                      Repaint
            // Cost	                    More expensive	                Less expensive
            // Trigger	                Layout changes	                Visual changes
            // Performance Impact	    High (recalculates layout)	    Medium (just redraws)


// Example of Repaint-Only Changes

// ✅ Only triggers repaint (no reflow)
// element.style.color = 'red';
// element.style.opacity = '0.5';

// - Write a code in which manner which takes minimum reflow and minimum repaint to make code faster


// In our code 1 how many reflow or the repaint present?

// Loop 100 times
// 1st create para
// 2nd adds text into para
// Adding it into document. (In this before loading para it can calculate the size of the para then element is addes into browser  i.e reflow occures and occures 100 time for every para also it need to repaint for every para that's why code 1 is slow )
// i.e 100 reflow and 100 repaint so code is slow


// In our code 2 how many reflow or the repaint present?

// 1st Div Creation
// 2nd Loop 100 times
// 3rd create para
// 4th adds text into para
// 5th appending to div tag
// 6th last after complete loop add div into document. (In this one time it can reflow and repaint the element not applied for every para that's why 2nd code is faster)
// i.e 1 reflow and 1 repain so code is fast



// Code 3 Best code no reflow and no repaint

let fragrent = document.createDocumentFragment();

for (let i = 1; i <= 100; i++) {
    let para = document.createElement('p');
    para.textContent = "This is para: " + i;
    // No reflow and no repaint for below line
    fragrent.appendChild(para);
}
// Below line takes 1 reflow and 1 repaint (Because to load on document)
document.body.appendChild(fragrent);