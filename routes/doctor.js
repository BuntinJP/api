let express = require("express");
let router = express.Router();

router.get("/", function (req, res, next) {
    res.render("doctor", { title: "doctor", api: "doctor" });
});

module.exports = router;
