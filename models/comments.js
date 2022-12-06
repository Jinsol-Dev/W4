'use strict';
const { Model, sequelize} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class comments extends Model {  //comment한테 model이 갖고 있는 기능 부여할게
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.users, { foreignKey: "userId"});
      this.belongsTo(models.posts, { foreignKey: "postId"});
    }
  }
  comments.init({
    commentId: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,      
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,      
    }, 
    postId: {
      type: DataTypes.INTEGER,
      allowNull: false,      
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: true,
    }},      
  },{
    sequelize,
    modelName: 'comments',
    tableName: 'comments',
    charset: 'tf8',
    collate: 'utf8_general_cli',
  });
  return comments;
};

//모델의 참조 추가