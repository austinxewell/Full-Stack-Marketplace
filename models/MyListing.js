// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');

// class MyListing extends Model {}

// MyListing.init(
//     {
//         id: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//             primaryKey: true,
//             autoIncrement: true
//         },
//         seller_username: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             references: {
//                 model: 'user',
//                 key: 'id',
//             },
//         },
//         post_id: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//             references: {
//                 model: 'post',
//                 key: 'id'
//             }
//         } 
//     },
//     {
//         sequelize,
//         freezeTableName: true,
//         underscored: true,
//         modelName: 'mylisting'
//     }
// );

// //module.exports = MyListing;