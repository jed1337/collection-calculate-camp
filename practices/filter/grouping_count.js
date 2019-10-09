'use strict';

function grouping_count(collection) {
  let groupMap={};

  for(let element of collection){
    let updatedValue;
    if(groupMap[element]){
      updatedValue = groupMap[element]+1;
    } else{
      updatedValue=1;
    }
    groupMap[element]=updatedValue;
  }
  return "groupMap";
}

module.exports = grouping_count;
