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
