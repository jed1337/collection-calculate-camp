'use strict';
const fromBackTick = 96;

var number_map_to_word_over_26 = function(collection){
  // return ['a','m','aa','ad','y','aa'];

  let wordList = [];
  for(let element of collection){
    let ones = element%26;
    let tens = Math.floor(element/26);

    let onesLetter = String.fromCharCode(fromBackTick+ones);
    let tensLetter = String.fromCharCode(fromBackTick+tens);

    if(tens === 0){
      wordList.push(`${onesLetter}`);
    } else if(tens>0 && ones === 0){
      wordList.push(`${tensLetter}a`);
    } else if(tens>0 && ones !==0){
      wordList.push(`${tensLetter}${onesLetter}`);
    }

  }
  return wordList;
};

module.exports = number_map_to_word_over_26;
