'use strict';

function grouping_count(collection) {
  let groupMap={};

  for(element of collection){
    let updatedValue;
    if(groupMap.has(element)){
      updatedValue = groupMap[element]+1;
    } else{
      updatedValue=1;
    }
    groupMap[element]=updatedValue;
  }
  
}

module.exports = grouping_count;
