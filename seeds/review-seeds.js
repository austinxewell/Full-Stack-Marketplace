const { Review } = require("../models");

const reviewData = [
  {
    buyers_review: 'This is a review.  This product was great as well as dealing with the Seller!',
    user_id: 2
  },
  {
    buyers_review: 'This is a review.  This product was great as well as dealing with the Seller!',
    user_id: 3
  },
  {
    buyers_review: 'This is a review.  This product was great as well as dealing with the Seller!',
    user_id: 4
  },
  {
    buyers_review: 'This is a review.  This product was great as well as dealing with the Seller!',
    user_id: 5
  },
  {
    buyers_review: 'This is a review.  This product was great as well as dealing with the Seller!',
    user_id: 6
  },
  {
    buyers_review: 'This is a review.  This product was great as well as dealing with the Seller!',
    user_id: 7
  },
  {
    buyers_review: 'This is a review.  This product was great as well as dealing with the Seller!',
    user_id: 8
  },
  {
    buyers_review: 'This is a review.  This product was great as well as dealing with the Seller!',
    user_id: 9
  },
  {
    buyers_review: 'This is a review.  This product was great as well as dealing with the Seller!',
    user_id: 10
  },
];

const seedReview = () => Review.bulkCreate(reviewData);

module.exports = seedReview;