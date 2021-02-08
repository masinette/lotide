const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

/*
INSTRUCTIONS:
Our map function will take in two arguments:
An array to map
A callback function
The map function will return a new array based 
on the results of the callback function.
*/

// implement function called map, call in an array and callback function as parameters
const map = function(array, callback) {
  //define empty array to store future results
  const results = [];
  //loop through each item in the array
  for (let item of array) {
    //use callback function 'results1' and pass in item as a parameter
    results.push(callback(item));
    // console.log("results.push(callback(item)):  "    ,results.push(callback(item)));
    //
  }
  //return new array 
  return results;
}
module.exports = map;

//TEST CONDITIONS
//when called and logged to console, will take parameters (array,which is words)(word, which is item)
//and use an anonymous function to find the value at index 0 of (word, which is item)
// const words = ["ground", "control", "to", "major", "tom"];
// const results1 = map(words, word => word[0]);

// console.log(results1);
