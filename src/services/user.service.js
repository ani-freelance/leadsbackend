const {User} = require('../models');

exports.getUserById = async (id) => {
  return User.findByPk(id);
}

exports.getAllUsers = async () => {
    return User.findAll();

}

exports.createUser = async (data) => {
    return User.create(data);
}