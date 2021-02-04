const assertEqual = function(actual, expected) {

  if (actual === expected){
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  else{
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
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

/* INSTRUCTIONS: return all the indices (zero-based positions)
 in the string where each character is found. */


const letterPositions = function(sentence) {
  const results = {};
  
  // loop through sentence
  for ( let i = 0; i < sentence.length; i++){
    //assigned sentence[i] to a variable called letter (e.g appears as 'h'). 
    const letter = sentence[i];

    //if this key does not exist in results yet
    if(!results[letter]){
      //adding letter to results object, e.g results with key of 'h' equals [0].
    results[letter] = [i];
    } else{
      //if letter already appears, push the next value into existing array
      results[letter].push(i);
    }
  }
  return results;
};

console.log(letterPositions("hello"));

// assertArraysEqual(letterPositions("hello").e, [1]);
// assertArraysEqual(letterPositions("hello"), true);