const AuthService = require("../services/auth.service");

exports.login = async (req, res) => {
  try {
    const data = await AuthService.login(req.body);
    res.json(data);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
