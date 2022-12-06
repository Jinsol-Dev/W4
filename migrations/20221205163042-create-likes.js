'use strict';
module.exports = {
  /**
   * @param {import("Sequelize").QueryInterface} queryInterface - Sequelize Query Interface
   * @param {import("Sequelize")} Sequelize - Sequelize
   * **/
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('likes', {
      userId: {
      primaryKey: true,
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
      likes: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('likes');
  }
};