const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post, User } = require("../models");
//const withAuth = require("../utils/auth");

router.get("/", (req, res) => {
  console.log(req.session);
  console.log("====================");
  Post.findAll({
    where: {
      // use ID from the session
      user_id: req.session.user_id,
    },
    include: [
      {
        model: User,
        attributes: ["username"],
      },
    ],
  }).then((dbPostData) => {
      // serialize data before passing to template
      const posts = dbPostData.map((post) => post.get({ plain: true }));
      res.render("dashboard", { posts, loggedIn: req.session.loggedIn });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/edit/:id', (req, res) => {
    Post.findByPk(req.params.id, {
        attributes: [
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
        .then(dbPostData => {
            if (dbPostData) {
                const post = dbPostData.get({ plain: true });

                res.render('edit-post', {
                    post,
                    loggedIn: true
                });
            } else {
                res.status(404).end();
            }
        })
        .catch(err => {
            res.status(500).json(err);
        });
});


module.exports = router;
