const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// create our Post model
class NewListing extends Model {}

NewListing.init(
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
      type: DataTypes.DECIMAL (10,2),
      allowNull: false,
      validate: {
        isDecimal: true
      }

    },
    shipping: {
      type: DataTypes.STRING,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "NewListing",
  }
);

module.exports = NewListing;
