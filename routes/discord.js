const express = require('express');
const bodyParser = require('body-parser');
let router = express.Router();
const fs = require('fs');

router.use(bodyParser.json());
router.get('/', function (req, res, next) {
    res.render('apiExp', { title: 'discord', api: 'discord' });
});

router.get('/tokens', function (req, res, next) {
    const data = JSON.parse(fs.readFileSync('./setting.json', 'utf8'));
    const tokens = data.tokens;
    sendJson(res, tokens);
});

router.post('/', function (req, res, next) {
    let data = req.body;
    console.log(data);
    console.log(data.test);
    res.send('discord');
});

const sendWebhook = (url, content) => {
    const config = {
        "headers": {
            "Accept": 'application/json',
            'Content-Type': 'application/json',
        }
    }
}

module.exports = router;
