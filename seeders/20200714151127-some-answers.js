"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "answers",
      [
        {
          quizId: 1,
          answer: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quizId: 2,
          answer: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quizId: 3,
          answer: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quizId: 4,
          answer: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quizId: 5,
          answer: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quizId: 6,
          answer: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quizId: 7,
          answer: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quizId: 8,
          answer: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quizId: 9,
          answer: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quizId: 10,
          answer: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quizId: 11,
          answer: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quizId: 12,
          answer: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quizId: 13,
          answer: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quizId: 14,
          answer: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quizId: 15,
          answer: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quizId: 16,
          answer: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quizId: 17,
          answer: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quizId: 18,
          answer: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quizId: 19,
          answer: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quizId: 20,
          answer: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quizId: 21,
          answer: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quizId: 22,
          answer: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quizId: 23,
          answer: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quizId: 24,
          answer: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quizId: 25,
          answer: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quizId: 26,
          answer: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quizId: 27,
          answer: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quizId: 28,
          answer: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quizId: 29,
          answer: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quizId: 30,
          answer: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quizId: 31,
          answer: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quizId: 32,
          answer: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quizId: 33,
          answer: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quizId: 34,
          answer: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quizId: 35,
          answer: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quizId: 36,
          answer: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quizId: 37,
          answer: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quizId: 38,
          answer: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quizId: 39,
          answer: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quizId: 40,
          answer: "",
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
