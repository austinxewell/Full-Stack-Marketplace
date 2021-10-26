const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Post, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', (req, res) => {
   Post.create({
      title: req.body.title,
      post_url: req.body.post_url,
      user_id: req.session.user_id
   })
   .then(dbPostData => res.json(dbPostData))
   .catch(err => {
      console.log(err);
      res.status(500).json(err);
   });
});

module.exports = router;