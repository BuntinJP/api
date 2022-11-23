let express = require("express");
let router = express.Router();

router.get("/", function (req, res, next) {
    res.render("apiExp", { title: "discord", api: "discord" });
});

router.post("/", function (req, res, next) {
    let body = JSON.parse(req.body.payload);
    console.log(body);
});

module.exports = router;
