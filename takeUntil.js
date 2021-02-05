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
Implement takeUntil which will keep collecting items from 
a provided array until the callback provided returns a truthy value.
*/
const takeUntil = function(array, callback) {
  
  let approvedItems = [];
  //iterate through array
  for( let item of array){

    // console.log(callback(item)); --------- this log 
    //returns a boolean value, true if passed in function arguments are met

    //if the callback value at item is false, push it to the new array
    if (!callback(item)){
      approvedItems.push(item);
    }
    //if the callback value is true, stop running and return approvedArray
    if (callback(item)){
      return approvedItems
    }
  }
}







const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


console.log(assertArraysEqual((takeUntil(data1, x => x < 0)), [1, 2, 5, 7, 2]));
console.log(assertArraysEqual((takeUntil(data2, x => x === ',')), ['I\'ve', 'been', 'to', 'Hollywood' ]));