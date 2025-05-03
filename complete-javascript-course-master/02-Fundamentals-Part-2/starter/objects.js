"strict mode"


// const rohanArray=[
//     'rohan',
//     'bheemavarapu',
//     2025-2002,
//     'student',
//     ['poojitha','devaki','yash']
// ];


// const rohan={
//     firstName:'rohan',
//     lastName:'bheemavarapu',
//     age:2025-2002,
//     job:'student',
//     friends:['poojitha','devaki','yash'],
// }

// console.log(rohan);

// console.log(rohan.lastName);
// console.log(rohan["lastName"])


// const nameKey="Name";
// console.log(rohan["first"+ nameKey]);
// console.log(rohan['last'+ nameKey]);



// const interestedIn=prompt("what do ytou want to knoew abput me? choose between firstName, lastName, age, job, friends");



// if (rohan[interestedIn]){
//     console.log(rohan[interestedIn])
// }
// else{console.log("wrong request! choose between firstName, lastName, age, job, friends")}

// rohan.location='visakhapatnam';
// rohan['twitter']='@rohan_bheemavarapu';
// console.log(rohan)


// console.log(`${rohan.firstName} has ${rohan.friends.length} friends, and his best friend is called ${rohan.friends[0]}`)

// const rohan={
//     firstName:'rohan',
//     lastName:'bheemavarapu',
//     birthYear:2002,
//     job:'student',
//     friends:['poojitha','devaki','yash'],
//     hasDriversLicense:true,
//     // calcAge: function(birthYear){
//     //     return 2025-birthYear;
//     // }

//     // calcAge:function(){
//     //     return 2025-this.birthYear;
//     // }
//     calcAge:function(){
//         this.age = 2025-this.birthYear;
//         return this.age;
//     }
// };


// console.log(rohan.calcAge());
// console.log(rohan.age)
// console.log(rohan.age)
// console.log(rohan.age)
// console.log(rohan['calcAge'](rohan.birthYear))


//challenge
// rohan is a 23 old student and he has a driverslicense

// const rohan={
//     firstName :"ROHAN",
//     lastName:"Bheemavarapu",
//     birthYear:2002,
//     job:"student",
//     hasDriversLicense:true,
//     calcAge : function(){
//         this.age=2025-this.birthYear;
//         return this.age;
//     },
//     getSummary:function(){
//         return `${this.firstName} is a ${this.calcAge()} old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} Drivers License`;
//     }
// };

// console.log(rohan.getSummary())