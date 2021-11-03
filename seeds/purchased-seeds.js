 const { Purchased } = require("../models");

 const purchasedData = [
     {
         buyer_id: 2,
         post_id: 1
     },
     {
         buyer_id: 3,
         post_id: 2
     },
     {
         buyer_id: 4,
         post_id: 3
     },
     {
         buyer_id: 5,
         post_id: 4
     },
     {
         buyer_id: 6,
         post_id: 5
     },
     {
         buyer_id: 7,
         post_id: 6
     },
     {
         buyer_id: 8,
         post_id: 7
     },
     {
         buyer_id: 9,
         post_id: 8
     },
     {
         buyer_id: 10,
         post_id: 9
     },
 ];

const seedPurchased = () => Purchased.bulkCreate(purchasedData);

module.exports = seedPurchased;