// This is my first javascript Code!
console.log('Welcome to Programming World');


// Declaring Variable. We don't use (var) any more in ES6!
let firstName = 'Sobi';
firstName = 'Subi'
let FirstName = 'Khan';
console.log(firstName, FirstName);

// Constant Variable value can't be change!
const interestRate = 3.1;
//interestRate = 1;
console.log(interestRate);


// Primitive/ Value Types
let name = 'Subi'; // String Literal
let age = 30; // Number Literal
let isApproved = false; // Boolean Literal
let first = undefined;
let second = null;

// JavaScript is Dynamic Language. We can change variable DataType anytime. We have only one number in JS. not like number and floating number like static language has.
typeof name; 
name = 37;
typeof name;

// Reference Types: Object, Array, Function.
let person = {
    Name: 'SubiKhan',
    Age: 24
};

// Dot Notation to change the object value. Dot Notation is more consize that why we use mostly Dot notation.
person.Name = 'Subi';
console.log(person.Name);

// Bracket Notation has it's own uses like some times you don't know name of the target property until the rum time.
// i.e In user interface the user might be selecting name of the target property in that case in time of writing code we don't know what property we gonna access that gonna selected on a runtime by the user
// so we might have another variable somewhere else like selection that determines name of the target property that user is selecting that can change at run time. we can access selected property in a dynamic way like below.
let selection = 'Name';
person[selection] = 'SubiKhan';
console.log(person.Name)


// Declaring Array!
let selectedColor = ['red', 'green'];
selectedColor[2] = 37;
console.log(selectedColor);
console.log(selectedColor.length);

// Declaring Function Performing a task. The Variable in Round bracket is called Parameters!
function greet(Namex, lastName) {
    console.log('Hi ' + Namex + ' ' + lastName);
}
// When calling a function the value we send to function in ('Subi','Khan') is Argument!
greet('Subi','Khan');
greet('Subi');

// Function Calculating a Value!
function square(number){
    return number * number; // return keyword is use for return value to who ever calling this function.
}
let number = square(2);
console.log(number);

// There are two function call first is console.log() bcz there we have prentesize and second one is square(2) in this below line.
console.log(square(2));
// We don't have to save calling fuction value to a variable. We can direct call function.

// The Function is a set of statements that either performs a task or calculates and return a value.







//                                                                         3. Operators







// We use (Operators) along with (Variables) and (Constant) -> To Create (Expressions) with these expression with implement -> logic (Algorithms)!
// We have Arithmeic, Assignment, Comparison, Logical and Bitwise Operators


// Arithmetic Operator
console.log("Arithmetic Operator")
let x = 10;
let y = 3;

// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y);
// console.log(x ** y);

// Increment (++)
console.log(++x);
console.log(x++);
console.log(x);
// Decrement (--)
console.log(--x);


// Assignment Operator!
console.log("Assignment Operator")
let x1 = 37;
x1 = x1 + 2;
x1 += 8;
console.log(x1);


// Comparison Operator!

console.log("Comparison Operator")
console.log(x1 > 46);
console.log(x1 > 47);
console.log(x1 >= 52);
console.log(x1 < 52);
console.log(x1 <= 52);
console.log(x1 === 52);
console.log(x1 !== 52);


// Equality Operator!

console.log("Equality Operator")
// Strict Equality (Type + Value)
console.log(1 === 1);
console.log('1' === 1);

// Lose Equality! (value)
console.log(1 == 1);
console.log('1' == 1); // It will automatically convert value 1 into string like '1'.
// What it actually do is '1' == '1'. it convert 1 into '1' to make it true.
console.log(true == 1); // same have above convert 1 into boolean.
// console.log(true == true)


// Ternary Operator or Conditional!
console.log('Ternary Operator')
// If the customer has more then 100 points. They are 'Gold' customer, Otherwise, They are 'Silver' customer!
let points = 110;
let type = points > 100 ? 'gold' : 'silver';
console.log(type);


// Logical Operator!
// Logcal operator AND (&&) : Return TRUE if both  operands are  TRUE.
console.log('Logical Operator')
let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;
console.log('Eligible for &&' ,eligibleForLoan);

let EligibleForLoan = highIncome || goodCreditScore;
console.log('Eligible for ||' ,EligibleForLoan);

let applicatonRefused = !eligibleForLoan;
console.log('ApplicationRefused', applicatonRefused);



// Logical Operation with non-boolean!
console.log('Logical Operation with non-boolean')

console.log(false || true);
// ('Subi') is truthy! because subi is not empty string or falsy. 
console.log(false || 'Subi');
// Same goes to 1.
console.log(false || 1);
// Short-circuiting. After the false the first truthy will be considered then evaluation stops at 1. other after that will be ignored!
console.log(false || 1 || 2);

// In javascript we have falsy (not a boolean false) can be!
// undefined
// null
// 0
// false
// ''
// NaN (Not a Number)
// Anything that is not falsy -> truthy!

// If we set userColor to undeined then defaultColor will be true!
let userColor = 'red';
//let userColor = undefined;
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;
console.log(currentColor);


// Bitwise Operator!
console.log('Bitwise Operator');

//   1 = 00000001
//   2 = 00000010
// sum = 00000011 = 3 (in |) If one of them is 1 result will be 1.
console.log(1 | 2) // single | is use for bitwise OR

//   1 = 00000001
//   2 = 00000010
// sum = 00000000 = 0 (in &) If both of them is 1 verically then result will be 1.
console.log(1 & 2) // single & is use for bitwise AND

// let we want to give of Read, Write or Execute permission
// 00000100 to give Read permission
// 00000110 to give Read and Write permission 
// 00000111 to give Read, Write and Execution permission

// 00000100 to give Read permission
// 00000010 to give Write permission 
// 00000001 to give Execution permission

const readPermission = 4; //    00000100
const writePermission = 2; //   00000010
const executePermission = 1; // 00000001

let myPermission = 0;
myPermission = myPermission | readPermission | writePermission;
console.log(myPermission); // no use here!

let message = (myPermission & readPermission)? 'yes' : 'no';
console.log(message);


// Precedence Operator!
console.log('Precedence Operator!');
let xx = (2 + 3) * 4; // () The round bracket value will execute first! This is Precedence Operator! 
console.log(xx);


// Swapping Variables!
console.log('Swapping Variables!');
let a = 'red';
let b = 'blue';
let c = a;
a = b;
b = c;

console.log(a);
console.log(b);








//                                                                      4. Control Flow








// If else!
console.log("If else")

let hour = 10;
if (hour >= 6 && hour < 12)
console.log("Good Morning");
else if(hour >= 12 && hour < 18)
console.log("Good Afternoon")
else
console.log("Good Evening")



// Switch Statement
console.log("Switch Statement")

let role = "guest";
switch (role) {
    case "guest" : console.log("Guest User") 
    break;
    case "moderator" : console.log("Moderator User")
    break;
    default : console.log("Unknown User")
}

// Same Program with if else but switch case doesn't used that much these days!
if (role === "guest")
console.log("Guest User");
else if (role === "moderator")
console.log("Moderator User");
else
console.log("Unknown User");


// For Loop
console.log("For Loop")

for (let i = 0; i <= 4; i ++)
{
    console.log("SubiKhan", i)
}

for (let ii = 0; ii <= 5; ii ++) // Display odd number between 0 to 5.
{
    if (ii % 2 !== 0) console.log(ii);
}


// While Loop
console.log("While Loop")

let i = 0;
while (i <= 5){
    if (i % 2 !== 0) console.log(i);
    i ++;
}


// Do While Loop
console.log("Do While Loop");

let o = 9; // Do While Loop is even false form begning it will execute atleast once. it show 9 because it is odd number. Even the condition is <=5.
do {
    if (o % 2 !== 0) console.log(o);
    o ++;
} while(o <= 5);


// Infinite Loop!
console.log("Infinite Loop")

// for(i = 0; i <= 5;)
// console.log(i)

// let i = 0;
// while(true){
// }

// do {
// } while(true)


// For in Loop!
console.log("For in");

const personx = {
    name : "Subi",
    age : 30
};
for (let key in personx)
console.log(key, personx[key]); // We are using Bracket Notation because In each iteration the value of key will be different.
// so we can't use dot notation we don't have property called key in the person object.
// That why we use bracket notation to show value of object properties.

// Dot Notation
// info.name

// Bracket Notation
// info["name"]

const colors = ["red", "green", "blue"]; // Same program with array that we done with above object.
for (let index in colors)
console.log(index, colors[index]) // index -> I use (key) word before (index) word working same.


// For of Loop. introduce in ES6
console.log("For of Loop")

for (let color of colors)
console.log(color);
// We use For in Loop for Object and For of Loop for Array.



// Break and Continue
console.log("Break and Continue");

let u = 0;
while(u <= 10)
{
    if (u === 8) break; // Sometime if you want jump out of the loop. We use break key word.
    if (u % 2 === 0) // This condition should show even number!
    {
        u ++; // this will increament value to 1+ become 2 (even) -> 3
        continue; // continue means it will redirect to while loop.
        // The answer is odd numbers Because when if condition produce even number then continue redirect to while and below console.log(u) show odd number. 
    }
    console.log(u); // When i = 3 The if statement is ignored and run the console statement and u++. That how it print odd numbers.
    u ++;
}


// Exercise 1
console.log("Exercise 1");
// Write a function that take two numbers and return maximum of the two.
let num = max(9, 7);
console.log(num);

function max(a, b){
    // if (a > b) return a;
    // else return b;

    // if (a > b) return a;
    // return b;                 Same as above.

    return (a > b)? a : b;
}


// Exercise Landscape or Portrait
console.log("Exercise Landscape or Portrait")

console.log(isLandscape (900, 600));
function isLandscape (width, height) {
    return (width > height); // We don't have to write ? true : false because the condition statement itself say that.
}


// Exercise FizzBuzz!
console.log("Exercise FizzBuzz!");

// Divisible to 3 => Fizz
// Divisible to 5 => Buzz
// Divisible by both 3 and 5 => FizzBuzz
// Not Divisible by 3 or 5 => Input
// Not a Number = 'Not a Number'
const output = fizzBuzz(15);
console.log(output);
function fizzBuzz(input) {
    if (typeof input !== 'number')
    return 'Not a Number';
    if ((input % 3 === 0) && (input % 5 === 0))
    return 'FizzBuzz';
    if (input % 3 === 0)
    return 'Fizz';
    if (input % 5 === 0)
    return 'Buzz';

    return input;
}


// Exercise Demerit Points (CheckSpeed)!
console.log("Exercise Demerit Points")
// Speed Limit = 70
// 5 -> 1 Point
// Math.floor(1.3) It's convert the floating point number into greatest integer.
// 12 Points -> Suspended

checkSpeed(120);

function checkSpeed(speed){
    const speedLimit = 70; // We dont't use magic number like 70 so people can't understand what is 70 represent here. We always use const to understand it later and change the value only in variable if needed.
    const kmPerPoints = 5;
    if (speed < speedLimit + kmPerPoints)
    console.log('ok');
    else {
        const points = Math.floor ((speed - speedLimit) / kmPerPoints)
        if (points >= 12)
        console.log('Licence Suspended');
        else
        console.log('Points', points);
    }
}
// We can remove else from Code so Code look clean! This will work the same has above! Below code is more obtimize.

// if (speed < speedLimit + kmPerPoints){
    // console.log('ok');
    // return;
// }
//     const points = Math.floor ((speed - speedLimit) / kmPerPoints)
//     if (points >= 12)
//     console.log('Licence Suspended');
//     else
//     console.log('Points', points);
// }


// Exercise Even and Odd Number!
console.log("Exercise Even and Odd Number!")

showNumbers(10)
function showNumbers(Limit) {
    for (let i = 0; i <= 10; i++) {
        // if (i % 2 === 0)
        // console.log(i, 'Even');
        // else
        // console.log(i, 'Odd');

        const message = (i % 2 === 0) ? "Even" : "Odd";
        console.log(i, message);
    }
}



// Exercise Count Truthy!
console.log("Exercise Count Truthy!")

// Falsy is not the boolean false.
// Falsy Values!
// undefined
// null
// ''
// false
// 0
// NaN (Not a Number)

// This program will count the truthy values!
const array = [0, null, undefined, 1, 2, 3];
console.log(countTruthy(array));

function countTruthy(array) {
    let count = 0;
    for (let value of array)
    if (value) // if (value !== false || value !== undefined) this way writting code is ugly. We don't need to define every single possiblilty.
    count ++;
    return count;
}


// Exercise String Properties!
console.log("Exercise String Properties!");

// movies is Object. under it's bracket is it's properties.
const movies = {
    Title: 'Joker',
    ReleaseYear: 2017,
    Rating: 4.7,
    Director: 'john' 
}
showProperties(movies);
function showProperties(obj) {
    for(let key in obj)
    if(typeof obj[key] === 'string')
    console.log(key,': '+ obj[key]);
}


// Exercise Sum of multiples of 3 and 5
console.log("Exercise Sum of multiples of 3 and 5");

console.log(sum(5));
function sum(limit) {
    let sum = 0;
    
    for (let i = 0; i <= limit; i++)
        if (i % 3 === 0 || i % 5 === 0)
            sum += i;

    return sum;
}

// Exercise Grade
console.log("Exercise Grade");

// 0-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

const marks = [80, 80, 50];
console.log(calculateGrade(marks));

function calculateGrade(marks) {
    // let sum = 0;
    // for (let mark of marks)
    // sum += mark;
    // let average = sum / marks.length;
    // if (marks >= 0 || marks <= 59) return 'F';

    const average =  calculateAverage(marks)
    
    if (average < 60) return 'F';
    if (average < 70) return 'D';
    if (average < 80) return 'C';
    if (average < 90) return 'B';
    return 'A';
}

// Single responsebility Principle.
function calculateAverage(array) {
    let sum = 0;
    for (let value of array)
    sum += value;
    return sum / array.length;
}



// Exercise Stars
console.log("Exercise Stars");

showStars(7);
function showStars(rows) {
    for(let row = 1; row <= rows; row++) {
        let pattern = '#';
        for (let i = 0; i < row; i++)
        pattern += '*';
        console.log(pattern);
    }
}



// Exercise Prime Numbers
console.log("Exercise Prime Numbers");

// In mathamatic numbers can prime or compsite.
// primes numbers: 2, 3, 5, 7, 11, 13, 17, 19 ...
// Prime (whose factor are only 1 and itself)
// 11 = 1, 11
// 13 = 1, 13    These are Prime numbers.

// Composite numbers :
// 12 = 1, 2, 3, 4, 6, 12   12 is composite number.
// can be  divided evenly by its factors. get reminder zero.



showPrimes(20);
// function showPrimes(limit) {
//     for (let number = 2; number <= limit; number++)
//     {
//         let isPrime = true;
//         for (let factor = 2; factor < number; factor++)
//         {
//             if (number % factor === 0)
//             {
//                 isPrime = false;
//                 break;
//             }
//         }
//         if (isPrime) console.log(number);
//     }
// }


// Single Responsebility Principle.
function showPrimes(limit){
    for(let number = 2; number <= limit; number++)
    if(isPrime(number)){
        console.log(number);
    }
}

function isPrime(number){
    for(let factor = 2; factor < number; factor++)
    {
        if(number % factor === 0)
        return false;
    }
    return true;
}









//                                                                         5. Objects








// Basics
// Object Oriented Programming
console.log("Basics")
// object literal syntax
const Circle = {
    radius : 1,
    Location: {
        x : 1,
        y : 1
    },
    isVisible : true,
    draw : function() { // if a function is a part of an object it is called method in OOP
        console.log("draw");
    }
};

Circle.draw (); // We calling a draw method of a circle object in OOP. The function in object we call it method.



// Factory Function
console.log("Factory Function")

// We create object in function so we use it multiple time and change the value of radius. That what factory function is to multiply object.
function createCircle(radius) { 
    return { // This is object and it's has return.
    radius, // when key and value are the same like radius = radius; when can simply write radius,
    draw() { // We don't have to write 9function0 key word in function(Method) in object. we simply write function name.
        console.log("draw");
    }
    };
}

const Circle0 = createCircle(1);
console.log(Circle0)
console.log(Circle0.draw())



// Construction Function.
console.log("Construction Function")

// Camel Noatation oneTwoThreeFour
// Pascal Noatation OneTowThreeFour (We use Pascal Notation in Construction Function so someone other then who wrote code can understand that is construction function)

// this key word is reference to object when we use CircleY.draw() with object name then whole object is display. when we put console.log(this) in object method.
function CircleY(radius){
    this.radius = radius; // (This) keyword is reference to a object which is excuting this piece of code. Imagine (This) is an empty object.
    this.draw = function(){
        console.log('draw');
    }
    // return this; This happened under the hood with New keyword.
} // Diff BTW FF and CF is that FF for return we use Return Keyword and For CF we use This keyword. In FF calling Fun we use const a = b(); and For CF we use New keyword.

const circle = new CircleY(1); // This (new) keyword will do three thing => (New)keyword  (New operator) create an empty javascript object. something like this const xy = {}; creating under the hood.
                                // Then point (This)keyword of properties to this new xy = {}; object. Then Finaly this new operator will return object from Function (Like return this;).
// const xy = {};
// The Factory Function and Construction Function are doing the same work but Java and C# Developer like the Construction Function. Javascript Developer like Factory Function.




// Dynamic Nature of Objects
console.log("Dynamic Nature of Objects");
// Object in JavaScript are Dynamic Once you create new object you can always can add new property and method or remove existing one.
const circleX = {
    redius: 1
};

// What is the purpose of const when creating object when we can change its properties. The purpose of const is that we can't assign new object to same name of object we created with const.

circleX.color = 'yellow'
circleX.draw = function(){}

delete circleX.color;
delete circleX.draw;

console.log(circleX);




// Constructor Property
console.log("Constructor Property");

// Every Object in JavaScript has property called constructor and that references function that was used to construct or create object.
// We have two object Circle0 and circle you can see above.

console.log(circle.constructor); // Every object in javascript has constructor properties and that references function that was used to create an object.
console.log(Circle0.constructor); // FF        internally using object construction function

let xyx = {}; // When we use this syntax (object literal) the Javascript engine translate that something like this let xyx = new object();

// In Javascript we have few other builtIn constructors i.e
new String(); // '',"",``, <=(String literal) Now quit offen we use string literal.
new Boolean(); // true, false.
new Number(); // 1,2,3,4,5,...





// Functions are Objects
console.log("Functions are Objects");

function CircleXY(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}

const another = new CircleXY(1);

console.log(CircleXY.name); // CircleXY is an object.
console.log(CircleXY.length);
console.log(CircleXY.constructor); // We have another buildin constructor called function.


// Let create a function using above syntax mainly javascript will use this constructor function to create this object.
const CircleXY1 =  new Function('radius', `
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
    `)

// const Cir = CircleXY1(1); If we don't use (new) operator then (this) in object will by default will point to the golble object which is window.
const Cir = new CircleXY1(1);
console.log("Cir Object")
console.log(Cir);

CircleXY1.call({}, 1); // This is same like this (new CircleXY1(1);) as above shown in line no 806. {} this is refering to (this) keyword in object.

CircleXY1.call(window, 1); // If we don't want to use new operator in new CircleXY1(1); This keyword will by default point to globle object which is window.
// CircleXY1.call(window, 1) will be same has CircleXY1(1); (without New keyword).

CircleXY1.apply({}, [1,2,3]); // This apply use when we have arryb in object and send array has a second arg to apply method.






// Value and Reference Types.
console.log("Value and Reference Types.");

let yx = {value: 10}; // Here what happening is that object ({value: 10}) is not save on yx but address/reference 
// bcz value: 10 is stored in somewhere in memory and that memory address save in yx variable. that why value change to 20 the same value will show in zx.
let zx = yx; // They are dependent to each other if the value of yx change then the zx value will be change too.

// Primitives are copied by their values. like x = 1;
// Objects are copied by their reference. like x = {v: 1};
    
   yx.value = 20;
    
console.log(yx)
console.log(zx)



// Primitive Example:
console.log("Primitive Example:");

let numb = 10;
let numb121 = numb; // they are independent to each other bcz value save in numb121 is 10. It will not update as we change numb value 20 as below.  

// numb = 20;

function increase(numb){
    numb++; // This numb is completely independent to let numb = 10;.
} // After this function numb++; will go out of this scope.
increase(numb);
console.log(numb); // It will print let numb = 10; value above line no: 843.



// Reference Type Example
console.log("Reference Type Example");

let obj = {value: 10};

function increase(obj){
    obj.value++;
}

increase(obj);
console.log(obj); // In object the address save in variable that why the obj value is 11. unlike in primitive example. We have 2 variable that pointing to the same object.

// value type also called primitives which are number, string, boolean, symbol, undefined and null.
// Reference Types which are objects like object, function and array. function and array are also objects.






// Enumberating properties of an object.
console.log("Enumberating properties of an object.");

const circle2 = {
    radius: 1,
    draw(){
        console.log("draw");
    }
};

console.log("For In Loop") // For Object
for (let key in circle2){ // With For In Loop we can iterate over properties of an object.
    console.log(key, circle2[key]) // Simple way to enumerate properties of an object is For In Loop.
}

console.log("For Of Loop") // For Of Loop can only be used for iterable. (Array and Map)
//for (let arr of Object.keys(circle2))  // We can't use only object name bcz it's not Array or Map. That why we use Object.keys(Method) to run object.
                                        // Object.keys(Object is builtIn constructor function) with this we get all the keys of object. it will return in array.
    //console.log(arr);


//for (let key of Object.entries(circle2))   // We can't use only object name bcz it's not Array or Map. That why we use Object.keys to run object in ForOf Loop.
                                            // Object.entries(Object is builtIn constructor function) with this we get all the keys and values of object. it will return in array.
    //console.log(key);


function Object() {} // Construction Function
const xzx = {value: 1} // when we use Object by using Object literal syntax internaly that is translated to call to this Object construction function. The above function look like below new object.
const xzx1 = new Object(); // So that look like this.

if ('radius' in circle2) console.log('yes'); // THis is another way for getting properties of an object.

// Higher 






// Cloning an Object
console.log("Cloning an Object")

const cir = {
    radius: 1,
    draw(){
        console.log("Draw");
    }
};

// (This is one way of cloning an object but old)
// cirClone = {};
// for (let key in cir)
//     cirClone[key] = cir[key]

// (This is second way of cloning an object)
// const cirClone = Object.assign({color: "yellow"}, cir); This cir object properties and method will be copy in {color: "yellow"} it can be empty. then this will save to cirClone object.

// (This is third way of cloning an object)
const cirClone = {...Cir}; // Using Spread Operator. The ...(Spread Operator) will take all the properties and method and put them inbetween {} braces.
console.log(cirClone)





// Garbage Collection
console.log("Garbage Collection")
// In Low level languages when creating an object we have to alocate memory to it and when we done we have to dealocate memory.
// But in Javascript we don't have this concept. we can easily create new object at a time we initialy create an object the memory automately alocate to object.
// next we can use that then we don't have to dealocate memory. In javascrit what we call Garbage Collector. The job of this garbage collector is to find object and variable.
// are no longer use and dealocate memory that alocate to them early has a javacsript developer we don't have to worry about this. memory location and deloaction happen
// automately behind the seen we have to control over that we can't tell garbage to when to run and when to delocate on base on some complex alogorithem garbage collector run in the background.
// It figures out what variable is not use then it will automatly delocate it memory.





// Math
console.log("Math")

console.log(Math.random()) // Every time we will get random number
console.log(Math.random())
console.log(Math.round(1.9)) // Round the number.
console.log(Math.max(1, 2, 3, 4, 10));

function random(min, max) { // Get a random number btw 1 and 10.
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
  }
  
  console.log(random(1, 10));
  console.log(random(1, 10));


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
console.log(getRandomInt(3))
console.log(getRandomInt(1))
console.log(getRandomInt())










// String
console.log("String") // String is a Primitive Type. Primitive Type don't have properties and method. only object do. But we can see properties and method of string.

// bcz In javascript we have two type of string. Primitive String and Object String. With Primitive String the javascript engine internaly raps this with a String Object.
const message1 = 'This is my\n \'first Message\''; // Escape notaion \' to ' in string. There are more we can search on internet.
console.log(message1.length)
console.log(message1[0])
console.log(message1[1])
console.log(message1.includes('my')) // to find word in string.
console.log(message1.includes('not'))
console.log(message1.startsWith('This'))
console.log(message1.startsWith('this')) // Case sensitive.
console.log(message1.endsWith('e'))
console.log(message1.indexOf('my'))
console.log(message1.replace('first', 'second')) // It's doesn't modify oiginal string.
console.log(message1)
console.log(message1.toUpperCase())
console.log(message1)
console.log(message1.split(' '))


const message2 = new String('\' hi \'') // Object String. \' \' is Escape Notation.

console.log(message2.trim()) // It's remove the white spaces from side left and right.
console.log(message2.trimLeft())







// Template Literals
console.log("Template Literals")

const message3 = // Without using Template Literal.
'This is my \n' + 
'\'first\' message.';

console.log(message3);

// Literals. We use Literals to write clean code.
// Object = {}
// Boolean = true, false
// String = '', ""
// Template = ``

// With using Template Literal. Look clean code unlike without Template Literals.
const message4 = `This is my 
'first' message.`;
console.log(message4)

// This is perticularly useful in if you want to send out email in your application. Like
const name1 = 'john';
const mail1 = `Hi ${name1} ${3+3+1},

Thanks for joining my mailing list.

Regards,
Subi`;

console.log(mail1)

// const message = 'hi '+ name + ',\n';









// Date
console.log("Date") // Date Object

const now = new Date(); // Date construction function.
const date1 = new Date('May 11 2018 09:00');
const date2 = new Date(2018, 4, 11, 9, 0) // year, month, day, hour, minutes.

// We have date get and set method. like now.get or now.set.
now.setFullYear(2017)
console.log(now.toDateString())
console.log(now.toTimeString())
console.log(now.toISOString()) // This one is mostly use in Web or Mobile Development. If we are developing Web or Mobile app that take to backend.
// This is the format that commonly use to trans date between client and server.

console.log(now)







// Exercise-1 Address Object
console.log('Exercise-1 Address Object.')

const address = {
    street: 9,
    city: 'Islamabad',
    zipCode: 44000
}

function showAddress(address){ // I use address1 as a parameter in function.
    for(let key in address)
    {
        console.log(key, address[key])
    }
}
showAddress(address)








// Exercise Factory and Construction Function.
console.log("Exercise Factory and Construction Function.")

function showAddress1(street, city, zipCode){
    return{
        street,
        city,
        zipCode
    } //;
}
console.log(showAddress1(9,'Islamabad',44000))


console.log('Construction Function')
function ShowAddress2(street, city, zipCode)
{
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

let address1 = new ShowAddress2(9, 'Islamabad', 44000);
let address2 = new ShowAddress2(9, 'Islamabad', 44000); // They are not referencing the same object(address1 and address2) bcz address2 has new object.
let address3 = address1; // Now these two objects are referenceing to same object memory

console.log(address1)






// Exercise-3 Object Equality
console.log('Exercise-3 Object Equality') // Using above objects.

function areEqual (address1, address2){ // In areEqual we are cheching individual properties.
    return address1.street === address2.street && address1.city === address2.city && address1.zipCode === address2.zipCode;
}

function areSame(address1, address2){ // The parameters here of function has it's own variable.
    return address1 === address2;
}
console.log(areEqual(address1, address2)) // True.
console.log(areSame(address1, address2)) // They are not referenceing to same object reference memory.
console.log(areSame(address1, address3)) // They are referenceing to same object in memory.







// Exercise-4 Blog Post Object
console.log("Exercise-4 Blog Post Object")

const post = {
    title: 'a',
    body: 'b',
    author: 'c',
    views: 11,
    comment: [
        { author: 'a', body: 'b' },
        { author: 'c', body: 'd' }
    ],
    isLive: true
}
console.log(post)







// Exercise-5 Constructor Functions(Blog)
console.log("Exercise-5 Constructor Functions(Blog)")

function Post(title, body, author)
{
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0; // We dont't have to pass value to views bcz when post get viewed it get value. same goes to comment and isLive.
    this.comment = []
    this.isLive = false
}

const draftPost = new Post('Blog','Subi','SubiKhan');

console.log(draftPost)









// Exercise-6 Price Range Objects
console.log("Exercise-6 Price Range of Resturant Objects")

let priceRange = [
    {label: '$', tooltip: 'Inexpensive', minPerPerson: 0, maxPerPerson: 10},
    {label: '$$', tooltip: 'Moderate', minPerPerson: 11, maxPerPerson: 20},
    {label: '$$$', tooltip: 'Expensive', minPerPerson: 21, maxPerPerson: 50}
];

let restaurants = [
    {averagePerPerson: 5} // We can filter out which restaurant will come inwhich price range from above array.
]








//                                                                                 Array











// Adding Element
console.log("Adding Element")

const numbers1 = [3, 4];

// Add Element End of Array.
numbers1.push(5, 6);

// Add Element Beginning of Array.
numbers1.unshift(1, 2)

// Add Element to Middle of Array.
numbers1.splice(2, 0, 'a', 'b') // 2 is array index and 0 is how much array index to delete. a and b adding to array.

console.log(numbers1);








// Finding Elements (Primitives)
console.log("Finding Elements (Primitives)")

const numbers = [1, 2, 3, 1, 4];
console.log(numbers.indexOf('a')) // If index of value return is -1 Then that value doesn't exist.
console.log(numbers.indexOf(1))
console.log(numbers.indexOf(1, 2)) // The 2nd arg from where index start searching from.
console.log(numbers.lastIndexOf(1)) // Show last index of value of 1 num.
console.log(numbers.indexOf(1) !== -1) // If true then that value exist in array.
console.log(numbers.includes(1)) // Include do the same thing has above ((1) !-- -1). Show the value exist in array or not.







// Finding Elements (Reference Types) Objects are reference types.
console.log("Finding Elements (Reference Types)")

const courses = [
    {id:1, name:'a'},
    {id:2, name:'b'}
];

// We can use include bcz of reference of object.
const course = courses.find(function(element) // (CallBack Function) The find has a argument which is function and function has parameter. We have another buitin function findIndexOf. It will return index of array.
{
    return element.name === 'a'; // It will stop where it find the element. if the element is not there it will return undefined.
});

console.log(course);





// With Arrow Function
console.log("With Arrow Function")

// If arrow function has single don't put backet and in single line of code remove return key word and Curly braces.
const coursex = courses.find(element => element.name === 'a') // This is same has above but with arrow function and simple Code.

console.log(coursex);







// Removing Elements
console.log("Removing Elements")

const numberx = [1, 2, 3, 4];

// Removing Element from End 
//const last = numberx.pop();
//console.log(last);

// Removing Element from Begining
//const firstx = numberx.shift();
//console.log(firstx);

// Removing Element from Middle
numberx.splice(2, 1);

console.log(numberx);







// Emptying an Array
console.log("Emptying an Array")

let numbersx = [1, 2, 3, 4];
let anotherx = numbersx;

// Solution 1
// numbersx = []; // It's empty an array but if it is reference by another variable then the value will be show in that variable.

// Solution 2
numbersx.length = 0; // It will empty an array and also the multi reference one too. The best solution.

// Solution 3
numbersx.splice(0, numbersx.length); // It will empty an array and also the multi reference one too.

// Solution 4
while (numbersx.length > 0)
numbersx.pop(); // This solution is not recommended bcz if we have millions of values in array it will consume alot of proccessing power.

console.log(numbersx);
console.log(anotherx); // With Solution 1 it will show initail values. not empty array. Bcz it is reference to another variable.
// So it's memory location save in another variable and it will not collected by garbage. If it's not reference by another variable then after emptying that array it will collected by garbage.








// Combining and Slicing Arrays
console.log("Combining and Slicing Arrays")

// If we have primitive values. These primitive values will be copy into target array But with object it's reference will be copy.
const firstss = [1, 2, 3]
const seconds = [4, 5, 6]
const firstssx = [{id: 1}]

const combining = firstss.concat(seconds);

const slice = combining.slice(2, 4); // If i only put (2) it will slice form index 2 and if i put () it will copy same array.
// Of object same goes with slice(object reference and primitive values)

firstssx[0].id = 10; // Even if it's const it will change value bcz firstssx is storing reference. it's object.
const combiningx = firstssx.concat(seconds) // If we have object in array. The object itself is not copy but it's reference is copyed.

console.log(combiningx); // It will combine the object array and primitive array.

console.log(combining);
console.log(slice);







// Combining and Slicing Arrays with Spread Operator
console.log("Combining and Slicing Arrays with Spread Operator")

const combine = [...firstss, 'a', ...seconds, 'b']; // With Spread Operator(ES6) we can do the same work has concat But we can also add more values to array.

const copy = [...combine]; // With splice() we can copy an array But with Spread it's more clean code.

console.log(combine);
console.log(copy);








// Iterating an Array
console.log("Iterating an Array")

const nums = [1, 2, 3];
for (let number of nums)
    console.log(number)

// forEach give argument and function has parameter. Function will be executed for each element in array.
nums.forEach(function(number){
    console.log(number)
})

// with Arrow Function.
// nums.forEach(number => console.log(number));

// Using forEach with Arrow Function
nums.forEach((number, index) => console.log(index, number)) // We cann't get index with for of loop but we can in forEach.









// Joining Arrays
console.log("Joining Arrays")

// Using the above array nums

const joined = nums.join(',') // We can pass string, element to seperate the array and It will return String.
console.log(joined)

const messages = 'This is my first message';
const parts =  messages.split(' '); // Split method is not part of array but String. Outpput we have five element of array. Each element of this array is word in a original message.
console.log(parts) // It will return array.

const combines = parts.join('-'); // Now we have array we can join this array using seperator . This is helpful in creating in URL Slut.
console.log(combines)









// Sorting Arrays
console.log("Sorting Arrays")

const Snum = [2, 3, 1];
Snum.sort(); // What this method do First it's convert each element to string then sort element in the array.
console.log(Snum)

Snum.reverse(); // It's reverse the array.
console.log(Snum)

// Sort this array by name.
const coursess = [
    {id: 1, name: 'Node.js'},
    {id: 2, name: 'javaScript'} // (ascii) American standard code information interchange Alphabet has numbers. Now if we use lower case j(106) alphabet it has larger number then N(78).
] // Each character is represented internally in a computer with a number.

coursess.sort(function(a, b){ // This sort method optionally take argument and the function is use for comparision.
    // So when we call sort method get two object in this array a and b and compares them. 
    // a < b => -1
    // a > b => 1
    // a === b => 0

    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;

});

console.log(coursess); // If we put small j then Node will come up bcz big N has low number then small j.








// Testing the Element of an Array.
console.log("Testing the Element of an Array.")

const numbs = [1, -1, 2, 3];

const allPositive = numbs.every(values => values >= 0); // CallBack Function.
console.log(allPositive) // (Every) will return True only if all numbers are positive. If it find negative number it will not run further.


const atLeastOnePositive = numbs.some(values => values >= 0);
console.log(atLeastOnePositive); // (Some) will return True only if Atleast One Positive number. If it find one positive number it will not run further.









// Filtering an Array
console.log("Filtering an Array")

// Using above array numbs.
const filtered = numbs.filter(n => n >= 0); // It will return positive number. CallBackFn.
console.log(filtered)









// Mapping an Array
console.log("Mapping an Array") // Filter and Map both return new Array. These method are chainable. We can call them one after another.

// Using above array numbs and filtered.
//In Modern JS. The Map method will map each item in a array to something else. you can also map them to Objects.
const items = filtered.map(n => '<li>' + n + '</li>') // Bulding HTML markup. Each number is now map to string that are list items. Now we have array of strings.

const html = '<ul>' + items.join('') + '</ul>'; // With empty prenthsis () by default coma (,) will be display which we don't want.

console.log(html);


// Maping into Objects
const Oitems = filtered.map(n => { // We also can write (n => ({value: n}) );. We need to put this object in prathsis So JS will not think it's has code block. We can directly write {value: n} bcz JS will take it has it's own code block and will think this object we declare.
    return {value: n};
});

console.log(Oitems)

// Chainable
// Without Storing in var. We can write numbs.filter(n => n >= 0).map(n=> ({value: n}) ); The filtered const only use here So we don't have to store in another const.
// Chaining Methods
const itemx = numbs
    .filter(n => n >= 0)
    .map(n=> ({value: n}) )
    .filter(obj => obj.value > 1)
    .map(obj => obj.value); // Now we have array of two numbers. Read the value of properte

console.log(itemx)








// Reducing an Array.
console.log("Reducing an Array.") // All the Array has this reduce method. We can reduce all the element in array to single value.
// That single value can be a number, string, object or anything.

const nu = [1, -1, 2, 3];

let sums = 0;

for(let n of nu)
sums += n;
console.log(sums);

// Describing execution step by step. a = accumulator , c = currentValue.
// a = 0, c = 1 => a = 1
// a = 1, c = -1 => a = 0
// a = 0, c = 2 => a = 2
// a = 2, c = 3 => a = 5

// reduce method has 2 arguments first is CallBackFn and second is 0 initial value for accumulator.
 const sumsx = nu.reduce((accumulator, currentValue) => { return accumulator + currentValue}, 0); // The 0 is initailize to accumulator and the currentValue will add to accumulator 1 by 1. and reduce store the value to accumulator.
 console.log(sumsx); // This accumulator is same as above let sum = 0;

// a = 1, c = -1 => a = 0
// a = 0, c = 2 => a = 2
// a = 2, c = 3 => a = 5
const sumx = nu.reduce((accumulator, currentValue) => accumulator + currentValue); 
// Here the accumulator will be set to first element of array if we don't initialize it to ,0); and currentValue has value of -1 => [1]index of array
console.log(sumx)








// Exercise-1 Array from Range
console.log("Exercise-1 Array from Range")// Get the array from 1 to  4.

const nus = arrayFromRange(1, 4) // If we put -4 instead of 4 we will get empty array.
console.log(nus)

function arrayFromRange(min, max){
    const output = [];
    for (let i = min; i <= max; i++)
    output.push(i);
    return output;
}







// Exercise-2 Includes
console.log("Exercise-2 Includes") // Includes method can find element in array but we will create our own function.

const nux = [1, 2, 3, 4];
console.log(includes(nux, 1))

function includes(arr, searchElement){
    for (let element of arr)
    if (element === searchElement)
    return true;
    return false;
}







// Exercise-3 Except
console.log("Exercise-3 Except")

const nubs = [1, 2, 3, 4, 1, 1];

const outputs = except(nubs, [1, 2]);
console.log(outputs);

function except(array, excluded){
    const output = [];
    for (let element of array)
    if (!excluded.includes(element)) // We are checking to see if current element is in the excluded array. If it's not, so we apply operator. then we add this element to output array.
    output.push(element);
    return output;
}







// Exercise-4 Moving an Element
console.log("Exercise-4 Moving an Element")

const ns = [1, 2, 3, 4];

const outputx = move(ns, 0, 2);
console.log(outputx);

function move(array, index, offset){
    const position = index + offset;
    if (position >= array.length || position < 0){ // We can't put bigger or smaller index number of array else we will get error.
        console.error("Invalid offset"); // This is for showing error bcz before it is not showing.
        return;
    }

    const output = [...array];
    const element = output.splice(index, 1)[0]; // (index, 1=> deleting 1 item will return as an array). [0] we are removing 1 item so we can access to first element in the array.
    output.splice(position, 0, element); // Before show error msg instead of position we were using index + offset
    return output;
}








// Exercise-5 Count Occurrences
console.log('Exercise-5 Count Occurrences')

const nsx = [1, 2, 3, 1, 4, 1];

const count = countOccurrences(nsx, 1)
console.log(count)

function countOccurrences(array, searchElement) {
    // let count = 0;
    // for (let ele of array) {
    //     if (ele === searchElement) {
    //         count++;
    //     }
    // }
    // return count;


// With reduce CallBackFn
    return array.reduce((accumulator, current) => { // acumulator is our searchElement.
        const occurrences = (current === searchElement)? 1 : 0;
        console.log(accumulator, current, searchElement);
        return accumulator + occurrences;
    }, 0);
}









// Exercise-6 Get Max
console.log('Exercise-6 Get Max')

const nn = [1, 2, 3, 7, 4];

const maxs = getMax(nn);
console.log(maxs);

function getMax(array) {
    if (array.length === 0) return undefined;

    // let max = array[0];
    // for(let i = 0; i <array.length; i++)
    // if (array[i] > max)
    // max = array[i];
    // return max;


    // array.reduce((accumulator, current) => {
    //     if (current > accumulator) return current;
    //     return accumulator;

    return array.reduce((accumulator, current) => (current > accumulator) ? current : accumulator);
    // return array.reduce((a, b) => (a > b) ? a : b);

}








// Exercise-7 Movies
console.log("Exercise-7 Movies")

const moviess = [
    {title: 'a', year: 2018, rating: 4.5},
    {title: 'b', year: 2018, rating: 4.7},
    {title: 'c', year: 2018, rating: 3},
    {title: 'd', year: 2017, rating: 4.5}
];

// All the movies in 2018 with rating > 4
// Sort them their rating
// Descending order (movies with higher rating come first)
// Pick their title

const titles = moviess
    .filter(m => m.year === 2018 && m.rating >= 4)
    .sort((a, b) => a.rating - b.rating)
    .reverse()
    .map(m => m.title);

console.log(titles)

// a < b => -1
// a === b => 0
// a > b => 1

// ( a = 4.5
//   b = 4
//   0.5 => a > b )

// a = 4.5
// b = 4.5
// 0 => a === b









//                                                                                            Function










// Function Declarations and Expressions & Hoisting.
console.log('Function Declarations and Expressions & Hoisting');

// Function Declaration
walk(); // We can call this function the one that is defined using the function delaration syntax before it is defined. which is known as Hoisting.
// But why is that? The reason for this is bcz when our JS Engine executes this code, it moves all the function declarations to the top.
function walk() {
    console.log('walk');
}



// Anonymous Function Expression
// run(); // We can't do Hoisting with Function Expression syntex. It is same like using a variable or constant before it is defined.

const run = function() { // With const run = function runs() {}; is Named Function Expression.
    console.log('run');
}








// Arguments
console.log('Arguments');

function sumxs(a, b) {
    return a + b; // If we gave only 1 argument then it will be like this 1 + undefined =>Ans Nan(Not a number).
}

console.log(sumxs(1, 2));


// Sum of all Arguments.
function sumxsx() {
    let total = 0;
    
    console.log(arguments); // Every Fn in JS has special object called arguments(Argument Object). It's look like array but it's an object.
    for(let value of arguments) // We can use For Of Loop for this Object bcz that Object has iterator(number).
    total += value;
    return total;
}

console.log(sumxsx(1, 2, 3, 4, 5)); // valid JS code. We can pass more agruments then parameters.








// The Rest Operator.
console.log('The Rest Operator.');

function sumz(...args) { // The (...args) is not a Spread Operator but it's a Rest Operator and it's take varying number of arugments and put them into array.
    return args.reduce((a, c) => a + c); // a = accumulator and c = currentValue.
}

console.log(sumz(1, 2, 3, 4, 5, 10)); 



// Total costs of items in a cart and discount.

function sumzx(discount, ...prices) { // We can't have parameter after Rest operator that why it's called Rest Operator.
    const total = prices.reduce((a, c) => a + c);
    return total * (1 - discount);
}

console.log(sumzx(0.1, 20, 30)); // 0.1 or 10% discount.









// Default Parameters.
console.log('Default Parameters.')

function interest(principal, interestRate = 3.5, years = 5) { // If you give default value to a parameter then you have to give default value to all parameter after it or we will get NaN.
    // interestRate = interestRate || 3.5;  Like truthy. If IR has value it's truthy otherwise default value be use.
    // years = years || 5;                  This Old way of setting default value but Now in ES6 we set in parameter.

    return principal * interestRate / 100 * years;
}

console.log(interest(10000)); // If we don't give value to years and give it in argument and give undefined to IR. It will work but not good way of coding.








// Getters and Setters.
console.log('Getters and Setters.');

const personz = {
    firstName: 'Subi',
    secondName: 'Khan',
    get fullName() {
        return `${personz.firstName} ${personz.secondName}`
    },
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.secondName = parts[1];
    }
};

personz.fullName = 'Muhammad Suhaib';

// getters => access properties. With getter we can read personz fullName
// setters => change (mutate) them. With setter we can set it from outside of object.

console.log(personz); // or write personz.fullName to get full name.







// Try and Catch.
console.log('Try and Catch.');

const personzs = {
    firstName: 'Subi',
    secondName: 'Khan',
    set fullName(value) {
        // const e = new Error(); // Error Object.
        // throw e; // But when moment we throw this error then we refer that to an exception.
        if (typeof value !== 'string')
        throw new Error('Value is not a string') // Error() We are calling it construction Function to create a new error object. This is an Exception not an error.

        const parts = value.split(' ');
        if (value.length !== 2)
        throw new Error('Enter a first and last name');

        this.firstName = parts[0];
        this.secondName = parts[1];
    }
};

try{
    personzs.fullName = '';
}
catch(e) { // This e is reffering to line 1957 and 1961 throw new Error('').
    console.log(e); // alert is old way of doing we should display lable on screen to user.
}

console.log(personzs);








// Local and Global Scope.
console.log('Local and Global Scope.')

const color = 'red'; // This constant has Global Scope. can be accessable any where. in function etc. In general we should avoid golbal variable and constant.

function start() {
    const msg = 'hi'; // This constant has Local Scope. can't be accessable to outside of this function.
    const color = 'blue';
    console.log(color); // This will show blue bcz Local variable take precedence over Global.

    for (let ix = 0; ix < 5; ix++) {
        console.log(ix);
    }

    // console.log(ix); We can't access variable in block of for loop bcz it's Local variable to it's for loop block.
}

// console.log(msg); We can't msg constant bcz it's Local Scope constant in fucntion.

start();









// Let vs Var.
console.log('Let vs Var.');

function startx() {
    for (var ys= 0; ys < 5; ys++){
    console.log(ys);
    }

    console.log(ys); // It will show 5 when ys = 5 which is not less then 5. The loop terminate at value 5 and show value 4 and this 2nd log will show value 5. Variable decleared by Var has Fuction-Scoped access.
}

// Var => Function-Scoped.
// ES6 (ES2015) : Let and Const => Block-Scoped.

startx();


// Another Example of Var.
function starts() {
    for (var ys= 0; ys < 5; ys++){
        if (true) {
        let color = 'red';
        }
    }

    console.log(color); // It will show 5 when ys = 5 which is not less then 5. The loop terminate at value 5 and show value 4 and this 2nd log will show value 5. Variable decleared by Var has Fuction-Scoped access.
}

starts();

// Window object is a complex object which has alot of properties and methods. Used alot when building frontend. If we type in console window. colorx it will give output red the value of Var variable colorx.
// Why is bad to attach to Window object. Window object is somthing central. If you are using third party library and it has same samw variable name it will override your variable so we should avoid adding stuff to the window object.

var colorx = 'red'; // When we use var outside of a function this create global variable and attaches that global variable to the window object in the browsers. In browser we have window object.
let agex = 30; // ii When we declear variable with Let it will not attaches to window object.


function sayHi() { // When we define Fn this Fn is technically global function is added to the window object and we can execute in console with window object which is bad practice. How to avoid this => we should encapsulate these function in separate modules so they are not added to window object.
    console.log('Hi');
}










// The This keyword.
console.log('The This keyword.');

// (This) references the object that executing the current function. This references that object itself
// Regular function => Which is the window object in browsers and global in node.

// Method -> Obj
const video = {
    title: 'a',
    play() {
        console.log(this); // (this) is refering to this whole video object.
    }
}

video.stop = function stop() {
    console.log(this); // (this) is refering to this whole video object.
}

video.stop();


// Function -> global (window, global)
function playVideo() {
    console.log(this); // In regular function (this) by default references the global object.
}
playVideo(); // Window Object.



function Video(title) {
    this.title = title;
    console.log(this);
}
const v = new Video('Subi'); //In Construction function Now instead of window object. We get this Video object.


const videos = {
    title: 'Khan',
    tags: ['a', 'b', 'c'],
    showTags() { // This is Method.
        this.tags.forEach(function(tag) { // This function is regular function. callBack Fn.
            console.log(this.title, tag); // Without giving (this) has a second parameter to forEach this.title will show undefined in console. If we write only (this) it will show window object.
        }, this); // (this) references current object. If we write {firstName: 'Subi'} instead of this. (this) in the above console will get firstName. we will get firstName before title.
    }
}

videos.showTags();








// Changing This.
console.log('Changing This.');

const vides = {
    title: 'Toji',
    tags: ['a', 'b', 'c'],
    showTags() {
        // const self = this; // This is 1st solution. (this) references the vides Object.
        this.tags.forEach(tag => { // Arrow Fn is 3rd solution to avoid window object. The good thing about arrow Fn is thay inherit the (this) value.

            console.log(this.title, tag); // The value of (this) changes when a function is called.
        }); // 2nd solution is to call the bind method here like }.bind(this));. Here (this) refer to vides Object. 
    }
} // Arrow function inherit (this) from the from containing Fn.

vides.showTags();



function playVideos(a, b) {
    console.log(this); // (this) references that Object in call, apply and bind.
}

playVideos.call({name: 'Subi'}, 1, 2);
playVideos.apply({name: 'Subi'}, [1, 2]); // diff -> In apply we pass arg in array.
playVideos.bind({name: 'Subi'})(); // This bind method don't call playVideos Fn. It return a new function and set (this) to point to this object permanently.
// So no matter how we call that function, this will always ii ii point to this object that we pass here. So this return the new function.

// Above is more short.
const fn = playVideos.bind({name: 'Subi'});
fn();

playVideos();










// Exercise 1- Sum of Arugments
console.log('Exercise 1- Sum of Arugments');

console.log(sumzs([1, 2, 3, 4]));

function sumzs(...items) { // Rest operator convert arg in array. if we pass array it will that array into another array.
    if (items.length === 1 && Array.isArray(items[0])) // If it's array of array. we chech to see if this items array has a single element and the first element is an array itself.
    items = [...items[0]]; // We use spread operator to use items of 0 which is another array.

    return items.reduce((a, c) => a + c);
}











// Exercise 2- Area of Circle.
console.log('Exercise 2- Area of Circle.');

const circlez = {
    radius: 1,
    get area() { // We can't set area from out side bcz we only set it to (get) read only.
        return Math.PI * this.radius * this.radius;
    }
};
circlez.radius = 2;

console.log(circlez.area);









// Exercise 3- Error Handling.
console.log('Exercise 3- Error Handling.');

try {
const numx = [1, 2, 3, 4, 1];
const countx = countOccurrencesx(numx, 1);
console.log(countx)
}
catch(e) {
    console.log(e);
}

function countOccurrencesx(array, searchElement) {
    if(!Array.isArray(array))
    throw new Error('Invalid Array');

    return array.reduce((accumulator, current) => {
        const occurrence = (current === searchElement)? 1 : 0;
        return accumulator + occurrence;
    }, 0);
}















//                                                                                            ES6 Refresher












// Let vs Var vs Const
console.log("Let vs Var vs Const")

// Var -> Function (Can access with in function which not right todo)
// Let -> block (Can access only with in block of for loop)
// Const -> block (Can access only with in block of for loop and can't reassign value to it)
function sayHello() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
     console.log(i);
}
sayHello();







// Objects
console.log("Objects");

const per = {
    name: 'Subi',
    walk() {},
    talk() {}
};

per.talk();
per.name = ''; // When we know which property we will use then we use dot notation.

const targetMember = 'name'; // Let targetMember be a input variable.
per[targetMember.value] = 'SubiKhan'; // We use bracket notation when we don't know ahead of time which property we will access.









// The this Keyword
console.log("The this Keyword")

const pers = {
    name: 'Subi',
    walk() {
        console.log(this); // this keyword is reference to current object.
    }
};

pers.walk(); // Here we are calling walk method that way we get whole object by (this) keyword.

const walkx = pers.walk; // Here we are didn't calling the walk method. We are just reference the method.
walkx(); // Stand alone calling get golble object. We get Window object. Strick Mode is enable by default. The Output is undefined in strick mode.
// console.log(walk);








// Binding this
console.log('Binding this')

// Using Above Object pers

// One of the important method you can see in alot of react method is bind method. With the bind method we can set the value of this (keyword) permanently.
const walks = pers.walk.bind(pers); // bind will get new instant of this walk Fn and set this to This pers object.
// When we set bind with walk function we get new walk function and in that walk function the value of this on the arugment we pass to the bind method. 
// Function in JavaScript are Objects. They have properties and method that we can use.
walks(); // When we call this walk function we will see pers object on console
// console.log(walks);








// Arrow Functions
console.log("Arrow Functions")

// const square = function(number) {
//     return number * number;
// };

const squares = number => number * number;
console.log(squares(5));


const jobs = [
    {id: 1, isActive: true},
    {id: 2, isActive: true},
    {id: 3, isActive: false}
]

// const activeJobs = jobs.filter(function(job) {return job.isActive; });
const activeJobs = jobs.filter(job => job.isActive);

console.log(activeJobs);







// Arrow Functions and this
console.log('Arrow Functions and this')

const perss = {
    talk() {
        //var self = this; // We can solve this window object problem with (this) initailize here which is soluton of solving problem like this in old days.
        //setTimeout(function() { // This CallBackFn is not part of any object
          //  console.log('self', self); // The self will reference to perss object
        //}, 1000);

        var self = this; // Arrow Function don't rebind the (this).
        setTimeout(() => { //In this CallBackFn we use arrow function so (this) is not reset. instead it is inheritance self = this(k) in the constant inwhich this code is define.
            console.log('this', this);
        }, 1000);
    }
}; // But in this particular case in case of CallBackFn the Strick mode doesn't over ride this behaviour so (this) reference to perss object.
// when we got reference to an object the strick mode kick in and undefined instead of window object.
perss.talk(); // When setTimeOut Fn is then is not like talk() method in perss object. It's become a stand alone function






// Array.map Method
console.log('Array.map Method') // We use map in react to render lists. when ever we want to render list of items that when we use map.

const colorss = ['red', 'green', 'blue'];
// This finction is called by map method for items in array it take one items of the array. it take one items at a time and return new items.
// The map method return new array so that doesn't modify array.
//const itemss = colorss.map(color => '<li>' + color + '</li>'); // Here we need to pass CallBackFn. job of this function is to transfrom each elements in this array.
const itemss = colorss.map(color => `<li>${color}</li>`); // Using template Literal(``).
console.log(itemss)







// Object Destructuring
console.log('Object Destructuring')

const addressx = {
    street: '9',
    city: 'Islamabad',
    country: 'Pakistan'
}; // Let say some where in code we need to astrack the value of this property and store them in seperate variable.

// const street = address.street; // This is we teplicaly do. but not now a days.
// const city = address.city;
// const country = address.country;

const {street, city, country} = addressx; // We can write like this in simple way. Not like above.
const {street : st } = addressx; // if we want to destruct one property then we do like this and if we want the different name then we can name like this street: st.
console.log(st);







// Spread Operator
console.log('Spread Operator')

// Spread Operator in Array.
const first1 = [1, 2, 3];
const second1 = [4, 5, 6];

// const combined = first1.concat(second1);
const combined = [...first1, 'a', ...second1, 'b']; // Using Spread Operator to combine two array and also can add new element in them.
const clone = [...first1];


// Spread Operator in Objects

const first2 = {name: 'Subi'};
const second2 = {job: 'Instructor'};

const combined1 = {...first2, ...second2, location: 'Australia' }; // Using Spread Operator in objects to combine them and also can add more properties. 
console.log(combined1);







// Classes and Inheritance are in person and teacher files.



// import {Teacher} from './teacher';   Name Export
// import Teacher from './teacher';     Default Export
// import Teacher, {promote} from './teacher';     Default and Name Export

// Modules
console.log('Modules')

// const teacher = new Teacher('SubiKhan', 'BsCS')
// console.log(teacher);










//                                                                                 Object-oriented Programming in JavaScript












// What is OOP.
console.log('What is OOP.');

// A programming paradigm centered around objects rather than functions. OOP is not a programming language or tool. It's a style of programming.







// Four Pillars of OOP.
console.log('Four Pillars of OOP.');

// Encapsulation, Abstraction, Inheritance, Polymorphism.

// Before OOP. We have procedural programming, that divided a program into set of functions. So we have data stored in a bunch of variables and functions that operate on the data.
// This style programmin is very simple and straight forward. Has programming grow you end up with bunch of functions that are all over the place.
// You might find your self coping and pasting lines of code over and over to make a change to one function and then several other function break. (Spaghetti Code) There is so much interdependency in all these funcitons it become problematic.

// OOP came to solve this problem. In OOP we combine a group of related variables and functions into a unit. We call that unit an object. We refer to these variables as properties and functions as methods.
// Here is an example. Think of a car. A car is an object with properties such as make, model and color, And methods like start, stop and move.

const cars = {
    //make,
    //model,
    //color,
    start() {},
    stop() {},
    move() {}
}

// localStorage in console
// So in OOP we group related variables and functions that operate on them into objects and this is what we call Encapsulation.

// Procedural Programming:
let baseSalary = 30_000;
let overtime = 10;
let rate = 20;

function getWage(baseSalary, overtime, rate) {
    return baseSalary + (overtime * rate);
}

// OOP Programming. Encapsulation
let employee = {
    baseSalary: 30_000,
    overtime: 10,
    rate: 20,
    getWage: function() { // In OOP function has fewer parameter or nothing at all. The best function are those with no parameters.
        return this.baseSalary + (this.overtime * this.rate);
    }
};



// Abstraction -> 
//                DVD player as an object. This DVD player has a complex logic board from inside and few button form outside that you interact with. You simply press the play button and you don't care what happens on the side.
//                All that complexity is hidden form you. This is abstraction in practice. We can use the same technique in our objects. So we can hide some of the properties and methods form the outside, and this gives us a couple benefits.
//                First -> Simple interface, We'll make the interface of those objects simpler using and understanding an objects with few properties and methods is easier than an object with several properties and methods.
//                Second Benefit -> Reduce the Impact of Change, It helps us reduce the impact of change. Lets imagine that tomorrow we change these inner or private methods. None of these changes will leak to the outside,
// bcz we don't have any code that touches these methods outside to their contaning object. You may delete the method or change it's parameter but none of these changes will impact the rest of the application code. So with abstraction, you reduce the impact of change.



// Inheritance -> 
//               Inheritance is a mechanism that allow you to eliminate redundant code. I.e like TextBox, DropDownList and checkboxes and so on. All these element has few things in common. They have properties like hidden and innter HTML and methods like click and focus.

const htmlElements = {
    //hidden,
    //innerHTML,
    click(){},
    focus(){}
} // Instead of redefining all these properties and methods for each for element. We can define them once in a generic object call it htmlElements and have other objects(TextBox, DropDownList and ChechBoxs) inherit these properties and methods. So Inheritance help us eliminate redundant code.



// Polymorphism ->
//                Poly means Many and Morph means Forms. In OOP Polymorphism is a technique that allows you to get rid of long if and else or switch and case statements. like htmlElement i.e above All these objects should have the ability to be rendered on a page.
//                But the way each element is rendered is different from the others. Implement this in procedural manner is a mess. We can implemet a render method in each of these objects(TextBox, DropDownList and ChechBoxs) and the render method will behave differently depending on the type of the object we are referencing.
//                So we could get rid of this nasty switch and case and use one line of code like this element.render();



// Benefits of OOP:
// Encapsulation -> Reduce complexity + increase reuseability.
// Abstration    -> Reduxe complexity + isolate impact of changes.
// Inheritance   -> Eliminate redundant code.
// Polymorphism  -> Refactor ugly switch/case statements.












//                                                                                                      Objects














// Objects Literals
console.log('Objects Literals');

const circlexz = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function() {
        console.log('draw');
    }
};

circlexz.draw();









// Factory Function.
console.log('Factory Function.');

// Lets imagine we wanna create another circle and if we duplicate same objects and it's one or more methods and if one method has error then we have to correct in all circle objects. If object has one or more methods, we say that object has behavior. We can use factory or construction function.

function createCirclexz(radius) {
    return {
        radius,
        draw: function() {
            console.log('draw');
        }
    };
}

const circlexs = createCirclexz(1);










// Construction Function
console.log('Construction Function.')

function Circlesz() {
    //console.log('this', this); // (this) point to window object if we don't use (new) so this is the global object in browser.
    this.radius = radius;
    this.draw = function() {
        console.log('Draw');
    }
}

const anothers = new Circlesz(1); // (new) keyword do three thing. 1st create a empty object. 2nd It will set (this) to that object by default this point to golbal object which is in this case is window object. 3rd Return that object.












// Constructor Property
console.log('Constructor Property');

// Every object in JS has a property called constructor and that references the function that was used to construct or create an object.

let xs =  {}; // When we use object literal syntax the JS engine translate it into like this down below.

// let x = new Object(); // Internaly it is using this object construction function. try it in browser console like circlexs.construction.

// In JS we hace few other built in constructors, for example
new String(); // '', "", `` (string literal)..
new Boolean(); // true, false (boolean literal).
new Number(); // 1, 2, 3, ... (number literal).. 











// Functions are Objects.
console.log('Functions are Objects.');

Circlesz.name;
Circlesz.length; // These are all members of the circle function or circle object. try it in browser console.

Circlesz.constructor; // Here we have another builtin constructor called function and we declare a function using this syntax (function xyz() {}) internally JS engine will use this function construction to create this object. it's like this down below
const Circlesz1 = new Function('radius', `
this.radius = radius;
this.draw = function() {
    console.log('Draw');
}
`);

const cirs = new Circlesz1(1);



Circlesz.call({}, 1) // Let use couple of methods that are available in our function. The call method first arg is thisArg So we give empty object which will refer to (this). After that we add our args explicitly so we have 1 arg, we pass one and if we have more args we will pass them explicitly. 
// So this expression is exactly like expression (const another = new Circle(1);).
Circlesz.apply({}, [1, 2, 3]) // It is exactly like call method but diff is instead of passing all all args explicitly we pass them in array. It is usefull if you already have an array somewhere else in your application and you want to pass an array as the 2nd arg.











// Value and Reference Types.
console.log('Value and Reference Types.');

// Value Types :
//Number
//String
//Boolean
//Symbol
//undefined
//null

// Reference Types
//Object
//Function
//Array


// Primitives
let xz = 10; // They are two independent variable.
let yz = xz;

xz = 20;

console.log('XZ', xz, 'YZ', yz);


// Reference Types
let xz1 = {value: 10}; // They are dependent to each other.
let yz1 = xz1; // The object is stored somewhere else in the memory and the address of that memory location is stored inside that memory variable. The address is copied to yz1. The both variable pointing to the same object in memory.

xz1.value = 20;

console.log('XZ1', xz1, 'YZ1', yz1);

// Primitive are copied by their value.
// Objects are copied by their reference.


// Primitive Type
let number1 = 10;

function increase(number1) {
    number1++; // This number1 variable is completely independent of this above variable number1. It increase value by 1 but after the function number1 will go out of the scope.
}

increase(number1); // When we call increase and pass this number1 variable it's value is copied into this parameter that is local in this function.
console.log('number1', number1);


// Reference Type
let objx = {value: 10};

function increasex(objx) { // This local parameter will point to the same object that we defined above.
    objx.value++;
}

increasex(objx); // When we call increasex and pass objx(Object) it passed by it's reference.
console.log('OBJX', objx); // So this will be 11.










// Adding or Removing Properties.
console.log('Adding or Removing Properties.');

// Objects in JS are dynamic which means after you create them. we can add extra properties in them and delete some properties. You may be wondering why this is useful in real world.
// Imagine you're working with the user object. The client, it can be a web or mobile application is going to send a user object to the server on the server, we get this user object, and then we add additional stuff to it.
// For example we can add a token property that we generate on the fly on the server.  user.token = 'jfiertwi435hh43i45hi3hh3o5iuh34';

// Bcz we don't have classes, we don't need to define these properties ahead of time. Language like C# or Java, everytime we want to implement scnarios like this we have to go back and change our classes.

function Circlexx(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('Draw');
    }
}

const circle1 = new Circlexx(10);

circle1.location = {x : 1}; // Adding properties to Object.
// circle1['location'] = {x : 1}; Another way of adding properties.

// Another use case for using the bracket notation is when you are using the property names that are not valid identifiers. i.e  const propertyName = 'centre-location';
const propertyName = 'location'; // When you want to dynamically access a property name. We have that somewhere in our application now we want to access the location property of a circle. If you're dealing with this dynamically at a time of writing the code,
// We don't know what is the name of that proterty. That is calculted at run time. So we can type something like this down below.
// circle1[propertyName] = {x = 1};
console.log(circle1);


// When you get a user object from a database and you want to return it to the client. but maybe that user object has certain properties you don't want to send to the cient. you don't want to send the password, you don't want to send the credit card info, In that case, you will dynamically delete one or more properties from an object.
delete circle1.location;
// delete circle1['location'];











// Enumerating Properties.
console.log('Enumerating Properties.')

function Circlw(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const circlw = new Circlw(10);

for (let key in circlw) {
    if (typeof circlw[key] !== 'function')
    console.log(key, circlw[key]); // circlw[key] => (Means) circlw of keys.
}

// Another approach to get all the keys in an object. Down below.

// const keyx =  Object.keys(circlw); // (Objects.keys is not a function (Rrror)) This object as a method called keys. we can pass our circlw object here. and this will return all the keys in the circlw as an array.
// console.log(keyx); // Return as an array. In this way we can't separate the properties form methods.


// If we wanna know if an object has a given property. For that we use in operator.
if ('radius' in circlw) {
    console.log('Circle has a radius.');
}











// Abstraction => Means We should hide the details and complexity and show or expose only the essentials.
console.log('Abstraction');

function Circlx(radius) {
    this.radius = radius;

    this.defalultLocation = {x: 0, y: 0};

    this.computeOptimumLocation = function(factor) { // from line 2905: or this methid only be called inside of the draw method. 
        console.log('Abstraction');
    };
    
    this.draw = function() {
        this.computeOptimumLocation(0.1);
        console.log('draw');
    }
}

const circlx = new Circlx(10);

// We have problem with this implementation. When we create the circlx object, circlx.properties(show all properties to consumer) Not all these members should be accessible to me as the comsumer of client of this object.  
// circlx.defalultLocation = false; // What would happen if i set default location to false that's going to completely mess up with this object.

// circlx.computeOptimumLocation(0.1); // If we accidentally call it here, Maybe this will put this object in a bad state and then if i call circlx.draw. we're going to get a weird error at run time.
// So We sould hide impelementation details (defaultLocation & computeOptimumLocation) for Abstraction Method to reduce complexity. We want to expose only the essentials that is the radius and draw method.

// One issue is that every time we change the implementation of that object, you have to modify many different places in your code.
// i.e if computeOptiumLocation method requires an arg with current implementation, bcz we can access this from the outside Everywhere we have used this method, we have to come back and pass an arg where we use it outside of object. so one simple change in the implementation of an object results in a number of changes in your source code.
// In contrast, imagine if this method was not accessible from the outside, then we would not have modify this line where we use computeOL method outside of object. we only modify line 2897 where we called this function in draw method in object.












// Private Properties and Methods.
console.log('Private Properties and Methods.');

// How to implement abstraction? => we can hide certain members of object from the outside.

function Circly(radius) {
    let color = 'red'; // Local variable. can't access from outside. With this technique we can easily hide certain members from the outside.

    this.radius = radius;

    let defalultLocation = {x: 0, y: 0};

    let computeOptimumLocation = function(factor) { // This method only be called inside of the draw method. 
        console.log('Abstraction');
    };
    
    // Don't confuse closure with scope bcz scope is temporary and it dies after it's function execution.
    // Everytime we call draw method these variable x, y will be recreated and reinitialized, and then after this function they will die. So scope is temporary but closure stays there.

    this.draw = function() { // inner function. So this method function will be able to access all the local variables defined here as well as the variable defined in it's parent function.

        let x, y; // These are local variable only avaliable to this fucntion (scope). There scope is limited to this function. When this function is executed this function, x and y will go out of scope.
        // In contrast to scope we have closure which determines what variable will be accessible to an inner function like down below compute
        
        defalultLocation();
        computeOptimumLocation(0.1); // This function will no longer be a method of this new object, so we can access it using this. we have to access it directly here. it will bcz of closure.
        
        this. radius; // If we want to access members of this new circle object, you need to use (this).
        console.log('draw');
    }
}

const circly = new Circly(10);
// circly.properties Now we can only access radius and draw method from outside.












// Getters and Setters. 
// For GET to read the member of the object from outside and For SET to set the value of member of the object.
console.log('Getters and Setters.');

function Circle3(radius) {
    this.radius =  radius;

    let defaultLocation =  {x: 0, y: 0}; // More accurately these are not private members of the circle3 object, bcz technically they are not inside of a circle3 object. there are local variables that we have defined inside of this circle3 function.
    // But from an Object-Oriented point of view, we can refer to them as private members of the circle3 object 
    
    // First Solution but not the best. This kind of syntex is not liked. The fact that we're calling this as a method. It would be nicer if we direct read defalutLocation from outside but shouldn't be able to set this from outside. We can only read it.
    // this.getDefaultLocation = function() {
    //     return defalultLocation;
    // }

    
    this.draw = function() {
        console.log('draw');
    }

    
    // Object.defineProperty(this, 'defaultLocation', { // The first arg is this method is the object that you want to add a new property to the one that is referenced by this. The new circle object and the second arg to SET or GET the member of object. The third object we add a key value pair, the key is get,
    //     get: function() {
    //         return defaultLocation;
    //     },
    //     set: function(value) {
    //         if(!value.x || !value.y)
    //         throw new Error('Invalid location.');
        
    //         defaultLocation = value;
    //     }
    // });
}

const circle3 = new Circle3(10);
circle3.defaultLocation = 1;
// circle3.getDefaultLocation();
circle3.draw();











// Exercise - Stop Watch.
console.log("Exercise - Stop Watch.");

function Stopwatch() {
    let startTime, endTime, running, duration = 0;

    this.start = function() {
        if (running)
        throw new Error('Stopwatch has already started');

        running = true;

        startTime = new Date(); // Current date time.
    };

    this.stop = function() {
        if (!running)
        throw new Error('Stopwatch is not started.');

        running = false;

        endTime = new Date();

        const seconds = (endTime.getTime() - startTime.getTime()) / 1000; // We substracted endTime from startTime. This expression returns milliseconds between these two date objects. So we divide it by 1000 to get the seconds, and then add that to the duration.

        duration += seconds;
    };

    this.reset = function() {
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    };

    this.getDuration = function() {
        return duration;
    }

//     Object.defineProperty(this, 'duration', {
//         get: function() { return duration;}
//     })
}

const stopWatch = new Stopwatch();

// Write in console

// stopWatch.start()
// stopWatch.stop()
// stopWatch.getDuration
// stopWatch.reset()










//                                                                                                              Prototypes












// Inheritance => It enable an object to take on the properties and methods of an other object.
console.log('Inheritance');

// Lets imagine Circle Class has a method called computeOptimumLocation(). let's imagine tomarrow we're going to add another class to our application called square and square also needs this method, computeOptimumLocation and implementation is exactly the same. So we don't wanna repeat this implementation.
// If there is a bug in implementation of this method then we have fix in all classes. To solve this issue. define a new class called shape and put this method there and have circle and square inherit this method of the shape class.

// Shape Class => Base/Super/Parent
// Circle or Square Class => Derived/Sub/Chid
// Inheritance Relationship => IS-A relationship. So, we say circle IS-A shape.

// This is the classical definition of inheritance. So has we know in JS we don't have classes, we only have objects. So that's when prototypical inheritance comes in the picture. 
// So essentially, we have two types of inheritance, classical and prototypical.











// Prototypes and Prototypical Inheritance.
console.log('Prototypes and Prototypical Inheritance.');

// write in console
// let x = {}
// x  see it's property. it has parent or prototypes object. Every object we create in JS has prototypes. The prototype object doesn't have prototype or parent class.
// Every object has a constructor property. Which reference the function that was used to construct or create that object. We also have that object here toString. x.toString().
// Object.getPrototypeOf(x) === Object.getPrototypeOf(y) => true. x and y is object that we created. Both object has same prototype.
// x.__proto__ === y.__proto__ This property is deprecated but we can use in console when debugging your applications.
// Earlier we access toString method on the x object we didn't define this method in our x object bcz x was an empty object. When we access a property or a method on an object. JS engine first look for that proterty or method first on the object itself.
// if it can't fine it then it looks at the prototypes for that object. if it can find that member it will look at the prototype of tha object all the way up to the root object which we call objectBase. This is prototypical inheritance in action.
// When accessing a property or a method on an object. JS engine walk up the prototype chain to find the target member.










// Multi-Level Inheritance.
console.log('Multi-Level Inheritance.');

// Write in console
// let myArray = [];
// myArray
// Extend myArray properties to see __proto__ :Array and extend the __proto__ :Array properties to see methods that we inherit in our child array(i.e myArray). So all these methods are defined in this object which is the prototype or parent for all the arrays in JS.
// In last of arrayBase there is objectBase which is root object in JS.
// myArray is derived from arrayBase(proto Array) and arrayBase is derived from objectBase(proto Object). which is called Multi-Level inheritance.

function ICircle(radius) {
    this.radius = radius;

    this.draw = function() {
        console.log('draw');
    };
}

const icircle = new ICircle(10); // Everytime we call ICircle constructor to create a new circle object, this constructor will create a new object and set it's prototype property to circleBase.
// Object created by a given constructor will have the same prototype.
// icircle inherit from ICircleBase and ICircleBase inherit from objectBase.










// Property Descriptors.
console.log('Property Descriptors.');

let Iperson = {name: 'Subi'};

// for (let keys in Iperson)
// console.log(keys); // If we iterate over Iperson object then we can't use toString() property and  see property and methods or objectBase. The reason is our properties have attibutes attached to them. sometimes these attibutes prevert a property from being enumerated.

// let objectBase = Object.getPrototypeOf(Iperson); // Error(Object.getPrototypeOf is not a function).
// let descripter = Object.getOwnPropertyDescriptor(objectBase, 'toString');
// console.log(descripter); // value: f toString() writale: true(editable), enumerable: false(can't iterate), configurable: true(can delete member). We can set these attibute to our properties.

// Object.defineProperty(Iperson, 'name', {
    // writable: false,
    // enumerable: true
// }); // These attributes are true at default. We can defined our attibutes here like we do properties get set.

// console.log(Object.keys(Iperson)); // Error(Object.keys is not a function) same above can't see properties and methods of objectBase.










// Constructor Prototypes.
console.log('Constructor Prototypes.');

// ICircle.prototype() // Error ICircle.prototype is not a function.

// function Circle(radius) {this.radius = radius; }; = new Object; (Object constructor be called) // functions are objects so they have properties and methods.

// Write is console.
// Circle.prototype // Prototype property. This is the object that will be used as the parent for object created by a Circle constructor.
// myObj.__proto__ (parent of myObj)
// constructor.prototype () // Above and here we will get same result.

// let array = [];
// array.__proto__
// Array.prototype // Above and here have same result => arrayBase.

// circle => extend to see Circle
// Circle.prototype // same result.

// Circle.prototype === circle__proto__











// Prototype Members vs Instance Members.
console.log('Prototype Members vs Instance Members.');

// If we have 1000 objects in the memory, we're going to have 1000 copies of the draw method. if we have a large number of these objects in the memory, we're going to waste alot of memory by keeping copies of all these methods. Solution Prototyical Inheritance.
function PCircle(radius) {
    // Instance members
    this.radius = radius;

    this.move = function() {
        this.draw();
        console.log('move');
    }
}

// Prototype members
PCircle.prototype.draw = function() { // Every constructor has a prototype property. We're going to have a single instance of this prototype in the memory which we call CircleBase.
    // this.move(); We cann't call both way like call method of instance here and call method of proto in instance. otherwise we will get Circle dependency.
    console.log('draw');
}

// PCircle.prototype == c1.__proto__ These two prooperties referencing the same object in the memory that's the CircleBase.

const c1 = new PCircle(1);
const c2 = new PCircle(1);

PCircle.prototype.toString = function() {
    return 'Circle with radius ' + this.radius;
}
// c1.toString() in console











// Iterating Instance and Prototype Members.
console.log('Iterating Instance and Prototype Members.');

function IPCircle(radius) {
    // Instance or Own (called both in some places)
    this.radius = radius;

    this.move = function() {
        console.log('move');
    }
}

const c3 = new IPCircle(3);

// Prototype members
IPCircle.prototype.draw = function() { // It doesn't matter when you change the prototype. we can create a object first then modify the prototype. the draw method will still be availabe on thid circle object. Bcz we're dealing with object references.
    // So we have a single object in memory as soon as we modify that, all the changes are immediatley visible.
    console.log('draw');
}

// Object.keys Only return Instance members.
// console.log(Object.keys(c3)); Error Object.keys is a function.

// For in Loop return all Memvbers (Instance + Prototype)
for(let keys in c3) console.log(keys);

// c3.hasOwnProperty('radius') => true
// c3.hasOwnProperty('draw') => false











// Avoid Extending the Built-in Objects
console.log('Avoid Extending the Built-in Objects');

// We have learned how easy it is to modify the prototype of an object. But below something we should avoid. We should not modify the bulitin objects in JS. Bcz it's possbile tomarrow if we use a library and in that library someone has also extended the array prototype and added the shuffle method but with a different implementation.
// Then you would endup spending the whole day debugging the problem. Also, nothing stops the developers of JS from adding this method of arrays to future versions of JS. Here the lesson. Don't modify object you don't own. bcz somewhere else in a library you might be using, there might be code that is dependent on those methods in the built-in objects.
// If you modify built-in objects, you will create all sorts of issues.

// array.prototype.shuffle = function() {
//     // ...
// }
const arrayx = [];
// array.shuffle();










// Exercise.
console.log('Exercise.');

// We should put methods on the prototype as an optimization technique. If you're working for a large number of objects for the same type, you don't wanna have copies of these methods in memeory. In case of stop watch, we don't really have that requirement. If we gonna use stopwatch in a progarm. we need only one instance.
// So in this case, we don't really need to put these methods on the prototype and as you will see putting these methods on the prototype will lead to another issue.

function Stopwatchx() {
    let startTime, endTime, running, duration = 0;

    // Problem with this is it will pollute the interface of Stopwatch by adding these members to public.
    this.getDuration = function() {
        return duration;
    //     set: function(value) { duration = value;}
    }
    this.getStartTime = function() {
        return startTime;
    }
    this.getEndTime = function() {
        return endTime;
    }
    this.getRunning = function() {
        return running;
    }

}

    // Object.defineProperty(Stopwatchx, 'duration', {
    //     get: function() { return duration;}
    //     set: function(value) { duration = value;}
    // });

Stopwatchx.prototype.start = function() {
        if (this.running)
        throw new Error('Stopwatch has already started');

        this.running = true;

        this.startTime = new Date(); // Current date time.
    };

    Stopwatchx.prototype.stop = function() {
        if (!this.running)
        throw new Error('Stopwatch is not started.');

        this.running = false;

        this.endTime = new Date();

        const seconds = (endTime.getTime() - startTime.getTime()) / 1000; // We substracted endTime from startTime. This expression returns milliseconds between these two date objects. So we divide it by 1000 to get the seconds, and then add that to the duration.

        this.duration += seconds; // Duration is public read-only property. Can't modify like putting this. bcz it doesn't havce setter. first we put setter to it.
    };

    Stopwatchx.prototype.reset = function() {
        this.startTime = null;
        this.endTime = null;
        this.running = false;
        this.duration = 0;
    };

const stopWatchx = new Stopwatchx();

// This is terrible idea to make duration modifyable to public bcz i can modify duration from outside, this will completely mess up the state of this object. Remember this principle, your objexs should always be in valid state. we don't want our objects ot lie, we don't want them to be unreliable and untrustworthy.
// That's why we use abstraction to hide unnecessary complexity and expose very few members that would allow the clients of an object to work with it without messing up the state. So this exercise show that sometime some changes for you code for optimization reasons but endup creating many other issues.
// In this program , we didn't have any performance problems and we know that we were not going to have 1000 instance of Stopwatch in the memory. So putting all these method on the prototype was a very bad idea to start with, it broke the abstraction principle and we're exposing this duration property so we can modify it from outside.
// So essentially this stopwatch object is now useless. 
// Premature optimization is the root of all evils. This is the real example of premature optimization.













//                                                                                                              Prototypical Inheritance











// Creating Your Own Prototypical Inheritance.
console.log('Creating Your Own Prototypical Inheritance.');

function Shape() {
}

Shape.prototype.duplicate = function() {
    console.log('duplicate');
}

function Circlex0(radius) {
    this.radius = radius;
}

// Circlex0.prototype = Object.create(Object.prototype); Before it was like this.
// Circlex0.prototype = Object.create(Shape.prototype); After inherit Circlex0 from Shape object.

Circlex0.prototype.draw = function() {
    console.log('draw');
}

const s = new Shape();
const c0 = new Circlex0(1);











// Resetting the Constructor.
console.log('Resetting the Constructor.');

// Every object in JS has a constructor property, that returns the function that was used to construct or create that object.

// new Circle.prototype.constructor(1) = new Circle(1). in console that return circle object without crating own inheritance.
// In rare circumstances we may get a constructor function somewhere in your application, and you may want to dynamically create an object based on that constructor function.

// When Circle inherit from shape object then we no longer have that constructor property of circle but returning shape function constructor, with what we have now we no longer can create circle object based on this constructor in the dynamic fashion.
// When if we chech new Circle.protoype.constructor() we will get shape object. The reason is we reset the prototype of the Circle to Shapebase object.

// So has a best practice, Whenever we reset the prototype of an object, we should also reset the constructor, like this.

// Circle.prototype.constructor = Circle; in the above topic after 
//  Circlex0.prototype = Object.create(Shape.prototype); After inherit Circlex0 from Shape object.












// Calling the Super Constructor.
console.log('Calling the Super Constructor.');

function Shape0(color) {
    this.color = color;
}

Shape0.prototype.duplicate = function() {
    console.log('duplicate');
}

function Circle01(radius, color) {
    this.radius = radius;

    // Shape0(color) This syntax will not work by calling function bcz the new keyword make empty object and reference this keyword and return value. the shape function this keyword is not referencing.
    Shape.call(this, color) // this keyword referencing the shape function.
}
// Circle01.prototype = Object.create(Shape0.prototype);

const c01 = new Circle01(1, 'red');










// Intermediate Function Inheritance.
console.log('Intermediate Function Inheritance.');

function Shape1() {
    this.color = color;
}
Shape1.prototype.duplicate = function() {
    console.log('duplicate');
}

function extend(Child, Parent) { // This is easily way to prototype any object just by implement a function.
    // Child.prototype = Object.create(Parent.prototype)
    Child.prototype.constructor = Child;
}

function Circle02(radius, color) {
    Shape1.call(this, color);

    this.radius = radius;
}
extend(Circle02, Shape1); // This is how we can prototype any object easily.
Circle02.prototype.draw = function() {
    console.log('draw');
}

function Square() {
    this.size = size;
}
extend(Square, Shape1);










// Method Overriding.
console.log('Method Overriding.');

function Shape2() {
    this.color = color;
}
Shape1.prototype.duplicate = function() {
    console.log('duplicate');
}

function extend(Child, Parent) { // This is easily way to prototype any object just by implement a function.
    // Child.prototype = Object.create(Parent.prototype)
    Child.prototype.constructor = Child;
}

function Circle03(radius, color) {
    Shape2.call(this.color);

    this.radius = radius;
}
extend(Circle03, Shape2); // This is how we can prototype any object easily.
Circle02.prototype.duplicate = function() { // If we have same function or override the function the function that we have in child will appear bcz this is the first pryority.
    Shape2.prototype.duplicate.call(this); // Here Shape.prototype.duplicate() should also work when property or method is not this keyword. Sometime the method or properties should be different for child object from parent object.
    console.log('Circle Duplicate'); // Overriding. 
}










// Polymorphism.
console.log('Polymorphism.');

function Shape3() {
    this.color = color;
}
Shape3.prototype.duplicate = function() {
    console.log('duplicate');
}

function Circle04(radius, color) {
    Shape3.call(this. color);

    this.radius = radius;
}
extend(Circle04, Shape3);
Circle04.prototype.duplicate = function() {
    console.log('Circle Duplicate');
}

// The duplicate function has many implementation or many form that what we call polymorphism.
function Square0() {}
extend(Square0, Shape3);
Square0.prototype.duplicate = function() {
    console.log('Square Duplicate');
}

const shapes = [
    new Circle04(),
    new Square0()
]

for (let shape of shapes)
    shape.duplicate(); // When we encapsulte variables and functions into objects and use inheritance, we can execute many forms of a method using a single line of code. After OOP we can easy implement logic like this.


// Before OOP we have to implement above logic code like this.
// for (let shape of shapes){
//     if (shape.type === 'circle')
//         duplicateCircle();
//     else if (shape.type === 'square')
//         duplicateSquare();
//     else
//         duplicateShape();
// }











// When to Use Inheritance.
console.log('When to Use Inheritance.');
// Inheritance is not the only solution to enable code reuse. There is another technique called composition. In JS we can use mixins to achieve composition.

// To use inheritance to solve the problem of code reuse, we have to be really careful about using it, bcz it can make your source code complex and fragile. so don't use inheritance just for the sake of using it. Specially in small projects. keep it simple.
// Start with simple objects and then if we see a number of those objects share similar features, then perhaps you can encapsulte those features inside of a generic object and use ineritance.
// let see problem with inheritance. if we have animal object with two method, eat() and walk() and we have two objects that derive from animal. Person and Dog. tomarrow we're going to introduce a new object calle goldfish that derives from animal.
// Our hierarchy is broken, why? bcz goldfish can't walk, they can swim. So we've got the hierarchy wrong. this is something that happens quite often, specially amongst inexperianced developers, so to sove this problem, we need to change our hierarchy,
// On the top we should have the animal object with eat method uder that we're going to have two objects. mammal and fish. Mammal can walk fish can swim. and we can have person and dog derive form Mammal and goldfish from Fish.
// Result of introducing a new king of animal that is goldfish, we had to change our hierarchy and now this hierarchy is more complex then what we had before. Now what if we have 10 more animals then this hierarchy would get more and more complex and we have to constantly go back and forth to determine the right place to implement a method.
// Avoid creating inheritance hierarchies bcz they are very fragile. if we want to use inheritance, keep it to one level, do not go more than one level above of inheritance. Famous saying that says favor Composition over Inheritance.
// With Composition, instead of having the complex hierarchy like above, we can compose a few objects together to create a new object and this technique gives us great flexibility. So back to our previous example instead of using inheritance, we can define various features for our animals as independent objects. So we can have three objects like canWalk(), canEat() and canSwim().
// Each of these objects are plain JS objects with certain properties and methods. Now we want to have a person object to simply compose canWalk() and canEat() to create a person object. Tomarrow we want to introduce a GoldFish object. We can compose, canEat() and canSwim together to produce a GoldFish.
// So we don't have a hierarchy and we can come up with any combination of these objects to create new objects. In JS, we can use mixins to achieve composition.











// Mixins.
console.log('Mixins.');

function mixin(target, ...sources) { // Here ...sources is rest operator bcz we don't know how many object we are assigning. But this rest operator turn objects into array.
    Object.assign(target, ...sources); // Here ...sources is spread operator we are using bcz Object.assign doesn't accept array so we spread it multiple arguments(objects).
}

const canEat = {
    eat: function() {
        this.hunger--;
        console.log('Eating');
    }
}

const canWalk = {
    walk: function() {
        console.log('Walking');
    }
};

const canSwim = {
    swim: function() {
        console.log('Swim');
    }
};

function Person() {
}

// const person = Object.assign({}, canEat. canWalk); can be assign to empty object and save into another object person.
// Object.assign(Person.Prototype, canEat. canWalk); // We can assign these two simple object to construction function.
// mixin(Person.Prototype, canEat. canWalk);

const person0 = new Person();
console.log(person0);

function GoldFish() {
}

// Object.assign(GoldFish.prototype, canEat, canSwim);
// mixin(GoldFish.prototype, canEat, canSwim);

const goldfish = new GoldFish();
console.log(goldfish);










// Exercise Prototypical Inheritance.
console.log('Exercise Prototypical Inheritance.');

function HtmlElement() {
    this.click = function() {
        console.log('Clicked');
    };

    // this.render = function() {
    //     console.log('HtmlElements');
    // }
};

HtmlElement.prototype.focus = function() {
    console.log('Focued');
}

const h = new HtmlElement();
console.log(h.click());
console.log(h.focus());


function HtmlSelectElement(items = []) { // We initialized this parameter to empty array which we can do in ES6.
    // this.items = items || []; Before ES6 we will do like this if the items define we will use that otherwise we would use empty array. 
    this.items = items;

    this.addItem = function(item) {
        this.items.push(item);
    };

    this.removeItem = function(item) {
        this.items.splice(this.items.indexOf(item), 1);
    }

    this.render = function() { // This is for the below Exercise.
        return `
        <select>${this.items.map(item => `
        <option>${item}</option>`).join('')}
        </select>`;
    } // we use join('') to join it with empty string otherwise it will join with (,). and how loop in template litteral.
}

HtmlSelectElement.prototype = new HtmlElement(); // We have to prototype HtmlSelectElement from instance of HtmlElement bcz we click() method we need is in the instance of HtmlElement().
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

// HtmlSelectElement.prototype.constructor is similar to new HtmlSelectElement();












// Exercise - Polymorphism.
console.log('Exercise - Polymorphism.');

function HtmlImageElement(src) {
    this.src = src;

    this.render = function() {
        return `<img src="${this.src}" />`; // In ES6 we ues backtick for template string for code simple. For pass arg we use ${} and whatever we put here will be placed int string at runtime.
        // return '<img src="' + this.src + '" />'; Before ES6 we implement code like this.
    }
}
HtmlImageElement.prototype = new HtmlElement(); // HtmlElement() from above Exercise.
HtmlImageElement.prototype.constructor = HtmlImageElement;


const elements = [
    new HtmlSelectElement([1, 2, 3]),
    new HtmlImageElement('http://')
];

for(let element of elements){
    console.log(element.render());
}















//                                                                                                          ES6 Classes













// ES6 Classes.
console.log('ES6 Classes.');

class Circle5 {
    constructor(radius) {
        this.radius = radius;
        this.move = function() {
            console.log('Move');
        }
    }

    draw() { // In ES6 Classes Out of constructor we don't have to write fucntion in function syntax. 
        console.log('draw');
    }
}

const circle5 = new Circle5(1);
console.log(circle5.radius);












// Hoisting.
console.log('Hoisting.');

sayHix(); // Like this, no Error.
// Function Declaration => Function Declaration are hoisted means raised to the top. we can call it before decalared.
function sayHix() {} // We don't put semi-colon to the end of function.

// Function Expression => They are not hoisted. So can't be called before declared. In function expression we assign function to a variable.
const sayGoodbye = function() {}; // In Function Expression we put semi-colon to end of function like below perimitive.
const number0 = 1; // Same here we can't call number before this line.


// Both Class Declaration and Expression are not Hoisted.
// Class Declaration
class Circle6 {
}
// Class Expression
const Squarex = class {
};











// Static Methods.
console.log('Static Methods.');

class Circle7 {
    constructor(radius) {
        this.radius = radius;
    }

    // Instance Method => This method called instance bcz it available on an instance of a class, which is an object.
    draw() {
    }

    // Static Method => It is not tied to a particular circle object. This method will no longer be available on a circle object.
    static parse(str) { // With this method we are not working with a particular circle object. We're working with a circle itself. So call static method we don't have to create an instance of a class.
        const radius = JSON.parse(str).radius;
        return new Circle7(radius);
    } // We use static methods to create utility function that are not tied to a particular object.
}

// const circle7 = new Circle7(1);

const circle7x = Circle7.parse('{"radius": 1}'); // With static method we don't have to create a circle object bcz we don't have a circle object to start with. we have json string. So pass valid json object here.
// circle7.parse So this doesn't exist to object.
// Circle7.parse(); // But it's accessible on the class reference.
console.log(circle7x);


// i.e
// Math. give us method. it look like class Math {} that has these static method like below.

class Mathx { // We differ to Math to bcz don't mess with library class.
    static absolute(value) {
        //...
    } 
}
Mathx.absolute()









// In JS we have strick mode which will be more sensitive so it will do more error checking if there are errors that silently fail, it's going to turn them into exceptions and aldo it will change the behavior of this keyword.

// The This Keyword.
console.log('The This Keyword.');

'use strict';

const Circle8 = function() {
    this.draw = function() { console.log(this);}
};

const c8 = new Circle8();
// Method Call
c8.draw(); // This will reference to the object bcz of this keyword in draw method. We are calling method on object.

const draw = c8.draw; // Getting reference of this method.
console.log(draw);// It will show the function
// Function Call
// draw(); // When use strict mode this should not point to global object. It will set to undefined and the reason is to prevent us form accidentally modifying the global object.
//draw(); is Stand alone function that is not part of an object. by default this keyword will point to global object which is window in the browser and global in node.



class Circle9  {
    draw() {
        console.log(this);
    }
}

const c9 = new Circle9();
const draw9 = c9.draw;
draw9(); // It will not show global object but undefined bcz by default the body of our classes are executed in the strip mode.
// And this will prevert us from accidentally modifying  the global object.











// Private Members Using Symbols.
console.log('Private Members Using Symbols.');

const _radius = Symbol(); // Symbol is function which get unique value every time. to use it make property private.
const _draw = Symbol();

class Circle10 {
    constructor(radius) {
        this[_radius] = radius; // symbol make kind of private properties and method.
        // this.radius = radius;
        // this['radius'] = radius; // This and above both are same but two way to access to object.
        // this._radius = radius; Some people use this approach to define private properties or method but this is a terrible approach bcz we can still access this from outside.
    }

    [_draw]() {} // [_draw] In ES6 we have this new feature called computed property names. So we can add brackets and inside of these brackets we add an expression.
    // what that exprssion is evaluated the resulting value will be used as the name of a property or method. This is how we implement private method.
}

const c10 = new Circle10(1);
// const key = Object.getOwnPropertyNames(c10); // We will get error but actually it has empty array.
// const key = Object.getOwnPropertySymbols(c10)[0]; // It will get the value
// console.log(c[key]);
c10.radius
// c10._radius










// Private Members Using WeakMaps.
console.log('Private Members Using WeakMaps.');

const _radiusx = new WeakMap(); // A WeakMap is essentailly a dictionary where keys are objects and values can be anything. The reason we call them WeakMaps is bcz the keys are Weak. So if there are no references to these keys, they will be garvage collector.
const _movex = new WeakMap();
// const privateProps = new WeakMap(); // Why don't we create just one WeakMap for all the private members but this is not the best way in by view. It is little bit polluted. I prefer to work with each private member independently.

class Circle11 {
    constructor() {
        // privateProps.set(this, {
        //     radius: radius,
        //     mov: () => {}
        // });

        // privateProps.get(this).radius; // If we use single WeakMap. to access a member we need to do like this. I personally don't like this approach.


        _radiusx.set(this, radius); // The first arg is this keyword this is key the instance of circle object.

        _movex.set(this, () => {
            console.log('Move', this); // To access the instance of the circle object by this keyword. Instead of using a regular function, we can use an arrow function. Bcz Arrow FN use the this value of their containing function. this not gonna rebound. it gonna inherited from what we have in this constructor.
        }) // By this keyword we can access to all public and private members.

        // _movex.set(this, function() {
        //     console.log('Move', this); // This keyword is undefined bcz the body of class run in strict mode.
        // })
    }

    draw() { // To make private members public.
        console.log(_radiusx.get(this));

        _movex.get(this)(); // So this keyword return a function so we call that function by ();

        console.log('Draw');
    }
}

const c11 = new Circle11(1);

c11.draw();












// Getters and Setters.
console.log('Getters and Setters.');

const _radiusy = new WeakMap();

class Circle12 {
    constructor(radius) {
        _radiusy.set(this, radius);
    }

    get radius() { // // It's look like method but we can access it like a property. That how we read private member. It's more cleaner and easiler in ES6.
        return _radiusy.get(this);
    }

    set radius(value) { // That's how to set private member.
        if (value <= 0) throw new Error('Invalid Radius');
        _radiusy.set(this, value);
    }
}

const c12 = new Circle12(1);
c12.radius = 11;
console.log(c12.radius);












// Inheritance.
console.log('Inheritance.');

class Shape4 {
    constructor(color) {
        this.color = color;
    }

    move() {
        console.log('move');
    }
}

class Circle13 extends Shape4 {
    constructor(color, radius) { // In the derived class constructor mention the parent class constructor first to initialize this base object.
        super(color); // If we inherit form another class and dont use super keyword it will throw error. Must call super constructor in derived class before accessing 'this' or returning from derived constructor at new Circle.
        this.radius = radius;
    }

    draw() {
        console.log('draw');
    }
}

const c13 = new Circle13('White', 13);
console.log(c13);











// Method Riding.
console.log('Method Riding.');

class Shape5 {
    move() {
        console.log('Move');
    }
}

class Circle14 extends Shape5 {
    move() {
        super.move(); // If we don't use super for to use Shape move then only Circle move will be called when call Circle method move.
        console.log('Circle Move')
    }
}

const c14 = new Circle14();
console.log(c14.move());










// Exercise.
console.log('Exercise.');

const _items = new WeakMap();

class Stack {
    constructor() {
        _items.set(this, []);
    } // Out of constructor, members are in prototype of Stack.

    push(obj) {
        _items.get(this).push(obj);
    }

    pop() {
        const items = _items.get(this); // Get access to Array in contructor.

        if (items.length === 0) throw new Error('Stack is Empty');
        return items.pop();
    }

    peek() {
        const items = _items.get(this);

        if (items.length === 0) throw new Error('Stack is Empty.');

        return items[items.length - 1];
        // return items.findLast();
    }

    get count() { // It's look like method but we can access it like a property.
        return _items.get(this).length;
    }
}

const stack = new Stack();












//                                                                                                              ES6 Modules













// Modules.
console.log('Modules.');

// Maintainbility.
// Reuse.
// Abstract.

const _radiusz = new WeakMap();

class Circle15 {
    constructor(radius) {
        _radiusz.set(this, radius);
    }

    draw() {
        console.log('Circle with Radius' + _radiusz.get(this));
    }
}

const c15 = new Circle15(17);
console.log(_radiusz.get(c15)); // We can get private radius value outside of the object by accessing to WeakMap. We can use module to not make it happen.
c15.draw();

// Module Formats
// The popular module formats we have are AMD => Asynchronous Module Definition and this primarily used in browser application.
// We also have CommonJS which used in Node.js
// We have UMD which stands for universal module definition and this can be used both in the browser and in node.
// We use these modules formats in ES5, but as of ES6 JS natively supports a module format.
// Out of this we're going to focus only on two formats. CommonJS bcz that's used in Node, and ES6 modules bcz that's used in browsers.
// We don't need to learn about AMD or UMD unless we're maintaing a legacy application that is bulit around these module formats.












// CommonJS Modules.
console.log('CommonJS Modules.');

// Things that are highly related, they go together,this is what we call cohesion in software engineering.

// CommonJs format use in Node.js
// const Circle16 = require('./circle');

// const c16 = new Circle16(17);
// c16.draw();

// In terminal write $node Practice.js











// ES6 Modules.
console.log('ES6 Modules.');

// ES6 Module Format.
// import {Circle16} from './circle.js'

// const c16 = new Circle16;
// c16.draw();










// ES6 Tooling.
console.log('ES6 Tooling.');

// If we use JS in node then we don't worry about it but if we use JS in browser then use these tool.
// When we use modern JS we need two kinds of tools, a tanspiler and a bundler.
// Transpiler is the combination of two words. Translator and Compiler. It's a tool that we give it our modern JS code and it will convert out JS code into code that all of our browsers can understand. like Babel. Modern -> ES5.
// Module Bundler is responsible for combining all our JS file into a single file, which we call a bundle. There are many module bundlers out there, but the most popular one is WEBPACK.
// So we give all our JS files to Webpack, Webpack will combine them into a single file. it will minify our code by getting rid of all the white space and comments and then it will uglify our code which basically means it will shorten the name of our identifiers, like classes, functions, objects and so on.
// So this will reduce the size of the bundle that we will serve to the client.











// Babel.
console.log('Babel.');

// We need Node for NPM => Node Package Manager. NPM is use for install 3rd party library and tools.
// Open a CMD and create folder mkdir es6-tooling then goto it folder cd es6-tooling then initialize a node project in this folder to do that we run npm init --yes. What this command does it's create a file in his folder called package.json. Which is an identification for our application. 
// Now we're ready to install Babel, => Then run npm i babel-cli@6.26.0 babel-core@6.26.0 babel-preset-env@1.6.1.
// babel-cli => command line interface is the tool that we run from the command line, like npm. So we run like command line and give it the name of our JS file. then it will convert or compile that JS code.
// babel-core => is basically the core of babel where all the logic for transpiring code is implemented.
// babel-perset => In babel we have a plugin for every new JS feature starting from ES6, like let and const in ES6, there is a plugin for that. you want to use arrow function in ES6, there's a plugin for that. 
// Every new feature in ES6 and newer versions has a corresponding plugin. babel-preset has the combination of all these plugins starting from ES6.
// Finally we need to supply a flag here, --save-dev. and this means we're going to install these as development dependencies. So they are not going to be part of our application, they are not deployed to the function, they are purely on the development machine. Now open up VS code. => run (code .).
// Create JS file and write some ES6 code. and use babel to convert this to code that all browsers can understand. The first thing we need to do is go to package.json. In the file in scripts section to add new script.
// "babel": "babel --presets env index.js -o build/index.js". babel for commmand line interface that we run from the terminal, then we add --presets, the perset we're gonna use is env, after that we add the name of our source file which is index.js and then we add --o, output is going to be in a folder like build and then index.js.
// Now we have to create this folder bulid otherwise we gonna get error. So basically the scripts that we define under the script section, we can run them using npm. goto terminal and run (npm run babel) this will execute this command on the terminal. it's faster and easier to type npm run babel, as suppose to this complex command in script section.
// It's stored in build/index.js. then see this file that convert ES6 to ES5 to all browser undertand the code.
// This is just the basics of babel. There is way more to babel. One problem here is we only compiling index.js but our application might have hunderds or thousands of files, So we don't want to repeat this for every file. That's where we use WebPack so with webpack we're going to get all our JS files and put them in a bundle. however before we putting in the bundle, we'er going to run each file through babel.













// Webpack.
console.log('Webpack.');

// babel was purely for demonstration. It's not the workflow we use when building real world applications.

// Open cmd or terminal and run this command (npm i -g webpack-cli@2.0.14)
// Now in our project folder run (webpack-cli init) then webpack gonna ask some questions based on these webpack create a webpack configuration file.
// Now create package.json file by run (npm init --yes). In script section add("build": webpack -w) -w for watch when we change someting we don't have to run build everytime.
// Now to bundle our application run (npm run build). Now we can see webpack create main.bundle.js used by multiple JS file. Now our code is uglified means shortend. basically ES5 code. Now we have one js file serve to client and also change script src in HTML to main.bundle.js.
// Now we don't have to mention .js in import.





//                                                                                                    ---The End---