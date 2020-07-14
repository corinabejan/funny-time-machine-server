"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class place extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      place.belongsTo(model.fact);
      place.belongsTo(model.quiz);
      place.belongsToMany(models.timePeriod, {
        through: "placeTimePeriods",
        foreignKey: "placeId",
      });
    }
  }
  place.init(
    {
      location: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "place",
    }
  );
  return place;
};
