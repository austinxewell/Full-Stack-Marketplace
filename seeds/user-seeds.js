const { User } = require("../models");

const userData = [
  {
    id: 1,
    username: "jackjohnson",
    email: "jackjohnson@gmail.com",
    password: 'password1234',
    money: 100,
  },
  {
    id:2,
    username: "robthomas",
    email: "robthomas@gmail.com",
    password: 'password1234',
    money: 100,
  },
  {
    id: 3,
    username: "apriloneal",
    email: "apriloneal@gmail.com",
    password: 'password1234',
    money: 100,
  },
  {
    id: 4,
    username: "austinewell",
    email: "austinewell@gmail.com",
    password: 'password1234',
    money: 100,
  },
  {
    id: 5,
    username: "emmanuelgarcia",
    email: "emmanuelgarcia@gmail.com",
    password: 'password1234',
    money: 100,
  },
  {
    id: 6,
    username: "josepina",
    email: "josepina@gmail.com",
    password: 'password1234',
    money: 100,
  },
  {
    id: 7,
    username: "billmurray",
    email: "billmurray@gmail.com",
    password: 'password1234',
    money: 100,
  },
  {
    id: 8,
    username: "test1",
    email: "test1@gmail.com",
    password: 'password1234',
    money: 100,
  },
  {
    id: 9,
    username: "test2",
    email: "test2@gmail.com",
    password: 'password1234',
    money: 100,
  },
  {
    id: 10,
    username: "test3",
    email: "test3@gmail.com",
    password: 'password1234',
    money: 100,
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
