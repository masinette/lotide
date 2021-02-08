const assertEqual = require("./assertEqual.js");

// implement a function eqArrays which takes in two arrays 
// and returns true or false, based on a perfect match.
const eqArrays = function(arrayOne, arrayTwo){
  //check arrays are not the same length
  if (arrayOne.length !== arrayTwo.length){
    return false;
  }
  //loop through array and check if items at each index match
  for (let i = 0; i < arrayOne.length; i++){
    if (arrayOne[i] !== arrayTwo[i]){
      return false;
    }
  }
  return true;
}

module. exports = eqArrays;

