const { User } = require('../models');

const userData = [
    {
        username: 'jackjohnson',
        email: 'jackjohnson@gmail.com',
        password: 'password1234',
        money: 25
    },
    {
        username: 'robthomas',
        email: 'robthomas@gmail.com',
        password: 'password1234',
        money: 25
    },
    {
        username: 'apriloneal',
        email: 'apriloneal@gmail.com',
        password: 'password1234',
        money: 25
    },
    {
        username: 'austinewell',
        email: 'austinewell@gmail.com',
        password: 'password1234',
        money: 25
    },
    {
        username: 'emmanuelgarcia',
        email: 'emmanuelgarcia@gmail.com',
        password: 'password1234',
        money: 25
    },
    {
        username: 'josepina',
        email: 'josepina@gmail.com',
        password: 'password1234',
        money: 25
    },
    {
        username: 'cidvicious',
        email: 'cidvicious@gmail.com',
        password: 'password1234',
        money: 25
    },
    {
        username: 'test1',
        email: 'test1@gmail.com',
        password: 'password1234',
        money: 25
    },
    {
        username: 'test2',
        email: 'test2@gmail.com',
        password: 'password1234',
        money: 25
    },
    {
        username: 'test3',
        email: 'test3@gmail.com',
        password: 'password1234',
        money: 25
    },
    
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;