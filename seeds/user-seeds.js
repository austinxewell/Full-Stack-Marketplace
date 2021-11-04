const { User } = require("../models");

const userData = [
  {
    username: "jackjohnson",
    email: "jackjohnson@gmail.com",
    password: 'password',
    money: 100,
  },
  {
    username: "robthomas",
    email: "robthomas@gmail.com",
    password: 'password',
    money: 200,
  },
  {
    username: "apriloneal",
    email: "apriloneal@gmail.com",
    password: 'password',
    money: 300,
  },
  {
    username: "austinewell",
    email: "austinewell@gmail.com",
    password: 'password',
    money: 400,
  },
  {
    username: "emmanuelgarcia",
    email: "emmanuelgarcia@gmail.com",
    password: 'password',
    money: 500,
  },
  {
    username: "josepina",
    email: "josepina@gmail.com",
    password: 'password',
    money: 600,
  },
  {
    username: "billmurray",
    email: "billmurray@gmail.com",
    password: 'password',
    money: 700,
  },
  {
    username: "test1",
    email: "test1@gmail.com",
    password: 'password',
    money: 800,
  },
  {
    username: "test2",
    email: "test2@gmail.com",
    password: 'password',
    money: 900,
  },
  {
    username: "test3",
    email: "test3@gmail.com",
    password: 'password',
    money: 1000,
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
