<<<<<<< HEAD
let express = require('express');
=======
let express = require("express");
>>>>>>> 6e142e8713de0a339fceab19bc50c1e5861ab989
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
