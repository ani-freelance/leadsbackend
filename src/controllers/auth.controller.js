const AuthService = require("../services/auth.service");

exports.login = async (req, res) => {
  try {
    const data = await AuthService.login(req.body);
    res.json(data);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.register = async (req, res) => {
  try {
    const user = await AuthService.register(req.body);

    return res.status(201).json({
      message: "User registered successfully"
    });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};