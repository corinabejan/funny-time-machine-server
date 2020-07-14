"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "answers",
      [
        {
          quizId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quizId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quizId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quizId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quizId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quizId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quizId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quizId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quizId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quizId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quizId: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quizId: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quizId: 13,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quizId: 14,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quizId: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quizId: 16,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quizId: 17,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quizId: 18,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quizId: 19,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quizId: 20,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quizId: 21,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quizId: 22,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quizId: 23,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quizId: 24,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quizId: 25,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quizId: 26,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quizId: 27,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quizId: 28,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quizId: 29,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quizId: 30,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quizId: 31,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quizId: 32,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quizId: 33,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quizId: 34,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quizId: 35,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quizId: 36,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quizId: 37,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quizId: 38,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quizId: 39,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quizId: 40,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("answers", null, {});
  },
};
