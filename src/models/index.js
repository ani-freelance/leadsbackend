const sequelize = require("../config/db");
const User = require("./User");
const Lead = require("./Lead");

const Followup = require("./Followup");
const Sample = require("./Sample");
const Subscription = require("./Subscription");
const Activity = require("./Activity");
const Role = require("./Role");
const Permission = require("./Permission");
const RolePermission = require("./RolePermission");
const MasterDistrict = require("./MasterDistrict");
const MasterIndustry = require("./MasterIndustry");
const MasterKeyword = require("./MasterKeyword");
const MasterOrganisation = require("./MasterOrganisation");
const Tender = require("./Tender");
const MasterState = require("./MasterState");
const MasterStatus = require("./MasterStatus");


User.hasMany(Lead, { foreignKey: "assignedTo" });
// Lead.belongsTo(User, { foreignKey: "assignedTo" });

Lead.hasMany(Followup, { foreignKey: "leadId" });
Lead.hasMany(Sample, { foreignKey: "leadId" });
Lead.hasOne(Subscription, { foreignKey: "leadId" });
Lead.hasMany(Activity, { foreignKey: "leadId" });

User.belongsTo(Role, { foreignKey: "roleId" });
User.belongsTo(User, { foreignKey: "adminId", as: "admin" });

Lead.belongsTo(User, { foreignKey: "assignedTo", as: "executive" });
Lead.belongsTo(User, { foreignKey: "createdBy", as: "creator" });

Role.belongsToMany(Permission, { through: RolePermission });
Permission.belongsToMany(Role, { through: RolePermission });


module.exports = {
  sequelize,
  User,
  Lead,
  Followup,
  Sample,
  Subscription,
  Activity,
  Role,
  Permission,
  RolePermission,
  MasterDistrict,
  MasterIndustry,
  MasterKeyword,
  MasterOrganisation,
  Tender,
  MasterState,
  MasterStatus
};