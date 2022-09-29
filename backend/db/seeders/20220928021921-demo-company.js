'use strict';
const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Companies', [
      {
        name: 'BohemithTitle',
        email: '100Bigdo@yahoo.com',
        hashedPassword: bcrypt.hashSync('password'),
        ownedPolicies: '[1,3,4,11,14]'
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Companies', {
      name: { [Op.in]: ['BohemithTitle'] }
    }, {});
  }
};
