'use strict';
// function calcAge(birthYear) {
//   const age = 2025 - birthYear;
//   console.log(firstName);
//   //   console.log(lastName); //gets a reference error

//   function printAge() {
//     let output = `you are ${age} and born in ${birthYear}`;
//     console.log(output);
//     if (birthYear >= 1981 && birthYear <= 1996) {
//       // creating a new varaible with same name as outer scopes variable
//       const firstName = 'steven';

//       // reassigning outer scospe's variable
//       output = 'newotput';
//       var millenial = true;
//       const str = `oh, youre a millenial,${firstName}`;
//       console.log(str);
//     }
//     // console.log(str);reference error
//     console.log(millenial);
//     console.log(output);
//   }
//   printAge();
//   return age;
// }

// const firstName = 'rohan';
// calcAge(1989);

// console.log(age);gets a reference error as it is out of scope and so is the printAge func()

// when we are in strict mode let and const are block scoped, and var is function scoped

// we cannot log or call variables before even declaring them it gives undefined

// console.log(me);
// var me = 'rohan';

// // functions
// // since const is taken as a variable it cannot be called before declauring it but then again that  doesn't apply to normal functions
// console.log(addDecl(2, 3));
// console.log(addExps(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExps = function (a, b) {
//   return a + b;
// };

// Example

// console.log(numProducts); //here numProducts is notdefined yet as a variable
// if (!numProducts) deleteShoppingCart(); //hence this is passed and gives an output as 'all products deleted'

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('all products deleted');
// }

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);
