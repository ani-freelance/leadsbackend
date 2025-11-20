const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Sample = sequelize.define("Sample", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  leadId: DataTypes.INTEGER,
  sampleTitle: DataTypes.STRING,
  sampleDetails: DataTypes.TEXT,
});

module.exports = Sample;