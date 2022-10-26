
var express = require('express');
var router = express.Router();

// （中略）

/* サンプルAPI③ 
 * http://localhost:3000/samples/hello/(任意の文字列) にGETメソッドのリクエストを投げると、
 * JSON形式で(任意の文字列)を返す。
 */

router.get('/',(req,res,next)=> {
    res.render('test',{title:'test'});
});
router.get('/hello/:place', function (req, res, next) {
    // var param = {"result":"Hello "+ req.params.place + " !"};                          // ← ★★ 削除 ★★
    var param = { "result": `Hello ${req.params.place} !`, "shop name": req.query.shop, "unko": req.query.unko };  // ← ★★ 追加 ★★
    res.header('Content-Type', 'application/json; charset=utf-8')
    res.send(param);
});

router.post('/', function (req, res, next) {
    var param = { "値": "POSTメソッドのリクエストを受け付けました", "bodyの値": req.body.card };
    res.header('Content-Type', 'application/json; charset=utf-8')
    res.send(param);
});

module.exports = router;