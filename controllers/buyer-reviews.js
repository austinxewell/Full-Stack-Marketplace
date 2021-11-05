const router = require("express").Router();
const { User, Purchased, Review } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", (req, res) => {
  res.render("buyer-reviews");
});

router.get("/buyer-reviews", (req, res) => {
  Review.findAll(
    {
      buyers_review: req.body.buyers_review,
    },
    {
      where: {
        user_id: req.session.user_id,
      },
      include: [
        {
          model: User,
          attributes: ["username"],
        },
        {
          model: Purchased,
          where: {
            buyers_id: req.params.buyers_id,
            user_id: req.session_user_id,
          },
          attributes: ["buyers_id", "post_id"],
        },
      ],
    }
  )
    .then((dbReviewData) => {
      if (!dbReviewData) {
        res
          .status(404)
          .json({ message: "No Purchased Listing found for this user" });
        return;
      }
      res.json(dbReviewData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
    res.render('buyer-reviews')
});

module.exports = router;
