'use strict';

function collect_last_element(collection) {
  return collection
    .reduce((a,b)=>b);
}

module.exports = collect_last_element;
