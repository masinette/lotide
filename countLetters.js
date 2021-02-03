const assertEqual = function(actual, expected) {

  if (actual === expected){
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  else{
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


//The function should take in a sentence (as a string) 
//and then return a count of each of the letters in that sentence.

const countLetters = function(sentence){
  //results count instances of letter
  let result = {};
  let count = 0;
  //loop through each letter in string
  for (let letter of sentence){

      //if it is not a space move on
      if (letter !== " "){
          //does this letter already exist in the results object?
          if(result[letter]){
            //if it exists already add one to the existing count
            count = result[letter];
            result[letter] = count + 1;
          } else{
            //if it doesn't already exist, set count to one
            result[letter] = 1;
          }
        }
    }
    console.log(result);
  return result;
  }


countLetters("LHL");
countLetters("lighthouse in the house")