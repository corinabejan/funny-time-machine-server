"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "timePeriods",
      [
        {
          date: "Before Christ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          date: "Antiquity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          date: "Middle Ages",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          date: "Early Modern Period",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          date: "18-19 Centuries",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          date: "20th Century",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          date: "21st Century",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          date: "The Future",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("timePeriods", null, {});
  },
};
