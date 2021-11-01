const router = require("express").Router();
const sequelize = require("../../config/connection");
const { Post, User } = require("../../models");
const withAuth = require("../../utils/auth");

// get all posts
router.get('/', (req, res) => {
  console.log('=======================');
  Post.findAll({
    attributes: [
      'id',
      'title',
      'price',
      'shipping',
      'description',
      'picture_url'
    ],
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
  .then(dbPostData => res.json(dbPostData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.get("/:id", (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id,
    },
    attributes: [ 
      'id',
      'title', 
      'price', 
      'shipping',
      'description',
      'picture_url'
    ],
    include: [
      {
        model: User,
        attributes: ["username"],
      }
    ]
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No listing found with this id" });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", withAuth, (req, res) => {
  Post.create({
    title: req.body.title,
    price: req.body.price,
    shipping: req.body.shipping,
    description: req.body.description,
    picture_url: req.body.picture_url,
    user_id: req.session.user_id
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/:id", withAuth, (req, res) => {
  Post.update(
    {
      title: req.body.title,
      price: req.body.price,
      shipping: req.body.shipping,
      description: req.body.description,
      picture_url: req.body.picture_url,
      user_id: req.session.user_id
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

router.delete("/:id", withAuth, (req, res) => {
  Post.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No listing found with this id" });
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
