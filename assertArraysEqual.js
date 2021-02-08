const assertEqual = require("./assertEqual.js");
const eqArrays = require("./eqArrays.js")
// "remember to put return 
//outside of loop when testing 
//a whole array, so it runs 
//through the entire loop first"



//INSTRUCTIONS: Implement assertArraysEqual which will 
//take in two arrays and console.log an appropriate message to the console.

const assertArraysEqual = function(firstArray, secondArray){
  // console.log(firstArray, secondArray);
  // console.log("Return value:", (eqArrays(firstArray, secondArray)))
  if (eqArrays(firstArray, secondArray) === true){
    console.log("These two arrays match")
  } 
  if (eqArrays(firstArray, secondArray) === false){
    console.log("These arrays do not match.")
  }
}


module.exports = assertArraysEqual;


