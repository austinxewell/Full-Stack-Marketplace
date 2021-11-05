const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Post model
class Post extends Model {}

Post.init(
   {
      id: {
         type: DataTypes.INTEGER,
         allowNull: false,
         primaryKey: true,
         autoIncrement: true,
      },
      title: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      price: {
         type: DataTypes.DECIMAL,
         allowNull: false,
      },
      shipping: {
         type: DataTypes.BOOLEAN,
         allowNull: false,
      },
      description: {
         type: DataTypes.TEXT,
         allowNull: false,
      },
      picture_url: {
         // * picture_url (a string url)
         // * to be included in post object.
         type: DataTypes.STRING,
         allowNull: false,
      },
      sellers_id: {
         type: DataTypes.INTEGER,
         allowNull: false,
         references: {
            model: 'user',
            key: 'id',
            attributes: ['username']
         }
      },
   },
   {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'post',
   }
);

module.exports = Post;
