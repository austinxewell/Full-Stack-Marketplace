const router = require("express").Router();
const { User, Post } = require('../models');
const withAuth = require('../utils/auth');

router.get("/", (req, res) => {

    res.render("edit-post");
  });


  
// Find user by id and include their posts
router.get('/:id', (req, res) => {
  User.findOne({
      attributes: { exclude: ['password'] },
      where: {
          id: req.params.id  // Maybe some kind of req.session.loggedIn to obtain the posts related to the user and their ID?
      },
      include: [
          {
              model: Post,
              attributes: ['id', 'title', 'price', 'shipping', 'description', 'picture_url']
          },
      ]
  })
  .then(dbUserData => {
      if (!dbUserData) {
          res.status(404).json({ message: 'No user found with this id' });
          return;
      }
      res.json(dbUserData);
  })
  .catch(err => {
      console.log(err);
      res.status(500).json(err);
  });
});


// Create a Listing
router.post('/', withAuth, (req, res) => {
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