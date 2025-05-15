/*
console.log(40+8+23-10);

console.log('jonas');
console.log(23);

naming conventions
let js="amazing";
let rohan_bheem="RB";
let $function="27";
let firstName="rohan";
let person="rohan";  
let name="rohan"; //valid but not recommended.
let 3years=3; // invalid
let function="rohan"; // invalid
let new="rohan"; // invalid invalid gives unexpect token error"new"
let jonas&marry="jonas"; // invalid gives unexpect token error"&"
let jonas-marry="jonas"; // invalid
let Person='rohan'; //valid but not recommended.

let PI=3.14; //constant and can be writtten in uppercase\
let myFirstJob="programmer";
let myCurrentJob="teacher";

let job1="programmer";
let job2="teacher";
*/

// assignment 1 
// let country="India";
// let comtinent="asia";
// let population= 1400000000000000000000000;


// console.log(country);
// console.log(comtinent); 
// console.log(population);



// DATATYPES
// 1. Number 
// 2. String
// 3. Boolean
// 4. Undefined VALUE TAKEN BY VARIABLE BUT NOT ASSIGNED ANY VALUE
// 5. Null VALUE TAKEN BY VARIABLE BUT NOT ASSIGNED ANY VALUE
// 6. SYMBOL : VALUE THAT IS UNIQUE AND CANNOT BE CHANGED [NOT USEFUL FOR NOW]
//7. BigInt : VALUE THAT IS USED TO STORE LARGE NUMBERS 
// 8. Object : COLLECTION OF KEY VALUE PAIRS 
// 9. Array : COLLECTION OF VALUES IN A SINGLE VARIABLE 
/*
let javaScripIsFun=true;
console.log(javaScripIsFun);

console.log(typeof javaScripIsFun); // boolean
// console.log(typeof 'jonas'); // boolean
// console.log(typeof 23); // boolean
javaScripIsFun = 'yes!';
console.log(typeof javaScripIsFun); // string


let year;
console.log(year);
console.log(typeof year);

*/

// assigment 2 datatypes


// let island=true;
// let language
// console.log(typeof island);
// console.log(typeof languauge);

/*
let, const, var

let--->
variable that can be changed
let age=30;
age=31; // can be changed

const--->
variable that cannot be changed
const birthYear=1991;
birthYear=1992; // cannot be changed 
const job; needs an initializer like birthYear above

var--->
variable that can be changed but is not recommended to use
var job='programmer'; // can be changed and is similar to let but is not recommended to use
job ='tester;
*/


// assignment 3 let const var
// let myLanguage='telugu';
// const nationalLanguage='hindi';
// myLanguage='english';
// console.log(myLanguage);
// nationalLanguage='englisgh';
// console.log(nationalLanguage);

/*
OPERATORS
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators
https://www.w3schools.com/js/js_operators.asp
https://www.freecodecamp.org/news/javascript-operators-explained-with-examples/
https://www.freecodecamp.org/news/javascript-operators-explained-with-examples/#arithmetic-operators
1. Arithmetic Operators----> +, -, *, /, %, **

const now=2025;
const ageRohan=now-2002;
const ageYash=now-2001;
console.log(ageRohan,ageYash);
console.log(ageRohan * ageYash);
console.log(ageRohan / ageYash);
console.log(ageRohan + ageYash);
console.log(ageRohan - ageYash);
console.log(ageRohan ** ageYash);
console.log(ageRohan % ageYash);

const firstName='rohan';
const lastName='bheemavarapu';
console.log(firstName+lastName);
console.log(firstName+" "+lastName);
console.log(firstName, lastName);

// typeof is also an operator as we have seen how it works above


2. Assignment Operators----> =, +=, -=, *=, /=, %=, **=
let x=3+5;
x+=10; // x=x+10;
x*=4; // x=x*4;
x++; // x=x+1;
x--; // x=x-1;
x%=3; // x=x%3;
x**=2; // x=x**2;
console.log(x);


3. Comparison Operators----> ==, ===, !=, !==, >, <, >=, <=
// == checks for value only
// === checks for value and type
// != checks for value only
// !== checks for value and type
// > checks if left side is greater than right side
// < checks if left side is less than right side
// >= checks if left side is greater than or equal to right side
// <= checks if left side is less than or equal to right side
// && checks if both sides are true
// || checks if either side is true
// ! checks if the value is false
// ? checks if the value is true or false and returns the value accordingly
// : is used to separate the true and false values in the ternary operator

const now=2025;
const ageRohan=now-2002;
const ageYash=now-2001;
console.log("age of rohan greater than yash: ", ageRohan > ageYash);
console.log("age of rohan less than yash: ", ageRohan < ageYash);
console.log("age of rohan less than or equal to yash: ", ageRohan <= ageYash);
console.log("age of rohan greater than or equal to yash: ", ageRohan >= ageYash);
console.log("age of rohan equal to yash: ", ageRohan == ageYash);
console.log("age of rohan not equal to yash: ", ageRohan != ageYash);
console.log("age of rohan equal to yash: ", ageRohan === ageYash);
console.log("age of rohan not equal to yash: ", ageRohan !== ageYash);
const isFullAge= ageRohan>=18;
console.log(isFullAge);
*/


// // assignment 4 operators

// const country='India';
// const continent='asia';
// let countryPop=1700000;
// const language='telugu'
// countryPop1 = countryPop/=2;
// console.log(countryPop1);
// console.log(countryPop+=1);
// const finlandPop=6000000;;
// console.log(countryPop>finlandPop);
// const avgPop=33000000;
// console.log(countryPop<avgPop);
// console.log(country+ " is in "+ continent+" and its "+countryPop+" people speak "+language+'.')


/*

Operator Precedence
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence
https://www.w3schools.com/js/js_operators.asp#precedence
https://www.freecodecamp.org/news/javascript-operators-explained-with-examples/



const now=2025;
const ageRohan=now-2002;
const ageYash=now-2001;
const ageAvg= (ageRohan+ageYash)/2;// average age and it is calculated by executing the paranthesis first and then the division
console.log(ageRohan, ageYash, ageAvg);
console.log(now-2002>now-2001)
*/ 

/*
STRINGS AND TEMPLATE LITERALS
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
https://www.w3schools.com/js/js_string_methods.asp
https://www.freecodecamp.org/news/javascript-strings-explained-with-examples/#string-methods


const firstName='rohan';
const job='student';
const birthYear=2002;
const year=2025
const rohan= "I'm " + firstName + ' ,a '+ (year-birthYear) + ' years old ' + job + '!';
console.log(rohan);

const rohanNew = `I'm ${firstName} , a ${year-birthYear} years old ${job}!`;
console.log(rohanNew);
console.log(`just a regular string....`);


console.log('string with \n\
multiple \n\
lines');


console.log(`string 
with 
multiple
lines`);

*/

// ASSIGNMENT 5 STRINGS AND TEMPLATE LITERALS

// const country='India';
// const continent='asia';
// let countryPop=1700000;
// const language='telugu'
// const finlandPop=6000000;

// console.log(`${country} is in ${continent} and its ${countryPop} people speak ${language}.`)