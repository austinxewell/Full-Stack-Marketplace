const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');
//const seedMyListings = require('./mylisting-seeds');
//const seedreviews = require('./review-seeds);
//const seedpurchased = require('./purchased-seeds);

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
    // try {
    // await seedPurchased();
    // console.log('\n---------PURCHASED SEEDED-----------\n');
    // } catch(err) {
    //     console.log(err);
    // };
    // try {
    // await seedReview();
    // console.log('\n---------REVIEW SEEDED-----------\n');
    // } catch(err) {
    //     console.log(err);
    // };
    // try {
    // await seedMyListing();
    // console.log('\n---------MYLISTING SEEDED-----------\n');
    // } catch(err) {
    //     console.log(err);
    // };
    process.exit(0);
};

seedAll();