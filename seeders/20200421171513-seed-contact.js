"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Contacts", [
      {
        fistname: "jhorman",
        lastname: "orozco",
        phone: "000000000000",
        email: "orozco@jhorman.com",
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
      },
      {
        fistname: "styhd",
        lastname: "restrepo",
        phone: "000000000654540",
        email: "restrepo@stydh.com",
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  },
};
