const router = require('express').Router();
const { Post, User } = require('../../models');
const withAuth = require('../../utils/auth');

require('dotenv').config();
var cloudinary = require('cloudinary').v2;


// get all posts
router.get('/', (req, res) => {
   console.log('=======================');
   Post.findAll({
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

   if (file) {
      cloudinary.uploader.upload(file, function (error, result) {
         if (!error) {
            Post.create({
               title: req.body.item_title,
               price: req.body.item_price,
               shipping: req.body.item_shipping,
               description: req.body.item_description,
               picture_url: result.secure_url,
               user_id: req.session.user_id,
               //seller_id: req.session.user_id,
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
         // seller_id: req.session.user_id,
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
