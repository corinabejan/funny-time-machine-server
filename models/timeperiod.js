"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class timePeriod extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      timePeriod.hasMany(models.fact);
      timePeriod.hasMany(models.quiz);
      timePeriod.belongsToMany(models.place, {
        through: "placeTimePeriods",
        foreignKey: "timePeriodId",
      });
    }
  }
  timePeriod.init(
    {
      date: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "timePeriod",
    }
  );
  return timePeriod;
};
