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
         type: DataTypes.INTEGER,
         allowNull: false,
      },
      info: {
         type: DataTypes.STRING,
         allowNull: true,
      },
      shipping: {
         type: DataTypes.BOOLEAN,
         allowNull: false,
      },
      description: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      image_path: {
         // * img path is a string url (or local path directory) to be included in post object.
         type: DataTypes.STRING,
         allowNull: false,
      },
      user_id: {
         type: DataTypes.INTEGER,
         references: {
            model: 'user',
            key: 'id',
         },
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
