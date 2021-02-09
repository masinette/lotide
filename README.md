# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @tonisam/lotide`

**Require it:**

`const _ = require('@tonisam/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head()`: returns the first item of an arry
* `tail()`: returns all but the first items of an array
* `middle()`: takes in an array and returns the middle-most element(s) of the given array
* `assertArraysEqual()`: assertion for two arrays, logs 'match' or 'don't match to console.
* `assertObjectsEqual()`: takes in two objects, and logs 'match' or 'don't match.
* `assertEqual()`: assertion for two primitive values, logs passed or failed to console.
* `eqObjects()`: takes in two objects and returns true or false
* `eqArrays()`: takes in two arrays and returns true or false, based on a perfect match.
* `countLetters()`: take in a sentence (as a string) and then return a count of each of the letters in that sentence
* `countOnly()`: take in a collection of items and return counts for a specific subset of those items
* `findKey()`: takes in an object and a callback,scans the object and returns the first key for which the callback returns a truthy value.
* `findKeyByValue()`: takes in an object and a value, scans the object and return the first key which contains the given value. 
* `letterPositions()`: returns all the indices in a string where each character is found
* `map()`: take in an array to map and a callback function, and will return a new array based on the results of the callback function.
* `takeUntil()`: keeps collecting items from a provided array until the callback provided returns a truthy value.
* `without()`: will return a subset of a given array, removing unwanted elements.