const router = require("express").Router();

router.get("/", (req, res) => {
    res.render("buyer-reviews");
  });

  router.get("/post-review", (req, res) => {
    res.render("post-review");
  });

  module.exports = router;