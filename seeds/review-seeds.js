 const { Review } = require("../models");

 const reviewData = [
     {
         seller_id: 1,
         buyer_review: 'This is pretty cool, thanks Jack!',
     },
     {
         seller_id: 2,
         buyer_review: 'This is pretty cool, thanks Jack!',
     },
     {
         seller_id: 3,
         buyer_review: 'This is pretty cool, thanks Jack!',
     },
     {
         seller_id: 4,
        buyer_review: 'This is pretty cool, thanks Jack!',
     },
     {
         seller_id: 5,
         buyer_review: 'This is pretty cool, thanks Jack!',
     },
     {
         seller_id: 6,
         buyer_review: 'This is pretty cool, thanks Jack!',
     },
     {
         seller_id: 7,
         buyer_review: 'This is pretty cool, thanks Jack!',
     },
     {
         seller_id: 8,
         buyer_review: 'This is pretty cool, thanks Jack!',
     },
     {
         seller_id: 9,
         buyer_review: 'This is pretty cool, thanks Jack!',
     },
 ];

 const seedReview = () => Review.bulkCreate(reviewData);

module.exports = seedReview;