const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Subscription = sequelize.define("Subscription", {
  id: { type: DataTypes.INTEGER, autoincrement: true, primaryKey: true },
  leadId: DataTypes.INTEGER,
  plan: DataTypes.STRING,
  activationDate: DataTypes.DATE,
});

module.exports = Subscription;