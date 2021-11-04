const router = require('express').Router();
const { User, Post, Purchased, Review } = require('../models');
const withAuth = require('../utils/auth');

require('dotenv').config();
var cloudinary = require('cloudinary').v2;

router.get('/', (req, res) => {
   res.render('edit-post');
});

// Find user by id and include their posts
router.get('/:id', (req, res) => {
   User.findByPk({
      attributes: { exclude: ['password'] },
      where: {
         loggedIn: req.session.loggedIn,
         id: req.params.id, // Maybe some kind of // loggedIn: req.session.loggedIn // to obtain the posts related to the user and their ID?
      },
      include: [
         {
            model: Post,
            attributes: ['sellers_id'],
            include: {
               model: User,
               attributes: ['user_id'],
            },
         },
         {
            model: Post,
            attributes: ['post_id'],
            include: {
               model: Purchased,
               attributes: ['buyers_id'],
            },
         },
      ],
   })
      .then((dbUserData) => {
         if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this id' });
            return;
         }
         res.json(dbUserData);
      })
      .catch((err) => {
         console.log(err);
         res.status(500).json(err);
      });
});

// // Create a Listing
// router.post("/", withAuth, (req, res) => {
//   Post.create({
//     title: req.body.title,
//     price: req.body.price,
//     shipping: req.body.shipping,
//     description: req.body.description,
//     picture_url: req.body.picture_url,
//   })
//     .then((dbPostData) => res.json(dbPostData))
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// CREATE a POST
router.post('/', withAuth, (req, res) => {
   console.log('inside POST create');
   const NO_IMAGE_URL =
      'https://res.cloudinary.com/joseepina/image/upload/v1635966743/istockphoto-922962354-170667a_ys4tsk.jpg';
   const file = req.files ? req.files.item_img.name : ''; // GETS the file from front-end
   // const file = req.files ? '/marketplace/images/' + req.files.item_img.name : ''; // GETS the file from front-end
   console.log('inside file', file);
   if (file) {
      cloudinary.uploader.upload(file, function (error, result) {
         console.log('inside Cloudinary');
         if (!error) {
            console.log('~ req.body ', req.body);
            console.log('~ req.session', req.session);
            Post.create({
               title: req.body.item_title,
               price: req.body.item_price,
               shipping: req.body.item_shipping,
               description: req.body.item_description,
               picture_url: result.secure_url,
               user_id: req.session.user_id,
               // * seller_id: req.session.user_id,
            })
               .then((dbPostData) => {
                  return res.json(dbPostData);
               })
               .catch((err) => {
                  console.log(err);
                  res.status(500).json(err);
               });
         } else {
            res.status(500).json({ message: 'Error in cloudinary upload.', error: error });
         }
      });
   } else {
      Post.create({
         title: req.body.item_title,
         price: req.body.item_price,
         shipping: req.body.item_shipping,
         description: req.body.item_description,
         picture_url: NO_IMAGE_URL,
         user_id: req.session.user_id,
         // * seller_id: req.session.user_id,
      })
         .then((dbPostData) => {
            return res.json(dbPostData);
         })
         .catch((err) => {
            console.log(err);
            res.status(500).json(err);
         });
   }
});

module.exports = router;
