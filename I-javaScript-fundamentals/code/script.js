// 2. Hello world
console.log("Hello world");

// 3. Variables and data types

// 3.2. Variables
/*
var a = 1; // var is the old way to declare a variable
let b = 2; // let is the new way to declare a variable (from ES6)
const c = 3; // const is used to declare a constant variable
*/

/*
var a = 1;
var a = 2;
console.log(a); // 2

let b = 1;
let b = 2; // SyntaxError: Identifier 'b' has already been declared

const c = 1;
c = 2; // TypeError: Assignment to constant variable.
*/

// 3.2.1. Variable scope

/*
var a = 1; // global variable

function test() {
    var b = 2; // local variable
    console.log(a); // 1
    console.log(b); // 2
}

test();
console.log(a); // 1
console.log(b); // ReferenceError: b is not defined
*/

/* 
var i = 1;
for (var i = 0; i < 5; i++) {
    console.log(i); // 0 1 2 3 4
}
console.log(i); // 5

let j = 1;
for (let j = 0; j < 5; j++) {
    console.log(j); // 0 1 2 3 4
}
console.log(j); // 1
*/

/*
console.log(a); // undefined (not an error)
var a = 1;

console.log(b); // ReferenceError: b is not defined
let b = 1;
*/

// 3.2.4. typeof operator

var a = 1;
var b = "Hello World!";
var c = true;

console.log(typeof a); // number
console.log(typeof b); // string
console.log(typeof c); // boolean

var a = null;
var b = NaN;
var c = {};

console.log(typeof a); // object
console.log(typeof b); // number
console.log(typeof c); // object


// 3.2.5. Type Conversion


var a = 1; // number
var b = "Hello World!"; // string
var c = true; // boolean

a = b; // a is now a string
c = 3; // c is now a number

var a = 1;
var b = "2";

console.log(a + b); // 12
console.log(a + Number(b)); // 3


// 3.2.6. Number
var a = 123;
var b = 123.456;
var c = "Hello World!";

var result1 = a + b; // 246.456
var result2 = a + c; // 123Hello World!

var result3 = (a / c); // NaN

console.log(typeof result3); // number

// 3.2.8. Object

var person = {
   name: "John",
   age: 30,
   city: "New York"
 };

 
console.log(person.name); // John

person.name = "Jane";

console.log(person["name"]); // Jane

// 3.2.8.1 Array
var fruits = ["Apple", "Banana", "Orange"];

console.log(typeof fruits); // object
console.log(fruits) 
/* ["Apple", "Banana", "Orange"]
   0: "Apple"
   1: "Banana"
   2: "Orange"
   length: 3
   __proto__: Array(0)
*/
console.log(fruits[0]); // Apple
console.log(fruits[1]); // Banana
console.log(fruits[2]); // Orange

// ### 4.2. Comparison Operators

var a = 1;
var b = 2;

console.log(a == b); // false
console.log(a != b); // true
//
var a = 1;
var b = "1";

console.log(a == b); // true
console.log(a === b); // false
// ### 4.3. Logical Operators
var a = 1;
var b = 2;

console.log(a == 1 && b == 2); // true
console.log(a == 1 || b == 3); // true
console.log(!(a == 1)); // false

// ## 5. Logic and Control Flow
var age = 19;
var condition = age >= 18;

if (age >= 18) {
  /* This block of code will be executed if the condition is true */
  console.log("You are an adult");
} else if (13 <= age && age < 18) {
  /* This block of code will be executed if the condition is false */
  console.log("You are a teenager");
} else {
  /* This block of code will be executed if the condition is false */
  console.log("You are a child");
}
//
var i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

//

switch (day) {
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
      console.log("Saturday");
      break;
    case 7:
      console.log("Sunday");
      break;
    default:
      console.log("Invalid day");
  }

// ## 6. Functions

function sayHello() {
    console.log("Hello");
  }
  
  sayHello();

//
var name = "John";

function sayHello(name) {
    console.log("Hello ${name}");
}

var sayHello = (name) => {
    console.log("Hello ${name}"); // Hello John
  }
  
  sayHello("John");