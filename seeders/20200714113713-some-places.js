"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "places",
      [
        {
          location: "The Netherlands",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          location: "Belarus",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          location: "Romania",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          location: "Belgium",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          location: "South Africa",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("places", null, {});
  },
};
