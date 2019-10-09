'use strict';

function get_integer_interval(number_a, number_b) {
  let intervalList=[];

  const operators = getOperators(number_a, number_b);

  for (let a = number_a; operators.comparisonCondition(a, number_b); a+=operators.addValue) {
    intervalList.push(a);    
  }

  return intervalList;
}

function getOperators(number_a, number_b){
  if(number_a<number_b){
    return {
      comparisonCondition : function(a, b){
        return a<=b;
      },
      addValue:1
    }
  } else{
    return {
      comparisonCondition : function(a,b){
        return a>=b; 
      },
      addValue: -1
    }
  }
}

module.exports = get_integer_interval;

