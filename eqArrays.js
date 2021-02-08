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













// const eqArrays = function(arrayOne, arrayTwo){
 
//   let answerArray = [];

//   //loop through arrayOne and arrayTwo and push boolean answer to new array
//   for ( let i = 0; i < arrayOne.length; i++){
//     if ((arrayOne[i]) === (arrayTwo[i])){
//       answerArray.push(true);
//     } else{
//       answerArray.push(false);
//     }
//   }

//   //loop through answerArray and return true or false
//   for ( let i = 0; i < arrayOne.length; i++){
//     if (answerArray[i] === false){
//       console.log("false")
//       return false;
//     } 
//   }
//   // console.log("true");
//   return true;
// }
// "remember to put return 
//outside of loop when testing 
//a whole array, so it runs 
//through the entire loop first"

// test cases

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false