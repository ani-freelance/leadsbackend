const userService = require('../services/user.service');

exports.getUserById = async (req, res) => {
  try {
    const user = await userService.getUserById(req.params.id);
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  } 
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();  
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  } 
};

exports.createUser = async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};