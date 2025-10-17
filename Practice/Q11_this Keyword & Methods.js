// this Keyword & Methods
// Q11. Create an object person with properties (name, age) and a method introduce() that logs:
// "Hi, I'm [name] and I'm [age] years old."

const person = {
    name : "Shreyash",
    age : 19,
    introduce() {
        console.log(`Hi, I'am ${person.name} and I'm ${person.age} years  old.`)
    }
}
person.introduce();    // Hi, I'am Shreyash and I'm 19 years  old.