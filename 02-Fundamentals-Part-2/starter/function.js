"strict mode"

// function logger(){
//     console.log("my name is rohan");
// }
// logger();
// logger();
// logger();

// function cutFruitPeices(fruit){
//     return fruit*4;
// }

// function with the same name cannot be declared twice even if declared twices it will be overwritten by the latest one

// function fruitProccessor(apples,mangoes){
//     console.log(apples, mangoes);
//     const juice=`i have made a juice with ${apples} apples and ${mangoes} mangoes!!`;
//     return juice;
// }
// function fruitProccessor(apples,mangoes){
//     const applePieces = cutFruitPeices(apples);
//     const mangoPieces = cutFruitPeices(mangoes);
//     const juice=`i have made a juice with ${applePieces} apples and ${mangoPieces} mangoes!!`;
//     return juice;
// }

// const appleMangoJuice = fruitProccessor(10,3);
// console.log(appleMangoJuice);

// const appleJuice=fruitProccessor(10,0);
// console.log(appleJuice);

// function declaration
// const age1=calcAge(2002);

// function calcAge(birthYear){
//     return 2025-birthYear;
// }


// // function expression
// const calcAge2 = function (birthYear){
//     return 2025-birthYear;
// }
// const age2=calcAge2(2002);
// console.log(age1, age2)

// // Arrow function
// const calcAge3 = birthYear=> 2025-birthYear;
// const age3= calcAge3(2002);
// console.log(age3);


// const yearsUntilRetirement = (birthYear)=>{
//     const age=2025-birthYear;
//     const retirementAge=63;
//     const retirement=retirementAge-age;
//     return retirement;
// }
// console.log (yearsUntilRetirement(2002))
// const yearsUntilRetirement1 = (birthYear, firstName)=>{
//     const age=2025-birthYear;
//     const retirementAge=63-age;
//     return`${firstName} retires in ${retirementAge} years`;
// }
// console.log (yearsUntilRetirement1(2002, "rohan"))



// const calcAge = function(birthYear){
//     const age=2025-birthYear;
//     return age;
// }


// const yearsUntilRetirement1 = function(birthYear, firstName){
//     const age =calcAge(birthYear);
//     const retirementAge=63-age;

//     if (retirementAge>0){
//         return `${firstName} retires in ${retirementAge} years`;;
//     }
//     else if(retirementAge<0){
//         return `${firstName} has already retired`;
//     }
//     else{
//         return `${firstName} is retiring this year`;
//     }
    
// }
// console.log (yearsUntilRetirement1(2002, "rohan"))
// console.log (yearsUntilRetirement1(1990, "poojitha"))











