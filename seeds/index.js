const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n------- DATABASE SYNCED -------\n');
    await seedUsers();
    console.log('\n------- USERS SEEDED ----------\n');
    await seedPosts();
    console.log('\n---------POSTS SEEDED-----------\n');

    // Add more seeds as needed
    // await seedProducts();
    // console.log('\n----- PRODUCTS SEEDED -------\n);
    // and so on and so forth

    process.exit(0);
};

seedAll();