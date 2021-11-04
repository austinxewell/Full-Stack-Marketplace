const router = require('express').Router();
const { Post, User } = require('../../models');
const withAuth = require('../../utils/auth');

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
router.post('/', (req, res) => {
   console.log('creating item: ');
   // path to root directory + public/images folder
   let path = process.cwd() + '/public/images/';

   let file = ''; // declare file

   if (req.files) {
      // * Accessing the file by the <input> File name="item_img"
      file = req.files.item_img;
      path += file.name;
   } else {
      path += 'not_available.png';
   }

   Post.create({
      title: req.body.item_title,
      price: req.body.item_price,
      shipping: req.body.item_shipping,
      description: req.body.item_description,
      picture_url: path,
      seller_id: req.session.user_id,
   })
      .then((dbPostData) => {
         if (file) {
            // * move file to new directory in server with: mv(path, CB function(err))
            file.mv(path, (err) => {
               if (err) {
                  return res.status(500).json(err);
               }
               return res.send({ status: 'success', path: path });
            });
         }
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
