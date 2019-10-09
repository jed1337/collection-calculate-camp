'use strict';

function get_union(collection_a, collection_b) {
  return collection_a.concat(collection_b)
    .filter((value, index, combined)=>combined.indexOf(value) === index);  
}

module.exports = get_union;

