const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Lead = sequelize.define("Lead", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  phone: DataTypes.STRING,
  company: DataTypes.STRING,
  status: DataTypes.STRING,
  followUpDate: DataTypes.DATE,
  assignedTo: DataTypes.INTEGER,
});

module.exports = Lead;