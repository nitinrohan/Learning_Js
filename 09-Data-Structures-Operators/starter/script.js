'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// const italianFoods = new Set([
//   'pasta',
//   'gnocchi',
//   'tomatoes',
//   'olive oil',
//   'garlic',
//   'basil',
// ]);

// const mexicanFoods = new Set([
//   'tortillas',
//   'beans',
//   'rice',
//   'tomatoes',
//   'avocado',
//   'garlic',
// ]);

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '22:00', address }) {
    console.log(
      `oreder received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  //ES6 ENHANCED OBJECT LITERALS
  openingHours,

  orederPasta(ing1, ing2, ing3) {
    console.log(`here is you pasta with ${ing1}, ${ing2} and ${ing3}.`);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

//SETS
const ordersSet = new Set([
  'pasta',
  'pizza',
  'pizza',
  'risotto',
  'pasta',
  'pizza',
]);
console.log(ordersSet);
console.log(new Set('rohan'));
console.log(ordersSet.has('pizza'));
console.log(ordersSet.has('bread'));
ordersSet.add('garlic bread');
ordersSet.add('garlic bread');
ordersSet.delete('risotto');
// ordersSet.clear();
console.log(ordersSet);
for (const order of ordersSet) console.log(order);

//example
const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter'];
let staffUnique = new Set(staff);
staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(
  new Set(['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter']).size
);

console.log(new Set('rohanbheemavarapu').size);
// //Property Names
// const properties = Object.keys(openingHours);
// console.log(properties);
// let openStr = `we are open on ${properties.length} days : `;

// for (const day of Object.keys(openingHours)) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

// //Property Values
// const values = Object.values(openingHours);
// console.log(values);

// //Entire Object
// const entries = Object.entries(openingHours);
// // console.log(entries);
// for (const [key, { open, close }] of entries) {
//   console.log(`on ${key} we open at ${open} and close at ${close}`);
// }
// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);
// // console.log(restaurant.openingHours.mon.open); gives an error as undefined doesnt have a property open
// //with ooptional chaining
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// //example
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of days) {
//   // console.log(day);
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we are open at ${open}`);
// }

// //methods

// console.log(restaurant.order?.(0, 1) ?? 'method does not exist');
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'method does not exist');

// //arrays
// const users = [
//   {
//     name: 'rohan',
//     email: 'sdakcbauc@gmail.com',
//   },
// ];
// console.log(users[0]?.name ?? 'user array empty');
// console.log(users[1]?.name ?? 'user array empty');
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1} : ${el}`);
// }

// console.log([...menu.entries()]);

// for-of-loop

// const rest1 = {
//   name: ' Capri',
//   numGuests: 20,
// };
// const rest2 = {
//   name: ' La Piazza',
//   owner: 'Giovanni Rossi',
// };
// // rest1.numGuests = rest1.numGuests || 10;
// // rest2.numGuests = rest2.numGuests || 20;
// // rest1.numGuests ||= 10;
// // rest2.numGuests ||= 20;

// rest1.numGuests ??= 10;
// rest2.numGuests ??= 20;

// rest1.owner = rest1.owner && 'ANONYMOUS';
// rest2.owner = rest2.owner && 'ANONYMOUS';

// rest1.owner &&= 'ANONYMOUS';
// rest2.owner &&= 'ANONYMOUS';

// console.log(rest1, rest2);

// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// //nullish :null and undefined (not 0 or '')
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);
/*
// use any datatype, return any datatype, short circuiting
console.log('-----OR------');
console.log(3 || 'rohan');
console.log('' || 'rohan');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'hello' || 23 || null);
restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 20;
console.log(guests2);

console.log('-----AND------');

console.log(0 && 'rohan');
console.log(7 && 'rohan');
console.log('hello' && 23 && null);

// practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach', 'chicken');
}

restaurant.orderPizza &&
  restaurant.orderPizza('mushrooms', 'spinach', 'chicken');
*/
/*
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);
const newArr = [1, 2, ...arr]; //... is the spread operator which takes all the elements from the array and puts them ina new array.
console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// copy array
const mainMenuCopy = [...restaurant.mainMenu];

//join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// iterables: arrays, strings, maps, sets. NOT objects
const str = 'rohan';
const letters = [...str, '', 's.'];
console.log(letters);
console.log(...str); // we cannot write a template litteral with the spread!!!!!!!!!!!!!!!!!!!

// const ingredients = [
//   prompt("let's make pasta! ingredient 1?"),
//   prompt("let's make pasta! ingredient 2?"),

//   prompt("let's make pasta! ingredient 3?"),
// ];

// restaurant.orederPasta(...ingredients);

const newRestaurant = { ...restaurant, founder: 'guiseppe', foundedIn: 1988 };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
// the spread operator i used on the right side of the = operator
// the spread operator unpacks the eements from an existing array

//REST OPERATOR
// the rest operator is used on the left side of the = operator
// it collects all the rest of the elements into an array
//1)destructuring
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//2)functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(2, 3, 4, 5, 6, 7);
add(2, 3, 4, 5, 6, 7, 8, 9);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onions', 'spinach', 'chicken');
*/
/*
/////////////////////////////////////////////
destructuring oblects
restaurant.orderDelivery({
  time: '22:30',
  address: 'via del sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'via del sole, 21',
  starterIndex: 2,
});

*/
/////////////////////////////////////////////
// // destructuring arrays
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// //swapping 2 variables
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// // receive 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// // nested destructuring
// const nested = [2, 4, [5, 6]];
// // const [, i, j] = nested;
// // console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // default values
// // const [p = 1, q = 1, r = 1] = [8, 9];
// // console.log(p, q, r);

// // destructuring objects
// // we use {} to destructure objects

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// // defaut values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// // nested objects
// const {
//   fri: { open, close },
// } = openingHours;

// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);
// console.log(open, close);

///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const players1 = game.players[0];
const players2 = game.players[1];
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
const [team1, draw, team2] = [game.odds.team1, game.odds.x, game.odds.team2];
console.log(team1, draw, team2);

const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals('Davies', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);
team1 < team2 && console.log('team 1 is more likely to win');
team2 < team1 && console.log('team 2 is more likely to win');
*/

///////////////////////////////////////
// Coding Challenge #2
/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };
//1 Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
// let cou = 1;
// for (const x of game.scored) {
//   console.log(`goal ${cou} : ${x}`);
//   cou += 1;
// }
// for (const [i, player] of game.scored.entries()) {
//   console.log(`goal ${i + 1} : ${player}`);
// }
// //2 Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
// const odds = Object.values(game.odds);
// let avg = 0;
// for (const odd of odds) {
//   avg += odd;
// }
// avg /= odds.length;
// console.log(avg);
// // 3.Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
// //       Odd of victory Bayern Munich: 1.33
// //       Odd of draw: 3.25
// //       Odd of victory Borrussia Dortmund: 6.5
// // Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉
// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `vicotry of ${game[team]}`;
//   console.log(`Odd of ${teamStr} : ${odd}`);
// }
