// const { Model, DataTypes } = require("sequelize");
// const sequelize = require("../config/connection");

// class Review extends Model {}

// Review.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     seller_username: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       references: {
//         model: "post",
//         key: "id",
//       },
//     },
//     buyer_review: {
//       type: DataTypes.TEXT,
//     },
//     buyer_username: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       references: {
//         model: "purchased",
//         key: "id",
//       },
//     },
//     post_title: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       references: {
//         model: 'post',
//         key: 'seller_username'
//       },
//     },
//   },
//   {
//     sequelize,
//     freezeTableName: true,
//     underscored: true,
//     modelName: "review",
//   }
// );

// module.exports = Review;
