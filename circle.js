// Implementation Detail.
const _radius = new WeakMap(); // This WeakMap is not accessable to other modules. if we change WeakMap to Symbol or different object this will not break the program or create any problem.

// Everything we define in a module are considered to be private. So it won't be accessible to the outside. Unless we expicitly export it.
// Public Interface.
// ES6 Module Format.
export class Circle16 {
    constructor(radius) {
        _radius.set(this, radius);
    }

    draw() {
        console.log('Circle with radius '+ _radius.set(this));
    }
}

// CommomJS format.
// module.exports = Circle16; // If we have single object we do like this.
// module.export.Square = Square; If we exporting multiple class then we explicity do like this.