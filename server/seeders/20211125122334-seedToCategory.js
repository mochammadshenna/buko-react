'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Categories', [{
      name: 'kings Chicken',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Purple Seoul',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Cheese Burger',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Flame Grilled Burger',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Kids Meals',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};
