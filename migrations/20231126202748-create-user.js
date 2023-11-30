'use strict';

const USER_TYPE = {
  DEFAULT: 'default',
  ADMIN: 'admin',
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      type: {
        type: Sequelize.ENUM(Object.values(USER_TYPE)),
        defaultValue: USER_TYPE.DEFAULT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
    // Drop the ENUM type
    await queryInterface.sequelize.query('DROP TYPE IF EXISTS enum_users_type');
  }
};

