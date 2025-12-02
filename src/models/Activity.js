const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Activity = sequelize.define("Activity", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  leadId: DataTypes.INTEGER,
  Ipaddress: DataTypes.STRING,
  action: DataTypes.STRING,
  count: DataTypes.INTEGER,
});

module.exports = Activity;