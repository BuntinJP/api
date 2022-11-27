const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const router = express.Router();
const fs = require('fs');
const { decycle } = require('json-cyclic');

router.use(bodyParser.json());
router.get('/', function (req, res, next) {
    res.render('apiExp', { title: 'discord', api: 'discord' });
});

router.get('/tokens', function (req, res, next) {
    setting()
        .then((data) => {
            let setting = JSON.parse(data);
            let tokens = setting.tokens;
            res.send(tokens);
        })
        .catch((err) => {
            res.send(err);
        });
});

router.post('/tokens', function (req, res, next) {
    let data = req.body;
    if (data.token) {
        setting().then((setting) => {
            let localSetting = JSON.parse(setting);
            let tokensLength = localSetting.tokens.length;
            localSetting.tokens[tokensLength] = {
                token: data.token,
            };
            getChannelName(data.token);
            let outSetting = JSON.stringify(localSetting);
            fs.writeFile('setting.json', outSetting, (err) => {
                if (err) {
                    res.send(err);
                } else {
                    res.send('success');
                }
            });
        });
    } else {
        res.send('token not found');
    }
});

router.post('/', function (req, res, next) {
    let data = req.body;
    sendData(data);
    res.send('ok');
});

async function sendData(data) {
    let response = await axios.post(data.token, { content: data.content });
    fs.writeFile(
        './logs/response.json',
        JSON.stringify(decycle(response)),
        function (err) {
            if (err) {
                return console.log(err);
            }
        }
    );
    return response;
}

async function getChannelName(token) {
    let response = await axios.get(token);
    response = JSON.stringify(decycle(response));
    console.log(response.keys());
}

const setting = () => {
    return new Promise((resolve, reject) => {
        fs.readFile('./setting.json', 'utf8', (err, data) => {
            if (err) {
                reject('setting.json not found');
            }
            resolve(data);
        });
    });
};

module.exports = router;
