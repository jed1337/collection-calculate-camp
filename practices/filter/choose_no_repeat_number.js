'use strict';

function choose_no_repeat_number(collection) {
  return collection
    .filter((value, index, collectionArray)=>collectionArray.indexOf(value)===index);
}

module.exports = choose_no_repeat_number;
