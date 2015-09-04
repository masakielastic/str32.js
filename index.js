function Str32Utils() {
    if (!(this instanceof Str32Utils)) {
      return new StrUtils();
    }
};

Str32Utils.prototype.length32 = function(str) {
    return str.length - (str.match(/[\uD800-\uDBFF][\uDC00-\uDFFFF]/g)||[]).length;
};

Str32Utils.prototype.char32At = function(str, offset) {
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
};

Str32Utils.prototype.substr32 = function(str, pos, length) {
    var count = this.length32(str);
    var ret = '';
    var last = pos + length - 1;

    for (var i = 0; i < count; ++i) {

        if (i >= pos && last >= i) {
            ret += this.char32At(str, i);
        }

        if (i === last) {
            return ret;
        }
    }

    return ret;
};

module.exports = new Str32Utils;