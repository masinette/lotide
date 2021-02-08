const assertArraysEqual = require("../assertArraysEqual.js");


//TEST CONDITIONS
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS

assertArraysEqual([1, 2, 4], [1, 2, 3]); // => should FAIL