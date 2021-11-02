const router = require('express').Router();

const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');
//const buyerReviewRoutes = require('./buyerReview-routes');
//const mylistingRoutes = require('./mylisting-routes');
//const purchasedRoutes = require('./purchased-routes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
//router.use('/buyerReview', buyerReviewRoutes);
//router.use('/mylisting', mylistingRoutes);
//router.use('/purchased', purchasedRoutes);

module.exports = router;