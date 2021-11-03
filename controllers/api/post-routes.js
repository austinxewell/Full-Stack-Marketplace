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
router.post('/', withAuth, (req, res) => {
   console.log('creating item: ');

   console.log('CHECKING REQ IN POST.CREATE(): req.files', req.files);
   console.log('CHECKING REQ IN POST.CREATE(): req.files.post_img', req.files.item_img);
   console.log('CHECKING REQ IN POST.CREATE(): req.files.post_img.name', req.files.item_img.name);
   console.log('CHECKING REQ IN POST.CREATE(): req.body.post_title', req.body.item_title);
   // console.log('CHECKING REQ IN POST.CREATE(): req.body.post_url', req.body.item_url);
   console.log('************************************************************');

   // filePath to root directory + public/images folder
   let filePath = process.cwd() + '/public/images/';
   // let filePath = 'http://localhost:3001/public/images/';
   // Completes filePath with file name IF a file was uploaded.
   // If no file was uploaded, provide 'no-img-available.png'
   filePath += req.files ? req.files.item_img.name : 'no-image-available.png';
   const file = '/images/' + req.files.item_img.name; // GETS the file and pass it the img file
   // const file = req.files.item_img.name; // GETS the file and pass it the img file
   console.log('~ file', file);

   cloudinary.uploader.upload(file, function (error, result) {
      if (!error) {
         console.log(result);
         filePath = result.url;
         console.log('~ filePath', filePath);
      } else {
         console.log('ERROR IN CLOUDINARY.IPLOADER.UPLOAD()', error);
      }
   });

   Post.create({
      title: req.body.item_title,
      price: req.body.item_price,
      shipping: req.body.item_shipping,
      description: req.body.item_description,
      picture_url: filePath,
      user_id: req.session.user_id,
   })
      .then((dbPostData) => {
         console.log('CREATED RECORD/UPLOAD FILE');

         // res.render('homepage', { loggedIn: true });
      })
      .catch((err) => {
         console.log(err);
         res.status(500).json(err);
      });
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
