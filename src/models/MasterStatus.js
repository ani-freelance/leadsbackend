
  
  
const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
  const MasterStatus = sequelize.define("MasterStatus", {
    
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false
    },

    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }

  }, {
    tableName: "status",
    timestamps: false
  });

module.exports = MasterStatus;