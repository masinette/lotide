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
const eqObjects = function(object1, object2) {
  
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  //use FOR OF, because the loop is for an array
  for (let item of Object.keys(object1)) {
// console.log("object1", object1[item])
    
    if (Array.isArray(object1[item]) && Array.isArray(object2[item])) {
      if ((eqArrays(object1[item], object2[item])) === false) {
        return false;
        } else{
        return true;
        }
      }

    if(object1[item] !== object2[item]) {
      return false;
    }


  }
  return true;
}


/* 
Implement assertObjectsEqual which will take in 
two objects and console.log an appropriate message to the console.
*/
// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  // console.log(`Example label: ${inspect(actual)}`);
  if ((eqObjects(actual, expected)) === true){
    console.log("These two objects match")
  } 
  if ((eqObjects(actual, expected)) === false){
    console.log("These objects do not match.");
  }
};

module.exports = assertObjectsEqual;

// assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' })
