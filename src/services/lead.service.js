const { Lead } = require("../models");

exports.createLead = async (data) => {
  return Lead.create(data);
};

exports.getLeads = async (filters) => {
  return Lead.findAll({ where: filters });
};