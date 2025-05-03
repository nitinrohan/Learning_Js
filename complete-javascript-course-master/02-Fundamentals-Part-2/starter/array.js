// "strict mode"
// // arrays
// // arrays are used to store multiple values in a single variable
// // arrays are mutable
// // arrays are zero indexed
// // arrays can store any data type
// // arrays can store any data type in a single array
// const array1= ['michael', "rohan", "poojitha"];
// console.log(array1);

// const array2= new Array(2002,20002,2001);
// console.log(array2)

// console.log(array1[0]);
// console.log(array2[2]);
// console.log(array1.length);
// console.log(array1[array1.length-1]);


// array1[2]="yash";
// console.log(array1);

// const firstName='rohan'
// const details=[firstName, 'bheemavarapu', 2002, '29 th april', array1];
// console.log(details);



// // exercise
// const calcAge2 = function (birthYear){
//     return 2025-birthYear;
// }

// const years=[2002,2001,2003,2004,2005,2004,2006,2008,2009]
// const age1=calcAge2(years[0]);
// const age2=calcAge2(years[1]);
// const age3=calcAge2(years[years.length -1]);
// console.log(age1, age2, age3)

// const ages=[calcAge2(years[0]), calcAge2(years[1]), calcAge2(years[2]), calcAge2(years[years.length-1])]
// console.log(ages)



//  // ASSIGNMENT
// // const pop = [17000000,2000000,20000000,30000000]
// // console.log(pop.length===4)

// // function percentageOfWorld1(population) {
// //    return (population / 7900) * 100;
// // }

// // const percentages= [
// //     percentageOfWorld1(pop[0]),
// //     percentageOfWorld1(pop[1]),
// //     percentageOfWorld1(pop[2]),
// //     percentageOfWorld1(pop[3])
// // ];
// // console.log(percentages)


// const friends=['michael', 'rohan', 'poojitha', 'yash', 'sai'];
// const newLength= friends.push('sai krishna');// push adds an elelment at the end of an array 
// console.log(newLength);
// console.log(friends);

// friends.unshift('devaki');// adds an element at the beginning of an array
// console.log(friends)


// friends.pop();// removes the last element of an array
// const poppedElement = friends.pop();// removes the last element of an array
// console.log(friends)
// console.log(poppedElement)


// friends.shift();// removes the first element of an array
// const removed = friends.shift();
// console.log(friends)
// console.log(removed)


// console.log(friends.indexOf('rohan'));// returns the index of the element in the array
// console.log(friends.includes('rohan'));// returns true if the element is present in the array
// console.log(friends.includes('rohan1'));// returns false if the element is not present in the array

// if (friends.includes('rohan')){
//     console.log('you have friend named rohan')
// }





