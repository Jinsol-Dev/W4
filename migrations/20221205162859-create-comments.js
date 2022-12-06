'use strict';
module.exports = {
  /**
   * @param {import("Sequelize").QueryInterface} queryInterface - Sequelize Query Interface
   * @param {import("Sequelize")} Sequelize - Sequelize
   * **/
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('comments', {
      commentid: {
      primaryKey: true,
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "userId",
        },
      },
      postId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "posts",
          key: "postId",
        },
      },
      comment: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isAlpha: true,
        }
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('comments');
  }
};