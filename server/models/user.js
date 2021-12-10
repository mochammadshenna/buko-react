'use strict';
const {
  Model
} = require('sequelize');
const { encrypt } = require('../helpers/bcrypt');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Item, {
        foreignKey: 'authorId',
      })
    }
  };
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'Username is required' },
        notEmpty: { msg: 'Username is required' },
      }
    },
    email: {
      type: DataTypes.STRING,
      unique: { msg: 'Email must be unique' },
      allowNull: false,
      validate: {
        notNull: { msg: 'Name is required' },
        notEmpty: { msg: 'Name is required' },
        isEmail: { msg: 'Please enter valid email' },
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'Password is required' },
        notEmpty: { msg: 'Password is required' },
        
      }
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'Role is required' },
        notEmpty: { msg: 'Role is required' },
      }
    },
    phoneNumber: DataTypes.STRING,
    address: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate: (User, options) => {
        User.password = encrypt(User.password);
      },
    },
  });
  return User;
};