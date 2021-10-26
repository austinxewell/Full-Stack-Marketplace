const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', (req, res) => {
    console.log(req.session);
});

module.exports = router;