const router = require("express").Router();

router.get("/", (req, res) => {
    res.render("buyer-reviews");
  });

  module.exports = router;