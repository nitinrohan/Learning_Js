// //SETS
// const ordersSet = new Set([
//   'pasta',
//   'pizza',
//   'pizza',
//   'risotto',
//   'pasta',
//   'pizza',
// ]);
// console.log(ordersSet);
// console.log(new Set('rohan'));
// console.log(ordersSet.has('pizza'));
// console.log(ordersSet.has('bread'));
// ordersSet.add('garlic bread');
// ordersSet.add('garlic bread');
// ordersSet.delete('risotto');
// // ordersSet.clear();
// console.log(ordersSet);
// for (const order of ordersSet) console.log(order);

// //example
// const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter'];
// let staffUnique = new Set(staff);
// staffUnique = [...new Set(staff)];
// console.log(staffUnique);
// console.log(
//   new Set(['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter']).size
// );

// console.log(new Set('rohanbheemavarapu').size);

// ///////////////////////////////////////////
// // New Operations to make sets more useful!
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

// const commonFoods = italianFoods.intersection(mexicanFoods); // gives all the common items from both the sets same like intersection in sets

// console.log(commonFoods);
// console.log([...commonFoods]);

// const italianMexicanFusion = italianFoods.union(mexicanFoods);
// console.log(...italianMexicanFusion);
// console.log([...italianMexicanFusion]);
// console.log('Union: ', italianMexicanFusion);
// console.log('Union: ', ...italianMexicanFusion);

// console.log([...italianFoods, ...mexicanFoods]);
// console.log([...new Set([...italianFoods, ...mexicanFoods])]);

// const uniqueItalianFoods = italianFoods.difference(mexicanFoods);
// const uniqueMexicanFoods = mexicanFoods.difference(italianFoods);
// console.log('difference italian', uniqueItalianFoods);
// console.log('difference Mexican', uniqueMexicanFoods);
// const uniqueItalianAndMexicanFoods =
//   mexicanFoods.symmetricDifference(italianFoods);
// console.log(uniqueItalianAndMexicanFoods);
// console.log(mexicanFoods.isDisjointFrom(italianFoods));
// // console.log(mexicanFoods.isSubSet(italianFoods));
// // console.log(mexicanFoods.isSuperSetOf(italianFoods));

// //isSubSet()
// //isSuperSet()
// //isdisjointfrom()
