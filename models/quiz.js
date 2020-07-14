"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class quiz extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      quiz.hasOne(models.place);
      quiz.hasOne(models.timePeriod);
      quiz.belongsTo(models.answer);
    }
  }
  quiz.init(
    {
      question: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "quiz",
    }
  );
  return quiz;
};
