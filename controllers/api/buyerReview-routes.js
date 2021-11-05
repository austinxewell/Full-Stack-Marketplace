const router = require("express").Router();
const { Review, User, Purchased, Post } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/api/buyer-reviews", withAuth, (req, res) => {
  Review.create(
    {
      buyer_review: req.body.buyer_review,
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
          model: Post,
          attributes: ["sellers_id"],
        },
        {
          model: Purchased,
          where: {
            buyers_id: req.params.buyers_id,
            post_id: req.params.post_id,
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
});

router.get("/api/buyer-reviews", (req, res) => {
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
            post_id: req.params.post_id,
            user_id: req.session_user_id,
          },
          attributes: ["buyers_id", "post_id"],
        },
      ],
    }
  )
    .then((dbReviewData) => {
      if (!dbReviewData) {
        res.status(404).json({ message: "Invalid Request" });
        return;
      }
      res.json(dbReviewData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;

// Just a thought but maybe there is a way to write a route that will search the current users Purchased items
// and then list them so they can click review on whichever one and add their Review (Text)
