const router = require("express").Router();
const { User, Purchased, Review } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", (req, res) => {
  res.render("buyer-reviews");
});

router.get("/post-review", (req, res) => {
  res.render("post-review");
});

module.exports = router;
