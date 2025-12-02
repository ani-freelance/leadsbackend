
const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
  const MasterDistrict = sequelize.define("MasterDistrict", {
    id: { type: DataTypes.BIGINT.UNSIGNED, autoIncrement: true, primaryKey: true },
    stateId: { type: DataTypes.BIGINT.UNSIGNED, allowNull: false },
    name: { type: DataTypes.STRING, allowNull: false },
    slug: { type: DataTypes.STRING, allowNull: false },
    icon: DataTypes.STRING,
    image: DataTypes.STRING,
    active: { type: DataTypes.BOOLEAN, defaultValue: 1 },
    createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
  }, {
    tableName: "districts",
    timestamps: false
  });

module.exports = MasterDistrict;


