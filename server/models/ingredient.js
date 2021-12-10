'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ingredient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Ingredient.belongsTo(models.Item, {
        foreignKey: 'itemId',
      })
    }
  };
  Ingredient.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'Name is required' },
        notEmpty: { msg: 'Name is required' },
      },
    },
    itemId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: { msg: 'Item id is required' },
        notEmpty: { msg: 'Item id is required' },
      },
    },
  }, {
    sequelize,
    modelName: 'Ingredient',
  });
  return Ingredient;
};