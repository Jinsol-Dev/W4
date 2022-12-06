'use strict';
module.exports = {
  /**
   * @param {import("Sequelize").QueryInterface} queryInterface - Sequelize Query Interface
   * @param {import("Sequelize")} Sequelize - Sequelize
   * **/
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      userId: {
      primaryKey: true,
      allowNull: false,
      type: Sequelize.INTEGER,
      autoIncrement: true,
      },
      nickname: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
        validate: {
          max: 23,
        }
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isint: true,
          max: 23,
        }
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};