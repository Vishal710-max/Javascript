
// Date Object
// The Date object handles dates and times.

// Creating a Date Object

// Syntax	                                               Description	             Example
// new Date()	                                              Current date & time	   new Date() → "2023-06-15T12:30:45.000Z"
// new Date(milliseconds)	                                  From Unix timestamp	   new Date(0) → "1970-01-01T00:00:00.000Z"
// new Date(dateString)	                                      From string	           new Date("2023-06-15")
// new Date(year, month, day, hours, minutes, seconds)	      Custom date	           new Date(2023, 5, 15, 12, 30, 0)
 
let curr = new Date();

let date = new Date('June 20 1998 07:15');

let newDate = new Date(1998, 5, 20, 7);

console.log(curr);    // 2025-06-02T16:26:28.225Z
console.log(date);    // 1998-06-20T01:45:00.000Z
console.log(newDate);  // 1998-06-20T01:30:00.000Z

console.log(curr.getDay());        // 1 (Monday In week)
console.log(curr.getFullYear());   // 2025

curr.setFullYear(2001);

console.log(curr.getFullYear());    // 2001
console.log(curr.getMonth());      // 10
console.log(curr.getDate());       // 10
console.log(curr.getHours());      // 22
console.log(curr.getMinutes());    // 6
console.log(curr.getSeconds());    // 28
console.log(curr.getMilliseconds());  // 76
console.log(curr.toDateString());   // Sat Jun 02 2001
console.log(curr.toTimeString());   // 22:09:07 GMT+0530 (India Standard Time)


 
