str32.js
========

`String.length`、`String.prototype.charAt`、`String.prototype.substr` のサロゲートペア対応版のメソッド　(`length32`, `char32At`、`substr32`) を提供します。数字を含むメソッドにしたのは継承を利用する場合、将来において導入される標準メソッドと衝突しないようにするためです。

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

将来の標準関数の候補
-----------------

`String.prototype.at` が提案されています。polyfill は[こちら](https://github.com/mathiasbynens/String.prototype.at)をご参照ください。


ライセンス
---------

MIT