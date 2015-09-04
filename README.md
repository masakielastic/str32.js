str32.js
========

`String.length`、`String.prototype.charAt`、`String.prototype.substr` のサロゲートペア対応版のメソッド　(`length32`, `char32At`、`substr32`) を提供します。

インストール
----------

```bash
npm install masakielastic/str32.js
```


使い方
-----

```javascript
var utils = require('str32.js');

var str = '\uD842\uDFB7野家';

console.log(3 === utils.length32(str));
console.log('\uD842\uDFB7' === utils.char32At(str, 0));
console.log('\uD842\uDFB7野' === utils.substr32(str, 0, 2));
```