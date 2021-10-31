// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');

// class Review extends Model {}
    
// Review.init(
//     {
//         id: {
//             type: DataTypes.INTEGER,
//             primaryKey: true,
//             autoIncrement: true
//         },
//         review: {
//             type: DataTypes.STRING,
//             allowNull: true
//         },
//         buyer_id: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//             references: {
//                 model: 'buyer',
//                 key: 'id'
//             }  
//         },
//         seller_id: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//             references: {
//                 model: 'seller',
//                 key: 'id'
//             }
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
//         timestamps: false,
//         freezeTableName: true,
//         underscored: true,
//         modelName: 'review'
//     }

// );

// module.exports = Review;