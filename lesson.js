// VARIABLES (let, const, var)
// declation var_name = value;

// DATA TYPES: Type of value you put in a variable
// Primitive Data Types: String, Number, Boolean, Null, Undefined,
const SITE_NAME = "Guess the Number";

const POOL_OF_NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const MAX_ATTEMPTS = 5;

let sound = true; // true or false

let guess = null; // undefined

// Non-Primitive Data Types: Object, Array, Function
var history = [];

let player = {
  name: "John",
  age: 20,
  city: "New York",
  isAdmin: false,
  isActive: true,
  isGuest: null,
};


const logThisToConsole = () => {
  console.log(this);
};

function getPlayerName() {
  // function declaration
  return player.name;
}

const name = getPlayerName();

// Understand Hosting | Scope
// var is hoisted to the top of the scope
// let and const are not hoisted to the top of the scope
// function declaration are hoisted to the top of the scope

a = 3; // Number 3
a == 3; // true or false
a === 3; // is a number 3

// OPERATORS:
// Arithmetic Operators: +, -, *, /, %, **
// Assignment Operators: =, +=, -=, *=, /=, %=, **=
// Comparison Operators:
// Equal to: ==
// Strict equal to: ===
// Not equal to: !=
// Strict not equal to: !==
// Greater than: >
// Less than: <
// Greater than or equal to: >=
// Less than or equal to: <=

// Logical Operators: &&, ||, !

// Unary Operators: typeof, delete, void, new, this, instanceof, in, instanceof
// testing delete on player object
delete player.isGuest;

// Ternary Operators: ?:

// Loops:
// for loop
// while loop
// do while loop
// ASSIGNMENT:
// for in loop
// for of loop

// Methods: Browse methods for Objects, Arrays, string etc

// SYNC/ASYNC:
// Async/Await, Try/Catch, Promise, Fetch, XMLHttpRequest,


// ES6:
// let, const, arrow functions, template literals, destructuring, spread operator, rest parameters, default parameters,

// JSON:
// JSON.parse()
// JSON.stringify()
