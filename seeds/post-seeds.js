const { Post } = require("../models");

const postData = [
  {
    title: "Listing Grey Murray",
    price: 10,
    shipping: true,
    shipping_info: '2625 21st Street Odgen, UT 84401',
    description:
      "Please read this wonderful description of our newest Listing!",
    picture_url: "http://www.fillmurray.com/g/200/300",
    user_id: 1,
    seller_username: 'jackjohnson'
  },
  {
    title: "Listing Calm Cage",
    price: 20,
    shipping: false,
    shipping_info: '2625 21st Street Odgen, UT 84401',
    description:
      "Please read this wonderful description of our newest Listing!",
    picture_url: "https://www.placecage.com/200/300",
    user_id: 2,
    seller_username: 'robthomas'
  },
  {
    title: "Listing Grey Cage",
    price: 30,
    shipping: true,
    shipping_info: '2625 21st Street Odgen, UT 84401',
    description:
      "Please read this wonderful description of our newest Listing!",
    picture_url: "https://www.placecage.com/g/200/300",
    user_id: 3,
    seller_username: 'apriloneal'
  },
  {
    title: "Listing Crazy Cage",
    price: 40,
    shipping: false,
    shipping_info: '2625 21st Street Odgen, UT 84401',
    description:
      "Please read this wonderful description of our newest Listing!",
    picture_url: "https://www.placecage.com/c/200/300",
    user_id: 4,
    seller_username: 'austinewell'
  },
  {
    title: "Listing Gif Cage",
    price: 50,
    shipping: true,
    shipping_info: '2625 21st Street Odgen, UT 84401',
    description:
      "Please read this wonderful description of our newest Listing!",
    picture_url: "https://www.placecage.com/gif/200/300",
    user_id: 5,
    seller_username: 'emmanuelgarcia'
  },
  {
    title: "Listing Calm Steve",
    price: 60,
    shipping: true,
    shipping_info: '2625 21st Street Odgen, UT 84401',
    description:
      "Please read this wonderful description of our newest Listing!",
    picture_url: "https://www.stevensegallery.com/200/300",
    user_id: 6,
    seller_username: 'josepina'
  },
  {
    title: "Listing Calm Murray",
    price: 70,
    shipping: true,
    shipping_info: '2625 21st Street Odgen, UT 84401',
    description:
      "Please read this wonderful description of our newest Listing!",
    picture_url: "http://www.fillmurray.com/200/300",
    user_id: 7,
    seller_username: 'billmurray'
  },
  {
    title: "Listing Grey Steve",
    price: 80,
    shipping: false,
    shipping_info: '2625 21st Street Odgen, UT 84401',
    description:
      "Please read this wonderful description of our newest Listing!",
    picture_url: "https://www.stevensegallery.com/g/200/300",
    user_id: 8,
    seller_username: 'test1'
  },
  {
    title: "Listing Fish Murray",
    price: 90,
    shipping: true,
    shipping_info: '2625 21st Street Odgen, UT 84401',
    description:
      "Please read this wonderful description of our newest Listing!",
    picture_url: "http://www.fillmurray.com/300/200",
    user_id: 9,
    seller_username: 'test2'
  },
  {
    title: "Listing Picaso Murray",
    price: 100,
    shipping: true,
    shipping_info: '2625 21st Street Odgen, UT 84401',
    description:
      "Please read this wonderful description of our newest Listing!",
    picture_url: "http://www.fillmurray.com/140/100",
    user_id: 10,
    seller_username: "test3",
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
