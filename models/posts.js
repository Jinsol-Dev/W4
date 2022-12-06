'use strict';
const { Model, sequelize } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class posts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.users, { foreignKey: "userId" });
    }
  }
  
  posts.init({
    postId: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,          //allownull 지정하지 않으면 기본 값 true, ID값 어떻게? > autoIncresement
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }, 
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: true,
      }
    },
    
  }, {
    sequelize,
    modelName: 'posts',
    tableName: 'posts',
    charset: 'tf8',
    collate: 'utf8_general_cli',
  });
  return posts;
};

//include
//외래키 다시 확인
//ai 오류 확인 
