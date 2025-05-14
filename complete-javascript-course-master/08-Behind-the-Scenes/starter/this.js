'use strict';

// //the this keyword is dynamic its not static
// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAge(2002); //for a regular function call "this" keyword would be undefined in strict mode as we will always use strict mode it will be undefined for most of the cases

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this); // it gives window in "this" case as the arrow function doesnt get its own "this" keyword so it uses the lexical "this" keyword of the global scope and the global scopes "this" keywoprd points to window
// };
// calcAgeArrow(2002);

// const rohan = {
//   year: 2002,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };
// rohan.calcAge();

// const poojitha = {
//   year: 2017,
// };

// poojitha.calcAge = rohan.calcAge; //this is called method borrowing
// poojitha.calcAge();

// const r = rohan.calcAge;
// r();

// const rohan = {
//   firstName: 'rohan',
//   year: 2002,
//   calcAge: function () {
//     console.log(this);
//     console.log(2025 - this.year);
//   },

//   greet: () => console.log(`hey ${this.firstName}`),
// };

// rohan.greet();
// console.log(this.firstName);

// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(2, 3);
// addExpr(2, 4, 8, 6);

// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };

// addArrow(2, 5, 8);
// console.log((40 * 4) / 5);

///////////////////////////////////////////////////////////////////////////////////
// object references in practise(shallow vs deep copies)
const jessica1 = {
  firstName: 'jessica',
  lastName: 'williams',
  age: 27,
};

const marriedJessica = jessica1; //its not a new memory location but it is just the refereence of the original jessicas location and hence when we change the last name for one variable both of the variables values change.
marriedJessica.lastName = 'davis';

console.log('before:', jessica1);
console.log('after:', marriedJessica);

const jessica = {
  firstName: 'jessica',
  lastName: 'williams',
  age: 27, //if we copy only the primitive datatypes like firstName, lastName, age its is called shallow copy. family is anpther object so its a nested object.
  family: ['rohan', 'bob'],
};

const jessicaCopy = { ...jessica }; //... is the spread operator which places all the properties of jessica object in this new object

//shallow copy
// jessicaCopy.LastName = 'davis';
// console.log(jessica, jessicaCopy);

// jessicaCopy.family.push('mary');
// jessicaCopy.family.push('john');

// console.log('before:', jessica);
// console.log('after:', jessicaCopy);

//deep copyor clone
const jessicaClone = structuredClone(jessica); //its a very important function structuredClone
jessicaClone.family.push('mary');
jessicaClone.family.push('john');

console.log('before : ', jessica);
console.log('after', jessicaClone);
