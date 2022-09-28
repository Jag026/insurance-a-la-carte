'use strict';
const { Model, Validator } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Policy extends Model {
    static associate(models) {
      // define association here
    }
  };
  
  Policy.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [4, 30],
          isNotEmail(value) {
            if (Validator.isEmail(value)) {
              throw new Error("Cannot be an email.");
            }
          }
        }
      },
      premium: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [5, 520]
        }
      },
      companyName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [4, 50]
        }
      }
    }
  );
  return Policy;
};