'use strict';
const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Companies', [
      {
        name: 'Bohemith Title',
        email: 'Bohemith-Title@b.com',
        hashedPassword: bcrypt.hashSync('password'),
        ownedPolicies: ["1,3,4"]
      },
     {
        name: 'Bronze Standard Insurance',
        email: 'weSuck@terribleservice.com',
        hashedPassword: bcrypt.hashSync('password'),
        ownedPolicies:["2,7"]
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Companies', {
      username: { [Op.in]: ['Bohemith Plus', 'Gold Silver Platinum Coverage'] }
    }, {});
  }
};
