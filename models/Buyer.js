const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// create our Post model
class Buyer extends Model {}

Buyer.init(
    {
        id: {type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
        post_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'post',
                key: 'id',
            },
        },
    },

)