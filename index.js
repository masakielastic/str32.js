exports.countChar32 = function(str) {
  return str.length - (str.match(/[\uD800-\uDBFF][\uDC00-\uDFFFF]/g)||[]).length;  
};