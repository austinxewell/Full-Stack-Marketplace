// import all models
const Post = require('./Post');
const User = require('./User');
const Buyer = require('./Buyer');
const Seller = require('./Seller');
const Review = require('./Review');


// create associations
User.hasMany(Post, {
  foreignKey: 'user_id'
});

Post.belongsTo(User, {
  foreignKey: 'user_id'
});



module.exports = { User, Post, Buyer, Seller, Review };