const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const RolePermission = sequelize.define("RolePermission", {});



module.exports = RolePermission;
