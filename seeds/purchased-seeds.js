const { Purchased } = require("../models");

const purchasedData = [
  {
    id: 1,
    buyers_id: 2,
    post_id: 1
  },
  {
    id: 2,
    buyers_id: 3,
    post_id: 2,
  },
  {
    id: 3,
    buyers_id: 4,
    post_id: 3,
  },
  {
    id: 4,
    buyers_id: 5,
    post_id: 4,
  },
  {
    id: 5,
    buyers_id: 6,
    post_id: 5,
  },
  {
    id: 6,
    buyers_id: 7,
    post_id: 6,
  },
  {
    id: 7,
    buyers_id: 8,
    post_id: 7,
  },
  { 
    id: 8,
    buyers_id: 9,
    post_id: 8,
  },
  {
    id: 9,
    buyers_id: 10,
    post_id: 9,
  },
];

const seedPurchased = () => Purchased.bulkCreate(purchasedData);

module.exports = seedPurchased;
