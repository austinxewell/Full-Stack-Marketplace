const Post = require('./Post');
const User = require('./User');
const Purchased = require("./Purchased");
const Review = require("./Review");



// create associations
User.hasMany(Post, {
  foreignKey: 'user_id'
});

Post.belongsTo(User, {
  foreignKey: 'user_id'
});

Purchased.belongsTo(Post, {
  foreignKey: 'post_id'
});

User.hasMany(Purchased, {
  foreignkey: 'buyers_id'
})

Purchased.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Review, {
  foreignKey: 'user_id'
});

Review.belongsTo(Post, {
  foreignKey: 'sellers_id'
});

module.exports = { User, Post, Purchased, Review };
