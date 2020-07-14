"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class fact extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      fact.belongsTo(models.place);
      fact.belongsTo(models.timePeriod);
    }
  }
  fact.init(
    {
      name: DataTypes.STRING,
      content: DataTypes.STRING(60000),
      imageUrl: DataTypes.STRING(60000),
    },
    {
      sequelize,
      modelName: "fact",
    }
  );
  return fact;
};
