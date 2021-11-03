const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');
const seedPurchased = require('./purchased-seeds');
const seedReview = require('./review-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    try {
    await sequelize.sync({ force: true });
        console.log('\n------- DATABASE SYNCED -------\n');
    } catch(err) {
        console.log(err);
    };
    try {
    await seedUsers();
    console.log('\n------- USERS SEEDED ----------\n');
    } catch(err) {
        console.log(err);
    };
    try {
    await seedPosts();
    console.log('\n---------POSTS SEEDED-----------\n');
    } catch(err) {
        console.log(err);
    };
    try {
    await seedPurchased();
    console.log('\n---------PURCHASED SEEDED-----------\n');
    } catch(err) {
         console.log(err);
     };
     try {
    await seedReview();
     console.log('\n---------REVIEW SEEDED-----------\n');
     } catch(err) {
         console.log(err);
     };
     console.log('\n----------ALL TABLES SEEDED----------\n');
    process.exit(0);
};

seedAll();