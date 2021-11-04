const router = require('express').Router();

const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');
const moneyRoutes = require('./money-routes');
// const { User } = require('../../models');
//const buyerReviewRoutes = require('./buyerReview-routes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/money', moneyRoutes);
//router.use('/buyerReview', buyerReviewRoutes);

// router.put("/money", (req,res) => {
//     User.increment({
//       money: 100
//     },
//     {
//       where: {
//         id: req.session.user_id
//       }
//     }).then(dbUserData => res.json(dbUserData))
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
//   })

module.exports = router;