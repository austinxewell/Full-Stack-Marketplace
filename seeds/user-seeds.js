const { User } = require('../models');

const userData = [
    {
        username: 'jackjohnson',
        email: 'jackjohnson@gmail.com',
        password: 'password1234',
    },
    {
        username: 'robthomas',
        email: 'robthomas@gmail.com',
        password: 'password1234',
    },
    {
        username: 'apriloneal',
        email: 'apriloneal@gmail.com',
        password: 'password1234',
    },
    {
        username: 'austinewell',
        email: 'austinewell@gmail.com',
        password: 'password1234',
    },
    {
        username: 'emmanuelgarcia',
        email: 'emmanuelgarcia@gmail.com',
        password: 'password1234',
    },
    {
        username: 'josepina',
        email: 'josepina@gmail.com',
        password: 'password1234',
    },
    {
        username: 'cidvicious',
        email: 'cidvicious@gmail.com',
        password: 'password1234',
    },
    {
        username: 'test1',
        email: 'test1@gmail.com',
        password: 'password1234',
    },
    {
        username: 'test2',
        email: 'test2@gmail.com',
        password: 'password1234',
    },
    
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;