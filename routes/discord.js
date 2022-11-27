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
    setting().then((data) => {
        res.send(data);
    }).catch((err) => {
        res.send(err);
    });
});

router.post("/tokens", function (req, res, next) {
    res.send("ok");
})

router.post('/', function (req, res, next) {
    let data = req.body;
    sendData(data);
    res.send('ok');
});

async function sendData(data) {
    let response = await axios.post(data.token, { content: data.content });
    fs.writeFile("./logs/response.json", JSON.stringify(decycle(response)), function (err) {
        if (err) {
            return console.log(err);
        }
    });
    return response;
}

const setting = () => {
    return new Promise((resolve, reject) => {
        fs.readFile('./setting.json', 'utf8', (err, data) => {
            if (err) {
                reject("setting.json not found");
            }
            resolve(data);
        });
    });
}

module.exports = router;
