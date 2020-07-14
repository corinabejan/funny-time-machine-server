"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("facts", "placeId", {
      type: Sequelize.INTEGER,
      reference: {
        model: "places",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("facts", "timePeriodId", {
      type: Sequelize.INTEGER,
      reference: {
        model: "timePeriods",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("quizzes", "placeId", {
      type: Sequelize.INTEGER,
      reference: {
        model: "places",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("quizzes", "timePeriodId", {
      type: Sequelize.INTEGER,
      reference: {
        model: "timePeriods",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("answers", "quizId", {
      type: Sequelize.INTEGER,
      reference: {
        model: "quizzes",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("facts", "placeId");
    await queryInterface.removeColumn("facts", "timePeriodId");
    await queryInterface.removeColumn("quizzes", "placeId");
    await queryInterface.removeColumn("quizzes", "timePeriodId");
    await queryInterface.removeColumn("answers", "quizId");
  },
};
