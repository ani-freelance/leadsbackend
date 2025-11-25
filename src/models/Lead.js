const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Lead = sequelize.define("Lead", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  alternameEmail: DataTypes.JSON,
  phone: DataTypes.STRING,
  alternamePhone: DataTypes.STRING,
  expectedAmount: DataTypes.FLOAT,
  expectedClosingDate: DataTypes.DATE,
  company: DataTypes.STRING,
  companyServices:DataTypes.JSON,
  status: DataTypes.STRING,
  designation: DataTypes.STRING,
  department: DataTypes.STRING,
  address: DataTypes.TEXT,
  country: DataTypes.STRING,
  state: DataTypes.STRING,
  city: DataTypes.STRING,
  pincode: DataTypes.STRING,
  skyupeId: DataTypes.STRING,
  website: DataTypes.STRING,
  tendersInterested: DataTypes.TEXT,
  remarks: DataTypes.TEXT,
  lastFollowUpDate: DataTypes.DATE,
  assignedTo: DataTypes.INTEGER,
});

module.exports = Lead;