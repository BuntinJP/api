let express = require("express");
const bodyParser = require("body-parser");
let router = express.Router();

router.use(bodyParser.json());
router.get("/", function (req, res, next) {
    res.render("apiExp", { title: "discord", api: "discord" });
});


router.post("/", function (req, res, next) {
    let data = req.body;
    console.log(data);
    console.log(data.test);
    res.send("discord");
});

module.exports = router;
