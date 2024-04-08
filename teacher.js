import {Person} from './person';

// Inheritance
console.log('Inheritance') // Inherit from Person Class and to Teacher Class.

export function promote() {

}

export default class Teacher extends Person {
    constructor(name, degree) {
        super(name);
        this.degree = degree;
    }

    teach() {
        console.log('Teach')
    }
}