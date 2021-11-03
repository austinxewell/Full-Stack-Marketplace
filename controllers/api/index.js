const router = require('express').Router();

const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');
const buyerReviewRoutes = require('./buyerReview-routes');
const purchasedRoutes = require('./purchased-routes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/buyerReview', buyerReviewRoutes);
router.use('/purchased', purchasedRoutes);

const moneyRoutes = require('./money-routes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/money', moneyRoutes);

router.use('/buyerReview', buyerReviewRoutes);

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