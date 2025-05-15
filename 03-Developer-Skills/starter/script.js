// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const x = '23';
// if (x === 23) console.log(23);

// const calcAge = birthYear => 2037 - birthYear;
// console.log();
// problem 1
// we work for a company building a smart home thermometer. our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, 4, 1, 'error', 9, 13];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// how to compute max and min temperatures?
// - What's a sensor error? Answer: we should ignore it

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - subtract min from max (amplitude) and return it

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 1; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof temps[i] !== 'number') continue;
//     if (temps[i] > max) {
//       max = temps[i];
//     }
//     if (temps[i] < min) {
//       min = temps[i];
//     }
//   }
//   console.log(max, min);
//   //   let amplitude = max - min;
//   //   console.log(amplitude);
//   //   return max, min, amplitude;
//   return max - min;
// };
// // console.log(max);
// console.log(min);
// const amp = calcTempAmplitude(temperatures);
// console.log(amp);

// // problem 2
// // function shopuld now receive two arrays of temps
// // understand the problem
// // with 2 ararys shpuld we implement functionality twice? no! just merge two arrays

// // breaking up into sub-problems
// // merge two arrays?

// const calcTempAmplitude2 = function (t1, t2) {
//   const temps = t1.concat(t2);
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 1; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof temps[i] !== 'number') continue;
//     if (temps[i] > max) {
//       max = temps[i];
//     }
//     if (temps[i] < min) {
//       min = temps[i];
//     }
//   }
//   console.log(max, min);
//   //   let amplitude = max - min;
//   //   console.log(amplitude);
//   //   return max, min, amplitude;
//   return max - min;
// };
// // console.log(max);
// // console.log(min);
// const someTemps = [12, 23, 45, 67, 89, -12, -34];
// const amp2 = calcTempAmplitude2(temperatures, someTemps);
// console.log(amp2);

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',
//     // value: Number(prompt('Degrees celsius:')),
//     value: 10,
//   };
//   console.log(measurement);
//   // console.log(measurement.value);
//   // console.warn(measurement.value);
//   // console.error(measurement.value);
//   const kelvin = measurement.value + 273;
//   return kelvin;
// };

// console.log(measureKelvin());

// const calcTempAmplitudeBug = function (t1, t2) {
//   const temps = t1.concat(t2);
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 1; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof temps[i] !== 'number') continue;
//     debugger;
//     if (temps[i] > max) {
//       max = temps[i];
//     }
//     if (temps[i] < min) {
//       min = temps[i];
//     }
//   }
//   console.log(max, min);
//   return max - min;
// };
// // console.log(max);
// // console.log(min);
// const ampBug = calcTempAmplitudeBug([3, 4, 5], [4, 5, 6]);
// console.log(ampBug);

// given an array of forcasted maximium temperatures, the thermometer displays a string with these temperatures.
// Example: [17, 21, 23] will print '...17° in 1 days...21° in 2 days...23° in 3 days...'
// create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

// use problem solving framework
// 1) Understand the problem amnd break it up into sub-problems

// test data 1:[17, 21, 23]
// test data 2:[12, 5, -5, 0, 4]

// const printForecast = function (arr) {
//   let theString = ``;
//   for (let i = 0; i < arr.length; i++) {
//     theString += `...${arr[i]}° in ${i + 1}days`;
//   }
//   theString += `...`;
//   console.log(theString);
//   return theString;
// };
// const test1 = [17, 21, 23];
// const test2 = [12, 5, -5, 0, 4];
// printForecast(test2);

///////////////////////////////////////
// Coding Challenge #2 With AI

/*
Let's say you're building a time tracking application for freelancers. At some point in building this app, you need a function that receives daily work hours for a certain week, and returns:
1. Total hours worked
2. Average daily hours
3. The day with the most hours worked
4. Number of days worked
5. Whether the week was full-time (worked 35 hours or more)

TEST DATA: [7.5, 8, 6.5, 0, 8.5, 4, 0]
*/
// 1) Understanding the problem
// - What's a sensor error? Answer: we should ignore it
// 2) Breaking up into sub-problems
// - How to ignore errors?
// function analyzeWorkWeek(weekHours) {
//   const totalHours = weekHours.reduce((sum, hrs) => sum + hrs, 0);
//   const averageHours = +(totalHours / weekHours.length).toFixed(1);
//   const maxHours = Math.max(...weekHours);
//   const dayWithMostHours = weekHours.indexOf(maxHours);
//   const daysWorked = weekHours.filter(hrs => hrs > 0).length;
//   const isFullTime = totalHours >= 35;

//   return {
//     totalHours,
//     averageHours,
//     dayWithMostHours,
//     daysWorked,
//     isFullTime,
//   };
// }

// // Example usage with the test data:
// const result = analyzeWorkWeek([7.5, 8, 6.5, 0, 8.5, 5, 0]);
// console.log(result);
