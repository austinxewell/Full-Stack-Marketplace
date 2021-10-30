const { Model, DataTypes } = require("sequelize");
const { Review } = require(".");
const sequelize = require("../config/connection");

// create our Seller model
class Seller extends Model {
    static upreview(body, models) {
        return models.Review.create({
            buyer_id: body.buyer_id,
            seller_id: body.seller_id,
            post_id: body.post_id
        }).then(() => {
            return Review.findOne({
                where: {
                    id: body.review_id
                },
                attributes: [
                    'id',
                    'post_id',
                    'post_title',
                    'buyer_id',
                    [
                        sequelize.literal('(SELECT COUNT(*) FROM review WHERE review.id = review.seller_id'),
                        'review_count'
                    ]
                    
                    
                ]
            });
        });
    }
}

// create fields/columns for Seller model
Seller.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id',
            },
        },
        post_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'post',
                key: 'id',
            },
        },
        buyer_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'buyer',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableNames: true,
        underscored: true,
        modelName: 'seller'
    }
);

module.exports = Seller;