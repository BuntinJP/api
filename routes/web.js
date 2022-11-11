let express = require("express");
let router = express.Router();

router.get("/", function (req, res, next) {
    res.render("apiExp", { title: "web", api: "web" });
});
router.get("/index", function (req, res, next) {
    res.render("apiExp", { title: "web", api: "web/index" });
});
router.get("/counter", function (req, res, next) {
    res.render("apiExp", { title: "web", api: "web/counter" });
});
router.get("/index/tagCloud", function (req, res, next) {
    res.render("apiExp", { title: "web", api: "web/index/tagCloud" });
});
router.get("/index/qiita", function (req, res, next) {
    res.render("apiExp", { title: "web", api: "web/index/qiita" });
});

module.exports = router;
