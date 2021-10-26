const { Post } = require('../models');

const postData = [
    {
        title: 'This is a new post',
        post_url: 'https://www.npmjs.com/package/connect-session-sequelize/again',
        user_id: 1,
    },
    {
        title: 'This is a new post that came after the other one',
        post_url: 'http://google.com',
        user_id: 2,
    },
]