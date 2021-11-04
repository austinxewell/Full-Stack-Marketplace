const { Post } = require("../models");

const postData = [
  {
    title: "Listing Grey Murray",
    price: 10,
    shipping: true,
    description:
      "Please read this wonderful description of our newest Listing!",
    picture_url: "http://www.fillmurray.com/g/200/300",
    user_id: 1,
    
  },
  {
    title: "Listing Calm Cage",
    price: 20,
    shipping: false,
    description:
      "Please read this wonderful description of our newest Listing!",
    picture_url: "https://www.placecage.com/200/300",
    user_id: 2,
    
  },
  {
    title: "Listing Grey Cage",
    price: 30,
    shipping: true,
    description:
      "Please read this wonderful description of our newest Listing!",
    picture_url: "https://www.placecage.com/g/200/300",
    user_id: 3,
    
  },
  {
    title: "Listing Crazy Cage",
    price: 40,
    shipping: false,
    description:
      "Please read this wonderful description of our newest Listing!",
    picture_url: "https://www.placecage.com/c/200/300",
    user_id: 4,
    
  },
  {
    title: "Listing Gif Cage",
    price: 50,
    shipping: true,
    description:
      "Please read this wonderful description of our newest Listing!",
    picture_url: "https://www.placecage.com/gif/200/300",
    user_id: 5,
    
  },
  {
    title: "Listing Calm Steve",
    price: 60,
    shipping: true,
    description:
      "Please read this wonderful description of our newest Listing!",
    picture_url: "https://www.stevensegallery.com/200/300",
    user_id: 6,
    
  },
  {
    title: "Listing Calm Murray",
    price: 70,
    shipping: true,
    description:
      "Please read this wonderful description of our newest Listing!",
    picture_url: "http://www.fillmurray.com/200/300",
    user_id: 7,
    
  },
  {
    title: "Listing Grey Steve",
    price: 80,
    shipping: false,
    description:
      "Please read this wonderful description of our newest Listing!",
    picture_url: "https://www.stevensegallery.com/g/200/300",
    user_id: 8,
    
  },
  {
    title: "Listing Fish Murray",
    price: 90,
    shipping: true,
    description:
      "Please read this wonderful description of our newest Listing!",
    picture_url: "http://www.fillmurray.com/300/200",
    user_id: 9,
    
  },
  {
    title: "Listing Picaso Murray",
    price: 100,
    shipping: true,
    description:
      "Please read this wonderful description of our newest Listing!",
    picture_url: "http://www.fillmurray.com/140/100",
    user_id: 10,
   
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
