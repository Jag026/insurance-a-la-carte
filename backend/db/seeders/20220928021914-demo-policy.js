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
        name: 'Gold Silver Platinum Coverage',
        premium: 400,
        description: 'A policy that sounds good bc it"s" name after metals',
        companyName: 'Bronze Standard Insurance'
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Policies', {
      username: { [Op.in]: ['Bohemith Plus', 'Gold Silver Platinum Coverage'] }
    }, {});
  }
};
