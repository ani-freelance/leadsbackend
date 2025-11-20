const sequelize = require("../config/db");
const User = require("./User");
const Lead = require("./Lead");

const Followup = require("./Followup");
const Sample = require("./Sample");
const Subscription = require("./Subscription");
const Activity = require("./Activity");

User.hasMany(Lead, { foreignKey: "assignedTo" });
Lead.belongsTo(User, { foreignKey: "assignedTo" });

Lead.hasMany(Followup, { foreignKey: "leadId" });
Lead.hasMany(Sample, { foreignKey: "leadId" });
Lead.hasOne(Subscription, { foreignKey: "leadId" });
Lead.hasMany(Activity, { foreignKey: "leadId" });

module.exports = {
  sequelize,
  User,
  Lead,
  Followup,
  Sample,
  Subscription,
  Activity,
};