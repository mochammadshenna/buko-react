'use strict';
const { encrypt } = require('../helpers/bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
      username: 'JohnDoe',
      email: 'johndoe@fakemail.com',
      password: encrypt('12345'),
      role: 'admin',
      phoneNumber: '085123123123',
      address: 'Silicon Valley, California, USA',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
