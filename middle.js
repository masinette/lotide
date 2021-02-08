const assertArraysEqual = require(".//assertArraysEqual");

const eqArrays = require("./eqArrays");


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

