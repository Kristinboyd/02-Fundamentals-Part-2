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



