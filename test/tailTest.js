const assert = require("chai").assert;
const tail = require("../tail.js");
const assertEqual = require("../assertEqual.js");

describe("#tail", () => {
  it("returns two elements", () => {
    const result = ["Hello", "Lighthouse", "Labs"];
    let newResult = tail(result);
    assert.strictEqual(newResult.length, 2);
  }),
  it("returns new array, without altering original array", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.strictEqual(words.length, 3);
  })
});


