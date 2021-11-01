const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Post, User } = require('../../models');
const withAuth = require('../../utils/auth');

// get all posts
router.get('/', (req, res) => {
   console.log('=======================');
   Post.findAll({
      attributes: ['id', 'title', 'price', 'info', 'shipping'],
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
      attributes: ['id', 'title', 'price', 'info', 'shipping'],
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
   //console.log('router.post req: ', req, '\n req.body: ', req.body, '\nreq.files: ', req.files);
   Post.create({
      title: req.body.title,
      price: req.body.price,
      info: req.body.info,
      shipping: req.body.shipping,
      image_path: req.body.image_path,
      user_id: req.session.user_id,
   })
      .then((dbPostData) => res.json(dbPostData))
      .catch((err) => {
         console.log(err);
         res.status(500).json(err);
      });
   // * Accessing the file by the <input> File name="target_file"
   let file = req.files.myFile; // !! req.files returning as UNDEFINED. Fix Needed. 
   console.log('~ file', file);

   console.log('~ file.name', file.name);
   // * move file to new directory in server with: mv(path, CB function(err))
   file.mv(path.join('/public/images', file.name), (err) => {
      if (err) {
         return res.status(500).json(err);
      }
      res.json({ message: '*****File uploaded!' });
   });
});

router.put('/:id', withAuth, (req, res) => {
   Post.update(
      {
         title: req.body.title,
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
