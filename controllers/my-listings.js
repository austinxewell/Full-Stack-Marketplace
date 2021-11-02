const router = require("express").Router();

router.get("/", (req, res) => {

    res.render("edit-post");
  });


  module.exports = router;