const assertEqual = require('./assertEqual');

/*
Implement the function findKeyByValue which takes in an object and a value. 
It should scan the object and return the first key 
which contains the given value. 
If no key with that given value is found, then it should return undefined.
*/

const findKeyByValue = function(testObject, testValue){
  //looping over the testObject 
  for (let parts in testObject ) {
      // console.log("parts",parts);
      // console.log(testObject[parts]);
      // console.log("testValue",testValue);

  //check if the testValue matches the key value
    if (testValue === testObject[parts]){
      return parts;
    }
      // console.log(Object.keys(testObject));
    //find the key value of testValue
  }
  //if there is no match return undefined
  return undefined;
}

module.exports = findKeyByValue;

// const bestTVShowsByGenre = { 
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);