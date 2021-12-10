'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Ingredients', [{
      name: 'Juicy tomatoes',
      itemId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Fresh lettuce',
      itemId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Creamy mayonnaise',
      itemId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Ketchup',
      itemId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Crunchy pickles',
      itemId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Sliced white onions',
      itemId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Juicy tomatoes',
      itemId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Fresh lettuce',
      itemId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Creamy mayonnaise',
      itemId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Ketchup',
      itemId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Crunchy pickles',
      itemId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Sliced white onions',
      itemId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Juicy tomatoes',
      itemId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Fresh lettuce',
      itemId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Creamy mayonnaise',
      itemId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Ketchup',
      itemId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Crunchy pickles',
      itemId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Sliced white onions',
      itemId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Juicy tomatoes',
      itemId: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Fresh lettuce',
      itemId: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Creamy mayonnaise',
      itemId: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Ketchup',
      itemId: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Crunchy pickles',
      itemId: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Sliced white onions',
      itemId: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Juicy tomatoes',
      itemId: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Fresh lettuce',
      itemId: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Creamy mayonnaise',
      itemId: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Ketchup',
      itemId: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Crunchy pickles',
      itemId: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Sliced white onions',
      itemId: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Juicy tomatoes',
      itemId: 6,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Fresh lettuce',
      itemId: 6,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Creamy mayonnaise',
      itemId: 6,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Ketchup',
      itemId: 6,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Crunchy pickles',
      itemId: 6,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Sliced white onions',
      itemId: 6,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Juicy tomatoes',
      itemId: 7,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Fresh lettuce',
      itemId: 7,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Creamy mayonnaise',
      itemId: 7,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Ketchup',
      itemId: 7,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Crunchy pickles',
      itemId: 7,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Sliced white onions',
      itemId: 7,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Juicy tomatoes',
      itemId: 8,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Fresh lettuce',
      itemId: 8,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Creamy mayonnaise',
      itemId: 8,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Ketchup',
      itemId: 8,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Crunchy pickles',
      itemId: 8,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Sliced white onions',
      itemId: 8,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Juicy tomatoes',
      itemId: 9,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Fresh lettuce',
      itemId: 9,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Creamy mayonnaise',
      itemId: 9,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Ketchup',
      itemId: 9,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Crunchy pickles',
      itemId: 9,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Sliced white onions',
      itemId: 9,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Juicy tomatoes',
      itemId: 10,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Fresh lettuce',
      itemId: 10,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Creamy mayonnaise',
      itemId: 10,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Ketchup',
      itemId: 10,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Crunchy pickles',
      itemId: 10,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Sliced white onions',
      itemId: 10,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Juicy tomatoes',
      itemId: 11,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Fresh lettuce',
      itemId: 11,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Creamy mayonnaise',
      itemId: 11,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Ketchup',
      itemId: 11,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Crunchy pickles',
      itemId: 11,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Sliced white onions',
      itemId: 11,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Juicy tomatoes',
      itemId: 12,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Fresh lettuce',
      itemId: 12,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Creamy mayonnaise',
      itemId: 12,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Ketchup',
      itemId: 12,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Crunchy pickles',
      itemId: 12,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Sliced white onions',
      itemId: 12,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Juicy tomatoes',
      itemId: 13,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Fresh lettuce',
      itemId: 13,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Creamy mayonnaise',
      itemId: 13,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Ketchup',
      itemId: 13,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Crunchy pickles',
      itemId: 13,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Sliced white onions',
      itemId: 13,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Juicy tomatoes',
      itemId: 14,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Fresh lettuce',
      itemId: 14,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Creamy mayonnaise',
      itemId: 14,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Ketchup',
      itemId: 14,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Crunchy pickles',
      itemId: 14,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Sliced white onions',
      itemId: 14,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Juicy tomatoes',
      itemId: 15,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Fresh lettuce',
      itemId: 15,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Creamy mayonnaise',
      itemId: 15,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Ketchup',
      itemId: 15,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Crunchy pickles',
      itemId: 15,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Sliced white onions',
      itemId: 15,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Ingredients', null, {});
  }
};
