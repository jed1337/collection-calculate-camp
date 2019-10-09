'use strict';

var get_integer_interval_2 = require('../../practices/collectionOperator/get_integer_interval_2.js');

describe('get_integer_interval_2', function () {

  var collection_a = [2, 4, 6, 8, 10];
  var collection_b = [10, 8, 6, 4, 2];

  it('', function() {

    var result = get_integer_interval_2(1, 10);
    expect(result).toEqual(collection_a);
  });

  it('', function() {

    var result = get_integer_interval_2(10, 1);
    expect(result).toEqual(collection_b);
  });

  it('', function() {

    var result = get_integer_interval_2(10, 10);
    expect(result).toEqual([10]);
  });

  it('', function() {

    var result = get_integer_interval_2(5, 5);
    expect(result).toEqual([]);
  });
});
