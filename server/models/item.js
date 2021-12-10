'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Item.belongsTo(models.User, {
        foreignKey: 'authorId',
      })
      Item.belongsTo(models.Category, {
        foreignKey: 'categoryId',
      })
      Item.hasMany(models.Ingredient, {
        foreignKey: 'itemId',
      })
    }
  };
  Item.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'Name is required.' },
        notEmpty: { msg: 'Name is required.' },
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'Description is required.' },
        notEmpty: { msg: 'Description is required.' },
      }
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        notNull: { msg: 'Price is required.' },
        notEmpty: { msg: 'Price is required.' },
      }
    },
    imgUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'Img url is required.' },
        notEmpty: { msg: 'Img url is required.' },
      }
    },
    authorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: { msg: 'Author id is required.' },
        notEmpty: { msg: 'Author id is required.' },
      }
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: { msg: 'Category id is required.' },
        notEmpty: { msg: 'Category id is required.' },
      }
    },
  }, {
    sequelize,
    modelName: 'Item',
  });
  return Item;
};