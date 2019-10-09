'use strict';

function get_integer_interval_2(number_a, number_b) {
  let intervalList=[];

  if(number_a<number_b){
    for (let a = number_a; a <= number_b; a++) {
      if(a%2!==0){
        continue;
      }
      intervalList.push(a);    
    }
  } else{
    for (let a = number_a; a >= number_b; a--) {
      if(a%2!==0){
        continue;
      }
      intervalList.push(a);
    }
  }

  return intervalList;
}

function isOdd(number) {
  return number%2!==0;
}

module.exports = get_integer_interval_2;
