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
 
  let answerArray = [];

  //loop through arrayOne and arrayTwo and push boolean answer to new array
  for ( let i = 0; i < arrayOne.length; i++){
    if ((arrayOne[i]) === (arrayTwo[i])){
      answerArray.push(true);
    } else{
      answerArray.push(false);
    }
  }

  //loop through answerArray and return true or false
  for ( let i = 0; i < arrayOne.length; i++){
    if (answerArray[i] === false){
      console.log("false")
      return false;
    } 
  }
  console.log("true");
  return true;
}
// "remember to put return 
//outside of loop when testing 
//a whole array, so it runs 
//through the entire loop first"

// test cases

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false