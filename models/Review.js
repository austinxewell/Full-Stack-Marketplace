const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Review extends Model {}
    
Review.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        buyer_review: {
            type: DataTypes.STRING, 
        },
        seller_username: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'post',
                key: 'id'
            },
        },
        buyer_username: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'purchase',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'review'
    }
)

module.exports = Review;