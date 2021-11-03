const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const dashboardRoutes = require('./dashboard-routes');
const myListingRoutes = require('./my-listings');
const buyerReviewRoutes = require('./api/buyerReview-routes');

router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);
router.use('/mylisting', myListingRoutes)
router.use('buyerReview', buyerReviewRoutes)

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;