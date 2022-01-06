const router = require("express").Router();
const { Post } = require("../../models");
const withAuth = require("../../utils/auth");

router.put("/:id", withAuth, (req, res) => {
   Post.update(
     {
       buyer_id: req.session.user_id,
     },
     {
       where: {
         id: req.params.id,
       },
     }
   )
     .then((dbPostData) => {
       if (!dbPostData) {
         res.status(404).json({ message: "No Listing found with this id" });
         return;
       }
       res.json(dbPostData);
     })
     .catch((err) => {
       console.log(err);
       res.status(500).json(err);
     });
 });

module.exports = router;


// const router = require('express').Router();
// const { Purchased, Review } = require('../../models');
// const withAuth = require('../../utils/auth);

// Just a thought but maybe there is a way to write a route that will search the current users Purchased items 
// and then list them so they can click review on whichever one and add their Review (Text)