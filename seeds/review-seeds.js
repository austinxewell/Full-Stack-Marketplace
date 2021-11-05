const { Review } = require("../models");

const reviewData = [
  {
    sellers_id: 1,
    buyers_review: 'This is a review.  This product was great as well as dealing with the Seller!',
    buyers_id: 2
  },
  {
    sellers_id: 2,
    buyers_review: 'This is a review.  This product was great as well as dealing with the Seller!',
    buyers_id: 3
  },
  {
    sellers_id: 3,
    buyers_review: 'This is a review.  This product was great as well as dealing with the Seller!',
    buyers_id: 4
  },
  {
    sellers_id: 4,
    buyers_review: 'This is a review.  This product was great as well as dealing with the Seller!',
    buyers_id: 5
  },
  {
    sellers_id: 5,
    buyers_review: 'This is a review.  This product was great as well as dealing with the Seller!',
    buyers_id: 6
  },
  {
    sellers_id: 6,
    buyers_review: 'This is a review.  This product was great as well as dealing with the Seller!',
    buyers_id: 7
  },
  {
    sellers_id: 7,
    buyers_review: 'This is a review.  This product was great as well as dealing with the Seller!',
    buyers_id: 8
  },
  {
    sellers_id: 8,
    buyers_review: 'This is a review.  This product was great as well as dealing with the Seller!',
    buyers_id: 9
  },
  {
    sellers_id: 9,
    buyers_review: 'This is a review.  This product was great as well as dealing with the Seller!',
    buyers_id: 10
  },
];

const seedReview = () => Review.bulkCreate(reviewData);

module.exports = seedReview;