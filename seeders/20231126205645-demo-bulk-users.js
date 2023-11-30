'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [{
      username: "Diwakar",
      email: "diwakar@test.com",
      type: "admin",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      username: "Dekkala",
      email: "dekkala@test.com",
      type: "default",
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    ], {});
  },

  async down(queryInterface, Sequelize) {
     await queryInterface.bulkDelete('users', null, {});
  }
};
