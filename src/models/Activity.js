const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Activity = sequelize.define("Activity", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  leadId: DataTypes.INTEGER,
  type: DataTypes.STRING,
  details: DataTypes.TEXT,
});

module.exports = Activity;