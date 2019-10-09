'use strict';

function get_intersection(collection_a, collection_b) {
  return collection_b
    .filter(b=>collection_a.includes(b));
}

module.exports = get_intersection;
