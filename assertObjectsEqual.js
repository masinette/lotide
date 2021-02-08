const eqArrays = require("./eqArrays.js")
const eqObjects = require("./eqObjects.js")


/* 
Implement assertObjectsEqual which will take in 
two objects and console.log an appropriate message to the console.
*/
// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  // console.log(`Example label: ${inspect(actual)}`);
  if ((eqObjects(actual, expected)) === true){
    console.log("These two objects match")
  } 
  if ((eqObjects(actual, expected)) === false){
    console.log("These objects do not match.");
  }
};

module.exports = assertObjectsEqual;

// assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' })
