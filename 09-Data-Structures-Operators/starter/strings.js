//STRINGS ARE PRIMITIVE OR IMMUTABLE --- This means that once a string is created, its content cannot be changed. Any operation that appears to modify a string, such as concatenation or using string methods like toUpperCase() or replace(), actually results in the creation of a new string with the desired changes, leaving the original string untouched in memory.
// const airline = 'TAP AIR PORTUGAL';
// const plane = 'A320';
// // console.log(plane[0]);
// // console.log(plane[1]);
// // console.log(plane[2]);
// // console.log(airline.length);
// // console.log(airline.indexOf('R'));
// // console.log(airline.lastIndexOf('R'));
// // console.log(airline.indexOf('PORTUGAL'));
// // console.log(airline.indexOf('r'));
// // console.log(airline.slice(4));
// // console.log(airline.slice(4, 7));

// // console.log(airline.slice(0, airline.indexOf(' ')));
// // console.log(airline.slice(airline.lastIndexOf(' ') + 1));
// // console.log(airline.slice(-2));
// // console.log(airline.slice(0, -1));

// // const checkMiddleSeat = function (seat) {
// //   const s = seat.slice(-1);
// //   if (s === 'B' || s === 'E') console.log('you got middle seatseat💺');
// //   else console.log('you got lucky 😊');
// // };

// // checkMiddleSeat('11B');
// // checkMiddleSeat('23C');
// // checkMiddleSeat('3E');

// // console.log(new String('Rohan'));
// // console.log(typeof new String('Rohan'));
// // console.log(typeof new String('Rohan').slice(1));

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// // fix capitalization of a name

// const passenger = 'roHAn';
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// //check Email
// const email = 'hello@rohan.io';
// const loginEmail = ' Hello@Jonas.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);
// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);
// console.log(email === normalizedEmail);

// // replacing
// const priceGB = '288,97£';
// console.log(priceGB);
// const priceUS = priceGB.replace('£', '$').replace(',', '.');
// console.log(priceUS);

// const announcement =
//   'all passengeers come to boarding door 23. Boarding door 23!';

// console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replaceAll('door', 'gate'));
// console.log(announcement.replace(/door/g, 'gate'));

//BOOLEANS

// const plane = 'Airbus A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.includes('Boeing'));
// console.log(plane.startsWith('Air'));

// if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
//   console.log('part of the new airbus family');
// }

// //practise exercise

// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('You are not allowed on board');
//   } else {
//     console.log('WELCOME ON BOARD!');
//   }
// };

// checkBaggage('I have a laptop, some Food and a Pocket Knife');
// checkBaggage('Socks and Camera');
// checkBaggage('Got some snacks and a gun for protection');

// console.log('a+very+mice+string'.split('+'));
// console.log('rohan bheemavarapu'.split(' '));

// const [firstName, lastName] = 'Jonas schemdtmann'.split(' ');
// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// const capitalizeName = function (name) {
//   const names = name.split(' ');
//   console.log(names);
//   const namesUpper = [];
//   for (const n of names) {
//     // namesUpper.push(n[0].toUpperCase() + n.slice(1));
//     namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
//   }
//   console.log(namesUpper.join(' '));
// };

// capitalizeName('Jessica ann smith davis');
// capitalizeName('rohan bheemavarapu');

// //padding

// const message = 'Go to gate 23!';
// console.log(message.padStart(25, '+').padEnd(30, '+'));
// console.log('rohan'.padStart(25, '+').padEnd(30, '+'));

// const maskCreditCard = function (number) {
//   //   const str = String(number); //traditional way
//   const str = number + ''; //when one of the operands is a string while performing + the whole answer becomes a string

//   const last = str.slice(-4);
//   return last.padStart(str.length, '*');
// };

// console.log(maskCreditCard(600012323547523674));
// console.log(maskCreditCard('6000123235472847523674864128542'));

// //REPEAT

// const message2 = 'Bad weather... all departures are delayed....';
// console.log(message2.repeat(5));

// const planesInLine = function (n) {
//   console.log(`There are ${n} planes in line ${'🛩️'.repeat(n)}`);
// };

// planesInLine(5);
// planesInLine(4);
// planesInLine(9);

///////////////////////////////////////
// Coding Challenge #4

// Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

// The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.
/*
THIS TEST DATA (pasted to textarea)
underscore_case
  first_name  
Some_Variable
  calculate_AGE  
delayed_departure
*/
// SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
// underscoreCase      ✅
// firstName           ✅✅
// someVariable        ✅✅✅
// calculateAge        ✅✅✅✅
// delayedDeparture    ✅✅✅✅✅

// HINT 1: Remember which character defines a new line in the textarea 😉
// HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
// HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
// HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

// Afterwards, test with your own test data!

// GOOD LUCK 😀
// */

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));
// document.querySelector('button').addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   let rows = text.split('\n');
//   console.log(rows);

//   for (const [i, row] of rows.entries()) {
//     const [first, second] = row.toLowerCase().trim().split('_');
//     const output = `${first}${second.replace(
//       second[0],
//       second[0].toUpperCase()
//     )}`;
//     console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
//   }
// });

////////////////////////////
// STRING METHODS PRACTICE
// const flight =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // 🔴 Delayed Departure from FAO to TXL (11h25)
// //              Arrival from BRU to FAO (11h45)
// //   🔴 Delayed Arrival from HEL to FAO (12h05)
// //            Departure from FAO to LIS (12h30)
// console.log(flight.split('+'));
// const getCode = str => str.slice(0, 3).toUpperCase();
// for (const x of flight.split('+')) {
//   const [type, from, to, time] = x.split(';');
//   const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
//     '_',
//     ' '
//   )} from ${getCode(from)} to ${getCode(to)} (${time.replace(
//     ':',
//     'h'
//   )})`.padStart(45);
//   console.log(output);
// }
