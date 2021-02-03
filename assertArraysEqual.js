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

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS

assertArraysEqual([1, 2, 4], [1, 2, 3]); // => should PASS





