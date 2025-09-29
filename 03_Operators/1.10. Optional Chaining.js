

// Optional Chaining (?.)
// - Access nested properties safely
// - Itprovides a safe way to access nested object properties or call methods when intermediate properties might be null or undefined.


const user = {
    profile: {
        name: "Shreyash",
        address: {
            city: "New York"
        }
    }
};

console.log(user.profile?.name);           // "Shreyash"
console.log(user.profile?.address?.city);  // "New York"
console.log(user.profile?.phone?.number);  // undefined (no error)


// Old way - tedious checks
let city;
if (user && user.profile && user.profile.address) {
  city = user.profile.address.city;
}


// With optional chaining:
// New way - concise and safe
let city1 = user?.profile?.address?.city;



// How It Works =>
// The ?. operator:
// Checks if the value before the ?. is null or undefined
// If it is, returns undefined immediately
// If not, continues to the next property



// Array Item Access

const users = [{ name: "Alice" }];

console.log(users?.[0]?.name); // "Alice"
console.log(users?.[3]?.name); // undefined (no error)

arr = [10, 20, 30]
console.log(arr?.[0])
