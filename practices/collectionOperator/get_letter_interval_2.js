'use strict';

const NUMBER_LETTERS_IN_THE_ALPHABET = 26;

const ALPHABET = {
  0:"a",
  1:"b",
  2:"c",
  3:"d",
  4:"e",
  5:"f",
  6:"g",
  7:"h",
  8:"i",
  9:"j",
  10:"k",
  11:"l",
  12:"m",
  13:"n",
  14:"o",
  15:"p",
  16:"q",
  17:"r",
  18:"s",
  19:"t",
  20:"u",
  21:"v",
  22:"w",
  23:"x",
  24:"y",
  25:"z"
}

function get_letter_interval_2(number_a, number_b) {
  let intervalList=[];

  const operators = getOperators(number_a, number_b);

  for (let a = number_a; operators.comparisonCondition(a, number_b); a+=operators.addValue) {
    intervalList.push(translateNumberToLetter(a));
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

function translateNumberToLetter(number) {
  let onesPlace = (number-1)%NUMBER_LETTERS_IN_THE_ALPHABET;
  let tensPlace = Math.floor((number-1)/NUMBER_LETTERS_IN_THE_ALPHABET);

  if(tensPlace===0){
    return ALPHABET[onesPlace];
  }
  return ALPHABET[tensPlace-1]+ALPHABET[onesPlace];
}

module.exports = get_letter_interval_2;
