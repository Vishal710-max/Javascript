
// Bitwise Operators: 
// - Bitwise operators are used to do manipulation of individual bits within the binary representation of numbers. 
// - There are several bitwise operators are used in JavaScript :

// (a) Bitwise AND (&)
// (b) Bitwise OR (|)
// (c) Bitwise NOT (~)
// (d) Bitwise XOR (^)
// (e) Left Shift (<<)
// (f) Right Shift (>>)


let a = 5, b = 3;  // 5: 0101, 3: 0011

console.log(a & b);  // 1 (AND - 001)
console.log(a | b);  // 7 (OR - 111)
console.log(a ^ b);  // 6 (XOR - 110)
console.log(~a);     // -6 (NOT - inverts bits)
console.log(a << 1); // 10 (Left shift - 1010)
console.log(a >> 1); // 2 (Right shift - 010)



// Left Shift (<<)
// - Left shift operator is denoted by '<<'. It shifts the bits of the left operand to the left, 
//   by a number of positions specified by the right operand. 
//   0 comes in the place of the least significant bit after each shifting is done.

// For example, the binary representation of 5 is '00000101',
// Now, when we use '5 << 2', it means we want to shit the binary representation of 5 left by 2 positions and then it becomes '00010100',
// The number whose binary representation is '00010100', is 20.


let num1 = 5;
// Binary representation of 5 : 0 0 0 0 1 0 1

let num2 = 8;
// Binary representation of 7 : 0 0 0 1 0 0 0

console.log(num1 << 3);     // 40
console.log(num2 << 2);     // 32



// Right Shift (>>)
// - Right shift operator is denoted by '>>'. It shifts the bits of the left operand to the right, 
//   by a number of positions specified by the right operand preserving the sign of the original number

let num3 = 5;
// Binary representation of 5 : 0 0 0 0 1 0 1

let num4 = 8;
// Binary representation of 7 : 0 0 0 1 0 0 0

console.log(num3 >> 3);     // 0
console.log(num4 >> 2);     // 2