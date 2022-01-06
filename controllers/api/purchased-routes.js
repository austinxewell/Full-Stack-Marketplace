const router = require("express").Router();
const { Post } = require("../../models");
const withAuth = require("../../utils/auth");

router.put("/:id", withAuth, (req, res) => {
   Post.update(
     {//really unsure of what to put here to sell the Listing // I assume it would need to be a put since new data will be assigned to it referencing the 
     // buyer_username to tie back to the user purchasing the listing
       title: req.body.title,
       price: req.body.price,
       shipping: req.body.shipping,
       description: req.body.description,
       picture_url: req.body.picture_url,
       user_id: req.session.user_id,
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
