const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      product_id: {
        type: DataTypes.INTEGER,
        references: product.model(id),
          },
          tag_id: {
            type: DataTypes.INTEGER,
            references: tag.model(id),
            }
          }
        }),// define columns
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }


module.exports = ProductTag;
