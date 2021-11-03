const router = require("express").Router();
const { User, Post, Purchased, Review } = require("../models");
const withAuth = require("../utils/auth");


router.get("/", (req, res) => {
  res.render("edit-post");
});


// Find user by id and include their posts
router.get("/:id", (req, res) => {
  User.findByPk({
    attributes: { exclude: ["password"] },
    where: {
      loggedIn: req.session.loggedIn,
      id: req.params.id, // Maybe some kind of // loggedIn: req.session.loggedIn // to obtain the posts related to the user and their ID?
    },
    include: [
      {
        model: Post,
        attributes: ["sellers_id"],
        include: {
          model: User,
          attributes: ["user_id"],
        },
      },
      {
        model: Post,
        attributes: ["post_id"],
        include: {
          model: Purchased,
          attributes: ["buyers_id"],
        },
      },
    ],
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});


// Create a Listing
router.post("/", withAuth, (req, res) => {
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
