let express = require("express");
let router = express.Router();
//GETリクエスト
router.get("/", (req, res, next) => {
    res.render("apiExp", { title: "ybd", api: "ybd" });
});
router.get("/nya", (req, res, next) => {
    res.render("apiExp", { title: "ybd", api: "ybd/nya" });
});
router.get("/rss", (req, res, next) => {
    res.render("apiExp", { title: "ybd", api: "ybd/rss" });
});
router.get("/members", (req, res, next) => {
    res.render("apiExp", { title: "ybd", api: "ybd/members" });
});

//POSTリクエスト

module.exports = router;
