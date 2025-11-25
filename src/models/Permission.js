const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Permission = sequelize.define("Permission", {
  name: DataTypes.STRING,
  module: DataTypes.STRING,
});

module.exports = Permission;