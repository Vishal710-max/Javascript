
// 1) Naming Rules
// Must start with: a-z, A-Z, _, or $
// Can contain: a-z, A-Z, 0-9, _, $
// Cannot be a reserved keyword (e.g., let, if, function)
// Case-sensitive (myVar ≠ myvar)

// Examples:
// ✅ Valid: name, _count, $total, user1
// ❌ Invalid: 1user, user-name, let



// 2) Declaration Keywords (Must Use One)
// var (avoid in modern JS)
// let (reassignable, block-scoped)
// const (immutable after declaration, block-scoped)

// Examples:
var oldWay = "avoid";     // ❌ Legacy (function-scoped, hoisted)  
let count = 0;            // ✅ Reassignable  
const PI = 3.14;          // ✅ Constant (must be initialized)  



// 3. Scope Rules
// var: Function-scoped (hoisted to top of function).
// let/const: Block-scoped ({ }).

// Example:
if (true) {  
  var x = 10;    // Exists outside block  
  let y = 20;    // Only exists inside block  
}  
console.log(x); // 10  
console.log(y); // ReferenceError  



// 4. Assignment Rules
// let: Can be declared first, assigned later.
// const: Must be assigned at declaration (cannot reassign).

// Examples:
let a;          // ✅ Valid (undefined)  
a = 10;  

// const b;        // ❌ SyntaxError (missing initializer)  
const c = 5;    
//c = 10;         // ❌ TypeError (reassignment)  



// 5. Re-declaration Rules
// var: Allows re-declaration (risky!).
// let/const: No re-declaration in same scope.

// Examples:
var x = 1;  
var x = 2;      // ✅ Allowed (but confusing)  

let y = 1;  
// let y = 2;      // ❌ SyntaxError  



// Key Best Practices:
// Always use const unless rebinding is needed.
// Never use undeclared variables (prevents globals).
// Initialize variables when declaring them.

// Prefer let/const over var.


