
// Palindrome Check: Check if a string is a palindrome using loops.


let str = "aba";
let str1 = "";

for (let i = str.length - 1; i >= 0; i--) {
      str1 += str[i];
}
// console.log(str1);
if (str === str1) {
    console.log("String is Palindrome..");
} else {
    console.log("String is not Palindrome..");
}

// Output:
// String is Palindrome..