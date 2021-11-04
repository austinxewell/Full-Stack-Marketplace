const { User } = require("../models");

const userData = [
  {
    username: "jackjohnson",
    email: "jackjohnson@gmail.com",
    password: 'password1234',
    money: 100,
  },
  {
    username: "robthomas",
    email: "robthomas@gmail.com",
    password: 'password1234',
    money: 100,
  },
  {
    username: "apriloneal",
    email: "apriloneal@gmail.com",
    password: 'password1234',
    money: 100,
  },
  {
    username: "austinewell",
    email: "austinewell@gmail.com",
    password: 'password1234',
    money: 100,
  },
  {
    username: "emmanuelgarcia",
    email: "emmanuelgarcia@gmail.com",
    password: 'password1234',
    money: 100,
  },
  {
    username: "josepina",
    email: "josepina@gmail.com",
    password: 'password1234',
    money: 100,
  },
  {
    username: "billmurray",
    email: "billmurray@gmail.com",
    password: 'password1234',
    money: 100,
  },
  {
    username: "test1",
    email: "test1@gmail.com",
    password: 'password1234',
    money: 100,
  },
  {
    username: "test2",
    email: "test2@gmail.com",
    password: 'password1234',
    money: 100,
  },
  {
    username: "test3",
    email: "test3@gmail.com",
    password: 'password1234',
    money: 100,
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
