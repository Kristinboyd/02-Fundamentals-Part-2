'use strict';

// Activating Strict Mode
// ****************************************************************
// by typing 'use strict'; at the top of each file
// if there is a typo in the below, it will return a error in the
// console. If there is no error, it will read as normal
// let hasDriversLicense = false;
// const passTest = true;
// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log(`I can drive`);

// Functions
// *****************************************************************
// function logger() {
//   console.log(`My name is Kristin`);
// }
// // calling / running / invoking the function
// logger();
// logger();
// logger();
// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges!`;
//   return juice;
// }
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// Function Declarations vs Expectiations
// ****************************************************************
// an expression produce value
// Function declaration example
// function calcAge1(birthYear) {
//   return 2021 - birthYear;
// }
// const age1 = calcAge1(1992);
// console.log(age1);
// // Function expression example
// const calcAge2 = function(birthYear) {
//   // using an annonamous function
//   return 2021 - birthYear;
// };
// const age2 = calcAge2(1992);
// console.log(age1, age2);

// Arrow Functions
// ****************************************************************
// function expression again
// const calcAge2 = function(birthYear) {
//   // using an annonamous function
//   return 2021 - birthYear;
// };
// // arrow funciton
// const calcAge3 = birthYear => 2021 - birthYear;
// const age3 = calcAge3(1992);
// console.log(age3);

// Functions calling other functions
// *****************************************************************
// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }
// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);
//   console.log(apples, oranges);
//   const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange!`;
//   return juice;
// }
// console.log(fruitProcessor(2, 3));

// Reviewing Functions
// ***************************************************************
// const calcAge = function(birthYear) {
//   return 2037 - birthYear;
// };
// const yearsUntilRetirement = function(birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;
//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years!`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired!`);
//     return -1;
//   }
// };
// console.log(yearsUntilRetirement(1992, `Kristin`));
// console.log(yearsUntilRetirement(1950, `Mike`));

// Coding Challenge One
// ***************************************************************
// const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(3, 4, 5));
// // Test 1
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);
// const checkWinner = function(avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win! The score was ${avgDolphins} vs ${avgKoalas}`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win! The score was ${avgDolphins} vs ${avgKoalas}`);
//   } else {
//     console.log(`No team wins....`);
//   }
// };
// checkWinner(scoreDolphins, scoreKoalas);
// // Test 2
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(scoreDolphins, scoreKoalas);
// checkWinner(scoreDolphins, scoreKoalas);

// Arrays
// ***************************************************************
// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';
// //
// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);
// //
// // other way
// const year = new Array(1992, 1991, 2003, 2010);
// console.log(year);
// //
// console.log(friends[0]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]); // gives you the last element in the array
// //
// friends[2] = 'Jay';
// console.log(friends); // reassigns Peter with Jay
// // We can always change things in an Array. It is muteable. Although we cannot replace the entire array.
// //
// const firstName = 'Kristin';
// const kristin = [firstName, 'Boyd', 2021 - 1992, 'Software Developer', friends];
// console.log(kristin);
// console.log(kristin.length);
// //
// const calcAge = function(birthYear) {
//   return 2037 - birthYear;
// };
// //
// const years = [1990, 1967, 2002, 2010, 2018];
// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);
// //
// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1])
// ];
// console.log(ages);

// Basic Array Operations (Methods)
// *********************************************************************************
// add elements
// const friends = ['Michael', 'Steven', 'Peter'];
// const newLength = friends.push('Molly');
// // push is a function that will add an element to the end of an array
// console.log(friends);
// console.log(newLength);
// // unshift will put an element at the beginning of an array
// friends.unshift('Karen');
// console.log(friends);
// // remove elements
// friends.pop(); // no need to put any arguement, it will remove the last element in
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);
// friends.shift(); // removes first element in the array
// console.log(friends);
// // method that tells us what position an element is
// console.log(friends.indexOf('Steven'));
// // method that tells us if an element is in the array
// console.log(friends.includes('Steven'));
// console.log(friends.includes('bob'));
// //
// if (friends.includes('Steven')) {
//   console.log(`You have a friend named Steven!`);
// }

// Coding Challenge #2
// ********************************************************************************
// function expression
// const calcTip = function(bill) {
//   return bill >= 50 && 300 <= 300 ? bill * 0.15 : bill * 0.2;
// };
// // arrow function
// // const calcTip = bill => (bill >= 50 && 300 <= 300 ? bill * 0.15 : bill * 0.2);
// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips, bills);
// //
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(totals);

// Intro to Objects
// *******************************************************************************
// example of old array
// const kristinArray = [
//   'Kristin',
//   'Boyd',
//   2021 - 1992,
//   'Software Developer',
//   ['Molly', 'Megan', 'Averi']
// ];
// // example of new object - used to group together variable that belong together
// // the order does not matter
// const kristin = {
//   firstName: 'Kristin',
//   lastName: 'Boyd',
//   age: 2021 - 1992, // can put an expression here!
//   occupation: 'Software Developer',
//   friends: ['Molly', 'Megan', 'Averi']
// };
// console.log(kristin);

// Dot vs Bracket Notation
// ******************************************************************************
// const kristin = {
//   firstName: 'Kristin',
//   lastName: 'Boyd',
//   age: 2021 - 1992,
//   job: 'Software Developer',
//   friends: ['Molly', 'Megan', 'Averi']
// };
// //
// console.log(kristin);
// console.log(kristin.lastName); // dot notation
// console.log(kristin['lastName']); // bracket notataion, we can use any expression
// //
// const nameKey = 'Name';
// console.log(kristin['first' + nameKey]);
// console.log(kristin['last' + nameKey]);
// //
// const interestedIn = prompt(
//   'What do you want to know about Kristin? Choose between firstName, lastName, age, job, and friends'
// );
// console.log(kristin[interestedIn]);
// //
// if (kristin[interestedIn]) {
//   console.log(kristin[interestedIn]);
// } else {
//   console.log(`Please select an option from the given list`);
// }
// // add new properties to the object
// kristin.location = 'Seattle';
// kristin['Instagram'] = '@kristin__boyd';
// console.log(kristin);
// //
// // Kristin has three friends and her best friend is called Megan"
//
// console.log(`${kristin.firstName} has ${kristin.friends.length} friends and her best friend is called ${kristin.friends[0]}`);

// Object Methods
// *******************************************************************************
// const kristin = {
//   firstName: 'Kristin',
//   lastName: 'Boyd',
//   birthYear: 1992,
//   job: 'Software Developer',
//   friends: ['Molly', 'Megan', 'Averi'],
//   hasDriversLicense: true,
//   //
//   // calcAge: function(birthYear) {
//   //   return 2021 - birthYear;
//   // }
//   //
//   // calcAge: function() {
//   //   console.log('this: ', this);
//   //   return 2021 - this.birthYear;
//   // }
//   //
//   calcAge: function() {
//     this.age = 2021 - this.birthYear;
//     return this.age;
//   },
//   getSummary: function() {
//     return `${this.firstName} is a ${this.calcAge()} year old ${this
//       .job}, and she has ${this.hasDriversLicense
//       ? 'a'
//       : 'no'} drivers license`;
//   }
// };
// console.log(kristin.calcAge());
// console.log(kristin.getSummary());

// Coding Challenge #3
// *****************************************************************************
