// VARIABLES (let, const, var)
// declation var_name = value;

// DATA TYPES: Type of value you put in a variable
// Primitive Data Types: String, Number, Boolean, Null, Undefined,
const SITE_NAME2: string | number = "Guess the Number";

const POOL_OF_NUMBERS2: (number | string)[] = [1, 2, "jOHN", 3, 4, 5, 6, 7, 8, 9, 10];

const MAX_ATTEMPTS2: number = 5;

let sound2: boolean = true; // true or false

let guess2: null | number = null; // undefined

// Non-Primitive Data Types: Object, Array, Function
var history2: string[] = [];

let player2: {
  name: string;
  age: number;
  city: string;
  isAdmin: boolean;
  isActive: boolean;
  isGuest: null | number;
} = {
    name: "John",
    age: 20,
    city: "New York",
    isAdmin: false,
    isActive: true,
    isGuest: null,
  };


const logThisToConsole2 = (): string => {
  console.log(this);
  return "Hell";
};

function getPlayerName2(): string {
  // function declaration
  return player2.name;
}
