var assert = require('power-assert');
var utils = require('../');

describe('StrUtils', function() {
  var str = '\uD842\uDFB7野家';

  it('文字列の長さは3である。', function() {
    assert(3, utils.length32(str));
  });

  it('サロゲートペアを考慮して1文字取得する。', function() {
    assert('\uD842\uDFB7' === utils.char32At(str, 0));
  });

  it('サロゲートペアを考慮して2文字取得する。', function() {
    assert('\uD842\uDFB7野' === utils.substr32(str, 0, 2));
  });
});