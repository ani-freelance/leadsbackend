const { Lead, Followup } = require("../models");

exports.createLead = async (data) => {
  return Lead.create(data);
};

exports.getLeads = async (filters) => {
  return Lead.findAll({ where: filters });
};

exports.followUpLead = async (leadId, followUpData) => {
  const lead = await Lead.findByPk(leadId);
  if (!lead) {
    throw new Error("Lead not found");
  }
  // Update the lead with follow-up data
  return Followup.create({ leadId, ...followUpData });
};

exports.getFollowUps = async (leadId) => {
  const lead = await Lead.findByPk(leadId);
  if (!lead) {
    throw new Error("Lead not found");
  }
  return Followup.findAll({ where: { leadId } });
}