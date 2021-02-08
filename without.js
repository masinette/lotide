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


  //Implement without which will return a 
  //subset of a given array, removing unwanted elements.

  // take in a source array and an itemsToRemoveArray
const without = function(source, itemsToRemove){
//return a new array with only elements from source that AREN'T in itemsToRemove
  let approvedItems = [];
  //loop through all items
    for (let i = 0; i < source.length; i++){
        // console.log(source[i]);
        // console.log(itemsToRemove[i]);
        // console.log("itemsToRemove: ",itemsToRemove);


      //remove unwanted items 
      if(source[i] !== itemsToRemove[i]){
        // console.log("remove", i);
        // console.log(source[i]);
        approvedItems.push(source[i]);
      }

    }

  //if approved, push to approved array and return
  console.log(approvedItems);

  return approvedItems;
}



without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);