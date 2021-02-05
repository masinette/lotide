const assertEqual = function(actual, expected) {

  if (actual === expected){
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  else{
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
const eqArrays = function(arrayOne, arrayTwo){
//  console.log("ARRAY 1:", arrayOne)
//  console.log("ARRAY 2:", arrayTwo)

  let answerArray = [];

  //loop through arrayOne and arrayTwo and push boolean answer to new array
  for ( let i = 0; i < arrayOne.length; i++){
    if ((arrayOne[i]) === (arrayTwo[i])){
      answerArray.push(true);
    } else{
      answerArray.push(false);
    }
  }
// console.log("AnswerArray:" ,answerArray);
  //loop through answerArray and return true or false
  for ( let i = 0; i < answerArray.length; i++){
    if (answerArray[i] === false){
      // console.log("inside if statement: false" )
      return false;
    } 
  }
  // console.log("true");
  return true;
}
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
/*
INSTRUCTIONS:
Our map function will take in two arguments:
An array to map
A callback function
The map function will return a new array based 
on the results of the callback function.
*/

const words = ["ground", "control", "to", "major", "tom"];

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

//when called and logged to console, will take parameters (array,which is words)(word, which is item)
//and use an anonymous function to find the value at index 0 of (word, which is item)
const results1 = map(words, word => word[0]);

console.log(results1);
