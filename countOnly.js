/* 
This function should take in a collection of items 
and return counts for a specific subset of those items. 
It won't count everything. 
In order to decide what to count, it will also be given 
an idea of which items we care about and it will only count those, 
ignoring the others.

Items in our case will be limited to Strings. 
*/

const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');

/////// ^^CALLING PREVIOUS FUNCTION^^ /////////////

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    // console.log(item);
  // inside the loop,increment the counter for each item:
  //   set a property with that string key to:
  //     the value that was already there (or zero if nothing there) with 1 added to it.
  
  // inside the loop,increment the counter for each item:

  // inside the loop:
  // console.log("itemstocount:     ",itemsToCount[item]);
    if (itemsToCount[item]) { 
      if (results[item]) {
        // console.log("RESULTS ITEM:", results[item])
      results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
}
module.exports = countOnly;



/// TEST CONDITIONS ///////
// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe" 
// ];

// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });



// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);