// const { Model, DataTypes } = require("sequelize");
// const sequelize = require("../config/connection");

// // create our Buyer model
// class Buyer extends Model {}

// Buyer.init(
//     {
//         id: {type: DataTypes.INTEGER,
//             allowNull: false,
//             primaryKey: true,
//             autoIncrement: true
//         },
//         user_id: {
//             type: DataTypes.INTEGER,
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
//               model: "post",
//               key: "id",
//             },
//           },
//         seller_id: {
//             type: DataTypes.INTERER,
//             allowNull: false,
//             references: {
//                 model: 'seller',
//                 key: 'id',
//             }
//         }
//     },
//     {
//         sequelize,
//         timestamps: false,
//         freezeTableName: true,
//         underscored: true,
//         modelName: 'buyer'
//     }
// );

// module.exports = Buyer;