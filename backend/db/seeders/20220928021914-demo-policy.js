'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Policies', [
      {
        name: 'Bohemith Plus',
        premium: 100,
        description: 'A bohemith policy',
        companyName: 'Bohemith Title'
      },
      {
        name: 'Gold Silver Coverage',
        premium: 400,
        description: 'A policy that sounds good bc it"s" name after metals',
        companyName: 'Bronze Standard Insurance'
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Policies', {
      name: { [Op.in]: ['Bohemith Plus', 'Gold Silver Coverage'] }
    }, {});
  }
};
