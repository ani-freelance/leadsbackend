const { User,Role } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
exports.login = async ({ email, password }) => {
  const user = await User.findOne({ where: { email } });
  if (!user) throw new Error("User not found");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Invalid credentials");

  const token = jwt.sign({ id: user.id, role: user.roleId }, process.env.JWT_SECRET);

  delete user.dataValues.password; // Remove password from returned user object

  return { token, user };
};

exports.register = async (data) => {
  const { name, email, password, roleId, adminId } = data;

  // Check if email already exists
  const existing = await User.findOne({ where: { email } });
  if (existing) throw new Error("User already exists");

  // Validate role exists
  const role = await Role.findByPk(roleId);
  if (!role) throw new Error("Invalid role");

  // Executive must have adminId
  if (role.name === "executive" && !adminId) {
    throw new Error("Executive must be assigned under an admin");
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    roleId,
    adminId: role.name === "executive" ? adminId : null,
  });

  return user;
};