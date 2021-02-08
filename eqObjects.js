const assertEqual = function(actual, expected) {

  if (actual === expected){
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  else{
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
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
/* 
INSTRUCTIONS: Implement the definition for function eqObjects 
which will take in two objects and returns true or false, 
based on a perfect match.
*/


//console.log(object1[item]) ----- prints value

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



//Test conditions (Assertions)


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false



const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false