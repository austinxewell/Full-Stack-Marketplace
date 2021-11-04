const router = require("express").Router();
const { User, Post, Purchased, Review } = require("../models");
//const withAuth = require("../utils/auth");


router.get("/", (req, res) => {
  res.render("edit-post");
});


// Find user by logged in session and include their Listings
router.get("/mylisting", (req, res) => {
  Post.findAll({
    include: {
      model: User,
      attributes: ['username'],
    },
    where: {
      user_id: req.session.user_id
    },
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    })
    .then(res.render('mylistings', {
      posts,
      logged_in: req.session.logged_in,
    }));
});


// Create a Listing
router.post("/", (req, res) => {
  Post.create({
    title: req.body.title,
    price: req.body.price,
    shipping: req.body.shipping,
    description: req.body.description,
    picture_url: req.body.picture_url,
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
