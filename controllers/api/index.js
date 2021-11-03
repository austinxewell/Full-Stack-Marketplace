const router = require('express').Router();

const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');
const moneyRoutes = require('./money-routes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/money', moneyRoutes);

module.exports = router;