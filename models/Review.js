const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Review extends Model {}

Review.init(
   {
     id: {
       type: DataTypes.INTEGER,
       allowNull: false,
       primaryKey: true,
       autoIncrement: true,
     },
    sellers_id: {
       type: DataTypes.INTEGER,
       allowNull: false,
       references: {
         model: 'post',
         key: 'id'
       }
     },
     buyers_review: {
       type: DataTypes.TEXT,
     },
     buyers_id: {
       type: DataTypes.INTEGER,
       allowNull: false,
       references: {
         model: 'purchased',
         key: 'id',
         attributes: ['username'],
         as: ['buyers_username']
       }
     }
     
   },
   {
     sequelize,
     freezeTableName: true,
     underscored: true,
     modelName: "review",
   }
 );

module.exports = Review;
