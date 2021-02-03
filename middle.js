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


//Implement middle which will take in an array and return the 
//middle-most element(s) of the given array.
const middle = function(array){
  let middle = [];
  let value;
//arrays with one or two elements, there is no middle. Return an empty array.
    // console.log(array.length);
  if (array.length < 3){
    console.log(middle);
    return middle;
  }
//arrays with odd number of elements, an array containing a single middle element should be returned.
  if (array.length % 2 === 1){
    // console.log(Math.floor(array.length / 2) + 1)
    value = middle.push(Math.floor(array.length / 2) + 1);
    console.log(middle)
    return middle;
  }
//arrays with an even number of elements, an array containing the two elements in the middle should be returned
  if (array.length % 2 === 0){
  // console.log(Math.floor(array.length / 2))
  // console.log(Math.floor(array.length / 2) + 1)
    value = middle.push(Math.floor(array.length / 2))
    value = middle.push(Math.floor(array.length / 2) + 1)
    // console.log(array[value]);
    console.log(middle)
    return middle
  }

}

middle([1]) // => []
middle([1, 2]) // => []

middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]

middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]