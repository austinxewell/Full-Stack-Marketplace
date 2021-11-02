const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');

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
    try {
    await seedMyListing();
    console.log('\n---------MYLISTING SEEDED-----------\n');
    } catch(err) {
        console.log(err);
    };
    // Add more seeds as needed
    // await seedProducts();
    // console.log('\n----- MyListing SEEDED -------\n);
    // and so on and so forth

    process.exit(0);
};

seedAll();