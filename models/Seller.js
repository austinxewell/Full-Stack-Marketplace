// const { Model, DataTypes } = require("sequelize");
// const { Review, Post } = require(".");
// const sequelize = require("../config/connection");

// // create our Seller model
// class Seller extends Model {
//   static upreview(body, models) {
//     return models.Review.create({
//       user_id: body.user_id,
//       seller_id: body.seller_id,
//     }).then(() => {
//       return Review.findOne({
//         where: {
//           id: body.review_id,
//         },
//         attributes: [
//           "id",
//           "user_id",
//           "buyer_id",
//           "post_id",
//           "seller_id",
//           [
//             sequelize.literal(
//               "(SELECT COUNT(*) FROM review WHERE review.id = review.seller_id"
//             ),
//             "review_count",
//           ],
//         ],
//       });
//     });
//   }
// }

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
