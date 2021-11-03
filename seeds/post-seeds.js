const { Post } = require("../models");

const postData = [
  {
    id: 1,
    seller_id: 1,
    title: "Listing Grey Murray",
    price: 35,
    shipping: true,
    description:
      "Please read this wonderful description of our newest Listing!",
    picture_url: "http://www.fillmurray.com/g/200/300",
    user_id: 1
  },
  {
    id: 2,
    seller_id: 2,
    title: "Listing Calm Cage",
    price: 35,
    shipping: false,
    description:
      "Please read this wonderful description of our newest Listing!",
    picture_url: "https://www.placecage.com/200/300",
    user_id: 2
  },
  {
    id: 3,
    seller_id: 3,
    title: "Listing Grey Cage",
    price: 35,
    shipping: true,
    description:
      "Please read this wonderful description of our newest Listing!",
    picture_url: "https://www.placecage.com/g/200/300",
    user_id: 3
  },
  {
    id: 4,
    seller_id: 4,
    title: "Listing Crazy Cage",
    price: 35,
    shipping: false,
    description:
      "Please read this wonderful description of our newest Listing!",
    picture_url: "https://www.placecage.com/c/200/300",
    user_id: 4
  },
  {
    id: 5,
    seller_id: 5,
    title: "Listing Gif Cage",
    price: 35,
    shipping: true,
    description:
      "Please read this wonderful description of our newest Listing!",
    picture_url: "https://www.placecage.com/gif/200/300",
    user_id: 5
  },
  {
    id: 6,
    seller_id: 6,
    title: "Listing Calm Steve",
    price: 35,
    shipping: true,
    description:
      "Please read this wonderful description of our newest Listing!",
    picture_url: "https://www.stevensegallery.com/200/300",
    user_id: 6
  },
  {
    id: 7,
    seller_id: 7,
    title: "Listing Calm Murray",
    price: 35,
    shipping: true,
    description:
      "Please read this wonderful description of our newest Listing!",
    picture_url: "http://www.fillmurray.com/200/300",
    user_id: 7
  },
  {
    id: 8,
    seller_id: 8,
    title: "Listing Grey Steve",
    price: 80,
    shipping: false,
    description:
      "Please read this wonderful description of our newest Listing!",
    picture_url: "https://www.stevensegallery.com/g/200/300",
    user_id: 8
  },
  {
    id: 9,
    seller_id: 9,
    title: "Listing Fish Murray",
    price: 90,
    shipping: true,
    description:
      "Please read this wonderful description of our newest Listing!",
    picture_url: "http://www.fillmurray.com/300/200",
    user_id: 9
  },
  {
    id: 10,
    seller_id: 10,
    title: "Listing Picaso Murray",
    price: 100,
    shipping: true,
    description:
      "Please read this wonderful description of our newest Listing!",
    picture_url: "http://www.fillmurray.com/140/100",
    user_id: 10
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
