'use strict';
const fromBackTick = 96;

var number_map_to_word = function (collection) {
  return collection
    .map(element => {
      const ones = element % 26;
      const tens = Math.floor(element / 26);

      const onesLetter = String.fromCharCode(fromBackTick + ones);
      const tensLetter = String.fromCharCode(fromBackTick + tens);

      if (tens === 0) {
        return `${onesLetter}`;
      } else if (tens > 0 && ones === 0) {
        return `${tensLetter}a`;
      } else if (tens > 0 && ones !== 0) {
        return `${tensLetter}${onesLetter}`;
      }
    });
};

module.exports = number_map_to_word;
