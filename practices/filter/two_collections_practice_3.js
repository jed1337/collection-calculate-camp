'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  return collection_a
    .filter(value=>isDivisibleByAnyIn(value, collection_b));
}

function isDivisibleByAnyIn(value, divisorArray){
  return divisorArray
    .filter(divisor=>value%divisor===0)
    .length > 0;
}

module.exports = choose_divisible_integer;
