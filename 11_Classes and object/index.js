
class  Person {

    //Properties
    age;   // Public member
    #ht;   // Private member
    wt;    

    // Function / Methods

    get  getage () {
        return this.age;
    }

    set  setage(age) {
        this.age = age;
    }

    #show () {   // Private method
        this.wt = 90;
        console.log(`Your weight ${this.wt}`)
    }

    diplay() {
        this.#show();
        this.#ht = 100;
        console.log(`Your height ${this.#ht}`);
    }
}

let obj = new Person();
obj.diplay();

obj.setage = 200;
console.log(obj.getage);

// console.log(obj.#ht);   // Error private data member
console.log(obj.age);


// Output:
// Your weight 90
// Your height 100
// 200
// 200