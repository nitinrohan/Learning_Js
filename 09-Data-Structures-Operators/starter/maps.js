// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// console.log(rest.set(2, 'Lisbon, Portugal'));
// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'we are open :D')
//   .set(false, 'we are closed:(');
// console.log(rest.get(true));
// console.log(rest.get('name'));
// console.log(rest.get(1));

// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
// rest.delete(2);
// console.log(rest);
// console.log(rest.size);
// // rest.clear();
// console.log(rest);

// const arr = [1, 2];
// rest.set(arr, 'Test');
// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest);
// console.log(rest.size);
// console.log(rest.get(arr));

// const question = new Map([
//   ['question', 'what is the best programming language in the world?'],
//   [1, 'c'],
//   [2, 'JAVA'],
//   [3, 'JAVASCRIPT'],
//   ['correct', 3],
//   [true, 'correct✅'],
//   [false, 'try again!'],
// ]);
// console.log(question);

// //convert object to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`answer ${key}: ${value}`);
// }
// // const answer = Number(prompt('your answer:'));
// const answer = 3;
// console.log(answer);
// console.log(question.get(question.get('correct') === answer));

// ///convert map to array
// console.log([...question]);
// console.log(question.entries());
// console.log([...question.keys()]);
// console.log([...question.values()]);

///which of the ds should you use andwhen to use

// coding chalenge 3
/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// //1.
// const events = [...new Set(gameEvents.values())];
// console.log(events);

// //2.
// gameEvents.delete(64);
// console.log(gameEvents);

// //3
// const time = [...gameEvents.keys()].pop();
// console.log(time);
// console.log(
//   ` An event happened, on average, every ${time / gameEvents.size} minutes`
// );

// //4
// for (const [min, event] of gameEvents) {
//   const Half = min <= 45 ? 'First' : 'Second';
//   console.log(`${Half} ${min}: ${event}`);
// }
