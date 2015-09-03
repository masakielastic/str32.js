exports.length = function(str) {
  return str.length - (str.match(/[\uD800-\uDBFF][\uDC00-\uDFFFF]/g)||[]).length;  
};

exports.charAt = function(str, offset) {
  var pos = 0;
  var length = str.length;
  var cp = 0;
  var size = 0;
  var index = 0;

  while (pos < length) {
    cp = str.codePointAt(pos);
    size = cp < 0x10000 ? 1 : 2;

    if (index === offset) {
      return str.substr(pos, size);
    }

    pos += size;
    ++index;
  }

  return '';
}