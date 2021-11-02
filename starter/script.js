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
function logger() {
  console.log(`My name is Kristin`);
}
// calling / running / invoking the function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges!`;
  return juice;
}
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
