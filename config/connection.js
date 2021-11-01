const Sequelize = require('sequelize');

require('dotenv').config();

let sequelize;

// Create connection to our database, passing MySQL info for username and password as dotenv variables!
const sequelize = process.env.JAWSDB_URL
   ? new Sequelize(process.env.JAWSDB_URL)
   : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306,
        logging: false,
     });

module.exports = sequelize;
