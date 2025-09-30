
for (let i = 5; i >= 1; i--) 
    console.log(i);

// Output:
// 5
// 4
// 3
// 2
// 1

for (let i = 0, j = 10; i <= j; i++, j--)
    console.log(i + " " + j);

// Output:
// 0 10
// 1 9
// 2 8
// 3 7
// 4 6
// 5 5

let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}

// Output:
// 1
// 2
// 3
// 4
// 5


let j  = 1;
do  {
    console.log(j);
    j++;
} while(j <= 5);


// Output:
// 1
// 2
// 3
// 4
// 5


const dict = {
    name : "Shreyash",
    age : 19,
    address : {
        city : "Mumbai",
        country :  "India"
    },
    greet : function() {
        console.log("Hello bhai");
    }
}

for (key  in  dict) {
    console.log(key + " : " + dict[key]);
}

// Output:
// name : Shreyash
// age : 19
// address : [object Object]
// greet : function() {
//         console.log("Hello bhai");
//      }


let arr = [10, 20, 30];

for (let a in  arr) 
    console.log("index: " + a + " element: " + arr[a]);

// Output:
// index: 0 element: 10
// index: 1 element: 20
// index: 2 element: 30


// for (let a of dict)  
    // console.log(a)   // TypeError: dict is not iterable

for (let a of arr) 
    console.log(a);

// Output:
// 10
// 20
// 30


arr.forEach(function(Element, index) {
    console.log("index: " + index + " element: " + Element);
}) 

// Output:
// index: 0 element: 10
// index: 1 element: 20
// index: 2 element: 30

