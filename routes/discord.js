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
    let content = data.content;
    let response = sendData(data.token, { content: content });
    console.log(response);
});

async function sendData(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    return await response.json();
}

module.exports = router;
