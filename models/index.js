const Post = require('./Post');
const User = require('./User');
const Review = require("./Review");
const Purchased = require("./Purchased");


// create associations
User.hasMany(Post, {
  foreignKey: 'user_id'
});

Post.belongsTo(User, {
  foreignKey: 'user_id'
});

Purchased.belongsTo(User, {
  foreignKey: 'buyer_id'
});

Purchased.belongsTo(Post, {
  foreignKey: 'post_id'
});

User.hasMany(Review, {
  foreignKey: 'buyer_id'
});

Review.belongsTo(Post, {
  foreignKey: 'post_id'
});

module.exports = { User, Post, Purchased, Review };
