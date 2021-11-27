// const { Model, DataTypes } = require("sequelize");
// const { Review, Post } = require(".");
// const sequelize = require("../config/connection");

// // create our Seller model
// class Seller extends Model {}

// // create fields/columns for Seller model
// Seller.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     post_id: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         references: {
//           model: "post",
//           key: "id",
//         },
//       },
//     user_id: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       references: {
//         model: "user",
//         key: "id",
//       },
//     },
//   },
//   {
//     sequelize,
//     timestamps: false,
//     freezeTableNames: true,
//     underscored: true,
//     modelName: "seller",
//   }
// );

// module.exports = Seller;
