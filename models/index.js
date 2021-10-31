// import all models
const Post = require('./Post');
const User = require('./User');
const Purchased = require('./Purchased');
const Review = require('./Review');
const MyListing = require('./MyListing');

// create associations
User.hasMany(Post, {
  foreignKey: 'user_id'
});

Post.belongsTo(User, {
  foreignKey: 'user_id'
});


module.exports = { User, Post, Purchased, Review, MyListing }
