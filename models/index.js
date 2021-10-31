// import all models
const Post = require('./Post');
const User = require('./User');
// const Seller = require('./Seller');
// const Review = require('./Review');
// const Buyer = require('./Buyer');




// create associations
User.hasMany(Post, {
  foreignKey: 'user_id'
});

Post.belongsTo(User, {
  foreignKey: 'user_id'
});

// User.belongsToMany(Post, {
//   through: Review,
//   as: 'reviewed_sellers',
//   foreignKey: 'user_id'
// });

// Post.belongsToMany(User, {
//   through: Review,
//   as: 'reviewed_sellers',
//   foreignKey: 'seller_id'
// });

// Review.belongsTo(Buyer, {
//   foreignKey: 'buyer_id'
// });

// Review.belongsTo(Seller, {
//   foreignKey: 'review_id'
// });

// User.hasMany(Review, {
//   foreignKey: 'user_id'
// });

// Seller.hasMany(Review, {
//   foreignKey: 'seller_id'
// });


module.exports = { User, Post }
//module.exports = { User, Post, Review, Seller, Buyer };