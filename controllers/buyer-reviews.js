const router = require('express').Router();
const { User, Purchased, Review, Post } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
   res.render('buyer-reviews');
});
router.get('/post-review', (req, res) => {
   res.render('post-review');
});
router.post('/post-review', (req, res) => {
   Review.create({
      buyers_review: req.body.buyers_review,
      where: {
         buyers_id: req.session.user_id,
      },
      include: [
         {
            model: Post,
            attributers: ['title', 'price', 'shipping', 'sellers_id'],
         },
         {
            model: User,
            attributes: ['username'],
         },
         {
            model: Purchased,
            attributes: ['buyers_id'],
         },
      ],
   })
      .then((dbReviewData) => {
         res.render('/post-review');
         if (!dbReviewData) {
            res.status(404).json({ message: 'No listing found with this id' });
            return;
         }
         res.json(dbReviewData);
      })
      .catch((err) => {
         console.log(err);
         res.status(500).json(err);
      });
});

module.exports = router;
