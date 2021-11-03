const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Post, User } = require('../../models');
const withAuth = require('../../utils/auth');
const path = require('path');

require('dotenv').config();

var cloudinary = require('cloudinary').v2;
// cloudinary.config({
//    cloud_name: process.env.CLOUD_NAME,
//    api_key: process.env.API_KEY,
//    api_secret: process.env.API_SECRET,
//    secure: true,
// });

// get all posts
router.get('/', (req, res) => {
   console.log('=======================');
   Post.findAll({
      attributes: ['id', 'title', 'price', 'shipping', 'description', 'picture_url'],
      include: [
         {
            model: User,
            attributes: ['username'],
         },
      ],
   })
      .then((dbPostData) => res.json(dbPostData))
      .catch((err) => {
         console.log(err);
         res.status(500).json(err);
      });
});

router.get('/:id', (req, res) => {
   Post.findOne({
      where: {
         id: req.params.id,
      },
      attributes: ['id', 'title', 'price', 'shipping', 'description', 'picture_url'],
      include: [
         {
            model: User,
            attributes: ['username'],
         },
      ],
   })
      .then((dbPostData) => {
         if (!dbPostData) {
            res.status(404).json({ message: 'No listing found with this id' });
            return;
         }
         res.json(dbPostData);
      })
      .catch((err) => {
         console.log(err);
         res.status(500).json(err);
      });
});

// CREATE a POST
router.post('/', withAuth, (req, res) =>
{
   const NO_IMAGE_URL =
      'https://res.cloudinary.com/joseepina/image/upload/v1635966743/istockphoto-922962354-170667a_ys4tsk.jpg';
   const file = req.files ? '/marketplace/images/' + req.files.item_img.name : ''; // GETS the file from front-end
   console.log('~ file', file);
   let filePath = '';

   if (file) {
      cloudinary.uploader.upload(file, function (error, result) {
         if (!error) {
            console.log(result);
            console.log('~ FILEPATH ON UPLOAD SUCESS: ', result.secure_url);
            Post.create({
               title: req.body.item_title,
               price: req.body.item_price,
               shipping: req.body.item_shipping,
               description: req.body.item_description,
               picture_url: result.secure_url,
               user_id: req.session.user_id,
            })
               .then((dbPostData) => {
                  console.log('CREATED RECORD/UPLOAD FILE');
                  return res.json(dbPostData);
                  // res.render('homepage', { loggedIn: true });
               })
               .catch((err) => {
                  console.log(err);
                  res.status(500).json(err);
               });

            //res.cloudinary.com/joseepina/image/upload/v1635966743/istockphoto-922962354-170667a_ys4tsk.jpg
         } else {
            console.log('ERROR IN CLOUDINARY.IPLOADER.UPLOAD()', error);
            res.status(500).json({ message: 'ERROR IN CLOUDINARY.IPLOADER.UPLOAD()', error: error });
         }
      });
   } else {
      console.log('~ FILEPATH BEFORE no image: ', NO_IMAGE_URL);
      Post.create({
         title: req.body.item_title,
         price: req.body.item_price,
         shipping: req.body.item_shipping,
         description: req.body.item_description,
         picture_url: NO_IMAGE_URL,
         user_id: req.session.user_id,
      })
         .then((dbPostData) => {
            console.log('CREATED NO IMAGE RECORD/UPLOAD FILE');
            return res.json(dbPostData);
            // res.render('homepage', { loggedIn: true });
         })
         .catch((err) => {
            console.log(err);
            res.status(500).json(err);
         });
   }
});

router.put('/:id', withAuth, (req, res) => {
   Post.update(
      {
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
            res.status(404).json({ message: 'No Listing found with this id' });
            return;
         }
         res.json(dbPostData);
      })
      .catch((err) => {
         console.log(err);
         res.status(500).json(err);
      });
});

router.delete('/:id', withAuth, (req, res) => {
   Post.destroy({
      where: {
         id: req.params.id,
      },
   })
      .then((dbPostData) => {
         if (!dbPostData) {
            res.status(404).json({ message: 'No listing found with this id' });
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
