const router = require("express").Router();
const { User, Post, Review } = require("../../models");
const withAuth = require("../utils/auth");



router.get('/', withAuth, (req, res) => {

    res.render('buyer-review');
  });

  router.post('/', withAuth, (req, res) => {

    Review.create({

      buyer_review: req.body.buyer_review,
      seller_username: req.body.seller_username,
      buyer_username: req.body.buyer_username,

    })

  })


  module.exports = router;