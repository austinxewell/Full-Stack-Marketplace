const router = require('express').Router();
const sequelize = require('../config/connection');
const {  User, Post } = require('../models');


router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    
    res.render('login');
});


module.exports = router;