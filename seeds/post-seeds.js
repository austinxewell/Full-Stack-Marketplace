const { Post } = require('../models');

const postData = [
    {
        title: 'Listing test 1',
        price: 10,
        shipping: true,
        description: 'this is a string',
        picture_url: 'http://apicture.com',
        user_id: 1,
    },
    {
        title: 'Listing test 2',
        price: 20,
        shipping: false,
        description: 'this is a string',
        picture_url: 'http://apicture.com',
        user_id: 2,
    },
    {
        title: 'Listing test 3',
        price: 30,
        shipping: true,
        description: 'this is a string',
        picture_url: 'http://apicture.com',
        user_id: 3,
    },
    {
        title: 'Listing test 4',
        price: 40,
        shipping: false,
        description: 'this is a string',
        picture_url: 'http://apicture.com',
        user_id: 4,
    },
    {
        title: 'Listing test 5',
        price: 50,
        shipping: true,
        description: 'this is a string',
        picture_url: 'http://apicture.com',
        user_id: 5,
    },
    {
        title: 'Listing test 6',
        price: 60,
        shipping: true,
        description: 'this is a string',
        picture_url: 'http://apicture.com',
        user_id: 6,
    },
    {
        title: 'Listing test 7',
        price: 70,
        shipping: true,
        description: 'this is a string',
        picture_url: 'http://apicture.com',
        user_id: 7,
    },
    {
        title: 'Listing test 8',
        price: 80,
        shipping: false,
        description: 'this is a string',
        picture_url: 'http://apicture.com',
        user_id: 8,
    },
    {
        title: 'Listing test 9',
        price: 90,
        shipping: true,
        description: 'this is a string',
        picture_url: 'http://apicture.com',
        user_id: 9,
    },
    {
        title: 'Listing test 10',
        price: 100,
        shipping: true,
        description: 'this is a string',
        picture_url: 'http://apicture.com',
        user_id: 10,
    },
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;