'use strict';
const {Model, Sequelize} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class likes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.users, { foreignKey: "userId"});
      this.belongsTo(models.posts, { foreignKey: "postId" });
    }
  };

  likes.init(
    {
    userId: {                       
      primaryKey: true,
      type: DataTypes.INTEGER,      
      allowNull: false,
    },
    postId: {
      type: DataTypes.INTEGER,      
      allowNull: false,
    },
    likes: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'likes',
    tableName: 'likes',
  });
  return likes;
};