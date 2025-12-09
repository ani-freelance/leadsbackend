


const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const MasterState = sequelize.define("MasterState", {
    
    id: { 
      type: DataTypes.BIGINT.UNSIGNED, 
      autoIncrement: true, 
      primaryKey: true 
    },

    name: { 
      type: DataTypes.STRING, 
      allowNull: true 
    },

    slug: { 
      type: DataTypes.STRING, 
      allowNull: true 
    },

    icon: DataTypes.STRING,
    image: DataTypes.STRING,

    active: { 
      type: DataTypes.BOOLEAN, 
      defaultValue: 1 
    },

    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE

  }, {
    tableName: "md_states",
    timestamps: false
  });

  return State;
module.exports = MasterState;