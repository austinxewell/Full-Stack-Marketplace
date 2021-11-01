// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');

// class Purchased extends Model {}

// Purchased.init(
//     {
//         id: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//             primaryKey: true,
//             autoIncrement: true
//         },
//         buyers_username: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         },
//         post_id: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//             references: {
//                 model: 'post',
//                 key: 'id'
//             }
//         },
//         seller_username: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             references: {
//                 model: 'post',
//                 key: 'id' 
//             },
//         }, 
//     },
//     {
//         sequelize,
//         freezeTableName: true,
//         underscored: true,
//         modelName: 'Purchased',
//     }
// );

// module.exports = Purchased;