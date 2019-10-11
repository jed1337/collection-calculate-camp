'use strict';

function compare_collections(collection_a, collection_b) {
  const distinctColA = Array.from(new Set(collection_a));
  const distinctColB = Array.from(new Set(collection_b));

  if(distinctColA.length!==distinctColB.length){
    return false;
  }

  return collection_a
    .reduce(function(acc, v1, idx){
      let v2 = collection_b[idx];
      return acc && v1===v2;
    }, true);
  }

module.exports = compare_collections;
