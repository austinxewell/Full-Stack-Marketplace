const Post = require('./Post');
const User = require('./User');
//const MyListing = require("./MyListing");
//const Purchased = require("./Purchased");
//const Review = require("./Review");

// create associations
User.hasMany(Post, {
  foreignKey: 'user_id'
});

Post.belongsTo(User, {
  foreignKey: 'user_id'
});

//User.hasMany(MyListing, {
//  foreignKey: "user_id",
//});

//MyListing.belongsTo(User, {
//  foreignKey: "user_id",
//});

// One to many association User multiple purchased
//User.hasMany(Purchased, {
//  foreignKey: "buyer_username",
//});

// One to One association Purchased to Buyer
//Purchased.belongsTo(User, {
//  foreignKey: "post_id",
//});

// One to many association User multiple reviews
//User.hasMany(Review, {
//  foreignKey: "user_username",
//});

// One to One association Review belongs to
//Review.belongsTo(User, {
//  foreignKey: "seller_username",
//});

module.exports = { User, Post }; // , MyListing, Purchased, Review  add when working
