const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Followup = sequelize.define("Followup", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  leadId: DataTypes.INTEGER,
  comment: DataTypes.TEXT,
  status: DataTypes.STRING,
  nextFollowUpDate: DataTypes.DATE,
});

module.exports = Followup;