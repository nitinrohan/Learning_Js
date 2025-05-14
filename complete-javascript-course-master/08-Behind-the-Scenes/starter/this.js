'use strict';

//the this keyword is dynamic its not static
console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(2002); //for a regular function call "this" keyword would be undefined in strict mode as we will always use strict mode it will be undefined for most of the cases

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this); // it gives window in "this" case as the arrow function doesnt get its own "this" keyword so it uses the lexical "this" keyword of the global scope and the global scopes "this" keywoprd points to window
};
calcAgeArrow(2002);

const rohan = {
  year: 2002,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
rohan.calcAge();

const poojitha = {
  year: 2017,
};

poojitha.calcAge = rohan.calcAge; //this is called method borrowing
poojitha.calcAge();

const r = rohan.calcAge;
r();
