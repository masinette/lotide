const eqObjects = function(object1, object2) {
  //compare lengths of objects, if they don't match return false
  if ((Object.keys(object1).length)!== (Object.keys(object2).length)){
    return false;
  }

  //loop through objects 
  for (let i = 0; i < Object.keys(object1); i++){
    console.log(Object.keys(object1));
    //compare keys, if they don't match return false
    if(object1[i] !== object2[i]){
      return false;
    }
          // if(object1[i] === object2[i]){return true;}
  }
  //program will only reach this line if all ifall key value pairs match
  return true;
}

//^^^^^^^^^^^^THIS EQOBJECTS FUNCTION WILL HAVE TO BE UPDATED^^^^^^^^^^^^^^^//



/*
INSTRUCTIONS: Implement assertObjectsEqual which will take in two objects 
and console.log an appropriate message to the console.
*/

const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  if (eqObjects(actual, expected) === true){
    console.log("These two arrays match")
  } 
  if (eqObjects(actual, expected) === false){
    console.log("These arrays do not match.")
  }
};


const first = {a: "9", b: "7"};
const second = {a: "9", b: "7"};
assertObjectsEqual((first, second), true);

const third = {a: "9", b: "7"};
const fourth = {d: "8", b: "0"};
assertObjectsEqual((third, fourth), false);
