const { Lead, Followup,Activity } = require("../models");
const { Op } = require("sequelize");
exports.createLead = async (data) => {
  return Lead.create(data);
};

exports.getLeads = async (filters) => {
  const where = {...filters};
  const query = { ...filters };

    if (query.createdAt_gte) {
    where.createdAt = { ...where.createdAt, [Op.gte]: new Date(query.createdAt_gte) };
    delete where.createdAt_gte;
  }

  // createdAt <=
  if (query.createdAt_lte) {
    where.createdAt = { ...where.createdAt, [Op.lte]: new Date(query.createdAt_lte) };
    delete where.createdAt_lte;
  }

  console.log("Filters in service:", filters);
  return Lead.findAll({ where });
};

exports.followUpLead = async (leadId, followUpData) => {
  const lead = await Lead.findByPk(leadId);
  if (!lead) {
    throw new Error("Lead not found");
  }
  // Update the lead with follow-up data
  return Followup.create({ leadId, ...followUpData });
};

exports.getFollowUps = async (leadId,filters) => {
  const lead = await Lead.findByPk(leadId);
  if (!lead) {
    throw new Error("Lead not found");
  }

  const where = {...filters};
  const query = { ...filters };

    if (query.createdAt_gte) {
    where.createdAt = { ...where.createdAt, [Op.gte]: new Date(query.createdAt_gte) };
    delete where.createdAt_gte;
  }

  // createdAt <=
  if (query.createdAt_lte) {
    where.createdAt = { ...where.createdAt, [Op.lte]: new Date(query.createdAt_lte) };
    delete where.createdAt_lte;
  }

  where.leadId = leadId;


  return Followup.findAll({ where });
}

exports.updateLead = async (leadId, updateData) => {
  const lead = await Lead.findByPk(leadId);
  if (!lead) {
    throw new Error("Lead not found");
  } 
  return lead.update(updateData);
}

exports.getActivity = async (leadId) => {
  const lead = await Lead.findByPk(leadId); 
  if (!lead) {
    throw new Error("Lead not found");
  }
  return Activity.findAll({ where: { leadId } });
};