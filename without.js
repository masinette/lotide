const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');


  //Implement without which will return a 
  //subset of a given array, removing unwanted elements.

  // take in a source array and an itemsToRemoveArray
const without = function(source, itemsToRemove){
//return a new array with only elements from source that AREN'T in itemsToRemove
  let approvedItems = [];
  //loop through all items
    for (let i = 0; i < source.length; i++){

      //remove unwanted items 
      if(source[i] !== itemsToRemove[i]){
        approvedItems.push(source[i]);
      }
    }

  //if approved, push to approved array and return
  console.log(approvedItems);

  return approvedItems;
}

module.exports = without;

// TEST CONDITIONS
// without([1, 2, 3], [1]) // => [2, 3]
// without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);