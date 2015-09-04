var assert = require('power-assert');
var utils = require('../');

describe('StrUtils', function() {
  var str = '\uD842\uDFB7野家';

  it('文字列の長さは3になる。', function() {
    assert(3, utils.length(str));
  })
});