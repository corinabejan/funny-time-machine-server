'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("quizzes", 
    [
      {
        question: "What do you know about the largest and oldest grave in the Netherlands?",
        placeId: 1,
        timePeriodId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "What was the most evocative reminder of the Roman settlements in the Netherlands?",
        placeId: 1,
        timePeriodId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Name one positive and one negative thing about Middle Ages in the Netherlands.",
        placeId: 1,
        timePeriodId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Why are there not many old wooden houses in Amsterdam?",
        placeId: 1,
        timePeriodId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "How Napoleon's family affected the Dutch history?",
        placeId: 1,
        timePeriodId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "When was the last biggest storm in the Netherlands and how people are now protected from the flood damages?",
        placeId: 1,
        timePeriodId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "What is so special about the King Willem-Alexander?",
        placeId: 1,
        timePeriodId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "What do you think it will happen with The Netherlands in the future?",
        placeId: 1,
        timePeriodId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "What are the remains of the first people on Belarusian territory?",
        placeId: 2,
        timePeriodId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Who came to live on Belarusian territories and couldn't ever be dislodged?",
        placeId: 2,
        timePeriodId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "What was the largest country in Europe in the 14-15th century?",
        placeId: 2,
        timePeriodId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Who was the first book printer in Eastern Europe?",
        placeId: 2,
        timePeriodId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Who was the most famous revolutionary in Belarus?",
        placeId: 2,
        timePeriodId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "What happened to Belarusian cities after World War ll?",
        placeId: 2,
        timePeriodId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "What is the nickname of the current Belarusian president?",
        placeId: 2,
        timePeriodId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "How will the political situation in Belarus change after the presidential elections in August 2020?",
        placeId: 2,
        timePeriodId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "What do you know about The Cave With Bones?",
        placeId: 3,
        timePeriodId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Do you know the history of Romanian language?",
        placeId: 3,
        timePeriodId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Surely you never heard of Maramures...",
        placeId: 3,
        timePeriodId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "But definetly you heard of Count Dracula, although not the real story!",
        placeId: 3,
        timePeriodId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "What do you know about the happiest cemetery in the world?",
        placeId: 3,
        timePeriodId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "What do you think is the second largest building in the world?",
        placeId: 3,
        timePeriodId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Tell me some stories about Transfagarasan...",
        placeId: 3,
        timePeriodId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "What do you think it will happen with Romania in the future?",
        placeId: 3,
        timePeriodId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Do you believe Belgium existed in the BC period?",
        placeId: 4,
        timePeriodId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Do you know something about the language border in Belgium?",
        placeId: 4,
        timePeriodId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "What is Mosan Art?",
        placeId: 4,
        timePeriodId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Do you know where the golden ages were felt the most in Belgium?",
        placeId: 4,
        timePeriodId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "When did the founding of Belgium occur?",
        placeId: 4,
        timePeriodId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Name one very special things that happened at the Olympics in 1920:",
        placeId: 4,
        timePeriodId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "What is the one thing that belgians are the most ashamed?",
        placeId: 4,
        timePeriodId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "What do you think it will happen with Belgium in the future?",
        placeId: 4,
        timePeriodId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "What do you know about the Vrederfort Dome?",
        placeId: 5,
        timePeriodId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "What is the Border Cave?",
        placeId: 5,
        timePeriodId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "There is one mountain in this world that looks like a table. Do you know which one?",
        placeId: 5,
        timePeriodId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "What do you know about the wars over South Africa?",
        placeId: 5,
        timePeriodId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "What is a Cullinan?",
        placeId: 5,
        timePeriodId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Name the first African country that held The World Cup.",
        placeId: 5,
        timePeriodId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "What is one of the most luxurious train in the world?",
        placeId: 5,
        timePeriodId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "What do you think it will happen with South Africa in the future?",
        placeId: 5,
        timePeriodId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("quizzes", null, {});
  }
};
