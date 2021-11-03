const router = require('express').Router();
const { User, Post } = require("../../models");

  router.put("/add", (req,res) => {
    User.increment({
      money: 100
    },
    {
      where: {
        id: req.session.user_id
      }
    }).then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  });

  router.put("/subtract", (req,res) => {
    User.decrement({
      money: Post.req.body.price
    },
    {
      where: {
        id: req.session.user_id
      }
    }).then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  });

  module.exports = router;