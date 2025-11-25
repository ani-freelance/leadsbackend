const { Role, Permission } = require("../models");

module.exports = (requiredPermission) => {
  return async (req, res, next) => {
    const role = await Role.findByPk(req.user.roleId, {
      include: Permission,
    });

    if (!role) return res.status(403).json({ message: "Invalid role" });

    // Super admin → bypass
    if (role.name === "super_admin") return next();

    // Permission check
    const hasPermission = role.Permissions.some(
      (perm) => perm.name === requiredPermission
    );

    if (!hasPermission) {
      return res.status(403).json({ message: "Access denied" });
    }

    next();
  };
};