const { assert } = require("chai");
const middle = require("../middle.js");

describe("#middle", () => {
  it("returns [] for [1]", () => {
    assert.deepEqual(middle([1]), []);
  }),
  it("returns the middle number for array with odd length, [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  }),
  it("returns the two middle numbers for array with even length [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  })
}); 


//TEST CODE
// middle([1]) // => []
// middle([1, 2]) // => []

// middle([1, 2, 3]) // => [2]
// middle([1, 2, 3, 4, 5]) // => [3]

// middle([1, 2, 3, 4]) // => [2, 3]
// middle([1, 2, 3, 4, 5, 6]) // => [3, 4]