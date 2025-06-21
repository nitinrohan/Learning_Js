///////////////////////////////////////////
// New Operations to make sets more useful!
const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

const commonFoods = italianFoods.intersection(mexicanFoods); // gives all the common items from both the sets same like intersection in sets

console.log(commonFoods);
console.log([...commonFoods]);

const italianMexicanFusion = italianFoods.union(mexicanFoods);
console.log(...italianMexicanFusion);
console.log([...italianMexicanFusion]);
console.log('Union: ', italianMexicanFusion);
console.log('Union: ', ...italianMexicanFusion);

console.log([...italianFoods, ...mexicanFoods]);
console.log([...new Set([...italianFoods, ...mexicanFoods])]);

const uniqueItalianFoods = italianFoods.difference(mexicanFoods);
const uniqueMexicanFoods = mexicanFoods.difference(italianFoods);
console.log('difference italian', uniqueItalianFoods);
console.log('difference Mexican', uniqueMexicanFoods);
