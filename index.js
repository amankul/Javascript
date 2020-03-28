"use strict";
let name = '"from separate JS file"'; //escape double quote

// JS is dynamic language. Type of var(string,no, bool, undefined) changes according to value at runtime.

const INTERESTRATE = 0.3;
let flag = true;
// prefer let bcoz it doesn't allow declare same variable twice. Also var decl is global even if done inside function
//INTERESTRATE = 1.1;
console.log(name + " " + typeof flag);

// Reference types in Js are arrays, objects and functions

let person = {
  name: "Amit", // properties in key:value pairs
  "the age": 30,
  setAge(newName) {
    // objects can have func
    "use strict";
    this.name = newName;
  }
};

person.address = "Austin"; // add property to object

person.name = "John"; // Dot notation
delete person.name; // delete property
let selection = "the age";
person[selection] += "Mary"; // Bracket notation used when property is not known at runtime or it has space
person.setAge("Hasbro");
console.log(person + person.hasOwnProperty(name));

// Arrays are ds to list items of similar types. in JS arrays expand and shrink dynamically

let selectedColors = ["red", "blue", [18, 302]];

selectedColors[2][1] = 333; // can't be done for strings due 2 immutability
selectedColors.push("green");
let popEx = selectedColors.pop(); // push,pop add removes last element of array
let shiftEx = selectedColors.shift();
selectedColors.unshift("uno"); // shift,unshift add removes first element of array
console.log(
  JSON.stringify(selectedColors) + "  " + typeof selectedColors + "  " + popEx
); // arrays(indexes) are necessarily objects(properties)

function square(num) {
  // these are parameters, scope within function

  let flag = "STR"; // with no let or var flag becomes global
  console.log(flag); // local var takes precedence over global
  flag = "MODIFIED FLAG";
  return num * num;
}
console.log(square(2)); // these are arguments

let crlf = "First line\t Tab \n Second Line \r See \f What"; // CRLF take cursor back to start of line, \f new page
console.log(crlf[crlf.length - 1] + crlf); // get chars of string

function fun() {
  if (typeof flag != "undefined") {
    console.log(flag); // scope of var declared in function
  }
}

fun();

/*
STRICT EQUALITY
3 === 3 TRUE
3 === '3' FALSE   
== does type conversion before comparison so ret TRUE in both cases
switch case uses strict equality operator
*/

let count = 0;
function blackjack(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }

  return count + " " + (count > 0 ? "BET" : "HOLD");
}

blackjack(2);
blackjack(5);
blackjack(2);
blackjack("K");
blackjack("A");
console.log(blackjack(4));

// complex objects

const myPlants = [
  {
    type: "flowers",
    list: ["rose", "tulip", "dandelion"]
  },
  {
    type: "trees",
    list: ["fir", "pine", "birch"]
  }
];

console.log(myPlants[1].list[2]);

var prod = multiplyAll([
  [1, 2],
  [3, 4],
  [5, 6, 7]
]); // Loops
console.log(prod + "Random between 0 and 19 " + Math.floor(Math.random() * 20));
function multiplyAll(arr) {
  var product = 1;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  return product;
}

console.log(parseInt("100111", 2)); // base 2
Object.freeze(myPlants); // makes an object read only

// Convert anonymous function to Arrow function

var myConcat = function(arr1, arr2) {
  return arr1.concat(arr2);
};

var myConcatArrow = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcatArrow([1, 2], [3, 4, 5])); // return variable same as function name?

// const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x*x) //

// REST operator converts args into an array

const sum = (function() {
  return function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 4, 5, 7)); // works with any # of args

const arry1 = ["jan", "feb", "mar", "apr"];
let arry2, arry3;
arry3 = arry1;
arry2 = [...arry1];
arry1[0] = "potato";

console.log(arry2 + "\n" + arry3); // arr3 and arr1 are not separate. arr2 made copy with spread operator

// Destructuring objects
var voxel = { x: 1, y: 2, z: 3 };
var { x: a1, y: a2, z: a3 } = voxel; // a1=1, a2=2, a3=3

(() => {
  "use strict";
  [a3, , a1] = [a1, a2, a3]; // array destruc
})();
console.log(a1); //a1 swapped with a3

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function removeFirstTwo(list) {
  const [, , ...restSource] = list; // REST operator
  return restSource;
}
console.log(removeFirstTwo(source));

const half = (function() {
  return function half({ y, z }) {
    // destruc to pass object as args
    return (y + z) / 2.0;
  };
})();

console.log(half(voxel));

const greeting = ` Hello, my name is ${arry1[0]} !
 I am ${voxel.z} years old`; // template literal or  backtick can use variables
console.log(greeting);

function makeClass() {
  class Thermostat {
    constructor(temp) {
      this._temp = (5 / 9) * (temp - 32); // _variables are private
    }
    get temperature() {
      return this._temp;
    }
  }
  return Thermostat;
}

setTimeout(function() {
  console.log("logged after 5 sec"); // callback executed after timeout
}, 5000);

/*
Call backs are pushed to task queue when timeout. event loop checks when stack is empty and then picks 
task queue items in order. Hence logged after 5 sec will always be at last even if timeout = 0
*/

const Thermostat = makeClass();
const thermos = new Thermostat(100);
let temp = thermos.temperature; // getter, setter are treated as properties so no ()
console.log(temp); // F to C

// lot of callbacks can be messy so promises can be used replace callbacks

let promise = new Promise((resolve, reject) => {
  let a = 1 + 1;
  if (a === 3) {
    resolve("Success");
  } else {
    reject("Failed");
  }
});

promise
  .then(message => {
    console.log("In then" + message); // then will catch resolves , catch does same for rejects
  })
  .catch(message => {
    console.log("In Catch " + message); // then will catch resolves , catch does same for rejects
  });

/*
  If we have one promise waiting on another we can't block execution until first completes.
Solution is to  nested promises 
e.g promise. then {}. then 
But code gets messy.
Use Async/Await here
  */

const getData = async () => {
  var data = "Hello World"; // If this is network call
  return data;
};
console.log(1);
getData().then(data => console.log(data));
console.log(2);
