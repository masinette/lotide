// index.js
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');




module.exports = {
  head,
  tail,
  middle,
  assertArraysEqual,
  assertObjectsEqual,
  assertEqual,
  eqObjects,
  eqArrays
}