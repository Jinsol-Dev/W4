'use strict';
const {Model, sequelize} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  users.init({
    userId: {
      primaryKey: true, 
      allowNull: false,
      type: DataTypes.INTEGER,
      atuoIncrement: true,        
    },
    nickname: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isint: true,
        max: 23,
      }
    },
    password: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        isint: true,
        max: 23,
      }
    },
  }, {
    sequelize,
    modelName: 'users',
    tableName: 'users',

  });
  return users;
};