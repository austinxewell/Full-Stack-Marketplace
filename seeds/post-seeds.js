const { Post } = require('../models');

const postData = [
    {
        title: 'Listing test 1',
        price: 10,
        info: 'this is some info about the product being sold or purchased',
        shipping: true,
        user_id: 1,
    },
    {
        title: 'Listing test 2',
        price: 20,
        info: 'this is some info about the product being sold or purchased',
        shipping: false,
        user_id: 2,
    },
    {
        title: 'Listing test 3',
        price: 30,
        info: 'this is some info about the product being sold or purchased',
        shipping: true,
        user_id: 3,
    },
    {
        title: 'Listing test 4',
        price: 40,
        info: 'this is some info about the product being sold or purchased',
        shipping: false,
        user_id: 4,
    },
    {
        title: 'Listing test 5',
        price: 50,
        info: 'this is some info about the product being sold or purchased',
        shipping: true,
        user_id: 5,
    },
    {
        title: 'Listing test 6',
        price: 60,
        info: 'this is some info about the product being sold or purchased',
        shipping: true,
        user_id: 6,
    },
    {
        title: 'Listing test 7',
        price: 70,
        info: 'this is some info about the product being sold or purchased',
        shipping: true,
        user_id: 7,
    },
    {
        title: 'Listing test 8',
        price: 80,
        info: 'this is some info about the product being sold or purchased',
        shipping: false,
        user_id: 8,
    },
    {
        title: 'Listing test 9',
        price: 90,
        info: 'this is some info about the product being sold or purchased',
        shipping: true,
        user_id: 9,
    },
    {
        title: 'Listing test 10',
        price: 100,
        info: 'this is some info about the product being sold or purchased',
        shipping: true,
        user_id: 10,
    },
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;