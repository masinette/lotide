const assertEqual = require("./assertEqual");


const tail = function (compareValue) {
 
  let result = Array.from(compareValue);
  result.shift();

return result;
}

module.exports = tail;