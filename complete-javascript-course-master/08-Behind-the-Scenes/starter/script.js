'use strict';
function calcAge(birthYear) {
  const age = 2025 - birthYear;
  console.log(firstName);
  //   console.log(lastName); //gets a reference error

  function printAge() {
    let output = `you are ${age} and born in ${birthYear}`;
    console.log(output);
    if (birthYear >= 1981 && birthYear <= 1996) {
      // creating a new varaible with same name as outer scopes variable
      const firstName = 'steven';

      // reassigning outer scospe's variable
      output = 'newotput';
      var millenial = true;
      const str = `oh, youre a millenial,${firstName}`;
      console.log(str);
    }
    // console.log(str);reference error
    console.log(millenial);
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = 'rohan';
calcAge(1989);

// console.log(age);gets a reference error as it is out of scope and so is the printAge func()

// when we are in strict mode let and const are block scoped, and var is function scoped
