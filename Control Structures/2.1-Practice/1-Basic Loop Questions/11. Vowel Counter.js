
// Vowel Counter: Count the number of vowels in a given string using a loop.

let str = "Shreyash";
let count = 0;
for (let ele of str) {
    if (ele === 'a' || ele === 'e' || ele === 'i' || ele === 'o' || ele === 'u' || ele === 'A' || ele === 'E' || ele === 'I' || ele === 'O' || ele === 'U') {
        count ++;
    }
}
console.log(`Number of vowel: ${count}`)   // Number of vowel: 2