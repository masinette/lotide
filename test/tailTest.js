
const tail = require("../tail.js");
const assertEqual = require("../assertEqual.js");



// // Test Case 1: Check the returned array elements
const result = ["Hello", "Lighthouse", "Labs"];
let newResult = tail(result);
assertEqual(newResult.length, 2); // ensure we get back two elements
assertEqual(newResult[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(newResult[1], "Labs"); // ensure second element is "Labs"


// Test Case: Check the original array 
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!