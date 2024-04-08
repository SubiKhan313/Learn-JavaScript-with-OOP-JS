// Classes
console.log("Classes")

export class Person {
    constructor(name){ // In class Constructor we can make paramenters and we can pass name from outside and initailize it here by use (this).
        this.name = name;
    }

    walk() {
        console.log("Walk");
    }
}

const person1 = new Person('Subi');