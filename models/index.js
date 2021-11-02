// import all models
const Post = require('./Post');
const User = require('./User');
const Review = require('./Review');
const Purchased = require('./Purchased');
const MyListing = require('./MyListing');


// create associations
// One to many association User multiple posts
User.hasMany(Post, {
  foreignKey: 'user_id'
});

// One to One association Post to User
Post.belongsTo(User, {
  foreignKey: 'user_id'
});

// One to many association User multiple purchased
User.hasMany(Purchased, {
  foreignKey: 'purchased_id'
});

// One to One association Purchased to Buyer
Purchased.belongsTo(User, {
  foreignKey: 'purchased_id'
});

// One to many association User multiple reviews
User.hasMany(Review, {
  foreignKey: 'review_id'
});

// One to One association Review belongs to 
Review.belongsTo(User, {
  foreignKey: 'review_id'
});

User.hasMany(MyListing, {
  foreignKey: 'mylisting_id'
});

MyListing.belongsTo(User, {
  foreignKey: 'mylisting_id'
});




module.exports = { User, Post, Purchased, Review, MyListing }
