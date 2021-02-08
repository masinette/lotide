const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

/* INSTRUCTIONS: return all the indices (zero-based positions)
 in the string where each character is found. */


const letterPositions = function(sentence) {
  const results = {};
  
  // loop through sentence
  for ( let i = 0; i < sentence.length; i++){
    //assigned sentence[i] to a variable called letter (e.g appears as 'h'). 
    const letter = sentence[i];

    //if this key does not exist in results yet
    if(!results[letter]){
      //adding letter to results object, e.g results with key of 'h' equals [0].
    results[letter] = [i];
    } else{
      //if letter already appears, push the next value into existing array
      results[letter].push(i);
    }
  }
  return results;
};

module.exports = letterPositions;


// assertArraysEqual(letterPositions("hello").e, [1]);
// assertArraysEqual(letterPositions("hello"), true);