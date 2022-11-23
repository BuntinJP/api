let express = require("express");
let router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("errorAlt", { title: "404", message: "This is a fuckin error page. get out." });
});

module.exports = router;
